// Calculadora determinística de dimensionamento aeráulico para coletores de pó.
// Entrada (string JSON via "query"):
//   {
//     "processo": "madeira" | "mdf" | "po_madeira" | "metal" | "farinha" | "plastico" | "organico",
//     "bocas": [ { "D_in": 5, "count": 3, "v_alvo": 22 }, ... ],
//     "tronco_D_in": 12         // opcional — se quiser validar um Ø proposto
//   }
// Saída: JSON com vazões, faixa de velocidade do processo, Ø de tronco recomendado,
// validação do Ø informado e motor sugerido por faixa de vazão.

let input;
try {
  input = typeof query === 'string' ? JSON.parse(query) : query;
} catch (e) {
  return JSON.stringify({
    error: 'Entrada deve ser JSON válido. Exemplo: {"processo":"mdf","bocas":[{"D_in":5,"count":3,"v_alvo":22}],"tronco_D_in":12}'
  });
}

const PI = Math.PI;
const v_min_map = { madeira: 18, mdf: 20, po_madeira: 20, metal: 22, farinha: 18, plastico: 18, organico: 18 };
const v_max_map = { madeira: 25, mdf: 26, po_madeira: 26, metal: 28, farinha: 22, plastico: 22, organico: 24 };

const proc = String(input.processo || '').toLowerCase().replace(/[^a-z_]/g, '_');
const v_min = v_min_map[proc] || 18;
const v_max = v_max_map[proc] || 25;
const v_target = (v_min + v_max) / 2;

if (!Array.isArray(input.bocas) || input.bocas.length === 0) {
  return JSON.stringify({ error: 'Informe pelo menos uma boca em "bocas": [{D_in, count, v_alvo?}]' });
}

const std_diametros = [4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20];
const area = (D_in) => PI * Math.pow((D_in * 0.0254) / 2, 2);
const Q = (D_in, v, n) => area(D_in) * v * 3600 * (n || 1);

const bocas_out = input.bocas.map((b) => {
  const v = b.v_alvo || v_target;
  const q_each = Q(b.D_in, v, 1);
  const q_total = q_each * (b.count || 1);
  return {
    D_in: b.D_in,
    count: b.count || 1,
    v_alvo_m_s: v,
    area_m2: +area(b.D_in).toFixed(5),
    Q_por_boca_m3h: Math.round(q_each),
    Q_total_m3h: Math.round(q_total)
  };
});

const Q_rede = Math.round(bocas_out.reduce((s, b) => s + b.Q_total_m3h, 0));

// Menor Ø comercial que mantém a velocidade entre v_min e v_max
let tronco_rec = null;
for (const D of std_diametros) {
  const v = Q_rede / (3600 * area(D));
  if (v >= v_min && v <= v_max) {
    tronco_rec = { D_in: D, v_real_m_s: +v.toFixed(2), area_m2: +area(D).toFixed(5) };
    break;
  }
}
if (!tronco_rec) {
  let best = null, bestDiff = Infinity;
  for (const D of std_diametros) {
    const v = Q_rede / (3600 * area(D));
    const diff = Math.abs(v - v_target);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = {
        D_in: D,
        v_real_m_s: +v.toFixed(2),
        area_m2: +area(D).toFixed(5),
        aviso: v < v_min ? 'velocidade abaixo do mínimo de transporte — risco de decantação' : 'velocidade acima do máximo — risco de erosão/ruído'
      };
    }
  }
  tronco_rec = best;
}

let tronco_informado = null;
if (input.tronco_D_in) {
  const D = Number(input.tronco_D_in);
  const v = Q_rede / (3600 * area(D));
  const ok = v >= v_min && v <= v_max;
  tronco_informado = {
    D_in: D,
    v_real_m_s: +v.toFixed(2),
    area_m2: +area(D).toFixed(5),
    faixa_alvo: { v_min, v_max },
    ok,
    status: ok ? 'OK' : (v < v_min
      ? 'SUBDIMENSIONADO — velocidade abaixo do mínimo, pó decanta e entope o duto'
      : 'SUPERDIMENSIONADO — velocidade acima do máximo, erosão e perda de carga excessiva')
  };
}

const motor_faixas = [
  { min: 0, max: 1200, cv: '3 cv' },
  { min: 1200, max: 2000, cv: '5 cv' },
  { min: 2000, max: 3200, cv: '7,5 a 10 cv' },
  { min: 3200, max: 5000, cv: '12,5 a 15 cv' },
  { min: 5000, max: 7500, cv: '20 cv' },
  { min: 7500, max: 11000, cv: '25 a 30 cv' },
  { min: 11000, max: 999999, cv: 'acima de 30 cv — consultar engenharia' }
];
const motor = motor_faixas.find((f) => Q_rede >= f.min && Q_rede < f.max);

return JSON.stringify({
  processo: input.processo || '(não informado)',
  faixa_velocidade_m_s: { v_min, v_max, v_target },
  bocas: bocas_out,
  Q_total_rede_m3h: Q_rede,
  tronco_recomendado: tronco_rec,
  tronco_informado,
  motor_sugerido_cv: motor ? motor.cv : 'consultar engenharia',
  observacao: 'Velocidade no tronco precisa ficar entre v_min e v_max do processo. Some +10–15% à vazão por curvas/perdas em redes longas (>10 m ou >4 curvas).'
});
