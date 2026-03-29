/* ============================================
   SABOR & SAÚDE - Script
   ============================================ */

const IMG = (id, w = 600, h = 400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const RECIPES = {

  /* ---- RECEITAS FITNESS ---- */
  fitness: [
    {
      id: 'fit1',
      name: 'Bowl de Frango com Quinoa',
      img: IMG('1512621776951-a57141f2eefd'),
      time: '30 min', servings: 2, calories: '380 kcal',
      desc: 'Bowl nutritivo e colorido com frango grelhado, quinoa proteica e legumes frescos. Perfeito para o almoço ou jantar fitness.',
      ingredients: [
        '200g de peito de frango', '100g de quinoa', '1 abobrinha pequena',
        '1 cenoura média', '100g de brócolis', '2 col. sopa de azeite',
        'Sal, pimenta-do-reino e ervas frescas a gosto'
      ],
      steps: [
        'Cozinhe a quinoa em 200ml de água com sal por 15 minutos até secar.',
        'Tempere o frango com sal, pimenta, alho em pó e ervas de sua preferência.',
        'Grelhe o frango em frigideira antiaderente por 6-8 minutos de cada lado.',
        'Refogue os legumes cortados em cubos no azeite por 5 minutos.',
        'Monte o bowl: base de quinoa, frango fatiado, legumes refogados.',
        'Finalize com fio de azeite, suco de limão e ervas frescas.'
      ]
    },
    {
      id: 'fit2',
      name: 'Salmão Assado com Aspargos',
      img: IMG('1467003909585-2f8a72700288'),
      time: '25 min', servings: 2, calories: '420 kcal',
      desc: 'Filé de salmão rico em ômega-3 assado com aspargos frescos e temperos aromáticos. Receita leve, elegante e cheia de nutrientes.',
      ingredients: [
        '2 filés de salmão (150g cada)', '1 maço de aspargos frescos',
        '3 col. sopa de azeite', '2 dentes de alho', 'Suco de 1 limão',
        'Sal, pimenta e endro a gosto', 'Rodelas de limão para servir'
      ],
      steps: [
        'Pré-aqueça o forno a 200°C.',
        'Tempere o salmão com sal, pimenta, alho picado, suco de limão e azeite.',
        'Disponha os aspargos em assadeira com fio de azeite, sal e pimenta.',
        'Coloque o salmão sobre os aspargos.',
        'Asse por 15-18 minutos ou até o salmão estar dourado e opaco.',
        'Sirva com rodelas de limão e endro fresco.'
      ]
    },
    {
      id: 'fit3',
      name: 'Omelete de Claras com Espinafre',
      img: IMG('1525351484163-7529414344d8'),
      time: '15 min', servings: 1, calories: '180 kcal',
      desc: 'Omelete proteica feita com claras de ovos, espinafre fresco e queijo cottage. Alta em proteína e baixíssima em gordura.',
      ingredients: [
        '4 claras de ovos', '1 ovo inteiro', '1 xícara de espinafre',
        '50g de queijo cottage', '1 col. sopa de azeite',
        'Sal, pimenta e noz-moscada a gosto', 'Cebolinha picada para finalizar'
      ],
      steps: [
        'Bata as claras e o ovo inteiro levemente com sal e pimenta.',
        'Refogue o espinafre por 1 minuto em frigideira aquecida.',
        'Adicione o azeite e despeje os ovos batidos.',
        'Distribua o espinafre e o queijo cottage sobre metade da omelete.',
        'Dobre ao meio quando as bordas estiverem firmes.',
        'Sirva imediatamente com cebolinha picada por cima.'
      ]
    },
    {
      id: 'fit4',
      name: 'Salada de Atum com Abacate',
      img: IMG('1540189549336-e6e99c3679fe'),
      time: '10 min', servings: 2, calories: '310 kcal',
      desc: 'Salada fresca e nutritiva com atum em conserva, abacate cremoso, tomate cereja e molho de limão com ervas. Prática e deliciosa.',
      ingredients: [
        '2 latas de atum em água (170g)', '1 abacate maduro', '200g tomate cereja',
        '1 pepino médio', 'Suco de 1 limão', '2 col. sopa de azeite',
        'Sal, pimenta e coentro ou salsinha a gosto'
      ],
      steps: [
        'Escorra bem o atum e desfaça em lascas numa tigela.',
        'Corte o abacate em cubos e o pepino em meia-lua.',
        'Divida os tomates cereja ao meio.',
        'Misture tudo delicadamente com o atum.',
        'Tempere com azeite, suco de limão, sal e pimenta.',
        'Finalize com ervas frescas picadas e sirva gelado.'
      ]
    },
    {
      id: 'fit5',
      name: 'Peito de Peru com Batata Doce',
      img: IMG('1544025129-a981bd1f29ef'),
      time: '40 min', servings: 2, calories: '350 kcal',
      desc: 'Peito de peru temperado e dourado na frigideira com batata doce assada no forno. Combinação perfeita de proteína magra e carboidrato de baixo índice glicêmico.',
      ingredients: [
        '300g de peito de peru em fatias', '2 batatas doces médias',
        '1 col. sopa de azeite', '2 dentes de alho',
        'Sal, pimenta, orégano e páprica defumada',
        'Salsa fresca para finalizar'
      ],
      steps: [
        'Pré-aqueça o forno a 200°C.',
        'Corte as batatas doces em rodelas, tempere com azeite, sal e páprica.',
        'Asse as batatas por 25-30 minutos até dourarem.',
        'Tempere o peru com sal, pimenta, alho e orégano.',
        'Grelhe o peru em frigideira quente por 4 minutos de cada lado.',
        'Sirva o peru fatiado sobre as batatas doces assadas com salsa fresca.'
      ]
    },
    {
      id: 'fit6',
      name: 'Frango Xadrez Fitness',
      img: IMG('1563379926898-05f4575a45d8'),
      time: '25 min', servings: 3, calories: '320 kcal',
      desc: 'Versão saudável do clássico frango xadrez, com menos sódio e sem frituras. Rico em proteínas e vegetais coloridos com molho levemente adocicado.',
      ingredients: [
        '400g de peito de frango em cubos', '1 pimentão vermelho', '1 pimentão verde',
        '1 cebola', '50g de castanha de caju torrada', '3 col. sopa de shoyu light',
        '1 col. sopa de amido de milho', 'Gengibre e alho a gosto'
      ],
      steps: [
        'Marine o frango com shoyu, gengibre e alho por 15 minutos.',
        'Dissolva o amido de milho em 4 col. sopa de água.',
        'Refogue o frango em frigideira aquecida até dourar.',
        'Adicione os pimentões e a cebola cortados em cubos.',
        'Despeje o amido dissolvido e mexa até engrossar levemente.',
        'Finalize com castanhas de caju e sirva com arroz integral.'
      ]
    },
    {
      id: 'fit7',
      name: 'Wrap de Frango e Vegetais',
      img: IMG('1565299585323-38d6b0865b47'),
      time: '20 min', servings: 2, calories: '290 kcal',
      desc: 'Wrap crocante recheado com frango grelhado temperado, alface americana, cenoura ralada, tomate e molho de iogurte com ervas.',
      ingredients: [
        '2 folhas de wrap integral', '200g de frango grelhado desfiado',
        'Folhas de alface americana', '1 cenoura ralada', '1 tomate picado',
        '100g de iogurte natural desnatado', 'Sal, pimenta, suco de limão e salsinha'
      ],
      steps: [
        'Prepare o molho: misture o iogurte com sal, pimenta, limão e salsinha.',
        'Aqueça os wraps em frigideira seca por 1 minuto de cada lado.',
        'Espalhe o molho de iogurte sobre cada wrap.',
        'Disponha alface, frango, cenoura e tomate em linha.',
        'Enrole firmemente como um charuto.',
        'Corte ao meio e sirva imediatamente ou embrulhe para levar.'
      ]
    },
    {
      id: 'fit8',
      name: 'Stir Fry de Tofu e Legumes',
      img: IMG('1481070414801-51fd0d591058'),
      time: '20 min', servings: 2, calories: '260 kcal',
      desc: 'Refogado oriental com tofu firme dourado, brócolis, cogumelos e molho de missô. Rica em proteína vegetal e fibras, pronto em menos de 20 minutos.',
      ingredients: [
        '300g de tofu firme', '200g de brócolis', '150g de cogumelos shiitake',
        '1 cenoura em julienne', '2 col. sopa de shoyu', '1 col. sopa de pasta de missô',
        '2 col. sopa de óleo de gergelim', 'Gengibre, alho e gergelim'
      ],
      steps: [
        'Corte o tofu em cubos e seque bem com papel toalha.',
        'Doure o tofu no óleo de gergelim até ficar crocante dos dois lados.',
        'Retire e na mesma frigideira refogue o alho e gengibre.',
        'Adicione os legumes e refogue em fogo alto por 4 minutos.',
        'Misture o shoyu com o missô diluído em 3 col. de água.',
        'Volte o tofu, despeje o molho e finalize com gergelim torrado.'
      ]
    },
    {
      id: 'fit9',
      name: 'Espaguete de Abobrinha ao Pesto',
      img: IMG('1473093295043-cdd812d0e601'),
      time: '20 min', servings: 2, calories: '220 kcal',
      desc: 'Massa sem carboidrato feita com abobrinha espiralizadadom pesto caseiro de manjericão, nozes e parmesão. Leve, refrescante e deliciosa.',
      ingredients: [
        '2 abobrinhas grandes', '1 xícara de manjericão fresco',
        '30g de parmesão ralado', '30g de nozes ou castanha do pará',
        '4 col. sopa de azeite', '2 dentes de alho',
        'Sal, pimenta e suco de limão'
      ],
      steps: [
        'Espiralize as abobrinhas ou use um descascador para fazer fitas.',
        'Prepare o pesto: bata no liquidificador o manjericão, nozes, parmesão, alho e azeite.',
        'Tempere o pesto com sal, pimenta e suco de limão.',
        'Passe a abobrinha rapidamente em frigideira quente por 2 minutos.',
        'Misture o pesto com a abobrinha quente.',
        'Sirva imediatamente com mais parmesão ralado por cima.'
      ]
    },
    {
      id: 'fit10',
      name: 'Bowl de Grão-de-Bico com Tahine',
      img: IMG('1585032226651-c03e18a10a7e'),
      time: '15 min', servings: 2, calories: '340 kcal',
      desc: 'Bowl vegetariano rico em proteína vegetal com grão-de-bico temperado, pepino, tomate, cebola roxa e generoso molho de tahine com limão.',
      ingredients: [
        '1 lata de grão-de-bico cozido (400g)', '1 pepino',
        '200g de tomate cereja', '1/2 cebola roxa',
        '3 col. sopa de tahine', 'Suco de 2 limões',
        'Sal, cominho e salsinha fresca'
      ],
      steps: [
        'Escorra e lave o grão-de-bico. Tempere com sal e cominho.',
        'Corte o pepino em meias-luas e a cebola roxa em fatias finas.',
        'Prepare o molho: misture tahine, suco de limão, sal e 3 col. de água.',
        'Monte o bowl com o grão-de-bico como base.',
        'Adicione pepino, tomate cereja e cebola roxa.',
        'Regue com o molho de tahine e finalize com salsinha.'
      ]
    }
  ],

  /* ---- REFEIÇÕES RÁPIDAS ---- */
  rapidas: [
    {
      id: 'rap1',
      name: 'Macarrão Alho e Óleo Especial',
      img: IMG('1555949258-eb67b1ef0ceb'),
      time: '15 min', servings: 2, calories: '480 kcal',
      desc: 'O clássico macarrão ao alho e óleo elevado com anchovas, alcaparras e raspas de limão. Pronto em 15 minutos com ingredientes que você já tem em casa.',
      ingredients: [
        '250g de espaguete', '6 dentes de alho fatiados', '5 col. sopa de azeite',
        '4 filés de anchova (opcional)', '1 col. sopa de alcaparras',
        'Raspas e suco de 1 limão', 'Salsinha e pimenta calabresa'
      ],
      steps: [
        'Cozinhe o macarrão al dente. Reserve 1 xícara da água do cozimento.',
        'Doure o alho no azeite em fogo baixo até ficar levemente dourado.',
        'Adicione as anchovas e deixe derreter no óleo.',
        'Junte o macarrão escorrido e as alcaparras.',
        'Misture com a água do cozimento até criar cremosidade.',
        'Finalize com raspas de limão, salsinha e pimenta calabresa.'
      ]
    },
    {
      id: 'rap2',
      name: 'Frango Suculento na Airfryer',
      img: IMG('1558618666-fcd25c85cd64'),
      time: '25 min', servings: 2, calories: '360 kcal',
      desc: 'Coxas de frango temperadas com especiarias e douradas na airfryer. Crocante por fora, suculento por dentro e sem praticamente nenhuma gordura.',
      ingredients: [
        '4 coxas de frango com osso', '2 col. sopa de azeite',
        '1 col. chá de páprica defumada', '1 col. chá de alho em pó',
        '1 col. chá de cebola em pó', 'Sal, pimenta e orégano',
        'Suco de limão para finalizar'
      ],
      steps: [
        'Seque bem o frango com papel toalha.',
        'Misture todas as especiarias com o azeite até formar uma pasta.',
        'Espalhe a pasta sobre todo o frango, inclusive sob a pele.',
        'Pré-aqueça a airfryer a 200°C por 3 minutos.',
        'Asse o frango por 22-25 minutos, virando na metade do tempo.',
        'Sirva com limão espremido na hora.'
      ]
    },
    {
      id: 'rap3',
      name: 'Omelete Recheada Completa',
      img: IMG('1414235077428-338989a2e8c0'),
      time: '12 min', servings: 1, calories: '320 kcal',
      desc: 'Omelete fofa e caprichada recheada com queijo minas, presunto, tomate e ervas frescas. O jantar rápido perfeito quando o tempo é curto.',
      ingredients: [
        '3 ovos', '2 col. sopa de leite', '50g de queijo minas',
        '2 fatias de presunto magro', '1 tomate picado',
        '1 col. sopa de manteiga', 'Sal, pimenta e cebolinha'
      ],
      steps: [
        'Bata os ovos com o leite, sal e pimenta até ficarem bem incorporados.',
        'Derreta a manteiga em frigideira antiaderente de 20cm.',
        'Despeje os ovos e deixe cozinhar em fogo médio-baixo.',
        'Quando estiver quase firme, distribua o recheio em metade da omelete.',
        'Dobre a omelete ao meio e deixe o queijo derreter por 1 min.',
        'Sirva com cebolinha picada e fatias de tomate na lateral.'
      ]
    },
    {
      id: 'rap4',
      name: 'Tapioca de Frango e Queijo',
      img: IMG('1567620905732-2d1ec7ab7445'),
      time: '10 min', servings: 1, calories: '280 kcal',
      desc: 'Tapioca crocante recheada com frango desfiado temperado e queijo coalho derretido. O lanche brasileiro mais rápido e nutritivo.',
      ingredients: [
        '4 col. sopa de goma de tapioca hidratada', '100g de frango cozido desfiado',
        '50g de queijo coalho', '1 tomate em cubos',
        'Sal, pimenta e orégano', 'Manteiga para untar'
      ],
      steps: [
        'Tempere o frango desfiado com sal, pimenta e orégano.',
        'Aqueça uma frigideira antiaderente em fogo médio.',
        'Espalhe a goma de tapioca formando um círculo fino.',
        'Quando as bordas soltarem, vire e recheie metade com frango, queijo e tomate.',
        'Dobre ao meio pressionando levemente.',
        'Sirva imediatamente, quente e crocante.'
      ]
    },
    {
      id: 'rap5',
      name: 'Arroz de Forno Rápido',
      img: IMG('1546069901-5ec6a79120b0'),
      time: '30 min', servings: 4, calories: '400 kcal',
      desc: 'Arroz de forno cremoso com frango, ervilha, milho e requeijão. Feito com arroz cozido que sobrou, é a solução perfeita para o jantar da semana.',
      ingredients: [
        '3 xícaras de arroz cozido', '200g de frango desfiado',
        '1 lata de ervilha', '1 lata de milho', '200g de requeijão cremoso',
        '1 caixa de creme de leite', 'Sal, pimenta e salsinha'
      ],
      steps: [
        'Pré-aqueça o forno a 200°C.',
        'Misture o arroz, frango, ervilha e milho escorridos numa tigela.',
        'Adicione o requeijão e o creme de leite, misture bem.',
        'Tempere com sal, pimenta e salsinha picada.',
        'Coloque numa forma untada e nivele a superfície.',
        'Asse por 20 minutos até dourar e borbulhar nas bordas.'
      ]
    },
    {
      id: 'rap6',
      name: 'Sanduíche Natural Especial',
      img: IMG('1619096252214-ef06c45683e3'),
      time: '10 min', servings: 1, calories: '350 kcal',
      desc: 'Sanduíche natural generoso com peito de frango desfiado temperado, cream cheese de ervas, alface, tomate e pepino. Prático e incrivelmente saboroso.',
      ingredients: [
        '2 fatias de pão de forma integral', '100g frango desfiado temperado',
        '2 col. sopa de cream cheese', 'Folhas de alface',
        '1 tomate em rodelas', '1/2 pepino em fatias',
        'Sal, pimenta e ervas a gosto'
      ],
      steps: [
        'Misture o cream cheese com ervas frescas picadas, sal e pimenta.',
        'Toste levemente o pão na torradeira.',
        'Espalhe o cream cheese de ervas nos dois lados.',
        'Monte com alface, frango, tomate e pepino.',
        'Feche o sanduíche, corte na diagonal.',
        'Sirva com suco ou salada de frutas.'
      ]
    },
    {
      id: 'rap7',
      name: 'Sopa Cremosa de Legumes',
      img: IMG('1547592577-652bacf6f3af'),
      time: '25 min', servings: 4, calories: '180 kcal',
      desc: 'Sopa veludo de abóbora e cenoura com gengibre e leite de coco. Reconfortante, cremosa e nutritiva, pronta em menos de 30 minutos.',
      ingredients: [
        '500g de abóbora em cubos', '2 cenouras médias',
        '1 cebola', '3 dentes de alho', '200ml de leite de coco',
        '2 col. sopa de azeite', 'Sal, pimenta e gengibre fresco'
      ],
      steps: [
        'Refogue a cebola e o alho no azeite até ficarem translúcidos.',
        'Adicione a abóbora e a cenoura cortadas, refogue por 2 minutos.',
        'Cubra com água fervente (500ml) e cozinhe por 15 minutos.',
        'Adicione o gengibre ralado e o leite de coco.',
        'Bata tudo com mixer até ficar bem cremoso.',
        'Ajuste o sal e sirva com fio de azeite e pimenta do reino.'
      ]
    },
    {
      id: 'rap8',
      name: 'Ovos Mexidos Cremosos',
      img: IMG('1528712306091-ed0763094c98'),
      time: '8 min', servings: 1, calories: '240 kcal',
      desc: 'Ovos mexidos no estilo francês: cremosos, sedosos e levemente underdone. Com manteiga de qualidade e cebolinha, são perfeitos com torrada.',
      ingredients: [
        '3 ovos frescos', '1 col. sopa de manteiga boa qualidade',
        '1 col. sopa de creme de leite', 'Sal marinho em flocos',
        'Pimenta-do-reino moída na hora', 'Cebolinha ou ciboulette'
      ],
      steps: [
        'Quebre os ovos numa frigideira FRIA com a manteiga.',
        'Leve ao fogo médio-baixo e comece a mexer devagar com espátula.',
        'Mexa constantemente, mantendo a textura cremosa.',
        'Quando estiver 80% pronto, retire do fogo e continue mexendo.',
        'Adicione o creme de leite, mexa e distribua no prato.',
        'Tempere com sal em flocos, pimenta e cebolinha.'
      ]
    },
    {
      id: 'rap9',
      name: 'Risoto Rápido de Cogumelos',
      img: IMG('1476124369491-e7adec5c8e49'),
      time: '30 min', servings: 3, calories: '440 kcal',
      desc: 'Risoto cremoso de cogumelos variados com vinho branco e parmesão. Técnica simplificada para fazer em casa sem perder a cremosidade clássica.',
      ingredients: [
        '250g de arroz arbóreo', '300g cogumelos variados', '1 cebola picada',
        '2 dentes de alho', '100ml de vinho branco seco', '800ml de caldo de legumes',
        '50g de parmesão ralado', '2 col. sopa de manteiga e azeite'
      ],
      steps: [
        'Aqueça o caldo e mantenha quente durante todo o preparo.',
        'Refogue a cebola e o alho no azeite até ficarem macios.',
        'Adicione os cogumelos e refogue em fogo alto até dourarem.',
        'Junte o arroz e toste por 2 minutos. Acrescente o vinho.',
        'Adicione o caldo quente aos poucos, mexendo sempre.',
        'Finalize com manteiga e parmesão, mexa vigorosamente até ficar cremoso.'
      ]
    },
    {
      id: 'rap10',
      name: 'Salada Completa com Atum',
      img: IMG('1482049016688-2d3e1b311543'),
      time: '10 min', servings: 2, calories: '290 kcal',
      desc: 'Salada completa e nutritiva com atum, ovos cozidos, azeitonas, tomate, cenoura ralada e molho especial de mostarda e mel.',
      ingredients: [
        '2 latas de atum em azeite', '2 ovos cozidos', 'Mix de folhas verdes',
        '12 azeitonas', '1 cenoura ralada', '200g tomate cereja',
        '2 col. mostarda, 1 col. mel, 3 col. azeite, sal e pimenta'
      ],
      steps: [
        'Cozinhe os ovos em 8 minutos e corte em quartos.',
        'Prepare o molho: emulsione mostarda, mel, azeite, sal e pimenta.',
        'Distribua as folhas verdes numa travessa grande.',
        'Adicione o atum em lascas, cenoura e tomate cereja cortados.',
        'Acrescente os ovos e as azeitonas.',
        'Regue com o molho na hora de servir para as folhas não murcharem.'
      ]
    }
  ],

  /* ---- PARA MUITAS PESSOAS ---- */
  multidao: [
    {
      id: 'mul1',
      name: 'Feijoada Completa Tradicional',
      img: IMG('1543339308-43e59d6b73a6'),
      time: '3h', servings: 12, calories: '580 kcal',
      desc: 'A rainha das mesas brasileiras: feijoada rica e encorpada com carnes variadas, feijão preto cremoso e toda a guarnição clássica. Para reunir a família toda.',
      ingredients: [
        '1kg de feijão preto', '500g de carne seca', '400g de linguiça calabresa',
        '300g de paio', '300g de lombo suíno', '2 cebolas, 6 dentes de alho',
        'Louro, pimenta, sal e laranja para servir', 'Couve refogada, arroz e farinha'
      ],
      steps: [
        'Deixe as carnes salgadas de molho por 24h trocando a água.',
        'Coloque o feijão de molho por 8h.',
        'Frite as linguiças, passe para a panela de pressão com as carnes e feijão.',
        'Adicione a cebola, alho e louro. Cubra com água e cozinhe 40 minutos na pressão.',
        'Abra, tempere, cozinhe mais 20 min em fogo baixo para engrossar.',
        'Sirva com arroz, couve refogada, farofa, torresmo e laranja.'
      ]
    },
    {
      id: 'mul2',
      name: 'Churrasco Misto na Brasa',
      img: IMG('1504674900247-0877df9cc836'),
      time: '2h', servings: 15, calories: '520 kcal',
      desc: 'Guia completo para um churrasco perfeito com picanha, costela, linguiça artesanal e frango. Técnicas de brasa e temperos infalíveis.',
      ingredients: [
        '2kg de picanha', '1,5kg de costela bovina', '1kg de linguiça artesanal',
        '1kg de coxa de frango', 'Sal grosso a gosto',
        'Alho, ervas e limão para o frango', 'Carvão de qualidade'
      ],
      steps: [
        'Acenda o carvão 40 minutos antes. Espere a brasa branca.',
        'Sele a picanha com sal grosso inteira na brasa alta, depois asse devagar.',
        'Costela vai em fogo baixo por 2 horas, virada a cada 20 minutos.',
        'Frango marinado na véspera vai em grelha separada por 40 minutos.',
        'Linguiça vai na churrasqueira nos últimos 20 minutos.',
        'Descanse as carnes por 5 minutos antes de fatiar.'
      ]
    },
    {
      id: 'mul3',
      name: 'Lasanha à Bolonhesa Generosa',
      img: IMG('1574894709920-11b28e7367e3'),
      time: '1h30', servings: 10, calories: '490 kcal',
      desc: 'Lasanha de dar água na boca com molho bolonhesa lento, béchamel cremoso e queijo derretido em camadas generosas. Irresistível e perfeita para festas.',
      ingredients: [
        '500g de massa para lasanha', '800g de carne moída', '1 lata de tomate pelado',
        '2 caixas de extrato de tomate', '100g de presunto', '200g de mussarela',
        '3 xíc. leite, manteiga e farinha para o béchamel', 'Cebola, alho e ervas'
      ],
      steps: [
        'Prepare o bolonhesa: refogue cebola, alho e carne. Adicione os tomates e cozinhe 30 min.',
        'Prepare o béchamel: derreta manteiga, adicione farinha e leite mexendo sempre.',
        'Cozinhe a massa al dente ou use massa sem pré-cozimento.',
        'Monte em refratário: béchamel, massa, bolonhesa, presunto, mussarela.',
        'Repita as camadas terminando com béchamel e queijo.',
        'Asse a 200°C por 30 minutos coberta com papel alumínio, 15 min descoberta.'
      ]
    },
    {
      id: 'mul4',
      name: 'Frango Assado com Farofa',
      img: IMG('1535916707892-eaaf6181b0a1'),
      time: '1h30', servings: 8, calories: '460 kcal',
      desc: 'Frango inteiro assado dourado e suculento temperado com ervas, alho e limão, servido com farofa crocante de bacon e temperos especiais.',
      ingredients: [
        '1 frango inteiro (2kg)', '1 maço de alecrim e tomilho',
        '1 cabeça de alho', '2 limões', '4 col. manteiga',
        '300g de farinha de mandioca para a farofa', '200g de bacon, ovos e salsinha'
      ],
      steps: [
        'Marine o frango inteiro por 12h com alho, limão, ervas, sal e manteiga.',
        'Pré-aqueça o forno a 220°C.',
        'Coloque o frango numa assadeira com os temperos da marinada.',
        'Asse por 1h15, regando com o suco da assadeira a cada 20 minutos.',
        'Para a farofa: frite o bacon, adicione a farinha e mexa até dourar. Acrescente ovos mexidos e salsinha.',
        'Sirva o frango fatiado acompanhado da farofa crocante.'
      ]
    },
    {
      id: 'mul5',
      name: 'Macarronada para 20 Pessoas',
      img: IMG('1492683513161-35e82cd8cc3c'),
      time: '1h', servings: 20, calories: '450 kcal',
      desc: 'Macarronada festiva com molho de carne moída robusto, muito queijo e temperos que deixam a casa toda com um cheiro incrível.',
      ingredients: [
        '2kg de macarrão parafuso ou rigatoni', '1,5kg de carne moída',
        '4 latas de tomate pelado', '400g de mussarela ralada',
        '200g de parmesão', '3 cebolas, 10 dentes de alho',
        'Azeite, louro, orégano, sal e açúcar'
      ],
      steps: [
        'Refogue cebola e alho no azeite até dourar.',
        'Adicione a carne moída e frite bem até secar.',
        'Acrescente os tomates, louro e orégano. Cozinhe 40 minutos.',
        'Ajuste sal e adicione pitada de açúcar para equilibrar a acidez.',
        'Cozinhe a massa al dente em bastante água salgada.',
        'Misture o molho com a massa e sirva com os queijos ralados por cima.'
      ]
    },
    {
      id: 'mul6',
      name: 'Arroz de Carreteiro Gaúcho',
      img: IMG('1479915496397-7e77c87e86a9'),
      time: '1h', servings: 8, calories: '520 kcal',
      desc: 'O autêntico arroz de carreteiro gaúcho com carne seca desfiada, linguiça, ervas e o sabor defumado irresistível. Tradição em cada garfada.',
      ingredients: [
        '500g de carne seca dessalgada', '200g de linguiça', '3 xíc. de arroz',
        '2 cebolas', '6 dentes de alho', '2 tomates',
        'Pimenta dedo-de-moça, sal e salsinha', 'Óleo para refogar'
      ],
      steps: [
        'Dessalgue a carne por 24h trocando a água 3 vezes. Cozinhe e desfie.',
        'Frite a linguiça em rodelas. Reserve.',
        'No mesmo óleo refogue cebola, alho, pimenta e tomate.',
        'Adicione a carne desfiada e refogue bem.',
        'Acrescente o arroz cru e refogue por 2 minutos.',
        'Cubra com água fervente (proporção 1:2) e cozinhe tampado. Finalize com linguiça e salsinha.'
      ]
    },
    {
      id: 'mul7',
      name: 'Bacalhau Assado com Batatas',
      img: IMG('1535140728325-a4d3707eee61'),
      time: '1h30', servings: 8, calories: '480 kcal',
      desc: 'Bacalhau ao forno clássico com batatas coradas, cebola, azeitonas e azeite generoso. A receita de Natal e Páscoa que todos adoram.',
      ingredients: [
        '1kg de bacalhau dessalgado em postas', '1kg de batatas',
        '2 cebolas grandes', '200g azeitonas pretas', '1 xíc. de azeite',
        '4 ovos cozidos', 'Pimentão, salsinha e pimenta-do-reino'
      ],
      steps: [
        'Dessalgue o bacalhau por 24-36h na geladeira.',
        'Cozinhe as batatas com casca até ficarem al dente. Descasque e fatie.',
        'Numa assadeira, alterne camadas de batata, bacalhau e cebola em rodelas.',
        'Adicione as azeitonas, pimentão e regue generosamente com azeite.',
        'Cubra com papel alumínio e asse a 200°C por 40 minutos.',
        'Retire o alumínio, asse mais 20 min. Decore com ovos cozidos e salsinha.'
      ]
    },
    {
      id: 'mul8',
      name: 'Carne Assada ao Molho Especial',
      img: IMG('1529193591184-b1d58069ecdd'),
      time: '2h', servings: 10, calories: '490 kcal',
      desc: 'Coxão mole ou patinho assado lentamente com legumes, vinho tinto e temperos que resultam num molho rico e encorpado. Impressionante e fácil de fazer.',
      ingredients: [
        '2kg de coxão mole', '2 cebolas', '4 cenouras', '1 talo de salsão',
        '300ml de vinho tinto seco', '1 lata de tomate pelado',
        'Alho, louro, tomilho, sal e pimenta'
      ],
      steps: [
        'Tempere a carne na véspera com sal, pimenta e alho.',
        'Sele a carne em todos os lados em panela quente com óleo.',
        'Adicione os legumes picados e refogue.',
        'Acrescente o vinho, tomates e ervas. Cubra com água.',
        'Cozinhe em fogo baixo tampado por 1h30 ou 1h na pressão.',
        'Retire a carne, bata o molho com os legumes e sirva sobre a carne fatiada.'
      ]
    },
    {
      id: 'mul9',
      name: 'Paella de Frango e Camarão',
      img: IMG('1515443961218-a51367888e4b'),
      time: '1h', servings: 8, calories: '510 kcal',
      desc: 'Paella espanhola vibrante com frango crocante, camarões, mexilhão, pimentões coloridos e açafrão. A estrela de qualquer reunião especial.',
      ingredients: [
        '4 coxas de frango', '500g de camarão', '300g de mexilhão',
        '400g de arroz de paella (arbóreo)', '1 pitada de açafrão',
        '2 pimentões (vermelho e amarelo)', '200g de ervilha, 2 tomates',
        '1,2L de caldo de frango quente, azeite e limão'
      ],
      steps: [
        'Doure o frango em azeite na paellera ou frigideira larga. Reserve.',
        'Refogue cebola, alho e pimentões. Adicione o tomate.',
        'Acrescente o arroz e o açafrão dissolvido no caldo quente.',
        'Distribua o frango sobre o arroz. Não mexa mais.',
        'Adicione os frutos do mar 10 minutos antes de o arroz secar.',
        'Quando formar a socarrat (fundo crocante), retire do fogo. Sirva com limão.'
      ]
    },
    {
      id: 'mul10',
      name: 'Sopa de Legumes para a Família',
      img: IMG('1432139555190-58524dde6321'),
      time: '45 min', servings: 10, calories: '190 kcal',
      desc: 'Sopa caipira robusta com legumes variados, frango, macarrão e ervas frescas. Aquece o coração e serve uma família inteira com generosidade.',
      ingredients: [
        '500g de frango em pedaços', '3 batatas', '2 cenouras', '2 chuchus',
        '2 espigas de milho', '150g de macarrão cabelo de anjo',
        'Cebola, alho, salsinha, cebolinha, sal e pimenta'
      ],
      steps: [
        'Cozinhe o frango com cebola, alho, sal e 2 litros de água por 30 min.',
        'Retire o frango, desfie e volte para o caldo.',
        'Adicione as batatas, cenouras e chuchus em cubos.',
        'Após 10 minutos, acrescente o milho em rodelas e o macarrão.',
        'Cozinhe até a massa estar macia.',
        'Ajuste o sal, finalize com salsinha e cebolinha. Sirva bem quente.'
      ]
    }
  ],

  /* ---- DOCES FITNESS ---- */
  docesfit: [
    {
      id: 'df1',
      name: 'Brownie de Banana e Cacau',
      img: IMG('1606313564200-e75d5e1ca55a'),
      time: '35 min', servings: 12, calories: '120 kcal',
      desc: 'Brownie denso e úmido feito com banana madura, cacau em pó e sem açúcar refinado. Surpreende pelo sabor intenso e textura fudgy perfeita.',
      ingredients: [
        '3 bananas maduras amassadas', '2 ovos', '4 col. sopa de cacau em pó 100%',
        '4 col. sopa de aveia em flocos', '3 col. sopa de mel ou xilitol',
        '1 col. chá de essência de baunilha', '1 pitada de sal'
      ],
      steps: [
        'Pré-aqueça o forno a 180°C.',
        'Amasse bem as bananas até virarem purê homogêneo.',
        'Misture os ovos, mel e baunilha ao purê de banana.',
        'Adicione o cacau, aveia e sal. Misture bem.',
        'Despeje em forma pequena (20x20) forrada com papel manteiga.',
        'Asse por 20-25 minutos. Espere esfriar antes de cortar para manter a textura fudgy.'
      ]
    },
    {
      id: 'df2',
      name: 'Cookie de Aveia Sem Açúcar',
      img: IMG('1499636667447-3b45a3272e1d'),
      time: '25 min', servings: 15, calories: '95 kcal',
      desc: 'Cookies crocantes de aveia com gotas de chocolate 70%, adoçados com banana e tâmaras. Sem glúten, sem açúcar refinado e infinitamente gostosos.',
      ingredients: [
        '2 xíc. de aveia em flocos', '1 banana madura', '4 tâmaras sem caroço',
        '2 col. sopa de manteiga de amendoim', '50g de gotas de chocolate 70%',
        '1 col. chá de canela', '1 pitada de sal'
      ],
      steps: [
        'Pré-aqueça o forno a 175°C.',
        'Processe as tâmaras até virar pasta. Amasse a banana.',
        'Misture tâmaras, banana e manteiga de amendoim.',
        'Adicione a aveia, canela e sal. Misture bem.',
        'Incorpore as gotas de chocolate.',
        'Molde bolinhas, achate numa assadeira e asse por 12-15 minutos.'
      ]
    },
    {
      id: 'df3',
      name: 'Mousse de Chocolate Proteico',
      img: IMG('1531749668029-2db88e4276c7'),
      time: '15 min', servings: 4, calories: '180 kcal',
      desc: 'Mousse aerada e cremosa de chocolate com whey protein, iogurte grego e cacau. Alta em proteína e baixa em calorias. Parece um pecado mas não é!',
      ingredients: [
        '200g de iogurte grego desnatado', '2 col. whey protein chocolate',
        '2 col. sopa de cacau em pó', '2 claras de ovo em neve',
        '2 col. sopa de mel', '1 col. chá de essência de baunilha',
        'Raspas de chocolate 70% para finalizar'
      ],
      steps: [
        'Misture o iogurte, whey, cacau, mel e baunilha até ficar homogêneo.',
        'Bata as claras em neve bem firme com pitada de sal.',
        'Incorpore 1/3 das claras à mistura de chocolate para soltar.',
        'Acrescente o restante das claras delicadamente com movimentos de baixo para cima.',
        'Distribua em taças e leve à geladeira por 2 horas.',
        'Sirva com raspas de chocolate 70% e frutas vermelhas.'
      ]
    },
    {
      id: 'df4',
      name: 'Brigadeiro de Whey Protein',
      img: IMG('1559181567-c3190904d2b4'),
      time: '20 min', servings: 20, calories: '55 kcal',
      desc: 'O queridinho brasileiro na versão fitness com whey protein de chocolate, leite de coco e cacau. Mesmo sabor, muito mais proteína e menos culpa.',
      ingredients: [
        '2 col. whey protein sabor chocolate', '200ml de leite de coco',
        '3 col. sopa de cacau em pó', '2 col. sopa de mel',
        '1 col. sopa de manteiga de coco', 'Cacau em pó para enrolar'
      ],
      steps: [
        'Misture todos os ingredientes numa panela.',
        'Cozinhe em fogo baixo mexendo sempre com espátula.',
        'Quando desgrudar do fundo da panela, está no ponto.',
        'Despeje numa tigela e leve à geladeira por 1 hora.',
        'Enrole em bolinhas com as mãos umedecidas.',
        'Passe no cacau em pó e sirva em forminhas de papel.'
      ]
    },
    {
      id: 'df5',
      name: 'Pudim de Chia com Frutas',
      img: IMG('1484723091739-30ad0248ae3e'),
      time: '10 min + 4h', servings: 3, calories: '140 kcal',
      desc: 'Pudim cremoso de sementes de chia com leite de amêndoas e baunilha, coberto com frutas frescas. Rico em ômega-3 e fibras, perfeito para o café da manhã.',
      ingredients: [
        '4 col. sopa de sementes de chia', '300ml de leite de amêndoas',
        '1 col. sopa de mel ou agave', '1 col. chá de baunilha',
        'Frutas a gosto (morango, manga, kiwi)', 'Granola sem açúcar para crocância'
      ],
      steps: [
        'Misture a chia com o leite de amêndoas, mel e baunilha.',
        'Mexa bem para não deixar grumos.',
        'Deixe descansar por 5 minutos e mexa novamente.',
        'Tampe e leve à geladeira por no mínimo 4 horas ou durante a noite.',
        'Na hora de servir, retire da geladeira e mexa.',
        'Cubra com frutas frescas cortadas e granola crocante.'
      ]
    },
    {
      id: 'df6',
      name: 'Sorvete de Banana com Amendoim',
      img: IMG('1563805042-7684c019e1cb'),
      time: '5 min + 2h', servings: 2, calories: '160 kcal',
      desc: 'O sorvete de 2 ingredientes que virou febre: banana congelada batida até ficar cremosa como sorvete, com manteiga de amendoim e calda de mel.',
      ingredients: [
        '3 bananas maduras congeladas', '2 col. sopa de manteiga de amendoim',
        '1 col. sopa de mel', '1 col. chá de canela',
        'Amendoim triturado para finalizar'
      ],
      steps: [
        'Descasque as bananas, corte em rodelas e congele por 2 horas.',
        'Bata as bananas congeladas no processador com a manteiga de amendoim.',
        'Processe até ficar completamente cremoso (pode levar 3-4 minutos).',
        'Adicione a canela e processe mais 30 segundos.',
        'Sirva imediatamente ou congele por mais 30 min para consistência firme.',
        'Finalize com mel e amendoim triturado.'
      ]
    },
    {
      id: 'df7',
      name: 'Bolinho de Aveia e Maçã',
      img: IMG('1558961363-fa8fdf82db35'),
      time: '30 min', servings: 12, calories: '110 kcal',
      desc: 'Bolinhos fofos de aveia com maçã e canela, sem açúcar refinado e sem farinha de trigo. Ótimos para o lanche da tarde ou café da manhã saudável.',
      ingredients: [
        '2 xíc. aveia em flocos finos', '2 maçãs raladas', '2 ovos',
        '3 col. sopa de mel', '1 col. chá de canela', '1 col. chá de fermento',
        '1 pitada de sal', 'Uvas passas a gosto (opcional)'
      ],
      steps: [
        'Pré-aqueça o forno a 180°C.',
        'Rale as maçãs com casca.',
        'Misture todos os ingredientes em uma tigela.',
        'Deixe a massa descansar por 5 minutos para a aveia hidratar.',
        'Distribua em forminhas de muffin untadas ou com papel.',
        'Asse por 20-22 minutos ou até dourar levemente.'
      ]
    },
    {
      id: 'df8',
      name: 'Trufa de Amendoim Fit',
      img: IMG('1537671954429-a8aaabd41d6f'),
      time: '20 min + 1h', servings: 20, calories: '70 kcal',
      desc: 'Trufas cremosas de manteiga de amendoim com coating de chocolate amargo. Ricas, satisfatórias e com apenas 70 calorias cada.',
      ingredients: [
        '200g de manteiga de amendoim integral', '3 col. sopa de farinha de aveia',
        '2 col. sopa de mel', '1 col. chá de essência de baunilha',
        '150g de chocolate amargo 70%', '1 col. sopa de óleo de coco'
      ],
      steps: [
        'Misture a manteiga de amendoim, farinha de aveia, mel e baunilha.',
        'Molde bolinhas uniformes e congele por 30 minutos.',
        'Derreta o chocolate com o óleo de coco em banho-maria.',
        'Passe cada bolinha no chocolate derretido com auxílio de garfo.',
        'Coloque sobre papel manteiga e leve à geladeira para firmar.',
        'Guarde em pote fechado na geladeira por até 7 dias.'
      ]
    },
    {
      id: 'df9',
      name: 'Bolo de Cenoura Fitness',
      img: IMG('1588195538326-25a3d23b01fe'),
      time: '50 min', servings: 12, calories: '145 kcal',
      desc: 'Bolo de cenoura fofo e úmido feito com farinha de aveia e adoçado com mel. Cobertura de ganache de chocolate amargo sem açúcar.',
      ingredients: [
        '3 cenouras médias', '3 ovos', '1/2 xíc. de azeite',
        '4 col. sopa de mel', '2 xíc. farinha de aveia', '1 col. chá de fermento',
        '1 pitada de sal e canela',
        'Cobertura: 100g chocolate 70%, 2 col. leite de coco'
      ],
      steps: [
        'Pré-aqueça o forno a 180°C.',
        'Bata no liquidificador as cenouras em pedaços, ovos, azeite e mel.',
        'Transfira para tigela e misture a farinha de aveia, fermento e sal.',
        'Despeje em forma untada e asse por 35-40 minutos.',
        'Para a cobertura: derreta o chocolate com leite de coco.',
        'Desenforme o bolo frio e cubra com o ganache.'
      ]
    },
    {
      id: 'df10',
      name: 'Panqueca Proteica com Frutas',
      img: IMG('1547592180-85f173990554'),
      time: '20 min', servings: 2, calories: '220 kcal',
      desc: 'Panquecas proteicas fofas com aveia e banana, servidas com calda de frutas vermelhas sem açúcar. O café da manhã fitness dos sonhos.',
      ingredients: [
        '1 banana madura', '2 ovos', '4 col. sopa de aveia',
        '1 col. whey protein baunilha (opcional)', '1 col. chá de canela',
        'Frutas vermelhas e mel para servir', '1 col. chá de fermento'
      ],
      steps: [
        'Amasse a banana e misture com os ovos batidos.',
        'Adicione a aveia, whey (se usar), canela e fermento.',
        'Aqueça frigideira antiaderente com spray de coco ou manteiga.',
        'Despeje pequenas porções (diâmetro de 10cm) e espere borbulhar.',
        'Vire e doure do outro lado por 1 minuto.',
        'Sirva empilhadas com frutas vermelhas e fio de mel.'
      ]
    }
  ],

  /* ---- DOCES TRADICIONAIS ---- */
  doces: [
    {
      id: 'doc1',
      name: 'Bolo de Chocolate Molhadinho',
      img: IMG('1578985545062-69928b1d9587'),
      time: '1h', servings: 12, calories: '380 kcal',
      desc: 'O bolo de chocolate que derrete na boca: massa densa e úmida com calda quente que penetra em cada fatia. Cobertura de brigadeiro cremoso.',
      ingredients: [
        '3 ovos', '2 xíc. de açúcar', '1 xíc. de leite morno',
        '1/2 xíc. de óleo', '2 xíc. de farinha de trigo', '1 xíc. de cacau em pó',
        '1 col. sopa de fermento', 'Calda: 1 lata de leite condensado + 1 xíc. leite + 4 col. cacau'
      ],
      steps: [
        'Pré-aqueça o forno a 180°C. Bata os ovos com o açúcar até crescer.',
        'Adicione o óleo e o leite morno. Misture o cacau, farinha e fermento.',
        'Despeje em forma untada e asse por 40 minutos.',
        'Prepare a calda: cozinhe todos os ingredientes até engrossar levemente.',
        'Fure o bolo quente com garfo e regue com a calda quente.',
        'Cubra com brigadeiro de colher e sirva morno ou em temperatura ambiente.'
      ]
    },
    {
      id: 'doc2',
      name: 'Torta de Limão Cremosa',
      img: IMG('1565958011703-44f9829ba187'),
      time: '45 min + 2h', servings: 10, calories: '340 kcal',
      desc: 'Torta de limão com base de biscoito crocante, creme azedo e doce de limão siciliano e cobertura de merengue dourado na maçarico.',
      ingredients: [
        '200g de biscoito maisena', '100g de manteiga', '1 lata de leite condensado',
        '3 gemas', 'Suco de 4 limões taiti', 'Raspas de 2 limões',
        '3 claras e 6 col. sopa açúcar para o merengue'
      ],
      steps: [
        'Triture os biscoitos com a manteiga derretida. Forre uma forma de aro.',
        'Asse a base por 10 minutos a 180°C.',
        'Misture leite condensado, gemas, suco e raspas de limão.',
        'Despeje sobre a base e asse por 20 minutos até firmar.',
        'Bata as claras em neve com açúcar até virar merengue firme.',
        'Cubra a torta fria com merengue e use maçarico para dourar.'
      ]
    },
    {
      id: 'doc3',
      name: 'Pudim de Leite Condensado',
      img: IMG('1586985289688-ca058b3db84d'),
      time: '1h30', servings: 8, calories: '290 kcal',
      desc: 'O clássico pudim brasileiro cremoso e tremido com calda de caramelo dourado. A receita que ninguém resiste e todo mundo pede a receita.',
      ingredients: [
        '1 lata de leite condensado', '2 latas de leite (use a lata como medida)',
        '3 ovos inteiros', '1 col. chá de essência de baunilha',
        'Calda: 1 xíc. açúcar + 1/2 xíc. água'
      ],
      steps: [
        'Prepare a calda: derreta o açúcar até caramelizar. Adicione a água com cuidado.',
        'Despeje a calda na forma de pudim. Reserve.',
        'Bata no liquidificador o leite condensado, leite, ovos e baunilha por 2 min.',
        'Coe e despeje na forma sobre a calda.',
        'Asse em banho-maria a 180°C por 1h15 ou na panela de pressão por 40 min.',
        'Espere esfriar completamente antes de desenformar. Sirva gelado.'
      ]
    },
    {
      id: 'doc4',
      name: 'Cheesecake de Frutas Vermelhas',
      img: IMG('1533134242753-76a7a082da22'),
      time: '1h + 4h', servings: 12, calories: '350 kcal',
      desc: 'Cheesecake cremoso e rico com base de biscoito Oreo, recheio de cream cheese e cobertura de calda de frutas vermelhas frescas.',
      ingredients: [
        '250g de biscoito Oreo sem recheio', '80g de manteiga',
        '600g de cream cheese', '1 xíc. de açúcar', '3 ovos',
        '200g de creme de leite', '300g de frutas vermelhas + 3 col. açúcar para calda'
      ],
      steps: [
        'Triture o biscoito com manteiga. Pressione no fundo de uma forma de 23cm.',
        'Bata cream cheese com açúcar até ficar fofo. Adicione os ovos um a um.',
        'Misture o creme de leite e despeje sobre a base.',
        'Asse em banho-maria a 160°C por 50-60 minutos.',
        'Deixe esfriar no forno desligado por 1 hora antes de refrigerar.',
        'Prepare a calda com as frutas e açúcar. Sirva sobre o cheesecake gelado.'
      ]
    },
    {
      id: 'doc5',
      name: 'Pavê de Chocolate e Café',
      img: IMG('1541167760496-1628856ab772'),
      time: '30 min + 3h', servings: 10, calories: '420 kcal',
      desc: 'Pavê sofisticado de biscoito champanhe embebido em café, intercalado com creme belga de chocolate. Sobremesa elegante para ocasiões especiais.',
      ingredients: [
        '2 pacotes de biscoito champanhe', '200ml de café forte frio',
        '2 latas de creme de leite', '200g de chocolate meio amargo',
        '1 lata de leite condensado', '1 col. sopa de manteiga',
        'Cacau em pó para finalizar'
      ],
      steps: [
        'Prepare o creme: derreta o chocolate com o leite condensado e a manteiga.',
        'Deixe esfriar e misture com o creme de leite.',
        'Molhe rapidamente os biscoitos no café frio.',
        'Monte em refratário: camada de biscoitos, creme, biscoitos, creme.',
        'Finalize com creme e polvilhe cacau em pó.',
        'Cubra com plástico filme e leve à geladeira por 3 horas antes de servir.'
      ]
    },
    {
      id: 'doc6',
      name: 'Quindim Tradicional',
      img: IMG('1464305795204-6f5bbfe7b0d4'),
      time: '1h', servings: 12, calories: '280 kcal',
      desc: 'O doce colonial brasileiro por excelência: base crocante de coco ralado e interior gelado de gema de ovo com baunilha. Amarelinho, brilhoso e irresistível.',
      ingredients: [
        '12 gemas peneiradas', '2 xíc. de açúcar', '200g de coco ralado fresco',
        '1 col. sopa de manteiga', '1 col. chá de essência de baunilha',
        'Manteiga e açúcar para untar as forminhas'
      ],
      steps: [
        'Misture as gemas, açúcar, coco e manteiga derretida.',
        'Adicione a baunilha e deixe a mistura descansar por 30 minutos.',
        'Unte as forminhas com manteiga e açúcar.',
        'Preencha até 3/4 e asse em banho-maria a 180°C por 30-35 minutos.',
        'Estarão prontos quando o centro não balançar mais.',
        'Espere esfriar totalmente e desenforme invertendo sobre prato.'
      ]
    },
    {
      id: 'doc7',
      name: 'Brigadeiro Gourmet de Pistache',
      img: IMG('1541658016709-82835701727e'),
      time: '25 min + 1h', servings: 30, calories: '85 kcal',
      desc: 'Brigadeiro gourmet amanteigado com pasta de pistache, enrolado em pistache granulado. A versão sofisticada do doce mais amado do Brasil.',
      ingredients: [
        '1 lata de leite condensado', '2 col. sopa de manteiga',
        '3 col. sopa de pasta de pistache', '50ml de creme de leite',
        '150g de pistache granulado para enrolar'
      ],
      steps: [
        'Leve ao fogo médio o leite condensado, manteiga e pasta de pistache.',
        'Mexa constantemente com espátula para não queimar.',
        'Quando desgrudar do fundo e das laterais, está no ponto.',
        'Despeje numa tigela untada com manteiga e deixe esfriar completamente.',
        'Enrole com as mãos untadas em bolinhas uniformes.',
        'Passe no pistache granulado e sirva em forminhas.'
      ]
    },
    {
      id: 'doc8',
      name: 'Torta Holandesa Gelada',
      img: IMG('1504630083319-bfd135a8f86a'),
      time: '30 min + 4h', servings: 10, calories: '460 kcal',
      desc: 'Torta gelada irresistível com camadas de biscoito, creme de leite condensado com manteiga e cobertura de ganache. Um clássico que nunca decepciona.',
      ingredients: [
        '300g de biscoito maisena ou maria', '150g de manteiga',
        '1 lata de leite condensado', '200g de manteiga (para o creme)',
        '200g de chocolate ao leite', '200g de creme de leite'
      ],
      steps: [
        'Misture os biscoitos triturados com a manteiga derretida. Forre forma.',
        'Bata a manteiga até clarear e adicione o leite condensado aos poucos.',
        'Bata muito bem até ficar creme homogêneo e liso.',
        'Despeje sobre a base e nivele. Leve ao freezer por 2 horas.',
        'Prepare a ganache: aqueça o creme de leite e despeje sobre o chocolate picado.',
        'Cubra a torta com a ganache e leve ao freezer por mais 2 horas.'
      ]
    },
    {
      id: 'doc9',
      name: 'Sonho Recheado com Doce de Leite',
      img: IMG('1551024601-bec78aea364b'),
      time: '1h30', servings: 15, calories: '320 kcal',
      desc: 'O sonho de confeitaria: bolinhos aerados e dourados fritos por fora, recheados com doce de leite cremoso e cobertos de açúcar de confeiteiro.',
      ingredients: [
        '500g de farinha de trigo', '10g de fermento biológico seco',
        '3 ovos', '100g de manteiga', '100ml de leite morno',
        '3 col. sopa de açúcar', '1 pitada de sal',
        '400g de doce de leite para rechear, açúcar de confeiteiro'
      ],
      steps: [
        'Dissolva o fermento no leite morno com o açúcar. Deixe espumar.',
        'Misture a farinha, ovos, manteiga, sal e o fermento. Sove por 10 minutos.',
        'Deixe crescer por 1 hora coberto com pano.',
        'Modele bolinhas de 60g, coloque em assadeira e deixe crescer 30 min.',
        'Frite em óleo a 170°C por 4 minutos de cada lado até dourar.',
        'Recheie com doce de leite usando bico de confeiteiro e polvilhe açúcar.'
      ]
    },
    {
      id: 'doc10',
      name: 'Romeu e Julieta Gourmet',
      img: IMG('1484797288493-45047e842255'),
      time: '20 min', servings: 8, calories: '210 kcal',
      desc: 'A combinação clássica brasileira de goiabada cremosa com queijo minas padrão em versão sofisticada com goiabada cascão caseira e queijo curado.',
      ingredients: [
        '500g de goiabada cortada em cubos', '50ml de água',
        '1 col. sopa de suco de limão', '400g de queijo minas padrão curado',
        'Torradas artesanais ou biscoito de polvilho para acompanhar',
        'Folhas de hortelã para decorar'
      ],
      steps: [
        'Leve a goiabada com a água ao fogo baixo mexendo até derreter.',
        'Adicione o suco de limão e mexa bem.',
        'Despeje em vidro de geleia e deixe esfriar.',
        'Fatie o queijo em tábua de madeira.',
        'Sirva a goiabada derramada sobre as fatias de queijo.',
        'Acompanhe com torradas ou biscoito e decore com hortelã.'
      ]
    }
  ],

  /* ---- PÃES ARTESANAIS ---- */
  paes: [
    {
      id: 'pao1',
      name: 'Pão Francês Caseiro',
      img: IMG('1549931319-a545dcf3bc73'),
      time: '2h', servings: 10, calories: '160 kcal',
      desc: 'O pão francês que você nunca imaginou fazer em casa: crocante por fora, macio e aerado por dentro. Casca perfeita com vapor no forno.',
      ingredients: [
        '500g de farinha de trigo tipo 1', '10g de fermento biológico seco',
        '10g de sal', '1 col. chá de açúcar', '320ml de água morna'
      ],
      steps: [
        'Dissolva o fermento e açúcar na água morna. Deixe espumar.',
        'Misture a farinha com o sal. Adicione a água com fermento.',
        'Sove a massa por 12 minutos até ficar lisa e elástica.',
        'Deixe crescer por 1 hora. Divida em 10 porções e modele.',
        'Faça um corte reto no topo de cada pãozinho.',
        'Asse a 220°C com uma tigela de água dentro do forno por 20-25 min.'
      ]
    },
    {
      id: 'pao2',
      name: 'Pão de Queijo Mineiro',
      img: IMG('1574771434512-3d01e78afece'),
      time: '45 min', servings: 20, calories: '95 kcal',
      desc: 'Autêntico pão de queijo mineiro: casquinha crocante, interior elástico e recheado do sabor inconfundível do queijo meia-cura. Impossível comer um só.',
      ingredients: [
        '500g de polvilho azedo', '200ml de leite', '200ml de água',
        '100ml de óleo', '2 ovos', '200g de queijo meia-cura ou parmesão ralado',
        '10g de sal'
      ],
      steps: [
        'Ferva o leite com a água, óleo e sal. Despeje sobre o polvilho mexendo sempre.',
        'Deixe esfriar um pouco até suportar o calor das mãos.',
        'Adicione os ovos e amasse bem.',
        'Incorpore o queijo ralado e amasse até a massa ficar homogênea.',
        'Modele bolinhas do tamanho de uma noz.',
        'Asse a 200°C por 20-25 minutos até dourar e crescer.'
      ]
    },
    {
      id: 'pao3',
      name: 'Pão Integral com Sementes',
      img: IMG('1509440159596-0249088772ff'),
      time: '2h30', servings: 12, calories: '175 kcal',
      desc: 'Pão integral rústico com mix de sementes: linhaça, girassol, gergelim e chia. Denso, nutritivo e com sabor amadeirado característico.',
      ingredients: [
        '300g de farinha integral', '200g de farinha branca', '10g fermento seco',
        '10g de sal', '20g de mel', '320ml de água morna',
        '50g de mix de sementes (girassol, linhaça, gergelim, chia)'
      ],
      steps: [
        'Dissolva o fermento com o mel na água morna.',
        'Misture as farinhas e sal. Incorpore o fermento e amasse por 10 min.',
        'Adicione as sementes e amasse mais 3 minutos.',
        'Deixe crescer por 1h30 até dobrar de volume.',
        'Modele o pão e coloque em forma untada. Deixe crescer 30 min.',
        'Asse a 200°C por 35-40 minutos. Bata a base — deve soar oco.'
      ]
    },
    {
      id: 'pao4',
      name: 'Focaccia de Alecrim',
      img: IMG('1571748982800-fa51082c2224'),
      time: '2h', servings: 12, calories: '220 kcal',
      desc: 'Focaccia italiana com casca dourada, interior arejado cheio de bolhas e cobertura generosa de azeite, alecrim fresco e flor de sal.',
      ingredients: [
        '500g de farinha de trigo', '10g de fermento seco', '10g de sal',
        '1 col. chá de açúcar', '350ml de água morna', '100ml de azeite',
        'Alecrim fresco, flor de sal e azeitonas para cobertura'
      ],
      steps: [
        'Misture farinha, sal e açúcar. Adicione o fermento dissolvido e 60ml de azeite.',
        'Sove levemente - a massa deve ser grudenta. Adicione a água aos poucos.',
        'Deixe crescer por 1h. Transfira para assadeira untada com azeite.',
        'Abra com os dedos criando as covetas características.',
        'Regue generosamente com azeite e distribua o alecrim e azeitonas.',
        'Polvilhe flor de sal e asse a 220°C por 20-25 minutos até dourar.'
      ]
    },
    {
      id: 'pao5',
      name: 'Pão de Forma Artesanal',
      img: IMG('1553361371-9b22f78e8b1d'),
      time: '3h', servings: 16, calories: '145 kcal',
      desc: 'Pão de forma caseiro fofinho com casca macia, perfeito para torradas e sanduíches. Muito superior ao industrializado em sabor e textura.',
      ingredients: [
        '500g de farinha de trigo', '8g de fermento seco', '10g de sal',
        '30g de açúcar', '30g de manteiga amolecida', '1 ovo',
        '280ml de leite morno'
      ],
      steps: [
        'Dissolva o fermento no leite morno com o açúcar.',
        'Misture a farinha e sal. Adicione o fermento, ovo e manteiga.',
        'Sove por 15 minutos até a massa ficar lisa, elástica e não grudar.',
        'Deixe crescer por 1h30 até dobrar de tamanho.',
        'Modele numa forma de 30x10cm untada. Deixe crescer 40 minutos.',
        'Pincele com ovo e asse a 180°C por 30-35 minutos.'
      ]
    },
    {
      id: 'pao6',
      name: 'Pão de Batata Fofinho',
      img: IMG('1590301157705-41c3c6ea3dca'),
      time: '2h30', servings: 12, calories: '165 kcal',
      desc: 'Pão de batata com textura incrivelmente macia e levemente adocicado. A batata na massa garante uma umidade que dura dias.',
      ingredients: [
        '400g de farinha de trigo', '200g de batata cozida e amassada',
        '8g de fermento seco', '8g de sal', '30g de açúcar',
        '30g de manteiga', '150ml de leite morno', '1 ovo'
      ],
      steps: [
        'Dissolva o fermento no leite morno com o açúcar.',
        'Misture a farinha com sal. Adicione a batata fria amassada.',
        'Incorpore o fermento, ovo e manteiga. Sove por 12 minutos.',
        'Deixe crescer 1h30 coberto com pano úmido.',
        'Modele pãezinhos de 60g e coloque em assadeira. Deixe crescer 40 min.',
        'Pincele com leite e asse a 180°C por 18-20 minutos até dourar.'
      ]
    },
    {
      id: 'pao7',
      name: 'Brioche Francês Amanteigado',
      img: IMG('1598373182133-52452f7691ef'),
      time: '3h', servings: 10, calories: '290 kcal',
      desc: 'Brioche francês clássico: massa amanteigada, levemente adocicada com miolo sedoso que derrete na boca. Perfumado com baunilha e casca de laranja.',
      ingredients: [
        '500g de farinha de trigo', '200g de manteiga gelada em cubos',
        '10g de fermento seco', '50g de açúcar', '1 col. chá de sal',
        '4 ovos', '100ml de leite morno', 'Essência de baunilha'
      ],
      steps: [
        'Dissolva o fermento no leite morno com pitada de açúcar.',
        'Misture farinha, açúcar e sal. Adicione os ovos e fermento. Sove 10 min.',
        'Incorpore a manteiga gelada em cubos aos poucos, sovando entre cada adição.',
        'Sove até a massa ficar sedosa e brilhante — leva uns 20 minutos.',
        'Refrigere a massa por 1h ou de um dia para outro (melhor resultado).',
        'Modele, deixe crescer 1h e asse a 190°C por 25-30 minutos.'
      ]
    },
    {
      id: 'pao8',
      name: 'Pão de Leite Japonês',
      img: IMG('1603569440509-40c877820e3a'),
      time: '3h', servings: 12, calories: '170 kcal',
      desc: 'Shokupan: o famoso pão de leite japonês com textura impossível de ser descrita com palavras — apenas provada. Fio de algodão, levíssimo.',
      ingredients: [
        '500g de farinha de trigo forte', '8g de fermento seco', '50g de açúcar',
        '8g de sal', '40g de manteiga', '1 ovo', '270ml de leite morno',
        'Técnica Tangzhong: 25g farinha + 125ml leite cozido'
      ],
      steps: [
        'Prepare o tangzhong: cozinhe a farinha com o leite em fogo baixo mexendo até virar gel.',
        'Deixe esfriar e adicione à mistura de farinha, fermento e açúcar.',
        'Incorpore o ovo, sal, leite e o tangzhong. Sove por 15 minutos.',
        'Adicione a manteiga e sove mais 10 minutos até ficar sedoso.',
        'Deixe crescer 1h30. Modele em forma de pullman e crescer mais 1h.',
        'Pincele com leite e asse a 175°C por 35 minutos.'
      ]
    },
    {
      id: 'pao9',
      name: 'Pão de Banana com Canela',
      img: IMG('1587248577-4c6b2c7f35c1'),
      time: '1h', servings: 10, calories: '210 kcal',
      desc: 'Banana bread americano aromático com canela, noz-moscada e pedaços de banana. A textura é entre bolo e pão, perfeita para o café da manhã.',
      ingredients: [
        '3 bananas maduras', '2 ovos', '1/2 xíc. manteiga derretida',
        '3/4 xíc. açúcar mascavo', '1 1/2 xíc. farinha', '1 col. chá fermento',
        '1/2 col. chá bicarbonato', '1 col. chá canela, noz-moscada e baunilha'
      ],
      steps: [
        'Pré-aqueça o forno a 175°C. Unte uma forma de pão.',
        'Amasse as bananas até virarem purê.',
        'Misture o purê com os ovos, manteiga, açúcar e baunilha.',
        'Peneire a farinha, fermento, bicarbonato e especiarias.',
        'Una os ingredientes secos aos molhados sem bater demais.',
        'Despeje na forma e asse por 50-60 minutos. Teste com palito.'
      ]
    },
    {
      id: 'pao10',
      name: 'Pão Australiano com Mel',
      img: IMG('1569611800-6a09adfe58f2'),
      time: '2h30', servings: 12, calories: '185 kcal',
      desc: 'Pão escuro australiano com mel, melado e cacau que lhe dão a cor e o sabor característicos. Levemente adocicado e ótimo com manteiga.',
      ingredients: [
        '300g de farinha integral', '200g de farinha branca', '8g de fermento seco',
        '8g de sal', '2 col. sopa de mel', '2 col. sopa de melado de cana',
        '2 col. sopa de cacau em pó', '320ml de água morna'
      ],
      steps: [
        'Dissolva o fermento no mel e água morna.',
        'Misture as farinhas, sal e cacau em pó.',
        'Adicione o fermento e o melado. Amasse por 10 minutos.',
        'Deixe crescer por 1h30 até dobrar de volume.',
        'Modele e coloque em forma untada. Deixe crescer mais 30 minutos.',
        'Pincele com mel diluído em água e asse a 190°C por 35-40 minutos.'
      ]
    }
  ]
};

/* ============================================
   RENDERING
   ============================================ */

const CATEGORY_CONFIG = {
  fitness:   { color: 'green',  label: '🥗 Fitness',         gridId: 'grid-fitness' },
  rapidas:   { color: 'blue',   label: '⚡ Rápidas',          gridId: 'grid-rapidas' },
  multidao:  { color: 'purple', label: '👨‍👩‍👧‍👦 Para Muitos',      gridId: 'grid-multidao' },
  docesfit:  { color: 'teal',   label: '💚 Doces Fit',        gridId: 'grid-docesfit' },
  doces:     { color: 'red',    label: '🍰 Doces',            gridId: 'grid-doces' },
  paes:      { color: 'brown',  label: '🍞 Pães',             gridId: 'grid-paes' }
};

function createCard(recipe, color, label) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.innerHTML = `
    <div class="card-img">
      <img src="${recipe.img}" alt="${recipe.name}" loading="lazy">
      <span class="card-cat ${color}">${label}</span>
      <span class="card-time">⏱ ${recipe.time}</span>
    </div>
    <div class="card-body">
      <h3 class="card-title">${recipe.name}</h3>
      <p class="card-desc">${recipe.desc}</p>
      <div class="card-meta">
        <div class="card-info">
          <span>🍽 ${recipe.servings} porções</span>
          ${recipe.calories ? `<span>🔥 ${recipe.calories}</span>` : ''}
        </div>
        <button class="card-btn ${color}" onclick="openModal('${recipe.id}')">Ver Receita</button>
      </div>
    </div>
  `;
  card.addEventListener('click', (e) => {
    if (!e.target.classList.contains('card-btn')) openModal(recipe.id);
  });
  return card;
}

function renderAll() {
  Object.entries(CATEGORY_CONFIG).forEach(([key, config]) => {
    const grid = document.getElementById(config.gridId);
    if (!grid) return;
    RECIPES[key].forEach(recipe => {
      grid.appendChild(createCard(recipe, config.color, config.label));
    });
  });
}

/* ============================================
   MODAL
   ============================================ */

const allRecipes = {};
Object.values(RECIPES).flat().forEach(r => allRecipes[r.id] = r);

const MODAL_COLORS = {
  fit: { color: 'var(--green)', pale: 'var(--green-pale)', textColor: 'var(--green)' },
  rap: { color: 'var(--blue)',  pale: 'var(--blue-pale)',  textColor: 'var(--blue)' },
  mul: { color: 'var(--purple)',pale: 'var(--purple-pale)',textColor: 'var(--purple)' },
  df:  { color: 'var(--teal)', pale: 'var(--teal-pale)',  textColor: 'var(--teal)' },
  doc: { color: 'var(--red)',  pale: 'var(--red-pale)',   textColor: 'var(--red)' },
  pao: { color: 'var(--brown)',pale: 'var(--brown-pale)', textColor: 'var(--brown)' }
};

function getColorConfig(id) {
  const prefix = id.replace(/\d/g, '');
  return MODAL_COLORS[prefix] || MODAL_COLORS['fit'];
}

function openModal(id) {
  const recipe = allRecipes[id];
  if (!recipe) return;
  const cc = getColorConfig(id);
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <img class="modal-hero-img" src="${recipe.img}" alt="${recipe.name}">
    <div class="modal-content">
      <span class="modal-cat-badge" style="background:${cc.pale};color:${cc.textColor}">
        ${CATEGORY_CONFIG[id.replace(/\d/g,'').replace('df','docesfit').replace('doc','doces').replace('pao','paes').replace('fit','fitness').replace('rap','rapidas').replace('mul','multidao')] ? '' : ''}
      </span>
      <h2 class="modal-title">${recipe.name}</h2>
      <p class="modal-desc">${recipe.desc}</p>
      <div class="modal-meta">
        <div class="modal-meta-item"><span>Tempo</span><span>⏱ ${recipe.time}</span></div>
        <div class="modal-meta-item"><span>Porções</span><span>🍽 ${recipe.servings}</span></div>
        ${recipe.calories ? `<div class="modal-meta-item"><span>Calorias</span><span>🔥 ${recipe.calories}</span></div>` : ''}
      </div>
      <h4 class="modal-section-title">📋 Ingredientes</h4>
      <ul class="modal-ingredients">
        ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
      </ul>
      <h4 class="modal-section-title">👨‍🍳 Modo de Preparo</h4>
      <div class="modal-steps">
        ${recipe.steps.map((s, i) => `
          <div class="modal-step">
            <div class="step-num" style="background:${cc.pale};color:${cc.textColor}">${i+1}</div>
            <p>${s}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ============================================
   NAVBAR & SCROLL EFFECTS
   ============================================ */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('open');
    }
  });
}

function initModal() {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ============================================
   INIT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initNavbar();
  initMobileMenu();
  initModal();
  initSmoothScroll();
});
