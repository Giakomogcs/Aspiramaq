# Diagnóstico — Por que a conversa do agente está repetitiva e errada

## O que está acontecendo nos 2 turnos que você mostrou

### Turno 1 — usuário diz "me ajude a dimensionar para pó de madeira"
O agente já despeja **tudo de uma vez**: `status_dimensionamento`, `auditoria_alertas`, `historico_base` com 5 clientes, `diretriz_recomendada` com 3 equipamentos, 3 faixas de motor e 3 mídias. Sem ter **um único dado real do cenário**.

### Turno 2 — usuário responde "6 bocas Ø5", lixadeira, 5 m"
O agente **repete o template inteiro** (status, auditoria, histórico, diretriz), repete 3 dos 5 clientes do turno 1, cita 5 novos sem explicar a relação com o caso atual, e crava `Ciclone 150 NY + 15 cv + Sarja grossa / AG reforçado` **sem mostrar conta de vazão**, **sem perguntar temperatura/umidade**, e **sem mencionar o risco ATEX** (pó de madeira fina é pó combustível classificado).

---

## As 7 falhas estruturais do prompt atual

1. **Template fixo despejado em todo turno.** O prompt manda imprimir `Status do Dimensionamento` + `Auditoria` + `Diagnóstico Baseado no Histórico` + `Diretriz Final` sempre. Não existe fase de descoberta.
2. **Sem memória explícita do que já foi coletado.** O agente não rastreia os campos críticos (§6 do RAG), então repete tabelas e perguntas.
3. **Bloqueios do RAG §8 ignorados.** O RAG manda **BLOQUEAR** quando faltar processo, material, temperatura, umidade, tipo de coletor, ATEX em pó orgânico — o prompt atual diz "Stop & Ask" só de leve e ainda assim cospe recomendação.
4. **ATEX nunca é perguntado.** Pó de madeira fina (lixadeira) é o exemplo clássico de pó combustível. O RAG §8.1 explicita: "Risco de atmosfera explosiva não esclarecido em segmentos com pó orgânico → BLOQUEIO". O agente cravou motor e equipamento sem essa pergunta.
5. **Mídia recomendada não bate com o RAG.** Para pó fino de lixadeira, o RAG §5.2 indica **MID-PES-350-PTFE** (poliéster com PTFE — pó aglomerante/fino) ou **MID-PLI-240** (plissado submicrométrico). O agente recomendou "Sarja grossa / AG reforçado", que pelo §5.2 é para pó **grosseiro seco**.
6. **Sem matemática.** 6 bocas Ø5" simultâneas a ~22 m/s ≈ **8.300 m³/h**. Tronco Ø12" a 22 m/s carrega ~**9.500 m³/h** — passa, mas com folga mínima. O agente cravou Ø12" sem mostrar a conta nem citar o Manual Técnico.
7. **Histórico jogado fora de contexto.** Listou PRISMA, PIRES, QUATTRO, PRADO, PAPAIZ etc. sem explicar a lição de cada um para o caso atual; pior, repetiu os do turno 1.

---

## O que o prompt v2 muda

| Antes | Depois |
|---|---|
| Template único cuspido todo turno | **4 fases adaptativas**: Discovery → Validation → Diagnosis → Final Spec |
| Sem rastreio do que já foi dito | Memória interna de **12 campos críticos** (§6 do RAG) — o agente sabe o que ainda falta |
| Bloqueios fracos | **Bloqueios obrigatórios** alinhados ao §8 do RAG (ATEX, temperatura, umidade, coletor, bocas) |
| ATEX esquecido | ATEX **obrigatório** para qualquer pó orgânico (madeira, MDF, açúcar, alumínio fino, grãos) |
| Mídia chutada | Mídia tem que vir do **§5/§9 do RAG** com regra de coerência (T01–T08) |
| Sem matemática | Toda recomendação de motor/duto mostra **vazão, velocidade, base no Manual Técnico** |
| Histórico despejado | Máx. 5 casos, **só na Fase 3**, com lição explícita por linha |
| Pergunta enxurrada | **Máx. 2 perguntas por turno**, priorizadas pelo impacto |

---

## Como aplicar
Abra o workflow `Aspiramaq-Agent-IA-copy`, edite o nó **RAG AI Agent**, e substitua o campo `System Message` pelo conteúdo de [prompt_v2.md](prompt_v2.md).
