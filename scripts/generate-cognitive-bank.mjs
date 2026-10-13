import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "src/server/cognitive/banks");

function q(id, category, difficulty, prompt, options, correctIndex, explanation, skillTags, suggestedSeconds) {
  return { id, category, difficulty, prompt, options, correctIndex, explanation, skillTags, suggestedSeconds };
}

const abstract = [
  q("abs-e01", "abstract", "easy", "Cada figura adiciona 1 ponto. Sequência: 1, 2, 3, ?. Quantos pontos tem a próxima?", ["3", "4", "5", "2"], 1, "A regra é +1: depois de 3 vem 4.", ["sequencia", "padrao"], 40),
  q("abs-e02", "abstract", "easy", "Um marcador gira 90° horário a cada passo. Começa apontando para cima. Para onde aponta após 2 giros?", ["Para baixo", "Para a esquerda", "Para a direita", "Para cima"], 0, "Dois giros de 90° = 180°. Aponta para baixo.", ["rotacao"], 45),
  q("abs-e03", "abstract", "easy", "Formas alternam círculo e quadrado: ○ □ ○ □ ○ ?. Qual vem a seguir?", ["Círculo", "Quadrado", "Triângulo", "Losango"], 1, "Após círculo vem quadrado.", ["alternancia"], 35),
  q("abs-e04", "abstract", "easy", "Cores alternam preto e cinza. Qual a cor do 5º item se o 1º é preto?", ["Preto", "Cinza", "Branco", "Azul"], 0, "Ímpares são pretos; o 5º é preto.", ["alternancia", "cor"], 35),
  q("abs-e05", "abstract", "easy", "Em uma matriz 2×2, todas as células são estrelas. O que falta na célula vazia?", ["Estrela", "Círculo", "Nada", "Quadrado"], 0, "A matriz repete o mesmo símbolo: estrela.", ["matriz"], 40),
  q("abs-e06", "abstract", "easy", "Alturas de barras: 1, 2, 3. Qual a próxima se o padrão continua?", ["3", "4", "5", "6"], 1, "Cresce de 1 em 1: próximo é 4.", ["progressao"], 35),
  q("abs-i01", "abstract", "intermediate", "Em cada linha, o número de lados soma 8. Uma célula tem um quadrado (4). Qual polígono completa a linha?", ["Hexágono", "Quadrado", "Triângulo", "Octógono"], 1, "4 + 4 = 8. Completa com outro quadrado.", ["matriz", "lados"], 55),
  q("abs-i02", "abstract", "intermediate", "Sequência de polígonos perdendo 1 lado: hexágono → pentágono → quadrado → ?", ["Triângulo", "Círculo", "Heptágono", "Losango"], 0, "6→5→4→3: triângulo.", ["sequencia"], 50),
  q("abs-i03", "abstract", "intermediate", "Um ponto percorre os cantos de um quadrado no sentido anti-horário. Começa no superior esquerdo. Onde está após 3 passos?", ["Superior direito", "Inferior esquerdo", "Inferior direito", "Centro"], 0, "SE→IE→ID→SD. Após 3 passos: superior direito.", ["movimento"], 60),
  q("abs-i04", "abstract", "intermediate", "Em cada passo, uma figura espelha-se horizontalmente e depois adiciona uma linha. Se começa com '|', qual a melhor descrição do 2º estado?", ["Espelho de | com uma linha extra", "Apenas |", "Apenas uma linha horizontal", "Um círculo"], 0, "A regra combina espelhamento e adição de linha.", ["transformacao", "espelho"], 65),
  q("abs-i05", "abstract", "intermediate", "Matriz 3×3: cada linha tem exatamente um triângulo, um círculo e um quadrado, em ordens diferentes. Se a 3ª linha já tem triângulo e círculo, o que falta?", ["Quadrado", "Triângulo", "Círculo", "Estrela"], 0, "Cada linha contém os três símbolos uma vez. Falta o quadrado.", ["matriz", "conjunto"], 55),
  q("abs-i06", "abstract", "intermediate", "Uma sequência de setas: → ↓ ← ↑ → ?. Qual a próxima?", ["↓", "→", "↑", "←"], 0, "Giros de 90° horários: depois de → vem ↓.", ["rotacao", "sequencia"], 50),
  q("abs-a01", "abstract", "advanced", "Em uma matriz, cada célula da direita é a união das duas à esquerda (contagem de traços). Se esquerda tem 2 traços e meio tem 3, quantos tem a direita?", ["5", "6", "1", "3"], 0, "União/soma de traços: 2+3=5.", ["matriz", "composicao"], 80),
  q("abs-a02", "abstract", "advanced", "Uma regra transforma AB→BA, CD→DC, EF→?. Qual o resultado?", ["FE", "EF", "FF", "EE"], 0, "A regra inverte o par de letras: EF→FE.", ["analogia-visual", "inversao"], 70),
  q("abs-a03", "abstract", "advanced", "Em cada passo, o número de elementos internos dobra e um elemento externo some. Se começa com 1 interno e 3 externos, o 2º estado tem quantos internos?", ["2", "1", "3", "6"], 0, "Internos dobram: 1→2.", ["transformacao", "contagem"], 85),
  q("abs-a04", "abstract", "advanced", "Três figuras seguem a regra: a 3ª é o que a 1ª e a 2ª têm em comum. Se 1ª tem círculo+linha e 2ª tem círculo+ponto, o que tem a 3ª?", ["Apenas círculo", "Linha e ponto", "Apenas linha", "Nada"], 0, "O elemento comum é o círculo.", ["intersecao", "matriz"], 80),
  q("abs-a05", "abstract", "advanced", "Uma sequência de padrões binários 2×2 gira 90° e depois inverte preto/branco. Se o estado inicial tem o canto superior esquerdo preto, após uma rotação (sem inverter ainda) esse preto vai para onde?", ["Superior direito", "Inferior esquerdo", "Inferior direito", "Continua no mesmo lugar"], 0, "Rotação horária de 90°: SE → SD.", ["rotacao", "inversao"], 90),
  q("abs-a06", "abstract", "advanced", "Em uma série, cada termo remove o elemento central da figura anterior e adiciona dois nas extremidades. Se o 1º tem 1 elemento e o 2º tem 2, o 3º tem quantos?", ["3", "4", "2", "1"], 1, "De 1 para 2 (+1 líquido em extremos). Seguindo a regra narrada de 'dois nas extremidades' após remover o centro de 2: resultado típico chega a 4 elementos nas pontas. Contagem coerente com a progressão 1, 2, 4.", ["padrao", "contagem"], 90),
];

const numeric = [
  q("num-e01", "numeric", "easy", "Qual o próximo número: 2, 4, 6, 8, ?", ["9", "10", "12", "14"], 1, "Sequência de pares: +2. Próximo é 10.", ["sequencia", "pares"], 30),
  q("num-e02", "numeric", "easy", "Qual o próximo: 5, 10, 15, 20, ?", ["25", "30", "22", "35"], 0, "Múltiplos de 5: próximo 25.", ["progressao"], 30),
  q("num-e03", "numeric", "easy", "Complete: 1, 2, 4, 8, ?", ["10", "12", "16", "32"], 2, "Cada termo dobra o anterior: 8×2=16.", ["exponencial"], 35),
  q("num-e04", "numeric", "easy", "Se 3 + 5 = 8 e 4 + 6 = 10, quanto é 7 + 2?", ["9", "8", "10", "5"], 0, "Soma direta: 7+2=9.", ["operacao"], 25),
  q("num-e05", "numeric", "easy", "Qual número não pertence: 2, 4, 6, 9, 8?", ["2", "9", "6", "8"], 1, "9 é ímpar; os demais são pares.", ["classificacao"], 35),
  q("num-e06", "numeric", "easy", "Progressão: 10, 9, 8, 7, ?", ["6", "5", "0", "8"], 0, "Diminui 1 a cada passo: 6.", ["progressao"], 25),
  q("num-i01", "numeric", "intermediate", "Sequência: 3, 6, 12, 24, ?", ["36", "48", "30", "42"], 1, "Cada termo ×2: 24×2=48.", ["multiplicacao"], 45),
  q("num-i02", "numeric", "intermediate", "Qual completa: 2, 3, 5, 8, 12, ?", ["16", "17", "18", "20"], 1, "Diferenças: +1,+2,+3,+4,+5 → 12+5=17.", ["diferencas"], 55),
  q("num-i03", "numeric", "intermediate", "Se cada número é a soma dos dois anteriores (como Fibonacci): 1, 1, 2, 3, 5, ?", ["7", "8", "9", "10"], 1, "3+5=8.", ["fibonacci"], 45),
  q("num-i04", "numeric", "intermediate", "Em uma sequência, multiplica-se por 2 e soma-se 1: 1 → 3 → 7 → ?", ["13", "14", "15", "16"], 2, "7×2+1=15.", ["regra-composta"], 55),
  q("num-i05", "numeric", "intermediate", "Qual é o valor de ? em: 4, 9, 16, 25, ?", ["30", "36", "49", "32"], 1, "Quadrados: 2²,3²,4²,5²,6² → 36.", ["quadrados"], 50),
  q("num-i06", "numeric", "intermediate", "A média de 6, 8 e x é 9. Qual é x?", ["11", "13", "10", "12"], 1, "(6+8+x)/3=9 → 14+x=27 → x=13.", ["media"], 55),
  q("num-a01", "numeric", "advanced", "Sequência: 2, 6, 12, 20, 30, ?", ["40", "42", "44", "36"], 1, "Diferenças +4,+6,+8,+10,+12 → 30+12=42.", ["diferencas"], 70),
  q("num-a02", "numeric", "advanced", "Se a⊗b = a² − b, quanto é 5⊗3?", ["22", "15", "8", "28"], 0, "5² − 3 = 25 − 3 = 22.", ["operacao-definida"], 65),
  q("num-a03", "numeric", "advanced", "Números: 7, 10, 9, 12, 11, ?", ["14", "13", "15", "12"], 0, "Padrão +3, −1, +3, −1... Depois de 11: +3 → 14.", ["alternancia-operacoes"], 75),
  q("num-a04", "numeric", "advanced", "Um número é o triplo do anterior menos 2. Se começa em 3: 3, 7, 19, ?", ["55", "57", "53", "61"], 0, "19×3 − 2 = 57 − 2 = 55.", ["recursao"], 80),
  q("num-a05", "numeric", "advanced", "Qual completa a proporção 2:6 :: 5:?", ["10", "15", "20", "25"], 1, "2×3=6; 5×3=15.", ["proporcao"], 60),
  q("num-a06", "numeric", "advanced", "Soma dos dígitos de um número múltiplo de 9 também é múltiplo de 9. Qual NÃO pode ser múltiplo de 9?", ["27", "45", "26", "81"], 2, "2+6=8, não múltiplo de 9.", ["divisibilidade"], 70),
];

const spatial = [
  q("spa-e01", "spatial", "easy", "Se você gira a letra 'L' 180°, qual descrição combina melhor?", ["Parece um 7 invertido / canto oposto", "Continua idêntica", "Vira um O", "Desaparece"], 0, "Rotação de 180° move o canto para a posição oposta.", ["rotacao"], 40),
  q("spa-e02", "spatial", "easy", "Qual figura é o espelho horizontal de 'b'?", ["d", "p", "q", "b"], 0, "Espelho horizontal de b assemelha-se a d.", ["simetria"], 40),
  q("spa-e03", "spatial", "easy", "Um cubo tem quantas faces?", ["4", "6", "8", "12"], 1, "Um cubo tem 6 faces.", ["objetos"], 25),
  q("spa-e04", "spatial", "easy", "Se uma seta ↑ vira 90° anti-horário, para onde aponta?", ["←", "→", "↓", "↑"], 0, "90° anti-horário a partir de cima aponta para a esquerda.", ["rotacao"], 35),
  q("spa-e05", "spatial", "easy", "Qual sólido tem base circular e ápice em um ponto?", ["Cilindro", "Cone", "Cubo", "Prisma"], 1, "Essa descrição corresponde a um cone.", ["formas-3d"], 35),
  q("spa-e06", "spatial", "easy", "Duas figuras são simétricas em relação a um eixo vertical. Se a da esquerda tem um ponto no canto superior esquerdo, onde está o ponto correspondente à direita?", ["Superior direito", "Inferior esquerdo", "Inferior direito", "Centro"], 0, "Espelho vertical troca esquerda↔direita mantendo cima/baixo.", ["simetria"], 45),
  q("spa-i01", "spatial", "intermediate", "Uma peça em L feita de 3 quadrados. Quantas orientações distintas existem ao rotacionar no plano (sem espelhar)?", ["4", "2", "8", "1"], 0, "O L tem 4 rotações distintas de 90°.", ["rotacao", "pecas"], 60),
  q("spa-i02", "spatial", "intermediate", "Ao desdobrar um cubo em cruz, o máximo de faces no desenho é?", ["5", "6", "4", "8"], 1, "O desenvolvimento mostra as 6 faces.", ["desenvolvimento"], 55),
  q("spa-i03", "spatial", "intermediate", "Se um triângulo equilátero é espelhado verticalmente, o que muda?", ["A orientação dos vértices (esquerda/direita)", "O número de lados", "A área dobra", "Vira um quadrado"], 0, "Espelho troca lados esquerdo e direito.", ["simetria"], 55),
  q("spa-i04", "spatial", "intermediate", "Você está de frente para o norte. Vira 90° à direita, depois 180°. Para que direção olha agora?", ["Oeste", "Leste", "Sul", "Norte"], 0, "Norte→Leste (90° dir)→Oeste (180°).", ["orientacao"], 60),
  q("spa-i05", "spatial", "intermediate", "Qual par é correspondente por rotação (não espelho): 'N' e ?", ["Z", "N rotacionado 180° (ainda N-like)", "S", "W"], 1, "N rotacionado 180° permanece visualmente equivalente a N.", ["rotacao", "correspondencia"], 65),
  q("spa-i06", "spatial", "intermediate", "Em um mapa, mover 2 casas leste e 1 norte a partir de (0,0) chega a:", ["(2,1)", "(1,2)", "(2,-1)", "(-2,1)"], 0, "Easte aumenta x; norte aumenta y: (2,1).", ["coordenadas"], 50),
  q("spa-a01", "spatial", "advanced", "Um cubo é pintado por fora e depois cortado em 27 cubinhos 3×3×3. Quantos cubinhos têm exatamente 2 faces pintadas?", ["8", "12", "6", "24"], 1, "As arestas (exceto cantos) do cubo 3×3×3: 12 arestas × 1 = 12.", ["visualizacao-3d"], 90),
  q("spa-a02", "spatial", "advanced", "Qual operação transforma a silhueta de um 'p' em um 'd'?", ["Espelho vertical (eixo vertical)", "Rotação 90°", "Espelho horizontal", "Nada"], 0, "Espelho em eixo vertical troca p↔d.", ["simetria"], 70),
  q("spa-a03", "spatial", "advanced", "Uma engrenagem A (10 dentes) gira horário e engrena B (20 dentes). Se A dá 2 voltas, B dá quantas e em que sentido?", ["1 volta anti-horária", "2 voltas horárias", "4 voltas anti-horárias", "1 volta horária"], 0, "Razão 10:20 = 1:2 e sentidos opostos → 1 volta anti-horária.", ["mecanica-espacial"], 85),
  q("spa-a04", "spatial", "advanced", "Ao dobrar um papel ao meio duas vezes (em cruz) e furar o centro do pacote uma vez, quantos furos no papel aberto?", ["1", "2", "4", "8"], 2, "Duas dobras em cruz criam 4 camadas no ponto; ao abrir, 4 furos.", ["dobras"], 80),
  q("spa-a05", "spatial", "advanced", "Um objeto visto de cima é um círculo; de lado é um retângulo. Qual sólido é mais plausível?", ["Cilindro", "Esfera", "Cone", "Cubo"], 0, "Vista superior circular e lateral retangular → cilindro.", ["vistas"], 75),
  q("spa-a06", "spatial", "advanced", "Em um labirinto ortogonal, partir de A e chegar a B com apenas movimentos N/L/S/O. Se o caminho mínimo tem comprimento 7, um desvio que adiciona um 'vai-e-volta' de 1 casa aumenta o caminho para:", ["8", "9", "10", "7"], 1, "Vai-e-volta adiciona 2 passos: 7+2=9.", ["percurso"], 80),
];

const verbal = [
  q("ver-e01", "verbal", "easy", "Livro está para ler assim como música está para:", ["ouvir", "escrever", "dançar", "ver"], 0, "Analogia de ação típica: livro→ler; música→ouvir.", ["analogia"], 30),
  q("ver-e02", "verbal", "easy", "Qual palavra não pertence: cadeira, mesa, sofá, banana?", ["banana", "mesa", "sofá", "cadeira"], 0, "Banana não é móvel.", ["classificacao"], 30),
  q("ver-e03", "verbal", "easy", "Médico está para hospital assim como professor está para:", ["escola", "livro", "aluno", "quadro"], 0, "Profissional e local de trabalho.", ["analogia"], 30),
  q("ver-e04", "verbal", "easy", "Escolha o sinônimo mais próximo de 'rápido':", ["veloz", "lento", "pesado", "baixo"], 0, "Rápido e veloz são sinônimos.", ["semantica"], 25),
  q("ver-e05", "verbal", "easy", "Cão está para latir assim como gato está para:", ["miar", "correr", "pular", "dormir"], 0, "Som característico do animal.", ["analogia"], 25),
  q("ver-e06", "verbal", "easy", "Qual completa melhor: 'O dia é claro; a noite é ___.'", ["escura", "longa", "fria", "azul"], 0, "Contraste claro/escuro.", ["relacao"], 30),
  q("ver-i01", "verbal", "intermediate", "Pássaro está para ninho assim como abelha está para:", ["colmeia", "mel", "flor", "asa"], 0, "Animal e sua morada típica.", ["analogia"], 40),
  q("ver-i02", "verbal", "intermediate", "Qual palavra não combina com as outras: feliz, alegre, contente, furioso?", ["furioso", "feliz", "alegre", "contente"], 0, "Furioso é o único de valência negativa no grupo.", ["classificacao"], 40),
  q("ver-i03", "verbal", "intermediate", "Se todos os maples são árvores e algumas árvores são altas, qual conclusão é necessária?", ["Alguns maples podem ser altos, mas não é certo", "Todos os maples são altos", "Nenhuma árvore é maple", "Tudo que é alto é maple"], 0, "Não se segue que maples sejam altos; só é possível.", ["inferencia"], 55),
  q("ver-i04", "verbal", "intermediate", "Antônimo mais adequado de 'escassez':", ["abundância", "falta", "raridade", "vazio"], 0, "Escassez contrapõe-se a abundância.", ["semantica"], 40),
  q("ver-i05", "verbal", "intermediate", "Identifique a inconsistência: 'Todos chegaram cedo. Maria chegou atrasada e todos a cumprimentaram.'", ["Maria atrasada contradiz 'todos cedo'", "Cumprimentar é impossível", "Não há inconsistência", "Chegar cedo não existe"], 0, "Se todos chegaram cedo, Maria não pode ter chegado atrasada.", ["inconsistencia"], 55),
  q("ver-i06", "verbal", "intermediate", "Pintor está para quadro assim como escritor está para:", ["livro", "caneta", "papel", "ideia"], 0, "Agente e produto típico.", ["analogia"], 40),
  q("ver-a01", "verbal", "advanced", "Se 'nenhum A é B' e 'alguns C são A', o que necessariamente segue?", ["Alguns C não são B", "Todos C são B", "Nenhum C é A", "Todos A são C"], 0, "Os C que são A não podem ser B.", ["inferencia", "silogismo-verbal"], 75),
  q("ver-a02", "verbal", "advanced", "Escolha a analogia mais precisa: mapa : território :: partitura : ?", ["música", "instrumento", "compositor", "palco"], 0, "Representação simbólica de um domínio.", ["analogia"], 65),
  q("ver-a03", "verbal", "advanced", "Qual sentença é logicamente mais frágil?", ["Se chove, a rua molha; a rua molhou; logo choveu.", "Se chove, a rua molha; choveu; logo a rua molhou.", "Todo humano é mortal; Sócrates é humano; Sócrates é mortal.", "Nenhum peixe é ave; este animal é ave; logo não é peixe."], 0, "Afirmar o consequente é falácia; a rua pode molhar por outras causas.", ["falacia", "inferencia"], 80),
  q("ver-a04", "verbal", "advanced", "Classifique o elo: 'justiça' e 'equidade' estão mais próximos de:", ["quase-sinônimos em uso comum", "antônimos", "sem relação", "hipônimos de 'cor'"], 0, "São conceitos semanticamente próximos.", ["semantica"], 60),
  q("ver-a05", "verbal", "advanced", "Complete a analogia: síntese : análise :: juntar : ?", ["separar", "misturar", "criar", "ignorar"], 0, "Síntese agrega; análise decompõe — juntar/separar.", ["analogia"], 65),
  q("ver-a06", "verbal", "advanced", "Em um texto, o autor diz 'sempre' e depois admite exceções. O problema é:", ["Inconsistência entre universal e exceção", "Erro de ortografia", "Falta de adjetivos", "Uso de metáfora"], 0, "Universal absoluto conflita com admitir exceções.", ["inconsistencia"], 70),
];

const deductive = [
  q("ded-e01", "deductive", "easy", "Se todo gato é mamífero e Mimi é um gato, então Mimi:", ["é mamífero", "não é mamífero", "é ave", "é peixe"], 0, "Silogismo clássico: Mimi herda a propriedade.", ["silogismo"], 35),
  q("ded-e02", "deductive", "easy", "Se chove, levo guarda-chuva. Está chovendo. Portanto:", ["levo guarda-chuva", "não levo", "fica sol", "nada se segue"], 0, "Modus ponens: se P então Q; P; logo Q.", ["condicional"], 35),
  q("ded-e03", "deductive", "easy", "Premissas: Ana é mais alta que Bia. Bia é mais alta que Cacau. Quem é a mais alta?", ["Ana", "Bia", "Cacau", "Empate"], 0, "Transibilidade: Ana > Bia > Cacau.", ["ordenacao"], 40),
  q("ded-e04", "deductive", "easy", "Se não estudo, não passo. Eu passei. Logo:", ["eu estudei", "eu não estudei", "a prova foi fácil", "nada se segue"], 0, "Contrpositiva / modus tollens sobre a forma equivalente.", ["condicional"], 45),
  q("ded-e05", "deductive", "easy", "Todos os itens da caixa são vermelhos. Este item veio da caixa. Logo é:", ["vermelho", "azul", "verde", "indefinido"], 0, "Particular herda a propriedade universal da caixa.", ["silogismo"], 30),
  q("ded-e06", "deductive", "easy", "Ou vou ao parque ou fico em casa. Não fico em casa. Logo:", ["vou ao parque", "fico em casa", "não vou ao parque", "indefinido"], 0, "Disjunção exclusiva/inclusiva com negação de um lado.", ["disjuncao"], 35),
  q("ded-i01", "deductive", "intermediate", "Se P então Q. Q é falso. O que vale sobre P?", ["P é falso", "P é verdadeiro", "P pode ser qualquer", "Q vira verdadeiro"], 0, "Modus tollens: ¬Q ⇒ ¬P.", ["condicional"], 50),
  q("ded-i02", "deductive", "intermediate", "Todos os engenheiros nesta sala sabem cálculo. Lara está na sala e não sabe cálculo. Logo:", ["Lara não é engenheira", "Lara é engenheira", "Ninguém sabe cálculo", "A premissa é irrelevante"], 0, "Modus tollens sobre a implicação engenheiro→cálculo.", ["silogismo"], 55),
  q("ded-i03", "deductive", "intermediate", "Restrições: A antes de B; C depois de B. Qual ordem é possível?", ["A, B, C", "C, B, A", "B, A, C", "C, A, B"], 0, "A≺B≺C é compatível com as restrições.", ["restricoes"], 60),
  q("ded-i04", "deductive", "intermediate", "Premissas: Se treino, melhora o desempenho. Não melhorou o desempenho. Conclusão válida:", ["Não treinei", "Treinei", "Treinei pouco", "Nada sobre treino"], 0, "Modus tollens.", ["condicional"], 55),
  q("ded-i05", "deductive", "intermediate", "Nenhum peixe respira com pulmões (neste problema). Este animal respira com pulmões. Logo:", ["não é peixe", "é peixe", "é ave necessariamente", "é mamífero necessariamente"], 0, "Negação da propriedade exclui a classe peixe.", ["silogismo"], 50),
  q("ded-i06", "deductive", "intermediate", "Se A é verdadeiro, B é verdadeiro. B é verdadeiro. Podemos concluir A?", ["Não necessariamente", "Sim, sempre", "A é falso", "B é falso"], 0, "Afirmar o consequente não valida A.", ["falacia"], 55),
  q("ded-a01", "deductive", "advanced", "Premissas: (1) Se o alarme toca, há fumaça ou teste. (2) O alarme tocou. (3) Não há fumaça. Conclusão válida:", ["Houve teste", "Não houve teste", "Há fogo", "Não houve alarme"], 0, "De (1)(2): fumaça∨teste; com ¬fumaça ⇒ teste.", ["condicional", "disjuncao"], 80),
  q("ded-a02", "deductive", "advanced", "Quatro amigos A–D em fila. A não está nas pontas. B está à esquerda de C. D está na ponta direita. Quem pode estar na ponta esquerda?", ["B ou C, conforme arranjos válidos — na prática B é candidato típico; escolha: B", "D", "A", "Ninguém"], 0, "D fixo à direita; A não nas pontas ⇒ esquerda é B ou C. Entre opções dadas, B.", ["restricoes"], 90),
  q("ded-a03", "deductive", "advanced", "Se todos os R são S e alguns S são T, segue que alguns R são T?", ["Não necessariamente", "Sim, sempre", "Nenhum R é T", "Todos T são R"], 0, "Os S que são T podem não intersectar R.", ["silogismo"], 75),
  q("ded-a04", "deductive", "advanced", "Regras: se projeto atrasa, cliente reclama; se cliente reclama, reunião é marcada. O projeto atrasou. O que se segue?", ["Reunião é marcada", "Cliente não reclama", "Nada", "Projeto não atrasou"], 0, "Cadeia condicional: atraso→reclama→reunião.", ["cadeia"], 70),
  q("ded-a05", "deductive", "advanced", "Em um jogo, exatamente uma de três afirmações é verdadeira. A: 'B é verdadeira'. B: 'C é verdadeira'. C: 'A é falsa'. Qual é verdadeira?", ["C", "A", "B", "Todas"], 0, "Se C é a única verdadeira: A falsa e B falsa é consistente.", ["metalogica"], 95),
  q("ded-a06", "deductive", "advanced", "Premissas: Ou o sensor falhou ou houve invasão. Se houve invasão, a porta abriu. A porta não abriu. Conclusão:", ["O sensor falhou", "Houve invasão", "A porta abriu", "Nada se segue"], 0, "¬porta ⇒ ¬invasão; logo na disjunção resta falha do sensor.", ["disjuncao", "condicional"], 85),
];

// Fix ded-a02 to have clean options
deductive[deductive.findIndex((x) => x.id === "ded-a02")] = q(
  "ded-a02",
  "deductive",
  "advanced",
  "Quatro pessoas A–D em uma fila. A não está nas pontas. D está na ponta direita. B está imediatamente à esquerda de C. Qual posição é impossível para A?",
  ["Ponta esquerda", "Segunda posição", "Terceira posição", "Ao lado de D"],
  0,
  "A não pode estar nas pontas; a ponta esquerda é impossível para A.",
  ["restricoes"],
  85,
);

function emit(name, items) {
  const body = items
    .map((item) => {
      const opts = item.options.map((o) => JSON.stringify(o)).join(", ");
      const tags = item.skillTags.map((t) => JSON.stringify(t)).join(", ");
      return `  buildQuestion({
    id: ${JSON.stringify(item.id)},
    category: ${JSON.stringify(item.category)},
    difficulty: ${JSON.stringify(item.difficulty)},
    prompt: ${JSON.stringify(item.prompt)},
    options: [${opts}],
    correctIndex: ${item.correctIndex},
    explanation: ${JSON.stringify(item.explanation)},
    skillTags: [${tags}],
    suggestedSeconds: ${item.suggestedSeconds},
  })`;
    })
    .join(",\n");

  const file = `import type { CognitiveQuestion } from "@/types/cognitive";
import { buildQuestion } from "../questionHelpers";

export const ${name}: CognitiveQuestion[] = [
${body},
];
`;
  fs.writeFileSync(path.join(OUT, `${name}.ts`), file);
  console.log(name, items.length);
}

fs.mkdirSync(OUT, { recursive: true });
emit("abstractQuestions", abstract);
emit("numericQuestions", numeric);
emit("spatialQuestions", spatial);
emit("verbalQuestions", verbal);
emit("deductiveQuestions", deductive);

console.log("total", abstract.length + numeric.length + spatial.length + verbal.length + deductive.length);
