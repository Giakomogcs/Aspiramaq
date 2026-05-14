---

## documento: Base de Conhecimento — Copiloto Técnico-Comercial ASPIRAMAQ versao: 1.0 data: 2026-04-28 idioma: pt-BR escopo: RAG — recuperação por chunks publico: Agente de IA (uso interno)

# BASE DE CONHECIMENTO — COPILOTO TÉCNICO-COMERCIAL ASPIRAMAQ

Documento estruturado para uso por agente de IA com RAG. Cada seção é autocontida e pode ser recuperada isoladamente sem perda de contexto. As tags `[BUSCA: ...]` ao final de cada bloco existem para reforçar a indexação semântica e devem ser preservadas no chunking.

---

## 0\. INSTRUÇÕES OPERACIONAIS PARA O AGENTE

### 0.1 Identidade e propósito

Você é o **Copiloto Técnico-Comercial da ASPIRAMAQ**. Sua função é apoiar o vendedor durante o atendimento ao cliente, garantindo que o diagnóstico técnico seja completo, coerente e baseado em dados antes de qualquer recomendação de mídia filtrante, equipamento ou solução.

Você **não substitui** o vendedor nem o especialista técnico (Hiroshi). Você **estrutura o processo**, **valida informações**, **bloqueia avanços prematuros** e **sinaliza riscos**.

### 0.2 Princípios de operação (ordem de prioridade)

1. **Segurança técnica antes de velocidade comercial.** É melhor pedir mais um dado do que recomendar a mídia errada.  
2. **Bloqueie quando faltar informação crítica.** Veja Seção 8 (Critérios de Bloqueio).  
3. **Nunca invente dados técnicos.** Se a informação não está nesta base, responda explicitamente: *"Esta informação não consta na minha base. Recomendo consultar o Hiroshi ou solicitar ao cliente."*  
4. **Sinalize sempre os riscos** antes de qualquer recomendação. Veja Seção 10\.  
5. **Use linguagem técnica acessível.** O vendedor pode não ser engenheiro químico — explique o "porquê" das perguntas quando ajudar.  
6. **Registre o histórico do diagnóstico.** Toda informação coletada deve poder ser recuperada nas etapas seguintes.

### 0.3 Fluxo padrão de atendimento

\[1\] Identificação do cliente e da aplicação

       ↓

\[2\] Coleta de informações operacionais (Seção 6 — Checklist)

       ↓

\[3\] Validação e checagem de coerência (Seção 7\)

       ↓

\[4\] Se faltar dado crítico → BLOQUEIO \+ pergunta ao vendedor (Seção 8\)

       ↓

\[5\] Consulta a casos semelhantes (Seção 12\)

       ↓

\[6\] Sinalização de riscos técnicos (Seção 10\)

       ↓

\[7\] Estruturação do diagnóstico (resumo técnico para decisão)

       ↓

\[8\] Recomendação preliminar OU encaminhamento ao Hiroshi (Seção 13\)

\[BUSCA: instruções, propósito, fluxo, princípios, copiloto, agente, identidade\]

---

## 1\. CONTEXTO DA EMPRESA

### 1.1 Identificação

- **Razão social:** ASPIRAMAQ — Aspirador Indústria e Comércio Ltda.  
- **CNPJ:** 09.536.339/0001-81  
- **Inscrição Estadual:** 286.287.100.114  
- **Endereço:** R. Tiguassu, nº 90/100 — Jd. Inamar — Diadema/SP — CEP 09970-310  
- **Telefone:** (11) 4049-1759  
- **Marca histórica relacionada:** New Japan — Indústria Metalúrgica Ltda. (CNPJ 62.375.274/0001-12), atuando desde 1968\.  
- **Segmento:** Aspiradores, coletores de pó, exaustores industriais e mídias filtrantes.

### 1.2 Posicionamento

A ASPIRAMAQ atua como fabricante e fornecedora de soluções para **filtragem de pós finos, fumaças e particulados industriais**, oferecendo desde o equipamento (coletores, aspiradores, exaustores) até o **meio filtrante** (mangas, cartuchos, plissados, filtros metálicos). A empresa atende um espectro amplo de indústrias: siderurgia, mineração, metalurgia, cimento, química, alimentícia, fundição, asfalto, ceramica, entre outras.

### 1.3 Família de produtos coberta nesta base

- **Mídias filtrantes têxteis** (mangas, plissados, sarjas em poliéster, polipropileno, com ou sem tratamento PTFE).  
- **Filtros metálicos** (modelo Colmeia em alumínio corrugado).  
- **Equipamentos** (aspiradores, coletores, exaustores) — *referenciados, não detalhados nesta versão.*

\[BUSCA: aspiramaq, new japan, empresa, contato, cnpj, diadema, fabricante, posicionamento, segmento\]

---

## 2\. PORTFÓLIO DE PRODUTOS — VISÃO GERAL

### 2.1 Mídias filtrantes têxteis (mangas e plissados)

| ID | Nome | Tipo | Material | Gramatura | Temp. operacional | Diferencial |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| MID-PLI-240 | Plissado UNO PES 240 — Membrana PTFE | Plissado / nano-membrana | Poliéster spunbonded \+ PTFE | 240 g/m² | 120°C contínua | Eficiência 99,99% para ≥0,5 µm |
| MID-PES-400 | AG 400 / OFPT 01400 | Manga agulhada | 100% poliéster | 400 g/m² | 150°C | Alta gramatura, robustez mecânica |
| MID-PES-350-PTFE | Poliéster com PTFE 350 | Manga agulhada tratada | 100% poliéster \+ PTFE imersão | 350 g/m² | 140°C / picos 150°C | Repelente água/óleo, anti-aglomerante |
| MID-PES-210-SAR | Sarja PS | Manga sarja termofixada | 100% poliéster | 210 g/m² | 140°C seco | Permeabilidade alta, leve |
| MID-PES-630-SAR | Sarja Grossa Ordem 916 | Sarja 2x2 | 100% poliéster fiado 10/2 | 630 g/m linear | \[REVISAR COM ASPIRAMAQ\] | Robustez de tecido grosso |
| MID-PP-550 | Polipropileno 550 | Manga agulhada | 100% polipropileno | 550 g/m² | 90°C / picos 100°C | Excelente resistência química |

### 2.2 Filtros metálicos

| ID | Nome | Material | Aplicação principal |
| :---- | :---- | :---- | :---- |
| FM-COLM-595 | Filtro Colmeia 595x595x50 | Alumínio corrugado / moldura aço galvanizado ou inox 304 | Pré-filtragem, coifas, névoa de óleo |

### 2.3 Equipamentos

Aspiradores, coletores de pó industriais e exaustores. *Especificações detalhadas dos equipamentos não constam nesta versão da base — encaminhar consultas ao catálogo comercial ou ao Hiroshi.*

\[BUSCA: portfolio, catalogo, mídias, mangas, plissados, sarja, filtros, polipropileno, poliéster, ptfe, colmeia, equipamentos, visão geral\]

---

## 3\. CATÁLOGO TÉCNICO DAS MÍDIAS FILTRANTES

Cada subseção a seguir é um chunk autocontido com a ficha técnica completa de uma mídia. O agente deve recuperar a seção correspondente quando precisar consultar specs ou comparar opções.

---

### 3.1 MID-PLI-240 — Plissado UNO PES 240, Série Membrana PTFE

**Tipo:** Meio filtrante plissado com nano-membrana PTFE **Composição:** Poliéster spunbonded com membrana PTFE laminada **Tratamento:** Nano filtração por membrana **Aparência:** Branco, não ondulado

#### Propriedades técnicas

| Propriedade | Valor | Norma |
| :---- | :---- | :---- |
| Gramatura | 240 g/m² | ASTM D3776/2017 |
| Espessura | 0,60 mm | ASTM D1777-96/2019 |
| Permeabilidade ao ar | 27 – 39 L/dm².min (45 – 65 L/m².s) | ASTM D737-04/2012 |
| Resistência à temperatura (contínua) | 120°C (ar seco) | — |
| Resistência à temperatura (picos) | 135°C (ar seco) | — |
| Resistência tração — longitudinal | 380 N / 5 cm | ISO 13934-1/2016 |
| Resistência tração — transversal | 370 N / 5 cm | ISO 13934-1/2016 |
| Pressão máxima (Mullen Test seco) | 305 kPa (6,5 kgf/cm²) | ISO 13938-1 |
| Resistência aos ácidos | Boa | — |
| Resistência aos álcalis | Boa | — |
| Umidade máxima (H₂O) | 18% | — |
| Eficiência de filtração | 99,99% para partículas ≥ 0,5 µm | Difração por laser-5 |

#### Aplicação típica

Pó ultrafino e gases de combustão. Aplicações onde a emissão precisa atender a níveis de eficiência elevados em partículas submicrométricas.

#### Pontos de atenção

- **Limite de temperatura contínua: 120°C** — não utilizar acima desse valor sem validar picos.  
- **Umidade máxima 18%** — atenção a correntes saturadas ou condensação.  
- **Membrana PTFE é superficial** — abrasão excessiva ou choque mecânico pode comprometê-la.

\[BUSCA: plissado, membrana ptfe, uno, nano filtração, pó ultrafino, alta eficiência, 99,99%, 240 g/m², MID-PLI-240\]

---

### 3.2 MID-PES-400 — AG 400 / OFPT 01400 (Poliéster Agulhado)

**Tipo:** Manga filtrante agulhada **Cód. Material:** 983111000 — Filtros OFPT 01400 **Composição:** 100% Poliéster **Desenho:** Tridimensional / agulhado

#### Propriedades técnicas

| Propriedade | Valor | Norma |
| :---- | :---- | :---- |
| Gramatura | 400 g/m² (±5%) | ISO 9864 |
| Espessura | 1,5 a 1,7 mm | ISO 9864 |
| Volume de poros | 79% | DIN 53855 |
| Densidade | 0,29 g/cm³ | DIN 53855 |
| Permeabilidade | 275 L/dm²/min a 20 mm.c.a | DIN 53887 |
| Temperatura operacional | 150°C | — |
| Temperatura de picos | 150°C | — |
| Ponto de fusão | 250°C | — |
| Resistência tração — trama | 1.100 N | ISO 9073-3 |
| Resistência tração — urdume | 1.250 N | ISO 9073-3 |
| Estabilidade dimensional — trama | 0,3% (ar quente 120°C / 120 min) | — |
| Estabilidade dimensional — urdume | 0,5% (ar quente 120°C / 120 min) | — |
| Corpo de prova | 100 x 50 mm | — |

#### Aplicações típicas

Indústrias de alumínio, mineração, metalurgia, cimento, moagem de grãos, britagem, pigmentos, petroquímica, asbestos, cerâmica, amianto, fumo, cacau e similares.

#### Pontos de atenção

- Mídia agulhada de gramatura alta — boa para particulado abrasivo.  
- **Sem tratamento PTFE** — não é a melhor escolha para correntes úmidas, oleosas ou com partículas higroscópicas.  
- **Limite 150°C** — acima disso, considerar fibras de maior resistência térmica (Sulfar, Aramida, Poliimida, PTFE, Vidro).

\[BUSCA: AG 400, OFPT 01400, agulhado, poliéster 400, manga filtrante, 150°C, alumínio, cimento, mineração, MID-PES-400\]

---

### 3.3 MID-PES-350-PTFE — Poliéster com PTFE 350 g/m² (linha OBER)

**Tipo:** Manga agulhada com tratamento PTFE por imersão **Composição:** 100% Poliéster **Desenho:** Tridimensional / agulhado **Acabamento:** Calandrado e termofixado, anti-pilling tipo Egg-Shell em uma das faces **Tratamento químico:** Imersão de PTFE — repelente à água, óleo, partículas aglomerantes e higroscópicas

#### Propriedades técnicas

| Propriedade | Valor | Norma |
| :---- | :---- | :---- |
| Gramatura | 350 g/m² | NBR 12984 |
| Espessura | 1,5 mm | NBR 13371 |
| Permeabilidade | 320 L/dm²/min a 20 mm.c.a | DIN 53887 |
| Temperatura | 140°C | — |
| Temperatura de picos | 150°C | — |
| Ponto de fusão | 250°C | — |
| Máx. alteração dimensional a 150°C | \< 1% | — |
| Grau de repelência | 15 min | — |
| Resistência tração — transversal | \> 500 N | NBR 13041 |
| Resistência tração — longitudinal | \> 500 N | NBR 13041 |
| Corpo de prova | 100 x 50 mm | — |

#### Aplicações típicas

Siderúrgicas, mineração, metalúrgicas, cimenteiras, moagem de grãos, fundições, elastômeros, usina de asfalto, fundição de bateria, cabines de jateamento, grafite, despoeiramentos em geral.

#### Resistências químicas

- Com presença de **15% de umidade e temperatura acima de 80°C**, ocorre processo de **hidrólise aquosa** — atenção em correntes úmidas quentes.  
- Pouca resistência aos ácidos e álcalis.  
- Boa resistência a agentes oxidantes e solventes orgânicos.

#### Pontos de atenção

- **Tratamento PTFE é diferencial-chave** para partículas higroscópicas, aglomerantes e correntes com presença de óleo/água.  
- **Hidrólise aquosa acima de 80°C com \>15% umidade** — risco crítico em despoeiramento de processos úmidos.  
- **Não usar em ambientes ácidos ou alcalinos agressivos** sem validação adicional.

\[BUSCA: poliéster ptfe, ober, 350 g/m², repelente, hidrólise, anti-aglomerante, asfalto, jateamento, fundição bateria, MID-PES-350-PTFE\]

---

### 3.4 MID-PES-210-SAR — Sarja PS (Filtros de Manga)

**Tipo:** Manga filtrante de tecido sarja **Composição:** 100% Poliéster **Ligamento:** Sarja **Acabamento:** Termofixado

#### Propriedades técnicas

| Propriedade | Valor |
| :---- | :---- |
| Permeabilidade nominal | 11,3 a 12,2 m³/min/m² a 1/2" |
| Absorção de umidade | 0,4% a 65% UR / 21°C |
| Retenção de água | 4% (aproximadamente) |
| Temperatura operacional | 140°C (seco) |
| Ponto de fusão | 250 a 260°C |
| Espessura | 0,50 mm |
| Peso (gramatura) | 210 g/m² |

#### Aplicações típicas

\[REVISAR COM ASPIRAMAQ — ficha original não traz aplicações específicas; geralmente sarjas são usadas em correntes secas com particulado mais grosseiro e menores exigências de eficiência submicrométrica.\]

#### Pontos de atenção

- **Mídia leve (210 g/m²)** — não recomendada para particulado abrasivo pesado.  
- **Tecido sarja, sem agulhamento** — eficiência geralmente menor que mídias agulhadas em pós muito finos.  
- **Sem tratamento PTFE** — atenção a umidade e óleo na corrente.

\[BUSCA: sarja PS, sarja 210, manga sarja, termofixado, 140°C seco, 210 g/m², MID-PES-210-SAR\]

---

### 3.5 MID-PES-630-SAR — Sarja Grossa, Ordem 916 (Sarja 2x2)

**Tipo:** Tecido sarja grossa **Construção:** Sarja 2x2, ordem 916 **Urdume:** Poliéster fiado 10/2 **Trama:** Poliéster fiado 10/2

#### Propriedades técnicas

| Propriedade | Valor |
| :---- | :---- |
| Largura cru | \~1,55 m |
| Peso linear | 630 g / metro linear |
| Temperatura operacional | \[REVISAR COM ASPIRAMAQ\] |
| Permeabilidade | \[REVISAR COM ASPIRAMAQ\] |
| Ponto de fusão | 250 a 260°C (referência poliéster) |

#### Aplicações típicas

\[REVISAR COM ASPIRAMAQ — geralmente sarja grossa é empregada em aplicações de maior robustez mecânica, particulado grosso, ou onde se prioriza durabilidade do tecido sobre eficiência de filtragem fina.\]

#### Pontos de atenção

- **Ficha técnica original é resumida** — várias propriedades operacionais não estão documentadas. Encaminhar consulta técnica antes de recomendação definitiva.  
- Tecido grosso, alta gramatura linear — esperar comportamento robusto mas com permeabilidade menor que sarjas leves.

\[BUSCA: sarja grossa, ordem 916, sarja 2x2, poliéster fiado, 630 gramas, tecido grosso, MID-PES-630-SAR\]

---

### 3.6 MID-PP-550 — Polipropileno 550 g/m²

**Tipo:** Manga filtrante agulhada **Composição:** 100% Polipropileno **Desenho:** Tridimensional / agulhado **Acabamento:** Calandrado e termofixado, anti-pilling tipo Egg-Shell em uma das faces **Tratamento químico:** Não existente

#### Propriedades técnicas

| Propriedade | Valor | Norma |
| :---- | :---- | :---- |
| Gramatura | 550 g/m² | NBR 12984 |
| Espessura | 2,00 mm | NBR 13371 |
| Permeabilidade | 150 L/dm²/min a 20 mm.c.a | DIN 53887 |
| Temperatura | 90°C | — |
| Temperatura de picos | 100°C | — |
| Grau de repelência | 0 min | — |
| Resistência tração — transversal | 850 N | NBR 13041 |
| Resistência tração — longitudinal | 850 N | NBR 13041 |
| Corpo de prova | 280 x 50 mm | — |

#### Aplicações típicas

Indústrias químicas, fertilizantes, cal, alimentícia e despoeiramentos em geral. **Devido à baixa resistência térmica, há limitações claras de aplicação.**

#### Resistências químicas

- **Excelente** resistência em ambientes ácidos, úmidos e alcalinos.  
- Resistência muito boa a agentes oxidantes e solventes orgânicos.

#### Pontos de atenção

- **TEMPERATURA É A RESTRIÇÃO CRÍTICA: 90°C contínua, 100°C picos.** Acima disso, a fibra falha. Validar absolutamente a temperatura da corrente antes de recomendar.  
- **PP é a melhor escolha** quando o ambiente é quimicamente agressivo (ácidos, álcalis, umidade) E a temperatura é compatível.  
- Não confunda gramatura alta com resistência térmica — 550 g/m² aqui é robustez mecânica, não térmica.

\[BUSCA: polipropileno, PP 550, 550 g/m², 90°C, ambiente químico, ácido, álcali, fertilizante, alimentícia, química, MID-PP-550\]

---

### 3.7 FM-COLM-595 — Filtro Colmeia (Metálico)

**Tipo:** Filtro metálico tipo colmeia **Meio filtrante:** Alumínio corrugado **Material da moldura:** Aço galvanizado **ou** inox 304 (escolha conforme aplicação) **Dimensão padrão:** 595 x 595 x 50 mm (outras dimensões mediante consulta)

#### Classificação de filtragem

- **ABNT 16101:2012** — Classe G1  
- **ASHRAE 52.2** — MERV 1

#### Vantagens

- Alta capacidade de retenção de particulado **grosso**.  
- Lavável e reutilizável.  
- Pode ser empregado com glicerina ou óleo vegetal para aumentar o poder de retenção.  
- Admite velocidades elevadas de ar.  
- Baixa perda de carga estática.  
- Fabricação em diversas dimensões mediante consulta.

#### Aplicações principais

- Pré-filtragem para filtros grossos, médios, finos e absolutos.  
- Cozinhas industriais (coifas).  
- Sistemas de ventilação, exaustão e tomadas de ar externo.  
- Névoa de óleo industrial.  
- Indústrias siderúrgicas.  
- Pressurização de escadas (escadas pressurizadas em prédios).

#### Pontos de atenção

- **Não é filtro de alta eficiência.** G1/MERV1 é a classe mais baixa — serve para particulado grosso e/ou pré-filtragem, jamais como filtro principal em aplicação que exija eficiência fina.  
- **Inox 304** quando houver corrosão (umidade, alimentos, vapores).  
- **Galvanizado** para ambientes secos e neutros.

\[BUSCA: filtro metálico, colmeia, alumínio, coifa, cozinha industrial, névoa de óleo, pré-filtro, G1, MERV1, ABNT 16101, FM-COLM-595\]

---

## 4\. PROPRIEDADES DAS FIBRAS — TABELA GINO CACCIARI

Tabela de referência para comparação rápida entre fibras filtrantes. Use para validar **se a fibra recomendada é compatível** com a aplicação (temperatura, agressividade química, abrasão, umidade).

### 4.1 Tabela comparativa

| Fibra | Sigla DIN 60001 | Marcas | Umidade absorvida (%) | Temp. máx. contínua | Resistência calor úmido (hidrólise) | Resistência abrasão | Resistência ácidos minerais | Resistência ácidos orgânicos | Resistência álcalis | Resistência oxidantes | Resistência solventes orgânicos | Densidade (g/cm³) | Propaga combustão |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Algodão | CO | — | 8 | 90 | R | R | F | F | B | F | E | 1,5 | Sim |
| Lã | WO | — | 14,5 | 94 | F | R | B | B | F | F | E | 1,31 | Não |
| Viscose (Rayon) | CV | — | 13,5 | 100 | F | R | R | R | F | R | F | 1,52 | Sim |
| Polipropileno | PP | Courlene, Hostalen, Meraklon, Pylen | 0,01 | 90 | E | B | E | E | E | F | E | 0,9 | Sim |
| Poliamida (Nylon) | PA | Nailon, Nylon 6.6, Perlon, Rilsan | 4 | 110 | NR | E | F | F | B | F | B | 1,14 | Sim |
| Acrílico | PAC | Crylon, Drylon T, Orlon, Redon, Ricem | 1,5 | 120 | B | B | B | B | F | B | E | 1,16 | Sim |
| Poliéster | PES | Dracon, Tergal, Terital, Terylene, Trevira | 0,5 | 150 (calor seco) | NR | E | NR | F | F | B | B | 1,38 | Sim |
| Polifenilsulfeto (Sulfar) | PPS | Ryton, Bayer PPS, Fortron, Teijin PPS | 0,6 | 180 | E | E | E | E | E | NR | E | 1,38 | Não |
| Aramida aromática | PAI | Nomex, Tejin, Conex | 4,5 | 200 | NR | B | NR | F | B | F | E | 1,37–1,38 | Não |
| Poliimida | PIC | P84 | 3 | 240 | F | E | R | R | F | B | E | 1,41 | Não |
| PTFE (Teflon) | PTFE | Teflon, Rastex, Profilen, Toyoflon | 0 | 260 | E | F | E | E | E | E | E | 2,3 | Não |
| Vidro | GL | Fiberglass, Vetrolon, Vetrotex | 0 | 260 | B | R | B | B | F | E | B | 2,54 | Não |
| Metal | MT | Bekinox | 0 | 550 | B | — | B | B | E | E | E | 7,9 | Não |

**Legenda:** F \= Fraco, R \= Regular, B \= Bom, E \= Excelente, NR \= Não Resiste

### 4.2 Ácidos a que a fibra **NÃO** resiste (em alta concentração)

| Fibra | Ácidos a evitar |
| :---- | :---- |
| Algodão | H₂SO₄ |
| Lã | H₂SO₄ |
| Viscose | H₂SO₄, HCl |
| Polipropileno | — |
| Poliamida | H₂SO₄, HNO₃, HCOOH, HCl |
| Acrílico | H₂SO₄, HCl |
| Poliéster | H₂SO₄, HNO₃ |
| PPS | — |
| Aramida | H₂SO₄ |
| Poliimida | H₂SO₄ |
| PTFE | sem análise |
| Vidro | HF |
| Metal | sem análise |

### 4.3 Indicações de aplicação por fibra (segundo Cacciari)

| Fibra | Aplicação principal |
| :---- | :---- |
| **Poliéster (PES)** | Mineração, cimento, siderúrgicas, madeireiras, cerâmica, asbestos, britagem, plástico, pigmentos (calor seco até 150°C). |
| **Poliacrilonitrila copolímero** | Secadores por atomização, indústria calcárea, gesso (condições úmidas até 120°C). |
| **Poliacrilonitrila homopolímero** | Secadores por atomização, indústria calcárea, gesso (condições úmidas até 125°C). |
| **Polipropileno (PP)** | Indústria alimentícia (farinha, leite, açúcar), de detergente (condições de temperatura abaixo de 90°C). |
| **Poliamida aromática (Aramida)** | Asfalto, siderúrgicas, indústrias de cimento e cal, fundições, indústria de cerâmica. |
| **Teflon (PTFE)** | Negro de fumo, incineradores de lixo, caldeiras a carvão (queima sem grelhas), condições externas de ataques químicos e temperatura. |
| **Polifenilsulfeto (PPS)** | Caldeiras a carvão em leito fluidizado, indústria química (aplicação em campos com ataques químicos e hidrolíticos acentuados). |
| **Poliimida aromática** | Asfalto, siderúrgicas, indústrias de cimento e cal, fundições, indústria de cerâmica. |

\[BUSCA: fibras, gino cacciari, comparação, poliéster, polipropileno, ptfe, pps, aramida, poliimida, vidro, metal, temperatura máxima, hidrólise, ácidos, álcalis, propriedades\]

---

## 5\. MATRIZ DE DECISÃO — APLICAÇÃO INDUSTRIAL → MÍDIA RECOMENDADA

Use esta matriz como **primeiro filtro** quando o cliente descrever a aplicação. Sempre cruze com as variáveis operacionais (Seção 6\) antes de fechar a recomendação.

### 5.1 Indústria / processo → mídias candidatas

| Indústria / Processo | Mídias candidatas (em ordem de adequação típica) | Observações críticas |
| :---- | :---- | :---- |
| **Cimento** (despoeiramento de fornos, moinhos) | MID-PES-400 (AG 400), MID-PES-350-PTFE, fibras alternativas para alta temperatura (Aramida, PPS) — não cobertas neste catálogo | Verificar temperatura real da corrente. Cimento é abrasivo e alcalino. |
| **Mineração / britagem** | MID-PES-400, MID-PES-350-PTFE | Alta abrasão — gramatura mais alta favorece. |
| **Siderurgia / fundição** | MID-PES-350-PTFE, fibras de alta temperatura (Aramida/PPS — fora deste catálogo) | Avaliar temperatura: poliéster só até 150°C. |
| **Alumínio (despoeiramento)** | MID-PES-400 | Aplicação típica do AG 400 conforme ficha técnica. |
| **Moagem de grãos / cacau / fumo** | MID-PES-400, MID-PES-350-PTFE | Particulado fino orgânico. PTFE ajuda em correntes com aglomerantes. |
| **Cerâmica / amianto / asbestos** | MID-PES-400 | Particulado abrasivo. |
| **Petroquímica** | MID-PES-400 (validar temperatura e ataque químico) | Atenção a ataques químicos específicos — consultar Hiroshi. |
| **Pigmentos / asfalto / fundição de bateria / jateamento / grafite** | MID-PES-350-PTFE | PTFE é o diferencial em pós aglomerantes/higroscópicos. |
| **Indústria química / fertilizantes / cal** | MID-PP-550 (se temperatura ≤ 90°C contínua) | Polipropileno tem excelente resistência química. **Crítico: validar temperatura.** |
| **Alimentícia (farinha, leite, açúcar, detergente)** | MID-PP-550 (se temperatura ≤ 90°C) | PP é a indicação clássica para alimentícia em baixa temperatura. |
| **Pó ultrafino, gases de combustão, alta exigência de eficiência** | MID-PLI-240 (Plissado UNO PES 240 com Membrana PTFE) | 99,99% de eficiência para ≥0,5 µm. Limite 120°C contínua. |
| **Cozinha industrial (coifas)** | FM-COLM-595 (Filtro Colmeia) | Pré-filtragem; nunca como filtro principal de alta eficiência. |
| **Névoa de óleo industrial** | FM-COLM-595 \+ filtros complementares | Colmeia faz captação primária; eficiência fina exige etapa adicional. |
| **Pré-filtragem geral / ventilação / exaustão / ar externo** | FM-COLM-595 | Classe G1 / MERV1. |
| **Caldeiras a carvão, incineradores, negro de fumo** | PTFE (Teflon) — fibra fora deste catálogo de mídias têxteis | Encaminhar ao Hiroshi. |
| **Secadores por atomização (úmidos), gesso, calcário** | Acrílico (PAC) — fibra fora deste catálogo | Encaminhar ao Hiroshi. |

### 5.2 Variável operacional → impacto na escolha

| Condição operacional | Implicação |
| :---- | :---- |
| Temperatura **contínua \> 150°C** | Descartar todo poliéster e polipropileno. Considerar Aramida, PPS, Poliimida, PTFE, Vidro. |
| Temperatura **contínua \> 90°C** com química agressiva | Descartar PP. Avaliar poliéster com PTFE ou fibras superiores. |
| Umidade **\>15% \+ temperatura \>80°C** | Risco de hidrólise em poliéster (incluindo PES com PTFE). Considerar PP (se T compatível) ou PPS. |
| Corrente **ácida (H₂SO₄, HNO₃)** | Poliéster comprometido. PP excelente (se T compatível). PTFE/PPS para alta temperatura. |
| Corrente **alcalina forte** | Poliéster fraco. PP excelente. PTFE/Aramida/Vidro para alta temperatura. |
| Particulado **higroscópico ou aglomerante** (cimento úmido, açúcar, gesso) | Tratamento PTFE (MID-PES-350-PTFE) é fortemente recomendado. |
| Particulado **muito fino, submicron** | MID-PLI-240 (membrana PTFE, plissado) — eficiência 99,99% a 0,5 µm. |
| **Óleo / gordura na corrente** | MID-PES-350-PTFE (repelência) ou Filtro Colmeia para pré-captação. |
| **Alta abrasão** | Mídia agulhada de gramatura alta (MID-PES-400, MID-PP-550). Evitar sarjas leves. |
| **Particulado grosso, baixa exigência** | Filtro Colmeia (FM-COLM-595) ou sarja simples. |

\[BUSCA: matriz, decisão, aplicação, indústria, recomendação, cimento, mineração, alimentícia, química, alta temperatura, hidrólise, abrasão, higroscópico, ácido, álcali\]

---

## 6\. CHECKLIST DE COLETA DE INFORMAÇÕES DO CLIENTE

Estes são os dados que o agente deve garantir que foram coletados antes de avançar para a recomendação. Cada item tem **criticidade** (CRÍTICO / IMPORTANTE / DESEJÁVEL).

### 6.1 Identificação do cliente e contexto

| \# | Pergunta | Criticidade |
| :---- | :---- | :---- |
| 1 | Razão social, CNPJ, contato responsável | CRÍTICO |
| 2 | Segmento industrial (cimento, alimentícia, química, etc.) | CRÍTICO |
| 3 | Trata-se de **substituição** de mídia existente, **novo equipamento** ou **diagnóstico de problema**? | CRÍTICO |
| 4 | Já é cliente ASPIRAMAQ? Equipamento atual é da casa? | IMPORTANTE |
| 5 | Existe especificação técnica do cliente (caderno de encargos, norma)? | IMPORTANTE |

### 6.2 Caracterização do processo

| \# | Pergunta | Criticidade |
| :---- | :---- | :---- |
| 6 | Qual o processo gerador do particulado? (moagem, secagem, combustão, jateamento, etc.) | CRÍTICO |
| 7 | Qual o material do particulado? (cimento, açúcar, alumínio, sílica, fuligem, etc.) | CRÍTICO |
| 8 | Granulometria média / tamanho típico das partículas (µm)? | IMPORTANTE |
| 9 | O particulado é **abrasivo**? **Higroscópico**? **Aglomerante**? **Tóxico/explosivo**? | CRÍTICO |
| 10 | Concentração do particulado na corrente (g/m³ ou mg/Nm³)? | IMPORTANTE |

### 6.3 Variáveis operacionais da corrente gasosa

| \# | Pergunta | Criticidade |
| :---- | :---- | :---- |
| 11 | **Temperatura contínua de operação (°C)** | CRÍTICO |
| 12 | **Picos de temperatura (°C) e duração** | CRÍTICO |
| 13 | **Umidade relativa da corrente (%) — ou ponto de orvalho** | CRÍTICO |
| 14 | Vazão da corrente (m³/h ou Nm³/h) | IMPORTANTE |
| 15 | Pressão de operação (mm.c.a / kPa) | IMPORTANTE |
| 16 | Presença de **óleo, vapor, condensado**? | CRÍTICO |
| 17 | Presença de **ácidos, álcalis, oxidantes, solventes**? Qual e qual concentração? | CRÍTICO |
| 18 | Há **risco de inflamabilidade** ou atmosfera explosiva (ATEX/NR-20)? | CRÍTICO |

### 6.4 Configuração do equipamento

| \# | Pergunta | Criticidade |
| :---- | :---- | :---- |
| 19 | Tipo do coletor: **mangas**, **cartuchos plissados**, **filtro metálico**, outro? | CRÍTICO |
| 20 | Quantidade de mangas/cartuchos e dimensões (Ø x comprimento) | CRÍTICO |
| 21 | Sistema de limpeza: **pulse jet**, **vibração mecânica**, **ar reverso**, outro? | IMPORTANTE |
| 22 | Velocidade de filtração (relação ar/pano — m/min) | IMPORTANTE |
| 23 | Mídia atualmente em uso (marca, modelo, fornecedor) | IMPORTANTE |

### 6.5 Histórico e expectativas

| \# | Pergunta | Criticidade |
| :---- | :---- | :---- |
| 24 | Vida útil esperada vs. observada da mídia atual | IMPORTANTE |
| 25 | Há reclamações ativas (vazamento, perda de eficiência, alta perda de carga, ruptura)? | IMPORTANTE |
| 26 | Limites de emissão exigidos (mg/Nm³) — atendendo qual norma? | IMPORTANTE |
| 27 | Prazo do cliente para a solução | DESEJÁVEL |
| 28 | Orçamento / faixa de investimento | DESEJÁVEL |

\[BUSCA: checklist, coleta, perguntas, dados, cliente, processo, temperatura, umidade, química, equipamento, histórico, criticidade\]

---

## 7\. REGRAS DE VALIDAÇÃO E COERÊNCIA

Após coletar os dados, o agente deve verificar **coerência interna** antes de avançar. Se alguma regra falhar, o agente questiona o vendedor.

### 7.1 Regras de consistência básica

| ID | Regra | Ação se violada |
| :---- | :---- | :---- |
| V01 | Temperatura de pico ≥ temperatura contínua | Solicitar revisão ao cliente |
| V02 | Umidade relativa entre 0% e 100% | Solicitar valor correto |
| V03 | Se fornecida concentração, deve estar em unidade reconhecível (g/m³, mg/Nm³, ppm) | Pedir clarificação |
| V04 | Granulometria informada deve ser numérica (µm) | Pedir valor numérico |
| V05 | Vazão \> 0 | Pedir valor correto |
| V06 | Tipo de coletor coerente com o tipo de mídia atual | Investigar inconsistência |

### 7.2 Regras técnicas de compatibilidade

| ID | Regra | Ação se violada |
| :---- | :---- | :---- |
| T01 | Mídia atual tem temperatura máxima ≥ temperatura operacional informada | **ALERTAR** — possível causa de falha |
| T02 | Se umidade \>15% e temperatura \>80°C, e mídia é poliéster sem PTFE → **risco de hidrólise** | Sinalizar risco e considerar troca de fibra |
| T03 | Se ácido específico está na corrente, verificar tabela 4.2 (ácidos que a fibra NR) | Sinalizar incompatibilidade |
| T04 | PP só pode ser recomendado se temperatura contínua ≤ 90°C | Bloquear recomendação se T \> 90°C |
| T05 | Plissado UNO PES 240 só pode ser recomendado se T ≤ 120°C contínua | Bloquear se T \> 120°C |
| T06 | Filtro Colmeia (G1/MERV1) **não pode** ser único filtro em aplicação que exija eficiência fina | Sinalizar e exigir filtro complementar |
| T07 | Se o cliente exige eficiência submicrométrica e a mídia escolhida não é o Plissado UNO PES 240 nem mídia equivalente, sinalizar gap | Reavaliar recomendação |
| T08 | Atmosfera explosiva (ATEX/NR-20) declarada → projeto exige análise especializada de aterramento, antiestática, etc. | **BLOQUEAR** e encaminhar ao Hiroshi |

### 7.3 Regras comerciais

| ID | Regra | Ação se violada |
| :---- | :---- | :---- |
| C01 | Se cliente é "novo equipamento", coletor deve estar especificado antes da mídia | Pedir specs do coletor |
| C02 | Se cliente é "substituição", mídia atual deve estar identificada | Pedir marca/modelo da mídia atual |
| C03 | Se há reclamação ativa de falha, causa deve ser investigada antes de propor mídia idêntica à atual | Levantar histórico de falha |

\[BUSCA: validação, coerência, regras, consistência, compatibilidade, alerta, gating, hidrólise, atex, explosivo\]

---

## 8\. CRITÉRIOS DE BLOQUEIO

Quando alguma destas condições for verdadeira, o agente **NÃO avança** para recomendação. Ele responde com pedido de informação faltante, encaminhamento ao especialista ou alerta crítico.

### 8.1 Bloqueios por dado faltante (CRÍTICO)

O agente bloqueia se **qualquer um** destes dados estiver ausente:

- ❌ **Temperatura contínua de operação** desconhecida.  
- ❌ **Tipo de particulado / material** desconhecido.  
- ❌ **Tipo de coletor** (mangas, cartuchos plissados, metálico) desconhecido.  
- ❌ **Processo gerador** do particulado não identificado.  
- ❌ **Umidade da corrente** desconhecida em aplicações onde é decisiva (acima de 80°C, particulado higroscópico, ou processos úmidos).  
- ❌ **Presença de ácidos/álcalis** não verificada quando o segmento sugere risco (química, fertilizantes, fundição de bateria, asfalto).  
- ❌ **Risco de atmosfera explosiva** não esclarecido em segmentos com pó orgânico (alimentícia, cacau, fumo, plástico, alumínio fino, grãos).

### 8.2 Bloqueios por inconsistência

- ❌ Temperatura informada acima do limite da mídia que está atualmente instalada — investigar se este é o problema antes de propor mesma mídia.  
- ❌ Cliente exige eficiência específica (ex: 99% para 1 µm) e os dados não permitem confirmar atendimento.  
- ❌ Norma de emissão informada exige nível que a mídia candidata não atinge.

### 8.3 Bloqueios por risco técnico maior

- ❌ Atmosfera potencialmente explosiva → **encaminhar ao Hiroshi** sem propor solução.  
- ❌ Particulado tóxico (ex: amianto, metais pesados) sem confirmação dos requisitos legais → **encaminhar ao Hiroshi**.  
- ❌ Aplicação em alta temperatura (\>180°C contínua) — exige fibras que não estão neste catálogo de mídias têxteis (Aramida, PPS, Poliimida, PTFE, Vidro). **Encaminhar ao Hiroshi**.  
- ❌ Aplicação inédita ou fora do padrão coberto pelos casos típicos → **encaminhar ao Hiroshi**.

### 8.4 Mensagem-padrão de bloqueio

Quando bloquear, o agente deve responder com a estrutura:

🛑 BLOQUEIO TÉCNICO

Motivo: \[descrever a lacuna ou inconsistência\].

Para avançar, preciso de:

\- \[dado A\]

\- \[dado B\]

Pergunta sugerida ao cliente:

"\[texto pronto para o vendedor levar ao cliente\]"

Se já tivermos esse dado e eu não estiver enxergando, me confirme. 

Se for um caso atípico, recomendo escalonar para o Hiroshi.

\[BUSCA: bloqueio, gating, faltante, inconsistência, risco, escalonar, atex, hiroshi, parar, não avançar\]

---

## 9\. ÁRVORE DE DECISÃO TÉCNICA

Roteiro estruturado para o agente conduzir o diagnóstico passo a passo.

### 9.1 Diagrama lógico (texto)

INÍCIO

  │

  ├─\[1\] Aplicação é cozinha industrial / pré-filtragem / névoa de óleo grosso?

  │       SIM → recomenda FM-COLM-595 (Colmeia) \+ sinaliza limites G1/MERV1

  │       NÃO → continua

  │

  ├─\[2\] Temperatura contínua é \> 150°C?

  │       SIM → ESCALAR ao Hiroshi (fora do catálogo de poliéster/PP)

  │       NÃO → continua

  │

  ├─\[3\] Há química agressiva (ácidos fortes, álcalis fortes) E temperatura ≤ 90°C?

  │       SIM → MID-PP-550 é forte candidata

  │       NÃO → continua

  │

  ├─\[4\] Temperatura entre 90 e 150°C E química agressiva?

  │       SIM → poliéster é frágil; ESCALAR ao Hiroshi (PPS, Aramida, PTFE)

  │       NÃO → continua

  │

  ├─\[5\] Particulado é submicrométrico (≤1 µm) ou exigência ≥99,9% de eficiência fina?

  │       SIM → MID-PLI-240 (Plissado UNO PES Membrana PTFE) — verificar T ≤ 120°C

  │       NÃO → continua

  │

  ├─\[6\] Particulado é higroscópico, aglomerante, com óleo ou umidade alta?

  │       SIM → MID-PES-350-PTFE (poliéster com PTFE)

  │       NÃO → continua

  │

  ├─\[7\] Particulado é abrasivo, gramatura alta importa?

  │       SIM → MID-PES-400 (AG 400\)

  │       NÃO → continua

  │

  ├─\[8\] Particulado é grosseiro, seco, baixa exigência?

  │       SIM → MID-PES-210-SAR (Sarja PS) ou MID-PES-630-SAR (Sarja Grossa)

  │       NÃO → ESCALAR ao Hiroshi (caso atípico)

  │

  └─FIM → estruturar diagnóstico e apresentar ao vendedor

### 9.2 Notas sobre a árvore

- Esta árvore é um **filtro inicial** — não substitui a Seção 5 (matriz de aplicações) nem a Seção 7 (regras de coerência).  
- Sempre, **antes de fechar a recomendação**, executar a checagem da Seção 7 e a Seção 10 (riscos).  
- Quando a árvore aponta múltiplas opções viáveis, apresentar as 2 ou 3 candidatas com prós/contras explícitos.

\[BUSCA: árvore decisão, fluxograma, lógica, roteiro, decisão técnica, escolher mídia, diagnóstico\]

---

## 10\. RISCOS TÉCNICOS A SINALIZAR

Antes de qualquer recomendação, o agente deve verificar e **sinalizar explicitamente** os riscos abaixo, mesmo que a mídia escolhida seja tecnicamente adequada.

### 10.1 Riscos térmicos

- **Risco de fusão**: temperatura operacional próxima do ponto de fusão (margem \< 30°C). Poliéster funde a 250°C, PP a \~165°C. Picos não controlados podem ser fatais para a mídia.  
- **Risco de dilatação dimensional**: variações de temperatura causam expansão/contração, gerando estresse mecânico em mangas longas.  
- **Risco de degradação por picos**: se o processo tem picos térmicos não declarados (forno desbalanceado, partidas), considerar margem de segurança.

### 10.2 Riscos químicos

- **Hidrólise aquosa**: poliéster acima de 80°C com \>15% de umidade sofre degradação. Aplica-se inclusive à MID-PES-350-PTFE.  
- **Ataque ácido**: poliéster não resiste a H₂SO₄ e HNO₃ em alta concentração. Verificar Seção 4.2.  
- **Ataque alcalino**: poliéster tem resistência apenas regular/fraca a álcalis. PP é excelente.  
- **Solventes orgânicos**: maioria das fibras tolera, mas verificar caso a caso.

### 10.3 Riscos mecânicos

- **Abrasão**: particulado abrasivo (sílica, alumínio, cimento) consome a face filtrante. Mídia agulhada de gramatura alta atenua.  
- **Pressão diferencial**: limpeza pulse jet com pressão alta \+ mídia leve \= risco de ruptura.  
- **Velocidade de filtração**: relação ar/pano alta sobrecarrega a mídia. Validar com o projeto do coletor.

### 10.4 Riscos operacionais

- **Condensação**: corrente próxima do ponto de orvalho pode condensar na mídia, formando "torta úmida" que reduz permeabilidade e gera obstruções.  
- **Fogo / explosão**: pós orgânicos finos (farinha, açúcar, alumínio) em concentração e oxigênio adequados são explosivos. **Mídia errada pode ser ignição.**  
- **Contaminação cruzada**: em alimentícia / farmacêutica, mídia inadequada pode liberar fibras ou tratamentos químicos no produto.

### 10.5 Riscos de eficiência

- **Vazamento por costura**: mesmo a melhor mídia falha se a confecção for ruim — sinalizar a importância da execução.  
- **Bypass**: gaiola mal dimensionada ou flange mal vedado anula a mídia.  
- **Sub-dimensionamento**: área filtrante insuficiente leva à colmatação rápida, alta perda de carga, ruptura.

### 10.6 Modelo de mensagem de risco

⚠️ RISCO TÉCNICO IDENTIFICADO

Mídia recomendada: \[nome\]

Risco: \[descrição clara\]

Severidade: \[BAIXA / MÉDIA / ALTA / CRÍTICA\]

Mitigação: \[o que fazer\]

Esta recomendação ainda é viável? \[SIM, com mitigação\] / \[NÃO, requer alternativa\]

\[BUSCA: riscos, sinalização, hidrólise, ataque químico, abrasão, condensação, explosão, atex, fusão, contaminação, vazamento, severidade\]

---

## 11\. PERGUNTAS-PADRÃO PARA O VENDEDOR LEVAR AO CLIENTE

Banco de perguntas prontas que o agente pode entregar ao vendedor, em linguagem clara para o cliente.

### 11.1 Abertura

- "Qual é o processo industrial onde o filtro vai operar? (ex.: moinho de cimento, secador de farinha, forno de fundição, etc.)"  
- "Vocês estão substituindo um filtro existente, comprando um novo equipamento, ou tentando resolver um problema específico?"  
- "Quem é a pessoa técnica que conhece o processo? Posso falar diretamente com ela?"

### 11.2 Sobre o particulado

- "O que vai estar suspenso no ar que precisa ser filtrado? (cimento, fuligem, açúcar, alumínio, sílica…)"  
- "Vocês têm uma estimativa do tamanho das partículas? (mícrons / µm)"  
- "Esse pó é abrasivo? Pega na mão como se fosse lixa? É pegajoso? Absorve umidade?"  
- "Tem risco de explosão / é classificado como pó combustível?"  
- "Tem alguma análise ou ficha do material que possam compartilhar?"

### 11.3 Sobre a corrente gasosa

- "Qual é a temperatura média da corrente que vai pro filtro? E a temperatura máxima em pico, mesmo se for raro?"  
- "A corrente é seca ou tem vapor / umidade? Vocês conseguem medir a umidade ou o ponto de orvalho?"  
- "Tem óleo, gordura, ou condensado na corrente?"  
- "Tem vapores ácidos, alcalinos, ou solventes? Quais?"  
- "Qual é a vazão? (m³/h, Nm³/h)"

### 11.4 Sobre o equipamento

- "É um filtro de mangas, cartucho plissado, ou filtro metálico tipo colmeia?"  
- "Qual o tamanho e a quantidade das mangas/cartuchos atuais?"  
- "Como é feita a limpeza: pulse jet (jato de ar comprimido), vibração mecânica, ou ar reverso?"  
- "Vocês têm o desenho do coletor ou as specs do projeto?"  
- "Qual a marca e modelo da mídia que estão usando hoje?"

### 11.5 Sobre o problema (se for diagnóstico de falha)

- "Quanto tempo a mídia atual costuma durar?"  
- "O que está acontecendo: rasga, entope, deixa passar pó, perde eficiência, sobe perda de carga…?"  
- "Quando o problema começou? Mudaram alguma coisa no processo?"  
- "Tem fotos da mídia danificada que possam mandar?"

### 11.6 Sobre exigências

- "Vocês precisam atender alguma norma de emissão? CONAMA, CETESB, cliente final?"  
- "Qual o limite de emissão exigido (mg/Nm³)?"  
- "Há prazo? Há orçamento aprovado?"

\[BUSCA: perguntas vendedor, banco perguntas, levantamento, atendimento, diagnóstico, abertura, particulado, corrente, equipamento, falha, exigências\]

---

## 12\. CASOS TÍPICOS DE REFERÊNCIA

Aplicações conhecidas, com a mídia tradicionalmente recomendada e o racional. Use para mostrar ao vendedor "casos parecidos com este".

### 12.1 Caso A — Despoeiramento de moinho de cimento

- **Cenário:** corrente seca, temperatura 90–130°C, particulado abrasivo alcalino fino.  
- **Mídia tipicamente recomendada:** MID-PES-400 (AG 400\) ou MID-PES-350-PTFE quando há demanda de não-aderência.  
- **Racional:** poliéster suporta a temperatura, gramatura alta resiste à abrasão. PTFE entra se houver tendência a aglomeração.  
- **Risco a sinalizar:** picos térmicos no forno; verificar margem.

### 12.2 Caso B — Indústria alimentícia (farinha, açúcar, leite em pó)

- **Cenário:** temperatura ≤ 80°C, ambiente seco, particulado orgânico fino.  
- **Mídia tipicamente recomendada:** MID-PP-550 (Polipropileno).  
- **Racional:** PP é quimicamente neutro, atende exigência sanitária básica, não absorve umidade.  
- **Risco a sinalizar:** atmosfera potencialmente explosiva (ATEX) — confirmar requisitos.

### 12.3 Caso C — Usina de asfalto / fundição de bateria / cabines de jateamento

- **Cenário:** temperatura 100–140°C, pó com tendência aglomerante, presença de óleo/vapores.  
- **Mídia tipicamente recomendada:** MID-PES-350-PTFE (Poliéster com PTFE OBER).  
- **Racional:** repelência a óleo/água/aglomerantes é crítica; temperatura compatível.  
- **Risco a sinalizar:** hidrólise se umidade \>15% e T \>80°C.

### 12.4 Caso D — Indústria química com ácidos / álcalis (T ≤ 90°C)

- **Cenário:** corrente quimicamente agressiva, temperatura controlada baixa.  
- **Mídia tipicamente recomendada:** MID-PP-550.  
- **Racional:** PP é a melhor fibra deste catálogo para ataque químico forte.  
- **Risco a sinalizar:** se houver pico \>100°C, mídia falha.

### 12.5 Caso E — Cliente exige altíssima eficiência (gases de combustão, pó submicron)

- **Cenário:** norma de emissão restritiva, partículas finas.  
- **Mídia tipicamente recomendada:** MID-PLI-240 (Plissado UNO PES Membrana PTFE).  
- **Racional:** 99,99% de eficiência para ≥0,5 µm.  
- **Risco a sinalizar:** limite de 120°C contínua; abrasão pode comprometer membrana.

### 12.6 Caso F — Pré-filtragem para coifa de cozinha industrial / névoa de óleo

- **Cenário:** captação primária de gordura.  
- **Mídia tipicamente recomendada:** FM-COLM-595 (Filtro Colmeia).  
- **Racional:** lavável, reutilizável, suporta gordura e óleo.  
- **Risco a sinalizar:** G1/MERV1 — não é filtro de eficiência fina; complementar se necessário.

### 12.7 Caso G — Mineração / britagem (particulado pesado abrasivo)

- **Cenário:** temperatura ambiente a 130°C, alta abrasão, particulado seco.  
- **Mídia tipicamente recomendada:** MID-PES-400.  
- **Racional:** gramatura 400 g/m² e estrutura agulhada resistem à abrasão.

**Observação:** estes casos são padrões iniciais. Cada situação real exige checagem da Seção 6 (checklist), Seção 7 (validação) e Seção 10 (riscos).

\[BUSCA: casos típicos, histórico, exemplos, cimento, alimentícia, asfalto, jateamento, química, alta eficiência, coifa, mineração, referência\]

---

## 13\. ESCALATION — QUANDO ENCAMINHAR AO HIROSHI

O Hiroshi é a referência técnica especialista. O agente deve **encaminhar imediatamente** quando:

### 13.1 Gatilhos de escalonamento

1. **Temperatura contínua \> 150°C** — sai do escopo do catálogo poliéster/PP atual.  
2. **Atmosfera explosiva ou potencialmente explosiva** (ATEX, NR-20).  
3. **Particulado tóxico** (amianto, metais pesados, agentes biológicos).  
4. **Norma de emissão muito restritiva** que exige análise de eficiência customizada.  
5. **Aplicação inédita** que não corresponde a nenhum dos casos típicos da Seção 12\.  
6. **Conflito entre variáveis** (ex: alta temperatura \+ alta umidade \+ corrente ácida — nenhuma fibra do catálogo cobre).  
7. **Cliente estratégico** (alto valor, projeto crítico) — Hiroshi deve estar no loop desde o início.  
8. **Falha recorrente** com a mídia atual sem causa clara.  
9. **Solicitação fora do padrão de produtos** (mídia customizada, dimensão atípica, fibra exótica).  
10. **Qualquer dúvida técnica que o agente não conseguir responder com a base atual.**

### 13.2 Modelo de encaminhamento

🔁 ESCALONAMENTO PARA HIROSHI

Cliente: \[nome\]

Aplicação: \[descrição resumida\]

Motivo do escalonamento: \[um dos 10 gatilhos acima\]

Dados já coletados:

\- \[resumo dos dados do checklist preenchidos até aqui\]

Dados ainda faltantes:

\- \[se houver\]

Hipótese inicial: \[se houver\]

Pergunta específica para o Hiroshi: \[pergunta clara\]

\[BUSCA: escalonamento, hiroshi, especialista, atex, alta temperatura, tóxico, customizado, falha recorrente, encaminhar\]

---

## 14\. GLOSSÁRIO TÉCNICO

| Termo | Definição |
| :---- | :---- |
| **Agulhado (não-tecido)** | Manta produzida por entrelaçamento mecânico de fibras curtas com agulhas farpadas. Estrutura tridimensional, alta capacidade de retenção em profundidade. |
| **Sarja** | Tipo de tecido com ligamento diagonal (urdume passa sobre 2+ fios da trama). Em filtragem, usado em mídias estruturadas. Sarja 2x2 \= padrão clássico. |
| **Spunbonded** | Não-tecido produzido por extrusão direta de filamentos contínuos, ligados por calor/pressão. Base comum para plissados com membrana. |
| **Membrana PTFE** | Filme microporoso de politetrafluoretileno laminado sobre o suporte têxtil. Filtragem ocorre na superfície (cake-on-surface), eficiência muito alta. |
| **PTFE (Teflon)** | Politetrafluoretileno. Resistente a praticamente todas as substâncias químicas, alta temperatura. |
| **Termofixação** | Tratamento térmico que estabiliza dimensionalmente a mídia após produção. |
| **Calandragem** | Passagem do tecido entre rolos quentes para alisar uma face e fechar a estrutura. |
| **Anti-pilling Egg-Shell** | Acabamento de uma das faces para evitar formação de pequenas bolinhas (pilling) e melhorar liberação do bolo (cake release). |
| **Permeabilidade** | Volume de ar que atravessa a mídia em unidade de tempo, sob diferencial de pressão fixo. Mais alta \= menos perda de carga, eficiência geralmente menor. |
| **Gramatura** | Massa por unidade de área (g/m²). Mais alta geralmente \= mais robusto e mais denso. |
| **Pulse jet** | Sistema de limpeza por jato de ar comprimido pulsante na contracorrente. Limpa mangas/cartuchos sem parar o sistema. |
| **Ar reverso** | Sistema de limpeza onde se inverte temporariamente o fluxo de ar para descolar o bolo. |
| **Vibração mecânica** | Limpeza por agitação mecânica das mangas. Sistema mais antigo, exige parar a operação. |
| **Velocidade de filtração / Air-to-Cloth** | Razão entre vazão (m³/min) e área filtrante (m²) — em m/min. |
| **Bolo / Cake** | Camada de pó que se forma na superfície da mídia. É ela que faz a maior parte da filtragem em mangas. |
| **Hidrólise** | Reação química com água que degrada a fibra. Crítica em poliéster com calor \+ umidade. |
| **G1 / MERV** | Classes de eficiência de filtros: ABNT 16101 (G1 a F9, depois absolutos) e ASHRAE 52.2 (MERV 1 a 16). G1/MERV1 é o nível mais baixo. |
| **Higroscópico** | Material que absorve umidade do ambiente. Pós higroscópicos endurecem na mídia. |
| **Aglomerante** | Pó que tende a se grudar / formar massa compacta. |
| **ATEX / NR-20** | Normas (europeia / brasileira) sobre atmosferas explosivas e segurança em inflamáveis. |
| **Mullen Test** | Ensaio de pressão de ruptura da mídia. |
| **DIN / ISO / NBR / ASTM** | Normas técnicas (alemã, internacional, brasileira, americana). |

\[BUSCA: glossário, definições, agulhado, sarja, spunbonded, ptfe, pulse jet, hidrólise, gramatura, permeabilidade, MERV, ATEX\]

---

## 15\. FAQ — RESPOSTAS RÁPIDAS

### Q1: "Posso usar poliéster a 160°C?"

**Resposta:** Não em operação contínua. Poliéster suporta até 150°C contínuo (calor seco). Picos curtos podem ir até 150°C, mas 160°C é zona de degradação acelerada. Acima disso, considere PPS (180°C), Aramida (200°C), Poliimida (240°C), PTFE (260°C), Vidro (260°C). Escalar ao Hiroshi.

### Q2: "PP é melhor que poliéster?"

**Resposta:** Depende. PP é melhor em **resistência química** (excelente em ácidos, álcalis, umidade) e **não absorve umidade**. Mas PP é pior em **resistência térmica** (90°C contínua vs. 150°C do PES) e em **resistência à abrasão**. A escolha depende das variáveis dominantes do processo.

### Q3: "Quando vale a pena pagar mais por mídia com PTFE?"

**Resposta:** Quando há um ou mais destes fatores: (1) particulado higroscópico/aglomerante, (2) presença de óleo ou umidade na corrente, (3) exigência de alta eficiência em pó fino, (4) necessidade de cake release (descolamento) eficiente para reduzir perda de carga, (5) corrente quimicamente moderada. Em pó seco grosseiro convencional, PTFE não compensa.

### Q4: "Plissado vs. manga: o que escolher?"

**Resposta:** Plissado oferece área filtrante muito maior em volume reduzido — ideal para retrofits compactos e exigência de alta eficiência. Manga é a solução clássica, mais robusta, menos sensível a abrasão pesada. Plissado UNO PES 240 é forte candidato quando a aplicação pede eficiência fina e cabe no envelope dimensional.

### Q5: "O cliente está com perda de carga subindo rápido. O que pode ser?"

**Resposta:** Hipóteses comuns: (1) bolo úmido por condensação na corrente, (2) particulado higroscópico colmatando a mídia, (3) sistema de limpeza falhando ou subdimensionado, (4) área filtrante insuficiente, (5) mídia chegou ao fim de vida, (6) mudança no processo aumentou concentração. Investigar antes de propor mídia nova.

### Q6: "O cliente quer trocar para mídia mais barata. Posso recomendar?"

**Resposta:** Só após validar que a mídia mais barata atende **todas** as variáveis críticas (temperatura, química, umidade, eficiência exigida, abrasão). Sinalizar trade-offs claramente. Em caso de dúvida, escalar ao Hiroshi.

### Q7: "Filtro Colmeia atende minha aplicação de despoeiramento de pó fino?"

**Resposta:** Não como filtro principal. G1/MERV1 é classe baixa, retém apenas particulado grosso. Para despoeiramento fino, use mídia têxtil (mangas/cartuchos). Colmeia serve como **pré-filtro** ou em aplicações tolerantes (coifas, ventilação geral).

### Q8: "Cliente perguntou sobre vida útil. O que respondo?"

**Resposta:** Vida útil depende de muitas variáveis: severidade do processo, qualidade da operação, sistema de limpeza, manutenção. **Não dê garantia de tempo** — cite faixas referenciais quando souber, e remeta a comparação com instalações similares. Em dúvida, escalar.

\[BUSCA: FAQ, dúvidas, perguntas frequentes, poliéster temperatura, PP vs PES, ptfe quando vale, plissado vs manga, perda de carga, vida útil, colmeia eficiência\]

---

## ANEXO A — MARCAÇÕES DE LACUNAS A REVISAR COM ASPIRAMAQ

Pontos onde a base atual está incompleta e dependem de validação técnica interna antes de o agente entrar em produção.

1. **Sarja Grossa Ordem 916 (MID-PES-630-SAR)**: temperatura operacional, permeabilidade, aplicações típicas.  
2. **Sarja PS (MID-PES-210-SAR)**: aplicações específicas recomendadas pela ASPIRAMAQ.  
3. **Equipamentos** (aspiradores, coletores, exaustores): catálogo detalhado não está nesta versão.  
4. **Casos de campo reais** da ASPIRAMAQ — substituir/complementar os "casos típicos" da Seção 12 com clientes reais (sem PII).  
5. **Tabela de vida útil esperada** por mídia × aplicação — fortemente útil para o agente, ainda não disponível.  
6. **Fibras alternativas** (Aramida, PPS, Poliimida, Vidro, PTFE) — caso a ASPIRAMAQ trabalhe com elas, incluir fichas técnicas.  
7. **Política comercial** (faixa de preço, prazo de entrega, condições) — não incluído por design (escopo técnico), mas pode ser anexado.  
8. **Histórico de não-conformidades** e causas raiz — útil como base de aprendizado para o agente.  
9. **Relação detalhada das normas de emissão** comuns aos clientes da ASPIRAMAQ (CONAMA, CETESB, normas estaduais).  
10. **Identificação completa do "Hiroshi"** e processo formal de escalonamento (canal, SLA esperado).

\[BUSCA: lacunas, revisar, pendências, aspiramaq, preencher, completar, anexo\]

---

## ANEXO B — INSTRUÇÕES PARA INDEXAÇÃO RAG

Recomendações para o time de engenharia que vai indexar este documento.

- **Chunking sugerido:** por seção (`##`) ou subseção (`###`). Cada bloco já é autocontido.  
- **Tamanho médio dos chunks:** entre 300 e 1.200 tokens. As seções 3.x e 12.x são naturalmente desse tamanho.  
- **Preservar tags `[BUSCA: ...]`** durante o chunking — elas fornecem palavras-chave adicionais para a indexação semântica.  
- **Metadados úteis** a anexar a cada chunk: `{secao, subsecao, midia_id, aplicacao_industrial, criticidade}`.  
- **Frase de contexto a prefixar** em chunks pequenos (ex: linhas de tabela isoladas): "Documento: Base de Conhecimento ASPIRAMAQ — Seção X.Y — \[título da seção\]".  
- **Re-ranking sugerido:** priorizar chunks da Seção 7 (validação) e 8 (bloqueio) quando a query indica decisão; priorizar Seção 3 (catálogo) em queries de specs; priorizar Seção 12 (casos) em queries de "caso parecido".  
- **Sinônimos a expandir na ingestão**: manga \= bag, cartucho \= cartridge, plissado \= pleated, despoeiramento \= dust collection, perda de carga \= pressure drop, mídia filtrante \= filter media, particulado \= dust/PM.

\[BUSCA: rag, indexação, chunking, embeddings, metadados, sinônimos, engenharia\]

---

**FIM DO DOCUMENTO**  
