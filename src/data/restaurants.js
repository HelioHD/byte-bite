export const restaurantsMock = [
  {
    id: "bosque-park",
    name: "Bosque Park - Bar, Restaurantes, Brinquedoteca e Cultura",
    category: "Variedades",
    neighborhood: "Asa Norte",
    rating: 4.5,
    description: "Um centro gourmet onde tem várias opções pra diferentes gostos. (Um bom rolê pra comemorar aniversário)",
    review:
      "O lugar é bom, mas quando lota vira bagunça. Funciona no modelo de pedido pelo totem: você pede e espera um SMS no celular avisando que está pronto " +
      "(e isso não foi uma boa experiência). O preço é razoável por isso é um bom lugar pra aniversário, com opções pra cada bolso, o que é um ponto positivo. " +
      "Pra chegar é tranquilo, já que fica ao lado do Santa Helena e tem parada por perto. De carro, recomendo o estacionamento pago pois o lugar é escuro e passa insegurança.",
    imageUrl:
      "https://images.metroimg.com/2022/05/23162156/Fachada-Bosque-Park.jpg",
    mapLogoUrl:
      "https://images.metroimg.com/2022/05/23162156/Fachada-Bosque-Park.jpg",
    coordinates: { lat: -15.736858086837495, lng: -47.89678672417057 },
    googleMapsUrl:
      "https://www.google.com.br/maps/place/Bosque+Park+-+Bar,+Restaurantes,+Brinquedoteca+e+Cultura/@-15.7369334,-47.8971238,17z/data=!4m6!3m5!1s0x935a3916a5ae35b1:0xa19adbf9a1a320ec!8m2!3d-15.7370314!4d-47.8968888!16s%2Fg%2F11rhp64jyj?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://ul.waze.com/ul?place=ChIJsTWupRY5WpMR7CCjofnbmqE&ll=-15.73703140%2C-47.89688880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  },
  {
    id: "acervo-cafe",
    name: "ACERVO CAFÉ - Asa Norte",
    category: "Caféteria",
    neighborhood: "Asa Norte",
    rating: 3.5,
    description: "Caféteria de cafés especial no estilo bem brutalista.",
    review:
      "Vou direto ao ponto: o café é ótimo, o bolo de chocolate também, e o resto do cardápio acompanha mas nada justifica o preço. " +
      "Em Brasília tem várias cafeterias com café no mesmo nível e por bem menos. No dia em que fui o atendimento foi mais ou menos imagino que oscile, então fica no 50/50: ou você pega um dia em que atendem bem, ou fica no mais ou menos." +
      " P.s: Esse review é só relacionado ao da Asa norte o do Casa Park eu ainda não fui.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhi0PhN_7lwWSnYP-MW6erUN8ctBq88vy_eA&s",
    mapLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhi0PhN_7lwWSnYP-MW6erUN8ctBq88vy_eA&s",
    coordinates: { lat: -15.736960335757193, lng:  -47.89392912436828},
    googleMapsUrl:
      "https://www.google.com.br/maps/place/ACERVO+CAF%C3%89+-+Asa+Norte/@-15.7365545,-47.8943937,18.46z/data=!4m6!3m5!1s0x935a3bba7d13dbe1:0x95a90f700a8d0199!8m2!3d-15.7370075!4d-47.8940727!16s%2Fg%2F11l6jd2xx6?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/br/df/acervo-cafe-asa-norte?to=place.ChIJ4dsTfbo7WpMRmQGNCnAPqZU",
  },
  {
    id: "tudo-trigo",
    name: "Tudo Trigo",
    category: "Salgados",
    neighborhood: "Asa norte",
    rating: 5,
    description: "Salgados e pães artesanais.",
    review:
      "Esse lugar é um ouro no final da Asa Norte. É uma loja pequena, mas com muito a oferecer: o atendimento é ótimo e sempre tem salgados fresquinhos; " +
      "o preço ainda é bem melhor que o de salgados congelados nas padarias e lanchonetes da redondeza. Recomendo muito o de calabresa e o de ricota.",
    imageUrl:
      "https://img05.restaurantguru.com/r046-Tudo-trigo-interior-2021-09.jpg",
    mapLogoUrl:
      "https://img05.restaurantguru.com/r046-Tudo-trigo-interior-2021-09.jpg",
    coordinates: { lat: -15.738248127778983, lng: -47.897944376057715 },
    googleMapsUrl:
      "https://www.google.com.br/maps/place/Tudo+Trigo/@-15.7381113,-47.8980463,20z/data=!3m1!5s0x935a398e6f3430db:0x5932df575c043b89!4m6!3m5!1s0x935a398dc69a25e9:0xe187733ff369bc64!8m2!3d-15.7382754!4d-47.8980061!16s%2Fg%2F1yg4dhm9m?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/tudo-trigo-cln-316-bl.-d-asa-norte?to=place.w.204539499.2045394986.6234125",
  },
  {
    id: "doux-doceria",
    name: "Doux Brigaderia - Doceria Especializada",
    category: "Sobremesas",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Doceria Especializada (Brigadeiros, Chocolates, tortas e bolos)",
    review:
      "Trabalhei ali perto da Doux e, juro pra vocês, todo pós-almoço virava ritual: passar lá e comer um docinho. Era barato e tudo que provava era maravilhoso. " +
      "Eles têm bastante variedade: bolos, barras de chocolate, brigadeiros e também dá pra encomendar. Recomendo demais.",
    imageUrl:
      "https://ugc.production.linktr.ee/34ab6d71-8b0b-489f-a9b9-f95e31cf1710_Logotipo-tag-Branco-15.png?io=true&size=avatar-v3_0",
    mapLogoUrl:
      "https://ugc.production.linktr.ee/34ab6d71-8b0b-489f-a9b9-f95e31cf1710_Logotipo-tag-Branco-15.png?io=true&size=avatar-v3_0",
    coordinates: { lat: -15.738667646371454, lng: -47.899501136630725 },
    googleMapsUrl: "https://www.google.com.br/maps/place/Doux+Brigaderia+-+Doceria+Especializada/@-15.738632,-47.8997297,20.5z/data=!4m6!3m5!1s0x935a398d0510904f:0x2f77dc6dbeca17c3!8m2!3d-15.738693!4d-47.899533!16s%2Fg%2F11b827tyy8?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/br/df/doux-brigaderia-doceria-especializada?to=place.ChIJT5AQBY05WpMRwxfKvm3cdy8",
  },
  {
    id: "bitaca-da-norte",
    name: "Bitaca da Norte",
    category: "Mineiro",
    neighborhood: "Asa Norte",
    rating: 4.8,
    description: "Comida mineira e Comida de boteco mineira",
    review:
      "Lugar muito bom: atendimento impecável, comida bem boa no geral e drinks maravilhosos. O porém é a W3 Norte há bastante gente em situação de rua na região, rola muita abordagem " +
      "cansa se você não curte ser interrompido toda hora. Há alguns detalhes na decoração que remetem à esquerda brasileira: quem não liga pra isso nem percebe agora pra quem é rigoroso com o tema pode se irritar melhor ir sabendo.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi0YxuNYhtzfu2U7kZZOk6eUuJvXDrYFB6w&s",
    mapLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi0YxuNYhtzfu2U7kZZOk6eUuJvXDrYFB6w&s",
    coordinates: { lat: -15.739988529943988, lng: -47.899324925945415 },
    googleMapsUrl: "https://www.google.com.br/maps/place/Bitaca+da+Norte/@-15.7398379,-47.8994691,20.5z/data=!4m6!3m5!1s0x935a395d89c4ffa9:0x24830ae57aad08fa!8m2!3d-15.7399998!4d-47.8993711!16s%2Fg%2F11t0m384cm?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/bitaca-da-norte-clrn-716-asa-norte?to=place.w.204539499.2045394986.27394856",
  },
  {
    id: "area-51",
    name: "Área 51 Bar & Snooker",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4,
    description: "Bar com petiscos e bons drinks além de contar com sinuca e fliperama.",
    review:
      "O lugar é um clássico de Brasília. Gosto muito de ir quando o foco não é comida e bebida (comida e drinks são um pouco caros), mas a diversão compensa: fichas baratas e dá pra curtir sinuca " +
      "(várias mesas: redonda, quadrada e a tradicional) e dois fliperamas com monte de jogo, além de mesa de air hockey. " +
      "Na entrada não deixam entrar com mochila/bolsa, pedem documento de todo mundo (sem exceção) e rola revista. Se for de carro, vale deixar mochilas e etc no veículo: os seguranças ficam perto do estacionamento então é tranquilo mas não esquece que é asa norte podem te roubar rápidinho.",
    imageUrl:
      "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzVBSjhSQzJwVEQyZldkYy1rd1ZremciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
    mapLogoUrl:
      "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzVBSjhSQzJwVEQyZldkYy1rd1ZremciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
    coordinates: { lat: -15.74812795756101, lng:  -47.89569720217573 },
    googleMapsUrl: "https://www.google.com.br/maps/place/%C3%81rea+51+Bar+%26+Snooker/@-15.7480824,-47.8959227,19.25z/data=!4m6!3m5!1s0x935a3a26e1606ba7:0x505082bee0123c18!8m2!3d-15.7481621!4d-47.8956241!16s%2Fg%2F11d_88lbdx?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/br/df/area-51-bar-and-snooker?to=place.ChIJp2tg4SY6WpMRGDwS4L6CUFA",
  },  {
    id: "salada-lanches",
    name: "Salada Lanches",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Trailer que serve Hamburguer, Cachorro quente e macarrão.",
    review:
      "Lendário podrão da Asa Norte: aberto até de madrugada e parada certa quando vou na Área 51. Preço honesto e, sério, o hambúrguer é GIGANTESCO. " +
      "Não espere luxo é um trailer na esquina da 710 Norte. Tem gente em situação de rua no entorno e um pouco mais tarde, às vezes tem GP's nas imediações mas no geral é tranquilo. " +
      "Com a loja de delivery que abriu recente, o trailer ficou mais organizado. Se for de x-tudo, pula o combo você não aguenta. Tem estacionamento perto, dá de boa, mas não vacila: ainda é Asa Norte.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUC_wzL9RGLjJq8a586pLOo2M-UdMr5fQ0A&s",
    mapLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUC_wzL9RGLjJq8a586pLOo2M-UdMr5fQ0A&s",
    coordinates: { lat: -15.75754133350506, lng: -47.89303343450321 },
    googleMapsUrl: "https://www.google.com.br/maps/place/Salada+Lanches/@-15.7577454,-47.8939086,18.25z/data=!4m6!3m5!1s0x935a3a3a6afcd6b9:0x93c96cd3ec74d297!8m2!3d-15.7576398!4d-47.8933086!16s%2Fg%2F11c6w18y2y?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/br/df/salada-lanches?to=place.ChIJudb8ajo6WpMRl9J07NNsyZM",
  },{
    id: "helato-boreli",
    name: "Gelato Borelli",
    category: "Sorvetes",
    neighborhood: "Asa Norte",
    rating: 4.5,
    description: "Melhor Gelato de Brasília.",
    review:
      "Se quiser fazer o dono do site feliz me leve para comer um Borelli. O lugar é bem arrumado fica aberto até umas 22:00 e todos os sabores são muito bons. Confesso pra vocês que o preço é um pouco salgado (25 reais +/-) Mas vale a pena não se preocupem!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR12dNotJPZUqA6SGXo34NfEYmBlxV8nW3Nw&s",
    mapLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR12dNotJPZUqA6SGXo34NfEYmBlxV8nW3Nw&s",
    coordinates: { lat: -15.758549467424787, lng:-47.887338353372975 },
    googleMapsUrl: "https://www.google.com.br/maps/place/Gelato+Borelli+Asa+Norte/@-15.7591287,-47.8882699,20z/data=!4m6!3m5!1s0x935a3bb5ffacb837:0x5d13f7778ed5e7da!8m2!3d-15.7585727!4d-47.8873464!16s%2Fg%2F11ss1w4q0h?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/br/df/gelato-borelli-asa-norte?to=place.ChIJN7is_7U7WpMR2ufVjnf3E10",
  },{
    id: "cafe-e-um-cheiro",
    name: "Café e um Chêro",
    category: "Cafeteria",
    neighborhood: "Asa Norte",
    rating: 3,
    description: "Cafeteria com várias opções de lanches",
    review:
      "Vivo uma relação de amor e ódio com essa cafeteria. Não acho que é o melhor café que já tomei, mas tem boas opções de cafés especiais. Além disso, acho um pouco caro para o que entrega (a comida é sempre morna), sem nada de especial: uma mistura de várias coisas que não tem sabor de nada, e isso vale para tudo no cardápio. Porém é um lugar ok se não tiver nenhuma outra opção.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJPZkECkL4XyaUeCQxdYwEPUOuItz0_jeaw&s",
    mapLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJPZkECkL4XyaUeCQxdYwEPUOuItz0_jeaw&s",
    coordinates: { lat: -15.759102842627746, lng: -47.88778033670231 },
    googleMapsUrl: "https://www.google.com.br/maps/place/Caf%C3%A9+e+um+Ch%C3%AAro+Asa+Norte/@-15.7589785,-47.888018,19.75z/data=!4m6!3m5!1s0x935a3a3690ef046f:0x25140488a5d0459b!8m2!3d-15.7591479!4d-47.8878529!16s%2Fg%2F11fx7p5ndn?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/cafe-e-um-chero-cln-109-bl.-c-asa-norte?to=place.w.204539498.2045460520.36135928",
  },{
    id: "meatz-burguer",
    name: "Meatz Burguer",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 4.8,
    description: "Hamburgueria com opções de hambúrgueres artesanais, acompanhamentos e sobremesas.",
    review:
      "Essa hamburgueria não é nada demais, mas entrega o que promete: um hambúrguer bem feito. O local é tranquilo, pensado pra você sentar, pedir e ir embora. Dá pra ir com a galera, claro, mas tem lugares melhores pra isso. A proposta aqui é comer e vazar mesmo. Atendimento sempre ok. O único ponto negativo é que sempre falta alguma coisa do cardápio, mas dá pra ignorar.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVoRtqbg7li_hdKPQ0Ajwq2BRwrAQFhm-dvw&s",
    mapLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVoRtqbg7li_hdKPQ0Ajwq2BRwrAQFhm-dvw&s",
    coordinates: { lat: -15.758840373892808, lng: -47.88808176354467 },
    googleMapsUrl: "https://www.google.com.br/maps/place/Meatz+Burger+-+Asa+Norte+-+Hamburgueria/@-15.7589785,-47.888018,19.75z/data=!4m6!3m5!1s0x935a39373d4c294b:0x3a9df77e4ed27f33!8m2!3d-15.7588579!4d-47.8881909!16s%2Fg%2F11h05f4wyx?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/br/df/meatz-burger-asa-norte-hamburgueria?to=place.ChIJSylMPTc5WpMRM3_STn73nTo",
  },
  {
    id: "ammo-burguer",
    name: "AMMO Burguer",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 4,
    description: "Hamburgueria com opções de hambúrgueres artesanais, acompanhamentos e sobremesas.",
    review:
      "Pra falar a real: a comida não tem nada de errado, mas também não tem personalidade tudo muito igual, sem nenhum diferencial. O espaço é pequeno e parece mais pensado pro delivery do que pra receber cliente; se vai ter mesas, deveria investir um pouco mais na experiência.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9fWvoljo2ES6JGKxVPv3HYH9QDg2635cbQ&s",
    mapLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9fWvoljo2ES6JGKxVPv3HYH9QDg2635cbQ&s",
    coordinates: { lat: -15.758595518847311, lng: -47.887957642922615 },
    googleMapsUrl: "https://www.google.com.br/maps/place/AMMO+Burger/@-15.7583761,-47.8880998,20z/data=!4m6!3m5!1s0x935a3b61920e8c47:0xc0282e4d601b9406!8m2!3d-15.7586101!4d-47.8880249!16s%2Fg%2F11jcw2186q?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/br/df/ammo-burger?to=place.ChIJR4wOkmE7WpMRBpQbYE0uKMA",
  },{
    id: "el-paso-cocina-mexicana",
    name: "El Paso - Cocina Mexicana",
    category: "Mexicana",
    neighborhood: "Asa Norte",
    rating: 3.5,
    description: "Restaurante tématico mexicano, com comidas e bebidas tipicas.",
    review:
      "Um lugar famoso que já foi melhor — faz tempo que perdeu o sentido. Caro demais pro que entrega, e o atendimento é sofrível: parece que você precisa se humilhar pra ser atendido. É bastante procurado pra aniversários, e dá pra entender o porquê (opções de restaurantes temáticos em Brasília são escassas). Mas justamente por isso deveriam caprichar mais, pelo menos no atendimento.",
    imageUrl:
      "https://elpaso.com.br/wp-content/uploads/2015/01/asa-norte.jpg",
    mapLogoUrl:
      "https://elpaso.com.br/wp-content/uploads/2015/01/asa-norte.jpg",
    coordinates: { lat: -15.758567123485781, lng:  -47.887587498079114 },
    googleMapsUrl: "https://www.google.com.br/maps/place/Restaurante+El+Paso+-+Cocina+Mexicana+Asa+Norte/@-15.7586575,-47.8879362,20z/data=!4m6!3m5!1s0x935a3a36a2406153:0x95ac790a0e9f6b4!8m2!3d-15.7585786!4d-47.8876331!16s%2Fg%2F1pt_s8356?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://www.waze.com/pt-BR/live-map/directions/el-paso-texas-restaurante-cln-110-bloco-b-18-asa-norte?to=place.w.204539498.2045460520.5117665",
  },
  // ============================================================
  // JÁ FUI (sem nota/review ainda — preencher rating e review)
  // NOTA: coordinates aproximadas, imageUrl e description vazios.
  // ============================================================
  {
    id: "aishawarma-107-norte",
    name: "Aishawarma 107 Norte",
    category: "Árabe",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Comida árabe — shawarma e cia.",
    review: "Um ótimo shawarma. O que mais me encantou foi a quantidade de recheio e o tamanho da porção por um preço muito acessível. O estabelecimento funciona no modelo fast food: você faz o pedido pelo totem e é chamado pelo nome quando fica pronto. Recomendo muito.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnzO5PGTYzQ3WTT0lr9CgsJRJ1GcdNQYv53mvPQnMAkEd0pZsnOhr1Fq9ZYFyfukS2_IEDxdW4az-eebogAAC-D6EhasrDeHiAQVrvtASGgIh0aKFjjAgIDkpfCvgjmwj-vNyeiP0FlLUw=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnzO5PGTYzQ3WTT0lr9CgsJRJ1GcdNQYv53mvPQnMAkEd0pZsnOhr1Fq9ZYFyfukS2_IEDxdW4az-eebogAAC-D6EhasrDeHiAQVrvtASGgIh0aKFjjAgIDkpfCvgjmwj-vNyeiP0FlLUw=w408-h544-k-no",
    coordinates: { lat: -15.7652951, lng: -47.8855946 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aishawarma%20107%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7652951,-47.8855946&navigate=yes",
  },
  {
    id: "aflora-bar-107",
    name: "Aflora Bar 107",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4,
    description: "Bar pra tomar uma com a galera.",
    review: "O lugar é bastante interessante e, às vezes, rola um forró na praça em frente que vale a pena. A proposta é a de um bar vegano, então os petiscos e as comidinhas não têm muito sabor — não são ruins, mas ficam no sem graça. Se a ideia for aproveitar a programação, como o forró, dá para comer em opções ali perto, como o Aishawarma e o Domino's.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklxGmyOTaDsCOGYNLUcLcMqK35_7LFZMxqErjSNIBoCQkGRXkv68OZE6upAp8248bbjQjr9syuKjLk2e-BysCbkgIM_CWpJ2eCRIc7t1JfdU7Z75lNYT1GgRACtNQvsZ8vgNmN=w408-h271-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklxGmyOTaDsCOGYNLUcLcMqK35_7LFZMxqErjSNIBoCQkGRXkv68OZE6upAp8248bbjQjr9syuKjLk2e-BysCbkgIM_CWpJ2eCRIc7t1JfdU7Z75lNYT1GgRACtNQvsZ8vgNmN=w408-h271-k-no",
    coordinates: { lat: -15.7653794, lng: -47.8855575 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aflora%20Bar%20107%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7653794,-47.8855575&navigate=yes",
  },
  {
    id: "gomes-e-bebes-307",
    name: "Gomes e Bebes 307",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Point de happy hour na Asa Norte.",
    review: "O lugar é excelente. O hambúrguer é focado em smash e muito bem feito. Além disso, eles têm parceria com a Molotov, uma marca brasiliense de chilli oil que é muito boa — saí de lá com um pote de chilli oil de tão bom que é.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlj7Xju8jSjHQxqfqMQJAYCSBhzX8lBO-ropNDQTmadzWLBgWbIS4jwIpvRhAnMr2WqMubOdrGDgt9eWBbqRpisF04-peg-4Ks-meYBHU6N7NCbjEQIV0tfE6gGw73_B4kxV25E2gXJGsQ=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlj7Xju8jSjHQxqfqMQJAYCSBhzX8lBO-ropNDQTmadzWLBgWbIS4jwIpvRhAnMr2WqMubOdrGDgt9eWBbqRpisF04-peg-4Ks-meYBHU6N7NCbjEQIV0tfE6gGw73_B4kxV25E2gXJGsQ=w408-h544-k-no",
    coordinates: { lat: -15.7681725, lng: -47.8866514 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gomes%20e%20Bebes%20307%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7681725,-47.8866514&navigate=yes",
  },
  {
    id: "karaoke-backstage",
    name: "Karaokê Backstage",
    category: "Karaokê",
    neighborhood: "Asa Norte",
    rating: 4,
    description: "Bar com karaokê pra soltar a voz.",
    review: "Só não recebe nota máxima por conta do preço e da qualidade das comidinhas. Fora isso, é muito bom: há um palco em que o pessoal vai se apresentando, o que deixa a experiência bem divertida.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmTMAQi4XhCoEynQMwWW_ums8Yxbzw3NHo1K4NqaIxPljiCjLYp6Qf3oieAioWXnQ32p4QotfBlbrPtmf3LWu2HVJ1HWtRsD6m5lCyFivq9FOOxPK0qIOrKSY5Ux7rnHDUvHn1yHg=w426-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmTMAQi4XhCoEynQMwWW_ums8Yxbzw3NHo1K4NqaIxPljiCjLYp6Qf3oieAioWXnQ32p4QotfBlbrPtmf3LWu2HVJ1HWtRsD6m5lCyFivq9FOOxPK0qIOrKSY5Ux7rnHDUvHn1yHg=w426-h240-k-no",
    coordinates: { lat: -15.7682344, lng: -47.8864097 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Karaok%C3%AA%20Backstage%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7682344,-47.8864097&navigate=yes",
  },
  {
    id: "estufa-botequim",
    name: "Estufa Botequim",
    category: "Boteco",
    neighborhood: "Asa Norte",
    rating: 3,
    description: "Boteco raiz: cerveja gelada e petisco.",
    review: "Esse lugar era o antigo Le Parisien, conhecido pelos ótimos pratos que serviam ali. O dono decidiu mudar o foco e criou o Estufa, com uma pegada de boteco mineiro (com as estufas etc.), mas não emplaca: as coisas parecem sempre muito velhas e o atendimento passa a impressão de que não querem te atender, o que é bem chato.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqppaacWepDleaVYiKZh6sH55lF5t6ZoGNVQwM6Gw7xWRUDV2PepNLK5Mi8B8Qa8Y38PNLScn_F3EU_qH677pz1trGef0TpNgXE03hhA9ZcyJvk40WMj5eU6EGXjz-bQTVs1op=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqppaacWepDleaVYiKZh6sH55lF5t6ZoGNVQwM6Gw7xWRUDV2PepNLK5Mi8B8Qa8Y38PNLScn_F3EU_qH677pz1trGef0TpNgXE03hhA9ZcyJvk40WMj5eU6EGXjz-bQTVs1op=w408-h306-k-no",
    coordinates: { lat: -15.7776215, lng: -47.8832131 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Estufa%20Botequim%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7776215,-47.8832131&navigate=yes",
  },
  {
    id: "house-music-bar-karaoke",
    name: "House Music Bar Karaokê",
    category: "Karaokê",
    neighborhood: "Asa Norte",
    rating: 3,
    description: "Bar com karaokê pra soltar a voz.",
    review: "É dos mesmos donos do Karaokê Backstage, mas aqui é um pouco diferente: o espaço é menor e fica escondido atrás da quadra, o que é meio estranho. O problema principal é a comida, que me pareceu pior do que a do outro e com aparência de velha — e isso inclui os drinks, que são bem esquisitos.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnXsf2-pxRQ6cGzYat3T8YO1jKM4zpBeQvMm_oTjA-moExYETbZIAZxZdyAf6L4eQnNN0SwbSRq3pvcJswRV2xVipIkPEItTEvYYoaI4fFiOU_R94ycG8Ba-Ip8h1iKH4CWmnNL=w426-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnXsf2-pxRQ6cGzYat3T8YO1jKM4zpBeQvMm_oTjA-moExYETbZIAZxZdyAf6L4eQnNN0SwbSRq3pvcJswRV2xVipIkPEItTEvYYoaI4fFiOU_R94ycG8Ba-Ip8h1iKH4CWmnNL=w426-h240-k-no",
    coordinates: { lat: -15.7811197, lng: -47.8856274 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=House%20Music%20Bar%20Karaok%C3%AA%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7811197,-47.8856274&navigate=yes",
  },
  {
    id: "chao-de-estrelas",
    name: "Chão de Estrelas",
    category: "Pizzaria",
    neighborhood: "Asa Norte",
    rating: 4.8,
    description: "Pizzas assadas na hora.",
    review: "Essa pizzaria me surpreendeu de verdade: tem qualidade, o preço é muito bom e o atendimento também. Só não leva nota máxima pela pouca variedade de pizzas e porque as apresentações de música ficam altas demais quando começam, o que atrapalha um pouco. De resto, é tudo muito bom, inclusive os drinks.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3FNu8H1Y4EiXMHfV2u0w7WDPEqKCUBZBAl7Gaxpa70gznTX_6XaiQOl7E8rwLFjj6xD6sINYA0kPqQiu6GhOYbX0q7QgHIGqHdTZIv6sqHRPye5KhNTmVrPZQJrEPGLL-bn0dK7hhdT4=w426-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3FNu8H1Y4EiXMHfV2u0w7WDPEqKCUBZBAl7Gaxpa70gznTX_6XaiQOl7E8rwLFjj6xD6sINYA0kPqQiu6GhOYbX0q7QgHIGqHdTZIv6sqHRPye5KhNTmVrPZQJrEPGLL-bn0dK7hhdT4=w426-h240-k-no",
    coordinates: { lat: -15.7809785, lng: -47.8858538 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ch%C3%A3o%20de%20Estrelas%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7809785,-47.8858538&navigate=yes",
  },
  {
    id: "loma-cafe",
    name: "Loma Café",
    category: "Cafeteria",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Cafeteria pra um bom café.",
    review: "A melhor cafeteria em que você pode ir. O café é ótimo (não sei qual é a fazenda, mas é excelente) e, além dele, o brunch, os doces e os salgados são maravilhosos. Não é à toa que vão abrir uma nova unidade em breve (até a data deste review, ainda não tinha aberto).",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkRCstTzpeTA-8FWQ5sjNkwzJibmSGWYajdRo9NmUkwIPjbH1DixH4OsiO_P15qOGovUwMsZRxVQkpgS0ZPlvUot9L_Cu4SbhMDkVQGtGZWnpsh6aTPb0WTokZJyKbNblaysfai5NrW6WYw=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkRCstTzpeTA-8FWQ5sjNkwzJibmSGWYajdRo9NmUkwIPjbH1DixH4OsiO_P15qOGovUwMsZRxVQkpgS0ZPlvUot9L_Cu4SbhMDkVQGtGZWnpsh6aTPb0WTokZJyKbNblaysfai5NrW6WYw=w408-h544-k-no",
    coordinates: { lat: -15.7805735, lng: -47.8851435 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Loma%20Caf%C3%A9%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7805735,-47.8851435&navigate=yes",
  },
  {
    id: "patinho-feio-bar",
    name: "Patinho Feio Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4.5,
    description: "Bar com petiscos e cerveja gelada.",
    review: "O lugar é muito bom, fácil de chegar e com estacionamento seguro e organizado. O que peca é o preço: é muito caro. A qualidade das coisas é ótima, mas o valor é de matar, e ainda há pouca variedade de drinks e de comidas para compartilhar.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJ029sEmbA-aGkHIyn7Q7toUQp7_VHOrzZRPibhxCZG2jtBSy685utrPnCgk-14BIOWuFw_G37k-fUzJTVX3e_B5MMXNgsvF70ybd_R-ZqT3ZFuML9LSDw_IDYZIilo1j-VghkH2E_kvgS=w408-h611-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJ029sEmbA-aGkHIyn7Q7toUQp7_VHOrzZRPibhxCZG2jtBSy685utrPnCgk-14BIOWuFw_G37k-fUzJTVX3e_B5MMXNgsvF70ybd_R-ZqT3ZFuML9LSDw_IDYZIilo1j-VghkH2E_kvgS=w408-h611-k-no",
    coordinates: { lat: -15.7807034, lng: -47.8824631 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Patinho%20Feio%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7807034,-47.8824631&navigate=yes",
  },
  {
    id: "bolos-do-flavio",
    name: "Bolos do Flávio",
    category: "Sobremesas",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Doces e sobremesas.",
    review: "Quer comprar bolo para um lanche da tarde ou uma confraternização? Compre no Bolos do Flávio: é muito bem feito e tem recheios maravilhosos.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnkl9Zr1-g1hcj9Q_7qzVPCoXspwrdorv2rJpxqZbm9KA-7LLPeQJjk-CGOvAQX9_i2Uu_S_EVSlmtJMrQ1T88zWwc9YV6CYM4Vb8rxnzIGnwVhjA3ovr_1tu3OzSj593qKa72IDH1lWhKS=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnkl9Zr1-g1hcj9Q_7qzVPCoXspwrdorv2rJpxqZbm9KA-7LLPeQJjk-CGOvAQX9_i2Uu_S_EVSlmtJMrQ1T88zWwc9YV6CYM4Vb8rxnzIGnwVhjA3ovr_1tu3OzSj593qKa72IDH1lWhKS=w408-h306-k-no",
    coordinates: { lat: -15.7801818, lng: -47.8759424 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bolos%20do%20Fl%C3%A1vio%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7801818,-47.8759424&navigate=yes",
  },
  {
    id: "cantucci-osteria-inforno",
    name: "Cantucci Osteria / Inforno",
    category: "Italiana",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Cozinha italiana.",
    review: "Esse é meu lugar favorito, disparado. Gosto de ir com os amigos e também é ótimo para um date. No mesmo espaço funcionam três casas: o Cantucci, o Grano e Oliva e o Inforno. O Cantucci é focado em massas e pizza, o Inforno é um hambúrguer na massa de pizza e o Grano e Oliva, se não me engano, é voltado para os vinhos. Tudo ali é bom: o atendimento é impecável, a comida é saborosa, o preço é muito justo e o clima do lugar é incrível.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRhzPSsh-JJv-3Asiqf0RG2UCOnrB12aMwl_ZbKsxaGqMNUlQ54tvOy2xvlKjwCU3mdfNk3j_2T_Ek7sJhkT7BRp3kXUJUw1YGCNR1jgq6OzjaQ5wDjDGFJjPZXVeErFkBREVTww=w516-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRhzPSsh-JJv-3Asiqf0RG2UCOnrB12aMwl_ZbKsxaGqMNUlQ54tvOy2xvlKjwCU3mdfNk3j_2T_Ek7sJhkT7BRp3kXUJUw1YGCNR1jgq6OzjaQ5wDjDGFJjPZXVeErFkBREVTww=w516-h240-k-no",
    coordinates: { lat: -15.7798304, lng: -47.8752221 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cantucci%20Osteria%20%2F%20Inforno%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7798304,-47.8752221&navigate=yes",
  },
  {
    id: "loucos-por-carne",
    name: "Loucos por Carne",
    category: "Carnes",
    neighborhood: "Asa Norte",
    rating: 4.9,
    description: "Casa de carnes.",
    review: "Levei minha família aqui para comemorar uma formatura e foi muito bom. Tem uma tábua de carnes incrível, e consegui pedir a minha mal passada (o ponto correto!) enquanto pedia algumas bem passadas para meu pai e minha mãe — e o restaurante atendeu tudo sem reclamar. Só não recebe nota máxima porque, infelizmente, o preço é bem salgado, mas vale a pena quando você não quer ir a um rodízio.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnwRFEU1Hc8t8gUiaAWpWE8IhHoIPhagSANjn7Ht9YlsXSzr3wdhW-NyvvOIbg3hOxBJnwxhS41RybLQEfPLpGlQoKudu-sRTTGe-1FyKXxSYStIvnQLZt-tfDGfzRjw8oHH7ML=w408-h612-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnwRFEU1Hc8t8gUiaAWpWE8IhHoIPhagSANjn7Ht9YlsXSzr3wdhW-NyvvOIbg3hOxBJnwxhS41RybLQEfPLpGlQoKudu-sRTTGe-1FyKXxSYStIvnQLZt-tfDGfzRjw8oHH7ML=w408-h612-k-no",
    coordinates: { lat: -15.7838424, lng: -47.8783296 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Loucos%20por%20Carne%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7838424,-47.8783296&navigate=yes",
  },
  {
    id: "deboche-bar",
    name: "Deboche Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Bar pra tomar uma com a galera.",
    review: "Esse é o meu bar favorito. Desde que conheci, sempre volto. Há DJs tocando e, na maioria das vezes, as músicas são muito boas. Além disso, os petiscos e os drinks são maravilhosos — nunca comi ou bebi nada ruim nesse lugar.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnr1psOZoE7amZKithywTWwf0clHW_uWuliCvY1sWgzJMXxP-uh1hdNQS5eQrklBeV3FvQtz9glBws7Cr1wHQL7AfEFTqVzJdKzqgtLft-q1LvFEfKy2cTMOs1vgk33PZGwIVA=w408-h272-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnr1psOZoE7amZKithywTWwf0clHW_uWuliCvY1sWgzJMXxP-uh1hdNQS5eQrklBeV3FvQtz9glBws7Cr1wHQL7AfEFTqVzJdKzqgtLft-q1LvFEfKy2cTMOs1vgk33PZGwIVA=w408-h272-k-no",
    coordinates: { lat: -15.7839441, lng: -47.8785245 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Deboche%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7839441,-47.8785245&navigate=yes",
  },
  {
    id: "fosters-burguer",
    name: "Fosters Burguer",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 4.6,
    description: "Hamburgueria.",
    review: "É o básico bem feito: um smash burguer de qualidade. Por ser uma rede, porém, o atendimento poderia ser melhor — peca um pouco nesse ponto.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnIvOcalYctg9Bnt7vo-VWeWsDIAksJVN8WSqtL6THC-SULbP1J-ga89YarrTsztWO4vuYGE6cvUkcOYCsGVXHd9e3eW2IElSsVLcPtWNqKftZYy2SiVcKJPXzwh-xl8V1feyYQ=w408-h545-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnIvOcalYctg9Bnt7vo-VWeWsDIAksJVN8WSqtL6THC-SULbP1J-ga89YarrTsztWO4vuYGE6cvUkcOYCsGVXHd9e3eW2IElSsVLcPtWNqKftZYy2SiVcKJPXzwh-xl8V1feyYQ=w408-h545-k-no",
    coordinates: { lat: -15.7371429, lng: -47.896769 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fosters%20Burguer%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7371429,-47.896769&navigate=yes",
  },
  {
    id: "the-black-beef-asa-norte",
    name: "The Black Beef Asa Norte",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Casa de hambúrguer.",
    review: "Me surpreendeu. À primeira vista, o lugar parece ser de outro estilo, mas os hambúrgueres são ótimos e o atendimento foi muito bom.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHronmOLinnn2e1X-Te705OXo0TDDQEwVCOmU2jTQ-1Wc4KVfhsKMqF1PExRHEINlwZyfDSLlqngoA4_Te2u7HJt1vkcPSsEWGMcav56RtsNfab1VuTcGLPlwKB07UgejfbZFErw=w532-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHronmOLinnn2e1X-Te705OXo0TDDQEwVCOmU2jTQ-1Wc4KVfhsKMqF1PExRHEINlwZyfDSLlqngoA4_Te2u7HJt1vkcPSsEWGMcav56RtsNfab1VuTcGLPlwKB07UgejfbZFErw=w532-h240-k-no",
    coordinates: { lat: -15.7835275, lng: -47.8784994 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Black%20Beef%20Asa%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7835275,-47.8784994&navigate=yes",
  },
  {
    id: "origen-bar",
    name: "Origen Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 3.5,
    description: "Point de happy hour na Asa Norte.",
    review: "Infelizmente, o lugar é muito caro. Há vários drinks diferentes, mas fica quase impossível experimentá-los: chega a custar 40 reais um único drink. A comida segue a mesma linha; o hambúrguer, principalmente, é pequeno e caro — e ainda não vem como combo, o que piora.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkLu6JdgopMTDAMQCfAybd-HMDm-N9i3JjOYVF2hJc2xX7J6HORCYknB7t6_80B9dziTx_g6g5bL5Wm2Jcmn8vCr-JJjhKJ1jb0DLYTjWdmeeoUCLIbavQdHRx-9L14FUWZAbKTFHknH358=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkLu6JdgopMTDAMQCfAybd-HMDm-N9i3JjOYVF2hJc2xX7J6HORCYknB7t6_80B9dziTx_g6g5bL5Wm2Jcmn8vCr-JJjhKJ1jb0DLYTjWdmeeoUCLIbavQdHRx-9L14FUWZAbKTFHknH358=w408-h544-k-no",
    coordinates: { lat: -15.7772478, lng: -47.8783616 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Origen%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7772478,-47.8783616&navigate=yes",
  },
  {
    id: "superquadra-bar-e-mane-mercado",
    name: "Superquadra Bar e Mané Mercado",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4.5,
    description: "Bar descontraído pra sentar e beber.",
    review: "Um ótimo lugar para comer uma carne de churrasco bem feita. Eles têm essa unidade na Asa Norte e outra no Mané Mercado, ambas com a mesma proposta; se forem, peçam o pastrami, que é maravilhoso nos dois. Na unidade da Asa Norte, porém, percebi que é um espaço voltado a receber os amigos mais velhos do chef, e o foco acaba ficando neles — não sei se foi só um dia de azar quando fui.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlmaUnXanC72EvXlhd04YqgFCz4ZZaD2sNRuugpjjlK0v9mR9biic-icwOflUa8j862WqhPyxOgrQV8cn91SOutHyuDco5RmRh7UizaUrKLHOPy6RizcHct_5umV8ajjF2bcaxY9g=w408-h408-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlmaUnXanC72EvXlhd04YqgFCz4ZZaD2sNRuugpjjlK0v9mR9biic-icwOflUa8j862WqhPyxOgrQV8cn91SOutHyuDco5RmRh7UizaUrKLHOPy6RizcHct_5umV8ajjF2bcaxY9g=w408-h408-k-no",
    coordinates: { lat: -15.773602, lng: -47.8769594 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Superquadra%20Bar%20e%20Man%C3%A9%20Mercado%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.773602,-47.8769594&navigate=yes",
  },
  {
    id: "tracado-bar",
    name: "Traçado Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4.9,
    description: "Bar com petiscos e cerveja gelada.",
    review: "Fui uma única vez e não consegui avaliar com profundidade, mas notei que os drinks são caros. Essa, no entanto, é justamente a proposta: um lugar focado em coquetelaria, com drinks diferentes. O único petisco que provei também estava muito bom. Se você aprecia coquetelaria e bons drinks, com certeza vai gostar.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3YZCrFqfBm2WRXzhevWNs86uHxsziDsAkNBPcXBTVOn-2MwB3QG8A9Dj3t5-1ECFRQJaZ2OITP-sdAry6s9OxqSDcyT6AaTaD9wWouD798nVJFL8D_IJcsFO6W4FO0inVR2TN=w408-h725-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3YZCrFqfBm2WRXzhevWNs86uHxsziDsAkNBPcXBTVOn-2MwB3QG8A9Dj3t5-1ECFRQJaZ2OITP-sdAry6s9OxqSDcyT6AaTaD9wWouD798nVJFL8D_IJcsFO6W4FO0inVR2TN=w408-h725-k-no",
    coordinates: { lat: -15.7735219, lng: -47.876468 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tra%C3%A7ado%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7735219,-47.876468&navigate=yes",
  },
  {
    id: "los-baristas-cafes",
    name: "Los Baristas Cafés",
    category: "Cafeteria",
    neighborhood: "Asa Norte",
    rating: 4,
    description: "Café e quitutes pra relaxar.",
    review: "O lugar é bem bacana e dá para trabalhar em home office ali. O café, infelizmente, não achei tão bom; além disso, a comida é diferente demais, o que acabou me desanimando de comer lá.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmghuLWMd7pbI4IyopMIdhY4UmXCujNxcZKzVErimAoWla4Xg0_PunvJ485xO_Y9dKeLKiXJjsSXn8td-fjQYf-Bn-vek0Dw6JXMl2_WXkIWxQJIu0xZ40NM9FRPldElDGCzwuYcw=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmghuLWMd7pbI4IyopMIdhY4UmXCujNxcZKzVErimAoWla4Xg0_PunvJ485xO_Y9dKeLKiXJjsSXn8td-fjQYf-Bn-vek0Dw6JXMl2_WXkIWxQJIu0xZ40NM9FRPldElDGCzwuYcw=w408-h306-k-no",
    coordinates: { lat: -15.7736355, lng: -47.8765592 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Los%20Baristas%20Caf%C3%A9s%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7736355,-47.8765592&navigate=yes",
  },
  {
    id: "hermanito-mexican-food-asa-norte",
    name: "Hermanito Mexican Food Asa Norte",
    category: "Mexicana",
    neighborhood: "Asa Norte",
    rating: 4,
    description: "Comida mexicana.",
    review: "A nota talvez não reflita bem a experiência, porque é um lugar bom. Ainda assim, a comida mexicana é tão simples que fico com a sensação de que faltava alguma coisa, e isso me deixou confuso. Não me leve a mal: o atendimento é ótimo e a comida é boa, mas falta um algo a mais.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZRDTH1UCxqaWK5sxIlqYy8iRv-KdE1dyigcFoUoutzP-zvP28GxrxwmabQkfODKTPs2xJ4d1MUAAduAcmbZaI-FXNDq50DGYcsUZtwybGbDjou5gz6bqL9O0oZvOhNbFK8M3yna7HxyfC=w408-h408-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZRDTH1UCxqaWK5sxIlqYy8iRv-KdE1dyigcFoUoutzP-zvP28GxrxwmabQkfODKTPs2xJ4d1MUAAduAcmbZaI-FXNDq50DGYcsUZtwybGbDjou5gz6bqL9O0oZvOhNbFK8M3yna7HxyfC=w408-h408-k-no",
    coordinates: { lat: -15.7731936, lng: -47.8769661 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hermanito%20Mexican%20Food%20Asa%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7731936,-47.8769661&navigate=yes",
  },
  {
    id: "carcassonne-pub",
    name: "Carcassonne Pub",
    category: "Pub",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Pub com cerveja e clima de rock.",
    review: "Nem sei por onde começar: é um dos meus lugares preferidos. É um bar com vários jogos disponíveis e muito divertido. Os drinks são bons e há petiscos e pizzas muito gostosos. O atendimento é ótimo — os atendentes são atenciosos e explicam cada jogo novo caso você não conheça.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6OVoTPVguTL7Q80VpcapN55huTp7lUvxYCu1U0RyBbPSP32ZbTy99VIpz4m1aiNcRm_Lq7D-s-C8aIIEHqz3ICv4ojp6LXtzSqCDT6GCAkcOuAi7opg9XYPHKAiiTZCJk4QCkvQ=w408-h611-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6OVoTPVguTL7Q80VpcapN55huTp7lUvxYCu1U0RyBbPSP32ZbTy99VIpz4m1aiNcRm_Lq7D-s-C8aIIEHqz3ICv4ojp6LXtzSqCDT6GCAkcOuAi7opg9XYPHKAiiTZCJk4QCkvQ=w408-h611-k-no",
    coordinates: { lat: -15.765908, lng: -47.8771394 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Carcassonne%20Pub%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.765908,-47.8771394&navigate=yes",
  },
  {
    id: "pizza-cesar-asa-norte",
    name: "Pizza Cesar Asa Norte",
    category: "Pizzaria",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Pizzaria.",
    review: "O que dizer? É a melhor pizza da Asa Norte no delivery. O sabor das pizzas é incrível, chega quentinha, e a de cinco queijos é de babar só de escrever sobre ela.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkyoL18-C9bV8FsNYqI5Eo5Zi_BFYLTxL02vHEHxuJgr5OyKicmbmUsGMjLzbQj1jtl8_GzoUqdKST83_JvWjLuGCSIbssktx9mBAGY_oshukOozRXWVITx_geT03Kpl-QpvJUrtQ=w426-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkyoL18-C9bV8FsNYqI5Eo5Zi_BFYLTxL02vHEHxuJgr5OyKicmbmUsGMjLzbQj1jtl8_GzoUqdKST83_JvWjLuGCSIbssktx9mBAGY_oshukOozRXWVITx_geT03Kpl-QpvJUrtQ=w426-h240-k-no",
    coordinates: { lat: -15.7667888, lng: -47.8780425 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pizza%20Cesar%20Asa%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7667888,-47.8780425&navigate=yes",
  },
  {
    id: "o-concorrente",
    name: "O Concorrente",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Hamburgueria.",
    review: "Não há o que reclamar: um hambúrguer simples e bem feito. Fica na rua universitária, com aquele público que vai para beber, e mesmo assim o atendimento é ótimo e bem atencioso.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnEL2q8MJBOx9YvDzlarBlYUkykzLp8GQ7p_dnoOJyLa2sKeSBC6fM3PFJMiEL4zqlJZniQn5f2HF1LxtQCM5-k8qTn8TC12U-FTW1TXv_3UeS4kNHWh4kzO0CBtGPcscso8g=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnEL2q8MJBOx9YvDzlarBlYUkykzLp8GQ7p_dnoOJyLa2sKeSBC6fM3PFJMiEL4zqlJZniQn5f2HF1LxtQCM5-k8qTn8TC12U-FTW1TXv_3UeS4kNHWh4kzO0CBtGPcscso8g=w408-h544-k-no",
    coordinates: { lat: -15.7598953, lng: -47.8803173 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=O%20Concorrente%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7598953,-47.8803173&navigate=yes",
  },
  {
    id: "geleia-burguer-asa-norte",
    name: "Geleia Burguer Asa Norte",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Hamburgueria.",
    review: "Não há o que reclamar: um hambúrguer simples e bem feito. Fica na rua universitária, com aquele público que vai para beber, e mesmo assim o atendimento é ótimo e bem atencioso.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmuPl2u22siyGBy_cJ4oPlKmslyJCjnOxFOCE3AqmXUbOT87tflNo7Ue8Sq_iigpq189AwJtNmhS0tt-kuwyjfdyc6fd6XqBP7aqjfz-y2R37kLnCvCM9aOqoFOJ607jZJ9NHwATw=w408-h418-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmuPl2u22siyGBy_cJ4oPlKmslyJCjnOxFOCE3AqmXUbOT87tflNo7Ue8Sq_iigpq189AwJtNmhS0tt-kuwyjfdyc6fd6XqBP7aqjfz-y2R37kLnCvCM9aOqoFOJ607jZJ9NHwATw=w408-h418-k-no",
    coordinates: { lat: -15.7599043, lng: -47.8802117 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Geleia%20Burguer%20Asa%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7599043,-47.8802117&navigate=yes",
  },
  {
    id: "alfredo-s-pizzaria",
    name: "Alfredo's Pizzaria",
    category: "Pizzaria",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Pizzas assadas na hora.",
    review: "Não vou falar do comum, e sim do incomum: a pizza de abobrinha deles é maravilhosa — o que já dá para perceber que todas as outras também são muito boas. O pessoal é super gente boa; você pode fazer o pedido e ir para o Pôr do Sol (PDS) que eles entregam lá mesmo. Excelente.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnagwcuPKrG8RuxYz2rK3mNiPUysk9vjphZDjbI61e9ZjmfRRqo3s1rlQOaD53K_stXdE-koRhlezkE-OkDCeyWRKvBS1o9tbHs5BizIFMrVX_fSNUgwdIkjjwMJFLbkLAfuVVr=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnagwcuPKrG8RuxYz2rK3mNiPUysk9vjphZDjbI61e9ZjmfRRqo3s1rlQOaD53K_stXdE-koRhlezkE-OkDCeyWRKvBS1o9tbHs5BizIFMrVX_fSNUgwdIkjjwMJFLbkLAfuVVr=w408-h306-k-no",
    coordinates: { lat: -15.760118, lng: -47.8798244 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Alfredo's%20Pizzaria%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.760118,-47.8798244&navigate=yes",
  },
  {
    id: "spot-burguers",
    name: "Spot Burguers",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Casa de hambúrguer.",
    review: "Não há o que reclamar: um hambúrguer simples e bem feito. Fica na rua universitária, com aquele público que vai para beber, e mesmo assim o atendimento é ótimo e bem atencioso.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl1WEUjDKl29J3bxlT1w3t1qZIuvQYbCP8QrqOVmLbINxCqVRKoix_7zPUG27ShMO2AOnk1R47HuCBbgSsnfl3hYxQUWB6bLC3hiRCVoZzucQgzXbx30SbYs_m_znAVeS-Ptd9duw=w426-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl1WEUjDKl29J3bxlT1w3t1qZIuvQYbCP8QrqOVmLbINxCqVRKoix_7zPUG27ShMO2AOnk1R47HuCBbgSsnfl3hYxQUWB6bLC3hiRCVoZzucQgzXbx30SbYs_m_znAVeS-Ptd9duw=w426-h240-k-no",
    coordinates: { lat: -15.759987, lng: -47.8806878 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Spot%20Burguers%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.759987,-47.8806878&navigate=yes",
  },
  {
    id: "bar-por-do-sol-pds",
    name: "Bar Pôr do Sol (PDS)",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4.5,
    description: "Point de happy hour na Asa Norte.",
    review: "Um clássico de Brasília. Esses lugares da rua universitária são difíceis de avaliar, porque você já vai sabendo o que esperar: comida ok, bebida barata e forte e atendimento fraco. Você vai justamente para isso — beber, comer e conversar besteira na mesa do bar.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn1ekgVU7ifnz3SH7o0rYiovzp9QW-q-tnViyxMVZul8WbLgklPwRgihAR-On4aAG8ZfiWUQWvRnevm077TRTilJw4w22PMcVSLcvvD9ah75XQyMBwNf6rtPyNxl6InQvPU5w1j=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn1ekgVU7ifnz3SH7o0rYiovzp9QW-q-tnViyxMVZul8WbLgklPwRgihAR-On4aAG8ZfiWUQWvRnevm077TRTilJw4w22PMcVSLcvvD9ah75XQyMBwNf6rtPyNxl6InQvPU5w1j=w408-h544-k-no",
    coordinates: { lat: -15.7600246, lng: -47.8796824 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar%20P%C3%B4r%20do%20Sol%20(PDS)%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7600246,-47.8796824&navigate=yes",
  },
  {
    id: "vale-da-lua",
    name: "Vale da Lua",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4.5,
    description: "Bar descontraído pra sentar e beber.",
    review: "Um clássico de Brasília. Esses lugares da rua universitária são difíceis de avaliar, porque você já vai sabendo o que esperar: comida ok, bebida barata e forte e atendimento fraco. Você vai justamente para isso — beber, comer e conversar besteira na mesa do bar. A diferença é que aqui eles vendem pizza, e é uma delícia.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmGppHpFCokMy6oIvcSFLsFj3VPuziWQQT8LezElYG8T-UxM57DbE_OHrJjyStGTpgonWG4XZJdhdLQuQyMvwfQmwFajRQGsmYVUv4o-4r4kMAoehRH4DYC7xcfBPUHr_SDwlIm8H0T7JDH=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmGppHpFCokMy6oIvcSFLsFj3VPuziWQQT8LezElYG8T-UxM57DbE_OHrJjyStGTpgonWG4XZJdhdLQuQyMvwfQmwFajRQGsmYVUv4o-4r4kMAoehRH4DYC7xcfBPUHr_SDwlIm8H0T7JDH=w408-h544-k-no",
    coordinates: { lat: -15.7599788, lng: -47.8795014 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vale%20da%20Lua%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7599788,-47.8795014&navigate=yes",
  },
  {
    id: "vogue-bar",
    name: "Vogue Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Bar com petiscos e cerveja gelada.",
    review: "Nunca tinha ido, mas é muito bom. Os drinks e as comidas agradam, e o Vogue é focado em narguilé; então, se você curte, vale a pena ir.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkKH9jHUlCb_lev-erUv6jY94J1wkJ6ZM4screD_rIdjXjCkx8fe-OdOZws79RNCD7Kjl7mN4M70pGRMTx7_pPjKQDL8_g6ys4bjeigec7gTWJiGMaGFCK2-OXcmDVtppWhHQIF=w532-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkKH9jHUlCb_lev-erUv6jY94J1wkJ6ZM4screD_rIdjXjCkx8fe-OdOZws79RNCD7Kjl7mN4M70pGRMTx7_pPjKQDL8_g6ys4bjeigec7gTWJiGMaGFCK2-OXcmDVtppWhHQIF=w532-h240-k-no",
    coordinates: { lat: -15.7594981, lng: -47.8797003 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vogue%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7594981,-47.8797003&navigate=yes",
  },
  {
    id: "dog-do-barto",
    name: "Dog do Bartô",
    category: "Lanches",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Lanches e sanduíches.",
    review: "O melhor cachorro-quente para comer depois de uma noite bebendo. É muito bem feito e simplesmente maravilhoso.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlzPqh6J-oJgY4byllRLVn8-43W2phpe1-b5djM-wQ2auou_6Obube1bKDqA72Tx5J6KSbEIA30-G4qV4k-84lFF3Y05RAVBAoJp55upYHGK8B8cOw5EWBOiY2qV8vH3kSU7wY=w426-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlzPqh6J-oJgY4byllRLVn8-43W2phpe1-b5djM-wQ2auou_6Obube1bKDqA72Tx5J6KSbEIA30-G4qV4k-84lFF3Y05RAVBAoJp55upYHGK8B8cOw5EWBOiY2qV8vH3kSU7wY=w426-h240-k-no",
    coordinates: { lat: -15.7598002, lng: -47.879954 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dog%20do%20Bart%C3%B4%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7598002,-47.879954&navigate=yes",
  },
  {
    id: "boteco-seu-gerson",
    name: "Boteco Seu Gerson",
    category: "Boteco",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Boteco de esquina pra bater papo e beber.",
    review: "Esse lugar é curioso. Fomos, sentamos e pedimos uma caipirinha; em certo momento a galera já queria ir embora porque não estava animado, até que fizeram uma promoção que mudou tudo: na compra de uma caipirinha, você ganhava outra igual. Nunca bebi tanto — a caipirinha custava 20 reais e, com a promoção, saíam duas, ficando 10 cada. Foi ótimo.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlf1VoPemG1sUk4MdaXIjF0XAZygWe2Rom-SomK5YY0cWUUgErGRvUlC1144M-hPzSDni7TIXMS6UH17NxQFkIuXh5YtgXaWHQMqvnHASIFkw7IdyJcyYxAh4y-7wzFbPrTjbOXUIn9du_f=w408-h725-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlf1VoPemG1sUk4MdaXIjF0XAZygWe2Rom-SomK5YY0cWUUgErGRvUlC1144M-hPzSDni7TIXMS6UH17NxQFkIuXh5YtgXaWHQMqvnHASIFkw7IdyJcyYxAh4y-7wzFbPrTjbOXUIn9du_f=w408-h725-k-no",
    coordinates: { lat: -15.7597398, lng: -47.8801581 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boteco%20Seu%20Gerson%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7597398,-47.8801581&navigate=yes",
  },
  {
    id: "esquenta-bar",
    name: "Esquenta Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4.5,
    description: "Bar pra tomar uma com a galera.",
    review: "É o único lugar daquela rua que me deixa com a sensação de mediano. A música é boa e o atendimento é ok, mas nunca foi um lugar que me prendeu por muito tempo, principalmente por conta do preço e do sabor dos drinks, que ficam no mais ou menos.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl_n5hW7ar38SX09YCvbzTdPykqkpmBQR5Bvo3dDkNzCu5iIRwfhn9wH5bVlkjeK-UYRnlXvijpelAMoqYkbEjKmA0Cm0fCe2hp04MvrGmx7g3p3ywNZOcniZmlPEebzStV2IrM=w408-h408-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl_n5hW7ar38SX09YCvbzTdPykqkpmBQR5Bvo3dDkNzCu5iIRwfhn9wH5bVlkjeK-UYRnlXvijpelAMoqYkbEjKmA0Cm0fCe2hp04MvrGmx7g3p3ywNZOcniZmlPEebzStV2IrM=w408-h408-k-no",
    coordinates: { lat: -15.7596947, lng: -47.8803988 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Eskenta%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7596947,-47.8803988&navigate=yes",
  },
  {
    id: "pipa-asa-norte",
    name: "Pipa Asa Norte",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Point de happy hour na Asa Norte.",
    review: "É difícil cravar uma nota: o lugar vive num eterno vai e volta, porque às vezes é ótimo e às vezes é ruim. A música é sempre boa, mas o público, em alguns dias, estraga o rolê — depende muito da noite. Ainda assim, esse caos tem o seu charme.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmu6xML2vXiHXDB4qAJUNTujbvrlcpAXAYK0ZK2MvDS9D53EFbJbXu9obw8maUzeOUW8M1otHCbqcj_gRMuY3NoK6hWh1-IPIdXiB3CtKoP669p6DJWpp-vs0293UEuOCHxxaZveE8neKNi=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmu6xML2vXiHXDB4qAJUNTujbvrlcpAXAYK0ZK2MvDS9D53EFbJbXu9obw8maUzeOUW8M1otHCbqcj_gRMuY3NoK6hWh1-IPIdXiB3CtKoP669p6DJWpp-vs0293UEuOCHxxaZveE8neKNi=w408-h306-k-no",
    coordinates: { lat: -15.7599253, lng: -47.8804846 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pipa%20Distribuidora%20de%20Drinks%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7599253,-47.8804846&navigate=yes",
  },
  {
    id: "boteco-sabia",
    name: "Boteco Sabiá",
    category: "Boteco",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Boteco raiz: cerveja gelada e petisco.",
    review: "Um ótimo achado. Acompanhei a abertura e posso dizer que tomei ali a melhor caipirinha da minha vida (caipirinha com raspa de rapadura). Os petiscos também são maravilhosos e, num dos dias em que fui, ainda ganhamos alguns drinks de cortesia — achei o máximo.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm-2kTjVlWRv-BMsoerbjVpzsiX9b6OUbbwP3WemKlf9y8DfPAF9PO1ivdvHLV16PnbGXsrhtlJAG_NXQ5tvzCWXXBwVDoE29mWEraJzz0IpGhS-5odoA_Kq_gGVEviuc-tgdTKidelyWIV=w408-h408-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm-2kTjVlWRv-BMsoerbjVpzsiX9b6OUbbwP3WemKlf9y8DfPAF9PO1ivdvHLV16PnbGXsrhtlJAG_NXQ5tvzCWXXBwVDoE29mWEraJzz0IpGhS-5odoA_Kq_gGVEviuc-tgdTKidelyWIV=w408-h408-k-no",
    coordinates: { lat: -15.7573162, lng: -47.8822719 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boteco%20Sabi%C3%A1%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7573162,-47.8822719&navigate=yes",
  },
  {
    id: "o-fi-de-vo",
    name: "O Fi de Vó",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Hamburgueria.",
    review: "Não tenho do que reclamar, só a agradecer por ter chegado à Asa Norte. O hambúrguer é delicioso e a batata é incrível, com um sabor agridoce marcante. Além disso, todo o design do lugar é lindo.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkMWN35vrLUfRt6DksHYqZNcBYQIbuzdL2E4_jjXaLCvMBPwpETftYpfR5ejsHjM0DG5Huq2l6ZirPJFGk-XntNFOMvc8RjZdYsWxxRl3KV2RJXFffEyKmMBgLnIfK9LFD3Iwei=w408-h725-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkMWN35vrLUfRt6DksHYqZNcBYQIbuzdL2E4_jjXaLCvMBPwpETftYpfR5ejsHjM0DG5Huq2l6ZirPJFGk-XntNFOMvc8RjZdYsWxxRl3KV2RJXFffEyKmMBgLnIfK9LFD3Iwei=w408-h725-k-no",
    coordinates: { lat: -15.7572285, lng: -47.8833031 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=O%20Fi%20de%20V%C3%B3%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7572285,-47.8833031&navigate=yes",
  },
  {
    id: "new-khoder-lounge-e-bar-asa-norte",
    name: "New Khoder Lounge e Bar Asa Norte",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 0,
    description: "Bar descontraído pra sentar e beber.",
    review: "É o pior lugar em que você pode ir. Reina a desorganização: ninguém anota os pedidos direito e o atendimento é horrível. E, sinceramente, foi a pior caipirinha que já tomei na vida. Ainda por cima não é barato — é o caos completo. Tenho certeza de que só continua aberto porque o narguilé deles é árabe de verdade, o que garante um público fiel.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJ3f0d9pXefyXZlzbvRGh9oj0XusgwTCS1B_kUoxWn0krcLBn3NGZcUZJRnMq_nr2tNQ4IDMoTwdg55dArVL-wy8eEUGQ8OyqlGoRgeKXh1bTSDyB9L1waPXmqCv9dKe-3tTGo=w408-h242-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJ3f0d9pXefyXZlzbvRGh9oj0XusgwTCS1B_kUoxWn0krcLBn3NGZcUZJRnMq_nr2tNQ4IDMoTwdg55dArVL-wy8eEUGQ8OyqlGoRgeKXh1bTSDyB9L1waPXmqCv9dKe-3tTGo=w408-h242-k-no",
    coordinates: { lat: -15.756605, lng: -47.8825559 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=New%20Khoder%20Lounge%20e%20Bar%20Asa%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.756605,-47.8825559&navigate=yes",
  },
  {
    id: "bilisco-bar",
    name: "Bilisco Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4.5,
    description: "Bar com petiscos e cerveja gelada.",
    review: "O lugar é bom e o atendimento também, mas achei os petiscos, as comidas e os drinks um pouco fracos. É aquela coisa: as técnicas usadas são do mais alto nível, mas não se traduzem em sabor. Tenho a sensação de que é elaborado demais.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-E1MpdXtdOzaR4soUiNnxoE60VWM9b2mK9KmbX9dF2bAHoUmqEiKcv0ayx1LL2d1qt17M_jgwfCNWqOftzqWLxlqpaJkl0l7WcMzL9S1Sev_yCRhu6s-AhE6gJREAyDSWo_mqrPQnG3E=w408-h271-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-E1MpdXtdOzaR4soUiNnxoE60VWM9b2mK9KmbX9dF2bAHoUmqEiKcv0ayx1LL2d1qt17M_jgwfCNWqOftzqWLxlqpaJkl0l7WcMzL9S1Sev_yCRhu6s-AhE6gJREAyDSWo_mqrPQnG3E=w408-h271-k-no",
    coordinates: { lat: -15.7469578, lng: -47.8833408 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bilisco%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7469578,-47.8833408&navigate=yes",
  },
  {
    id: "d-burguer",
    name: "D.Burguer",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Hamburgueria.",
    review: "É um hambúrguer ótimo, mas o que realmente me conquista é o espaço: o lugar recebe exposições de arte, e isso deixa a experiência maravilhosa.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLVJM3v7DZCPbSb8bg2RHMUeMuXv20Tx4XDb0XUiycZ_50RowOahFp_swVuZQ0VdFjyCShwAeSBPAJraAuFOgSTd4ZM6G6dp5ZWDRBQZRqPzjgpY6xHYmRmmrgxETRa1iSebGSVSLoF3o=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLVJM3v7DZCPbSb8bg2RHMUeMuXv20Tx4XDb0XUiycZ_50RowOahFp_swVuZQ0VdFjyCShwAeSBPAJraAuFOgSTd4ZM6G6dp5ZWDRBQZRqPzjgpY6xHYmRmmrgxETRa1iSebGSVSLoF3o=w408-h544-k-no",
    coordinates: { lat: -15.7470927, lng: -47.8830954 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=D.Burguer%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7470927,-47.8830954&navigate=yes",
  },
  {
    id: "taikan",
    name: "Taikan",
    category: "Japonesa",
    neighborhood: "Asa Norte",
    rating: 3.5,
    description: "Culinária japonesa (sushi e cia).",
    review: "É um sushi por peso que até é bom, mas depende muito do horário em que você vai: nem sempre as coisas parecem frescas.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmOXjnUFjodbSms2TRhb8PCRhqf0f0ooHPrcMd7U8hrePGjW2I5pUWPPek3P6lIAKLtoCepGYVolkw4gL8D3uhxMZ3LQt8ztceA5IONmO0wldEEZT-E7-KnLreSrfN5tVbIdaKsVw=w408-h271-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmOXjnUFjodbSms2TRhb8PCRhqf0f0ooHPrcMd7U8hrePGjW2I5pUWPPek3P6lIAKLtoCepGYVolkw4gL8D3uhxMZ3LQt8ztceA5IONmO0wldEEZT-E7-KnLreSrfN5tVbIdaKsVw=w408-h271-k-no",
    coordinates: { lat: -15.7475302, lng: -47.8834943 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Taikan%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7475302,-47.8834943&navigate=yes",
  },
  {
    id: "dona-lenha-forneria",
    name: "Dona Lenha Forneria",
    category: "Pizzaria",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Pizzaria.",
    review: "Caro, porém muito bom. É um ótimo lugar, principalmente para um date (confesso que não levaria meus amigos ali).",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlni-TuQFMWC2ha-kSLUlWb7yiy62v9PI0_xiazpKsoY_aga9gMc8C9Sdb0E3wiyTQzj69zF9igihAH2R5BDJzyuOQjo7yJe1sTL3YLZLy_s2vyJQWBjSFgjW5i3Zp345Fz7_ipng=w408-h612-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlni-TuQFMWC2ha-kSLUlWb7yiy62v9PI0_xiazpKsoY_aga9gMc8C9Sdb0E3wiyTQzj69zF9igihAH2R5BDJzyuOQjo7yJe1sTL3YLZLy_s2vyJQWBjSFgjW5i3Zp345Fz7_ipng=w408-h612-k-no",
    coordinates: { lat: -15.7472364, lng: -47.8835088 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dona%20Lenha%20Forneria%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7472364,-47.8835088&navigate=yes",
  },
  {
    id: "sante-13-asa-norte",
    name: "Santé 13 Asa Norte",
    category: "Bar",
    neighborhood: "Asa Norte",
    rating: 4.5,
    description: "Bar pra tomar uma com a galera.",
    review: "O lugar é bom, mas percebi que não é feito para quem vai sozinho. Me senti bastante incomodado por estar sozinho à mesa — embora isso talvez seja só impressão minha. É caro? Sim, com certeza, mas vale a pena para comemorar algo especial.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnh5Zk_fsk3Uhf8nhQsrkCHLcNtmaSYmMzkTS-qDfRIJgBKL1r2t792NTjm4OqSrjWA8LLnUdreWJNla5TAlTvaBcaiTOrFBl1jVrlyYAhHVZP4WB7dFvAZwurC50do52ndwzHG=w408-h408-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnh5Zk_fsk3Uhf8nhQsrkCHLcNtmaSYmMzkTS-qDfRIJgBKL1r2t792NTjm4OqSrjWA8LLnUdreWJNla5TAlTvaBcaiTOrFBl1jVrlyYAhHVZP4WB7dFvAZwurC50do52ndwzHG=w408-h408-k-no",
    coordinates: { lat: -15.7474333, lng: -47.8845824 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sant%C3%A9%2013%20Asa%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7474333,-47.8845824&navigate=yes",
  },
  {
    id: "masuda",
    name: "Masuda",
    category: "Japonesa",
    neighborhood: "Asa Norte",
    rating: 3,
    description: "Comida japonesa.",
    review: "É um mercado voltado à cultura asiática, mas que lugar caro. Absolutamente tudo ali é caro. Tem uma grande variedade de produtos, no entanto o preço pesa bastante.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlAyaamPNb6bhkTCft5UoFES6sTRYaJ7CTwI82EVjvtffhjhIkAgKpTCYrvyZW-mkZ14rg0hu5lFmK8wany7wN5xIEgeKxbJZSvorYzcVkthC4luukmDZos9LGNQKr9_2vBcES1u6q0lb0=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlAyaamPNb6bhkTCft5UoFES6sTRYaJ7CTwI82EVjvtffhjhIkAgKpTCYrvyZW-mkZ14rg0hu5lFmK8wany7wN5xIEgeKxbJZSvorYzcVkthC4luukmDZos9LGNQKr9_2vBcES1u6q0lb0=w408-h544-k-no",
    coordinates: { lat: -15.7452774, lng: -47.8874305 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Masuda%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7452774,-47.8874305&navigate=yes",
  },
  {
    id: "nazo-japanese-food",
    name: "Nazo Japanese Food",
    category: "Japonesa",
    neighborhood: "Asa Norte",
    rating: 3,
    description: "Culinária japonesa (sushi e cia).",
    review: "Chegamos ao review mais polêmico. O Nazo é adorado por muita gente, mas, sendo sincero, ele vive de história: o atendimento não é bom, o sushi caiu de qualidade e o preço é alto sem entregar o que cobra.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkxU8nwjG4fSYvbwSK9f3jv-4cj9JlQWI208BptM1iI7RD_WtcG1Oercjr-BuRMPxx_S3Xm1ySlF130xgm-qjX8fpy-evFczry8bVkMxmDVPAtIPbwM6Ytj3srxMlxzaTq5hpXc=w408-h612-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkxU8nwjG4fSYvbwSK9f3jv-4cj9JlQWI208BptM1iI7RD_WtcG1Oercjr-BuRMPxx_S3Xm1ySlF130xgm-qjX8fpy-evFczry8bVkMxmDVPAtIPbwM6Ytj3srxMlxzaTq5hpXc=w408-h612-k-no",
    coordinates: { lat: -15.74466, lng: -47.8865762 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nazo%20Japanese%20Food%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.74466,-47.8865762&navigate=yes",
  },
  {
    id: "sal-e-brasa-brasilia",
    name: "Sal e Brasa Brasília",
    category: "Churrascaria",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Carnes na brasa.",
    review: "Maravilhoso. Dependendo de quem te atende, fazem um churrasco muito bom, e os drinks também são excelentes, com uma variedade enorme de carnes. É caro? Sim, mas vale a experiência.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnhr-kdYwuk9IzGl54pFMO7Xy_kGncWXjxrWgGMk8rVDYy2P-jdHwQAm5Z48mulc7cxLeQXR8vgeKfD8jYWFllpXPEQDRRMkqLzX6z5f9qJNvccnhnNCxrv1xF87jSP9XMELpg5Knc5vv8b=w494-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnhr-kdYwuk9IzGl54pFMO7Xy_kGncWXjxrWgGMk8rVDYy2P-jdHwQAm5Z48mulc7cxLeQXR8vgeKfD8jYWFllpXPEQDRRMkqLzX6z5f9qJNvccnhnNCxrv1xF87jSP9XMELpg5Knc5vv8b=w494-h240-k-no",
    coordinates: { lat: -15.7895516, lng: -47.8868757 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sal%20e%20Brasa%20Bras%C3%ADlia%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7895516,-47.8868757&navigate=yes",
  },
  {
    id: "ssam",
    name: "SSAM",
    category: "Coreana",
    neighborhood: "Asa Norte",
    description: "Comida coreana.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlC9rUj-UCjVBaS0e72dV8HRztf-jER4UxquvT9tEEOidVtMN2lu_FNlDWbSowaTf6j9X_kcbUfbIQjBuKZ7MfA9_kO9akg9oDoUZPStauTmJufLDJo71ygMuQG8HLaUbb5nmR_=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlC9rUj-UCjVBaS0e72dV8HRztf-jER4UxquvT9tEEOidVtMN2lu_FNlDWbSowaTf6j9X_kcbUfbIQjBuKZ7MfA9_kO9akg9oDoUZPStauTmJufLDJo71ygMuQG8HLaUbb5nmR_=w408-h306-k-no",
    coordinates: { lat: -15.7955043, lng: -47.8893719 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=SSAM%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7955043,-47.8893719&navigate=yes",
  },
  {
    id: "chaco-brasilia",
    name: "Chaco Brasília",
    category: "Churrascaria",
    neighborhood: "Asa Norte",
    rating: 5,
    description: "Churrasco e cortes na brasa.",
    review: "Me surpreendeu, para ser sincero. É um lugar calmo dentro do Venâncio. A carne é bem feita, num estilo bastante argentino, com preço na medida certa e acompanhamentos muito bons. Nada a reclamar.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmjC7PqVMa7uUf-_AC-OTiooQdeAcd5iQyD9y5A9dxUaFu6MGPIoEzdB9gxkMSDoNdHgnXdRG4wmffR0hD1AXjml980XPqDgJdUV0CTZ8HrzFFYVplqJem2BPrK_gPs1Nw2tjZ65A=w408-h725-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmjC7PqVMa7uUf-_AC-OTiooQdeAcd5iQyD9y5A9dxUaFu6MGPIoEzdB9gxkMSDoNdHgnXdRG4wmffR0hD1AXjml980XPqDgJdUV0CTZ8HrzFFYVplqJem2BPrK_gPs1Nw2tjZ65A=w408-h725-k-no",
    coordinates: { lat: -15.7959966, lng: -47.8929291 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chaco%20Bras%C3%ADlia%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7959966,-47.8929291&navigate=yes",
  },
  // ============================================================
  // QUERO IR (sem rating/review — só referência)
  // ============================================================
  {
    id: "papy-massas",
    name: "Papy Massas",
    category: "Italiana",
    neighborhood: "Asa Norte",
    description: "Massas e sabores italianos.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnnQ-sTixKYnpCSrMLeOMNG_iO2ikzcYHWQZ9TuJVK_ZJ2sqgwr1fO5EdJdYUBDgSQtkzYugYCA47f3fWYDYdlt5qX1I8AXHqXk3nBYjO82jUpFm9vV0AJyE7L7CflZ7AuTiKyy=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnnQ-sTixKYnpCSrMLeOMNG_iO2ikzcYHWQZ9TuJVK_ZJ2sqgwr1fO5EdJdYUBDgSQtkzYugYCA47f3fWYDYdlt5qX1I8AXHqXk3nBYjO82jUpFm9vV0AJyE7L7CflZ7AuTiKyy=w408-h306-k-no",
    coordinates: { lat: -15.7530879, lng: -47.8949841 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Papy%20Massas%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7530879,-47.8949841&navigate=yes",
  },
  {
    id: "bimi",
    name: "Bimi",
    category: "Cafeteria",
    neighborhood: "Asa Norte",
    description: "Cafeteria pra um bom café.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQRQPmXG27-OOElNAyE3GukuL7SxO80KCKOzt2cUOF0Of1DGLIZxuWUR9KtWzRDYC_EFLPsVPV2HVp-rfm9fBYWZwUEyOv_njhnAi9qiqJIJB7OTz2uqLN4YMPRhZ3ICfGnotc=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQRQPmXG27-OOElNAyE3GukuL7SxO80KCKOzt2cUOF0Of1DGLIZxuWUR9KtWzRDYC_EFLPsVPV2HVp-rfm9fBYWZwUEyOv_njhnAi9qiqJIJB7OTz2uqLN4YMPRhZ3ICfGnotc=w408-h544-k-no",
    coordinates: { lat: -15.7428833, lng: -47.8979505 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bimi%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7428833,-47.8979505&navigate=yes",
  },
  {
    id: "madre-teresa-deli",
    name: "Madre Teresa Deli",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    description: "Casa de hambúrguer.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnFiX_qqeGw4g1sMLHjwiZswaZP2gBod2rjC0ODm5Jn0aIqd9d38Sqwt6JIUc3kJre4HJnPawoNTIpRvsrMmpQ3uKxtbzhxyo9E2z6p1eDodOq9X7uVRM3OZi4TOv2PZeIMqICoSFJ2WPhn=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnFiX_qqeGw4g1sMLHjwiZswaZP2gBod2rjC0ODm5Jn0aIqd9d38Sqwt6JIUc3kJre4HJnPawoNTIpRvsrMmpQ3uKxtbzhxyo9E2z6p1eDodOq9X7uVRM3OZi4TOv2PZeIMqICoSFJ2WPhn=w408-h544-k-no",
    coordinates: { lat: -15.7388418, lng: -47.9003807 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Madre%20Teresa%20Deli%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7388418,-47.9003807&navigate=yes",
  },
  {
    id: "adelia-padaria",
    name: "Adélia Padaria",
    category: "Padaria",
    neighborhood: "Asa Norte",
    description: "Padaria e confeitaria.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmYSV7IOFDSrY6M3T6R2d3NdifTPBLfmAI_dJrAXPN3dB-FzR41WNcqV4gxS9JH2d2adzYNGjX5d5gQC4Qqu5yDpIZeWzPobjK1FAy5jkx7YAVDcaNcj99usKzW2zjI5Vkl1zAI1-ioYeeY=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmYSV7IOFDSrY6M3T6R2d3NdifTPBLfmAI_dJrAXPN3dB-FzR41WNcqV4gxS9JH2d2adzYNGjX5d5gQC4Qqu5yDpIZeWzPobjK1FAy5jkx7YAVDcaNcj99usKzW2zjI5Vkl1zAI1-ioYeeY=w408-h544-k-no",
    coordinates: { lat: -15.7456635, lng: -47.8996061 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ad%C3%A9lia%20Padaria%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7456635,-47.8996061&navigate=yes",
  },
  {
    id: "izakaya-gaijin",
    name: "Izakaya Gaijin",
    category: "Japonesa",
    neighborhood: "Asa Norte",
    description: "Comida japonesa.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm5iAbjeSMZw4nE2Jof-T8h-P7dvYKi4pO7ArjJZof8fsiJSdSk9GyOjo635XXVnJUqOcIl5XEpnDQ1Xv-gtK_RCQqVYA0KoGS-zVSIsJU7gp8dhl3fxoU3n1XhyuY6nfMsy8RyEQ3bXqk=w408-h270-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm5iAbjeSMZw4nE2Jof-T8h-P7dvYKi4pO7ArjJZof8fsiJSdSk9GyOjo635XXVnJUqOcIl5XEpnDQ1Xv-gtK_RCQqVYA0KoGS-zVSIsJU7gp8dhl3fxoU3n1XhyuY6nfMsy8RyEQ3bXqk=w408-h270-k-no",
    coordinates: { lat: -15.7397697, lng: -47.8994159 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Izakaya%20Gaijin%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7397697,-47.8994159&navigate=yes",
  },
  {
    id: "bahea-asa-norte",
    name: "BAHEA Asa Norte",
    category: "Baiana",
    neighborhood: "Asa Norte",
    description: "Comida baiana.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlYyBEglFFSkRRwz0Q3RrB82MZ8SxleZg0CBizs2ohUyva-d-KolSzmpwuD0A6yw8w2PGdZeWhoooCqXotY3ikCmtiRXCYvNUu77VdyLDidpi3tEvwdeCcj9ph9nnvhxxnQWk9mEMNOLfH4=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlYyBEglFFSkRRwz0Q3RrB82MZ8SxleZg0CBizs2ohUyva-d-KolSzmpwuD0A6yw8w2PGdZeWhoooCqXotY3ikCmtiRXCYvNUu77VdyLDidpi3tEvwdeCcj9ph9nnvhxxnQWk9mEMNOLfH4=w408-h306-k-no",
    coordinates: { lat: -15.7553057, lng: -47.8942335 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=BAHEA%20Asa%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7553057,-47.8942335&navigate=yes",
  },
  {
    id: "pink-street-brasilia",
    name: "Pink Street Brasília",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Point de happy hour na Asa Norte.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmV5JnGXscgJQ1w5rnjwCxRRQz4KLT4UhOhTSEHKOTKRppUOjtvNhyTB6ajd0J_DB5lt7o-q3tIZDRJEJ4Rm-0sttnOxpLUabdjrty15kOG1GAeckpGv8EoXGXumZmB5vo7It3MgE04xGc=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmV5JnGXscgJQ1w5rnjwCxRRQz4KLT4UhOhTSEHKOTKRppUOjtvNhyTB6ajd0J_DB5lt7o-q3tIZDRJEJ4Rm-0sttnOxpLUabdjrty15kOG1GAeckpGv8EoXGXumZmB5vo7It3MgE04xGc=w408-h306-k-no",
    coordinates: { lat: -15.774944, lng: -47.8908763 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pink%20Street%20Bras%C3%ADlia%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.774944,-47.8908763&navigate=yes",
  },
  {
    id: "donburi-cozinha-nikkei-asa-sul",
    name: "Donburi Cozinha Nikkei Asa Sul",
    category: "Japonesa",
    neighborhood: "Asa Sul",
    description: "Culinária japonesa (sushi e cia).",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwFcXrEZEmO8ERAJPAb6Ox6FsEDE4D2hzIAE8ebkVtJV3TpnB0j5XeXmwXFUNGii4t9AW4i3atS0AzEbj9BfqMqG47olRj4WnW_PCpL9ecHUkPCHWnCnR2qPOvvk6EF79A0qu3=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwFcXrEZEmO8ERAJPAb6Ox6FsEDE4D2hzIAE8ebkVtJV3TpnB0j5XeXmwXFUNGii4t9AW4i3atS0AzEbj9BfqMqG47olRj4WnW_PCpL9ecHUkPCHWnCnR2qPOvvk6EF79A0qu3=w408-h306-k-no",
    coordinates: { lat: -15.8009822, lng: -47.8821559 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Donburi%20Cozinha%20Nikkei%20Asa%20Sul%2C%20Asa%20Sul%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.8009822,-47.8821559&navigate=yes",
  },
  {
    id: "ordinario-bar-e-musica",
    name: "Ordinário Bar e Música",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar descontraído pra sentar e beber.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklBosD5Boi5eFylDVg1J9wZBV5SQYxPMWw-aACxTFue3fWeExj9-8bbzzoU5xmYrPuxU9xlj2-tqifdk30_A34pg4s3b78YiJcJ4_xcuLbwR-ovED_0xATySLoO7EdxZO3UZZn=w408-h725-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklBosD5Boi5eFylDVg1J9wZBV5SQYxPMWw-aACxTFue3fWeExj9-8bbzzoU5xmYrPuxU9xlj2-tqifdk30_A34pg4s3b78YiJcJ4_xcuLbwR-ovED_0xATySLoO7EdxZO3UZZn=w408-h725-k-no",
    coordinates: { lat: -15.8007365, lng: -47.8820443 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ordin%C3%A1rio%20Bar%20e%20M%C3%BAsica%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.8007365,-47.8820443&navigate=yes",
  },
  {
    id: "barito-bar",
    name: "Barito Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar com petiscos e cerveja gelada.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkGWe5_oNOA_aVsi3adgnf0F61xKcBliarr2orw2ZwyK-E1FyZlgRKb1-HKcN9PS4nMroMZh1QKLxgm648l4OT_Co98XD-ddJ_7V0aSeGXnq67bFjC54mwyV7Id7UmESWzFzNbMXX5EtBc=w408-h725-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkGWe5_oNOA_aVsi3adgnf0F61xKcBliarr2orw2ZwyK-E1FyZlgRKb1-HKcN9PS4nMroMZh1QKLxgm648l4OT_Co98XD-ddJ_7V0aSeGXnq67bFjC54mwyV7Id7UmESWzFzNbMXX5EtBc=w408-h725-k-no",
    coordinates: { lat: -15.7477372, lng: -47.8967374 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Barito%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7477372,-47.8967374&navigate=yes",
  },
  {
    id: "culto-rock-bar",
    name: "Culto Rock Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar pra tomar uma com a galera.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZtjMYbdfHNb3Y0BF4YkkBO2VX6-EA-Shk-ZzyOH0t4YCYr8kS0K-YsaxOzgVi2rfPSvOVv0Vd04dj0jxK56ZX4JVeYTIeZ-XEy3bwhVKcG68E24zEM9Fdl7KRWiFMvPP-b0bjaA-G8gi0=w408-h541-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZtjMYbdfHNb3Y0BF4YkkBO2VX6-EA-Shk-ZzyOH0t4YCYr8kS0K-YsaxOzgVi2rfPSvOVv0Vd04dj0jxK56ZX4JVeYTIeZ-XEy3bwhVKcG68E24zEM9Fdl7KRWiFMvPP-b0bjaA-G8gi0=w408-h541-k-no",
    coordinates: { lat: -15.7967362, lng: -47.8849956 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Culto%20Rock%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7967362,-47.8849956&navigate=yes",
  },
  {
    id: "banks-bar-sbs",
    name: "Banks Bar SBS",
    category: "Bar",
    neighborhood: "Asa Sul",
    description: "Point de happy hour na Asa Norte.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbPIZCi19qu0I-D9c4CLI4bRWZVSLi6c9t41vLE5OvAX75I3X5hYCD8zqmE6mGTX2y8Jknppv0uoQqsod1wLxcCjrnEVQJXqRrrbYs2jag12Ta4vQAlEXm1Jc-08ivz3eUaX0ftdwM7bD8=w408-h725-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbPIZCi19qu0I-D9c4CLI4bRWZVSLi6c9t41vLE5OvAX75I3X5hYCD8zqmE6mGTX2y8Jknppv0uoQqsod1wLxcCjrnEVQJXqRrrbYs2jag12Ta4vQAlEXm1Jc-08ivz3eUaX0ftdwM7bD8=w408-h725-k-no",
    coordinates: { lat: -15.7984366, lng: -47.8829631 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Banks%20Bar%20SBS%2C%20Asa%20Sul%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7984366,-47.8829631&navigate=yes",
  },
  {
    id: "jamie-oliver-kitchen",
    name: "Jamie Oliver Kitchen",
    category: "Restaurante",
    neighborhood: "Asa Sul",
    description: "Restaurante de cozinha variada.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlV2fgp5TRloihNmFTMBsZeWIvlQrWQc8N1cVPWJmE2FiNBIgRezNfH0q-oVSGqQexH_cn4zKGLTr8RzIgP3sWUsw2tgaD2hMQ25-PCgdEn38uohUouveca8kzbvOA3-AFHJliK38Squ40r=w429-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlV2fgp5TRloihNmFTMBsZeWIvlQrWQc8N1cVPWJmE2FiNBIgRezNfH0q-oVSGqQexH_cn4zKGLTr8RzIgP3sWUsw2tgaD2hMQ25-PCgdEn38uohUouveca8kzbvOA3-AFHJliK38Squ40r=w429-h240-k-no",
    coordinates: { lat: -15.7946705, lng: -47.8925753 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jamie%20Oliver%20Kitchen%2C%20Ven%C3%A2ncio%20Shopping%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7946705,-47.8925753&navigate=yes",
  },
  {
    id: "ambar",
    name: "Ambar",
    category: "Restaurante",
    neighborhood: "Asa Norte",
    description: "Restaurante pra uma refeição completa.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgZD_M1eOIuqUcmZjJI6IGmVchGHF4BMB4LVtxz8I9tT1FoIaE-lxVagm3gWcgncsysPFTzfo9eAELDNrcxWdrCPVxKi0L8Xj1MzP7uasziz7yVY0BNag9mcq5XdyTxelK7q4nYw4C0Ea3=w408-h272-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgZD_M1eOIuqUcmZjJI6IGmVchGHF4BMB4LVtxz8I9tT1FoIaE-lxVagm3gWcgncsysPFTzfo9eAELDNrcxWdrCPVxKi0L8Xj1MzP7uasziz7yVY0BNag9mcq5XdyTxelK7q4nYw4C0Ea3=w408-h272-k-no",
    coordinates: { lat: -15.798786, lng: -47.8831396 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ambar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.798786,-47.8831396&navigate=yes",
  },
  {
    id: "espelunca",
    name: "Espelunca",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar descontraído pra sentar e beber.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSW9Ju1eLlTL4Uf6Gcqs9GNqQICThAck7rajAurprFyLsDBNAILGW0k65wJ-V470rqRzbugFKRJ01H9FQAhdB7H0UHyN2Maoynvu1moYEFuxXDRarO0OdbjMRL9DycTBiAxQYv-kRwGpwB=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSW9Ju1eLlTL4Uf6Gcqs9GNqQICThAck7rajAurprFyLsDBNAILGW0k65wJ-V470rqRzbugFKRJ01H9FQAhdB7H0UHyN2Maoynvu1moYEFuxXDRarO0OdbjMRL9DycTBiAxQYv-kRwGpwB=w408-h544-k-no",
    coordinates: { lat: -15.7993778, lng: -47.8866126 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Espelunca%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7993778,-47.8866126&navigate=yes",
  },
  {
    id: "canton-peruvian",
    name: "Cantón Peruvian",
    category: "Peruana",
    neighborhood: "Asa Norte",
    description: "Cozinha peruana.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnvcGAyWhdUVmoQkJ9HRHGH6X0-PLNfCu_QVui38fuaHI_0z5jCKSPHFKjDswRnrDK2N6iveftjVOjfAKg-GxPTcucdbmJnPlfgmy_sf37VMNXtmwrFt4A9pEWQUxHDK9rhkWYgJS7AobvZ=w408-h724-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnvcGAyWhdUVmoQkJ9HRHGH6X0-PLNfCu_QVui38fuaHI_0z5jCKSPHFKjDswRnrDK2N6iveftjVOjfAKg-GxPTcucdbmJnPlfgmy_sf37VMNXtmwrFt4A9pEWQUxHDK9rhkWYgJS7AobvZ=w408-h724-k-no",
    coordinates: { lat: -15.7951526, lng: -47.8927339 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cant%C3%B3n%20Peruvian%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7951526,-47.8927339&navigate=yes",
  },
  {
    id: "dom-ramon-shawarma",
    name: "Dom Ramon Shawarma",
    category: "Árabe",
    neighborhood: "Asa Norte",
    description: "Comida árabe — shawarma e cia.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJV-Hf-lbAjQuy2qXU6GAvXjpCrCuh1OBqI9FaXab60aY7xYRQEZAbjWvaZxK_1nRP5MVCkgA4UOwF2HI4nWc6hiMFjxknw-kyn5GG-yMC8LOg1InacGOqpKtfFOUjj9rI3Ww6kg=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJV-Hf-lbAjQuy2qXU6GAvXjpCrCuh1OBqI9FaXab60aY7xYRQEZAbjWvaZxK_1nRP5MVCkgA4UOwF2HI4nWc6hiMFjxknw-kyn5GG-yMC8LOg1InacGOqpKtfFOUjj9rI3Ww6kg=w408-h544-k-no",
    coordinates: { lat: -15.7952321, lng: -47.8926383 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dom%20Ramon%20Shawarma%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7952321,-47.8926383&navigate=yes",
  },
  {
    id: "don-parrillero",
    name: "Don Parrillero",
    category: "Carnes",
    neighborhood: "Asa Norte",
    description: "Casa de carnes.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkON32JgpV3tTK5HUI1cmgL8MgSffodxD2yHR5_ZYE-C7oFT1yA2oBuia-vbNZh1D5Eh4qI_GTOTPL7_1wuLNtQA6QzFORdfmYbpR04xbj8_yMTZmTEBUgUtoqz5VSdZ3RR62xI=w408-h271-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkON32JgpV3tTK5HUI1cmgL8MgSffodxD2yHR5_ZYE-C7oFT1yA2oBuia-vbNZh1D5Eh4qI_GTOTPL7_1wuLNtQA6QzFORdfmYbpR04xbj8_yMTZmTEBUgUtoqz5VSdZ3RR62xI=w408-h271-k-no",
    coordinates: { lat: -15.7557114, lng: -47.887968 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Don%20Parrillero%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7557114,-47.887968&navigate=yes",
  },
  {
    id: "il-giorno-gelato",
    name: "Il Giorno Gelato",
    category: "Sorvetes",
    neighborhood: "Asa Norte",
    description: "Sorvetes e gelatos.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWllkIXdPj3-WhzAuMbHjm6cIhNmDYm66-0f2cFTWhwffPGIIwM5EPP518EcSrO1YrZmkSqM4vLzCUM4YszQxjdgy0HG54HGvamPG0Vhyqzb7wbp8tNc7bsSE82ArYuiQKYnPgbVu6bu0X8=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWllkIXdPj3-WhzAuMbHjm6cIhNmDYm66-0f2cFTWhwffPGIIwM5EPP518EcSrO1YrZmkSqM4vLzCUM4YszQxjdgy0HG54HGvamPG0Vhyqzb7wbp8tNc7bsSE82ArYuiQKYnPgbVu6bu0X8=w408-h544-k-no",
    coordinates: { lat: -15.7464091, lng: -47.8910914 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Il%20Giorno%20Gelato%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7464091,-47.8910914&navigate=yes",
  },
  {
    id: "mare-di-sapore",
    name: "Mare di Sapore",
    category: "Italiana",
    neighborhood: "Asa Norte",
    description: "Cozinha italiana.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnZhXAkU7DtskgoiHGXp2jWaoqTHeR8540zAkmcC4-3_MJGAhpge_Cf25UqZqcNkRNedbwhUrr0kVs-XqNhanUDOSQxOlbUnkLlYUZXv_LQTNaCJ4CmM8TtGldYJBrkTojnwV_s2Q5BKK4f=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnZhXAkU7DtskgoiHGXp2jWaoqTHeR8540zAkmcC4-3_MJGAhpge_Cf25UqZqcNkRNedbwhUrr0kVs-XqNhanUDOSQxOlbUnkLlYUZXv_LQTNaCJ4CmM8TtGldYJBrkTojnwV_s2Q5BKK4f=w408-h306-k-no",
    coordinates: { lat: -15.7398049, lng: -47.8932678 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mare%20di%20Sapore%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7398049,-47.8932678&navigate=yes",
  },
  {
    id: "dom-carica-s-bbq",
    name: "Dom Carica's BBQ",
    category: "Churrascaria",
    neighborhood: "Asa Norte",
    description: "Carnes na brasa.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn6tT8xzp7VN5LvVgPHpsLn2s_AbI0x0iwqUv01IGDjKXRqeTf6CBzP2Qbk5He_RO5TiSVzV9bSIaNRkd6qFPWHQJLkkZGWL3KYrSgFaimv1uu5F9D1K3F6h7r6l7-slBhKVfD99Q=w408-h724-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn6tT8xzp7VN5LvVgPHpsLn2s_AbI0x0iwqUv01IGDjKXRqeTf6CBzP2Qbk5He_RO5TiSVzV9bSIaNRkd6qFPWHQJLkkZGWL3KYrSgFaimv1uu5F9D1K3F6h7r6l7-slBhKVfD99Q=w408-h724-k-no",
    coordinates: { lat: -15.7383842, lng: -47.8884722 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dom%20Carica's%20BBQ%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7383842,-47.8884722&navigate=yes",
  },
  {
    id: "london-street-bar",
    name: "London Street Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar com petiscos e cerveja gelada.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn7UwXTkjxX1naHyh96t5cDP5laHWcPMD6D7NVfWHRbhA01hcDrCCYlkccmuroRNGzLxdcWiBqB3Fnmxfv4GEfeYx6bncRVuh6H_5DDPJ2paS0wq3byOLPedkkoi0oFS6QcHcx_=w408-h408-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn7UwXTkjxX1naHyh96t5cDP5laHWcPMD6D7NVfWHRbhA01hcDrCCYlkccmuroRNGzLxdcWiBqB3Fnmxfv4GEfeYx6bncRVuh6H_5DDPJ2paS0wq3byOLPedkkoi0oFS6QcHcx_=w408-h408-k-no",
    coordinates: { lat: -15.7446185, lng: -47.886653 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=London%20Street%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7446185,-47.886653&navigate=yes",
  },
  {
    id: "ocanto",
    name: "OCANTO",
    category: "Restaurante",
    neighborhood: "Asa Norte",
    description: "Restaurante de cozinha variada.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmg7H91SmX6aWn1ZNviso0AdeJZklrS5WmlCyDKw4vWzNmlAvA_3zKpRPCwteFUClOQpjvmfV7myhugGGN8e2XgKPLye8wdBXKrnQrHdK88ohflVscgYXfgUupT7W0Hfeomwg5lYQ4RvLhJ=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmg7H91SmX6aWn1ZNviso0AdeJZklrS5WmlCyDKw4vWzNmlAvA_3zKpRPCwteFUClOQpjvmfV7myhugGGN8e2XgKPLye8wdBXKrnQrHdK88ohflVscgYXfgUupT7W0Hfeomwg5lYQ4RvLhJ=w408-h544-k-no",
    coordinates: { lat: -15.7478095, lng: -47.8838204 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=OCANTO%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7478095,-47.8838204&navigate=yes",
  },
  {
    id: "iracema-bar",
    name: "Iracema Bar",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar pra tomar uma com a galera.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnluH0wBeu3cBxxCE787ksZCBbrcjMHETudr0oA4OjCj-3gxt8HrU_atJGMbWqhNH-ZbNVa79Xni5CChzcMRvhsU3lBIifmXcBS5xZRDV6sU3F4WNMi_z3yXRcjroKCbOlVTrVV1g=w426-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnluH0wBeu3cBxxCE787ksZCBbrcjMHETudr0oA4OjCj-3gxt8HrU_atJGMbWqhNH-ZbNVa79Xni5CChzcMRvhsU3lBIifmXcBS5xZRDV6sU3F4WNMi_z3yXRcjroKCbOlVTrVV1g=w426-h240-k-no",
    coordinates: { lat: -15.7451988, lng: -47.8870693 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Iracema%20Bar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7451988,-47.8870693&navigate=yes",
  },
  {
    id: "bar-do-lustre",
    name: "Bar do Lustre",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Point de happy hour na Asa Norte.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkbIFiCIQXhivb-viA7KAabt0RxSPitXBuAWptt9NH9DQ1aj8gUKT73UlTKGyHiGxd4QsCEbZW71eCJluR_lMgr8cgyDBfhtKiCQEjs_FS-BAQtsYnJIZ59jMRxC_zTeVyR__o=w408-h637-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkbIFiCIQXhivb-viA7KAabt0RxSPitXBuAWptt9NH9DQ1aj8gUKT73UlTKGyHiGxd4QsCEbZW71eCJluR_lMgr8cgyDBfhtKiCQEjs_FS-BAQtsYnJIZ59jMRxC_zTeVyR__o=w408-h637-k-no",
    coordinates: { lat: -15.7477559, lng: -47.8841684 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar%20do%20Lustre%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7477559,-47.8841684&navigate=yes",
  },
  {
    id: "altas-gastrobar",
    name: "Altas Gastrobar",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar descontraído pra sentar e beber.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkJz4Kl-VNaW37k6_1_ITydhFVrlkLyVAdVqskKhV76sEYAg3jTdyxLlcNQ4rUIcUrrgzUzWujN_29ZEdeaaoW2rHOVKWJ0DWmWKYlsNVQiO8fTxa90ODEw3bx2QzHulI_tiDdb=w426-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkJz4Kl-VNaW37k6_1_ITydhFVrlkLyVAdVqskKhV76sEYAg3jTdyxLlcNQ4rUIcUrrgzUzWujN_29ZEdeaaoW2rHOVKWJ0DWmWKYlsNVQiO8fTxa90ODEw3bx2QzHulI_tiDdb=w426-h240-k-no",
    coordinates: { lat: -15.7699763, lng: -47.8792857 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Altas%20Gastrobar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7699763,-47.8792857&navigate=yes",
  },
  {
    id: "mundo-vivo-galeria",
    name: "Mundo Vivo Galeria",
    category: "Cafeteria",
    neighborhood: "Asa Norte",
    description: "Café e quitutes pra relaxar.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm04fuFCrHRae7JELbv_4r2Zv1EKxu3yvpNw2IfwEZYFrUT0ZJgVQ2yZmnggob4w6QxbQzYXnmtLzwjOlTIXFnfFeMCPDcfDreQ2f400WXyY8yvH5t17vVTSbNKlN_oslfPycPf=w408-h272-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm04fuFCrHRae7JELbv_4r2Zv1EKxu3yvpNw2IfwEZYFrUT0ZJgVQ2yZmnggob4w6QxbQzYXnmtLzwjOlTIXFnfFeMCPDcfDreQ2f400WXyY8yvH5t17vVTSbNKlN_oslfPycPf=w408-h272-k-no",
    coordinates: { lat: -15.7470225, lng: -47.8835148 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mundo%20Vivo%20Galeria%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7470225,-47.8835148&navigate=yes",
  },
  {
    id: "mimobar",
    name: "Mimobar",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar com petiscos e cerveja gelada.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnIebHrYCJDVWdFAJ_oQW5NNsPwdJ2kd1dGrm13x53KbeSa0rGB14y_0XWSR8GLonesoP5KCz9Xmbg-rMxTVWzvFeVjEOPiMWX63svYdwU2L55ENxPdCq_H8pLiXwqJVvZqCBex9w=w408-h613-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnIebHrYCJDVWdFAJ_oQW5NNsPwdJ2kd1dGrm13x53KbeSa0rGB14y_0XWSR8GLonesoP5KCz9Xmbg-rMxTVWzvFeVjEOPiMWX63svYdwU2L55ENxPdCq_H8pLiXwqJVvZqCBex9w=w408-h613-k-no",
    coordinates: { lat: -15.7703593, lng: -47.879214 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mimobar%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7703593,-47.879214&navigate=yes",
  },
  {
    id: "balcao-vinhos",
    name: "Balcão Vinhos",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar pra tomar uma com a galera.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnZcAwE-seDiMZ-aB3mVY7cAbUv6T32VmtgYqxuUld79EgeIfB1Ryvn-QidijQeWcDtuEzhyKAgrxzELY-EErh8K9ptdsCMzaQs84EfmhCt5bFwlX4XMaDA3V-2m9-lHE-HAbg=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnZcAwE-seDiMZ-aB3mVY7cAbUv6T32VmtgYqxuUld79EgeIfB1Ryvn-QidijQeWcDtuEzhyKAgrxzELY-EErh8K9ptdsCMzaQs84EfmhCt5bFwlX4XMaDA3V-2m9-lHE-HAbg=w408-h544-k-no",
    coordinates: { lat: -15.7703915, lng: -47.8788965 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Balc%C3%A3o%20Vinhos%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7703915,-47.8788965&navigate=yes",
  },
  {
    id: "abencoado-bar-asa-norte",
    name: "Abençoado Bar Asa Norte",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Point de happy hour na Asa Norte.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn7EsKyt2JrLZ4kLSqd3c4lrhX2bCIRPBOOvUKpgIhM2FdoscG6bolL0qVsjAGBAF8PMo8W6AwDHSIFzJusjlsRTc3Q7hPP7Lnc8gy-GVnyVeW_gxQGGo0h1u-JDlyovfmJRS-AizRn4DbH=w408-h272-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn7EsKyt2JrLZ4kLSqd3c4lrhX2bCIRPBOOvUKpgIhM2FdoscG6bolL0qVsjAGBAF8PMo8W6AwDHSIFzJusjlsRTc3Q7hPP7Lnc8gy-GVnyVeW_gxQGGo0h1u-JDlyovfmJRS-AizRn4DbH=w408-h272-k-no",
    coordinates: { lat: -15.7639726, lng: -47.8815326 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aben%C3%A7oado%20Bar%20Asa%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7639726,-47.8815326&navigate=yes",
  },
  {
    id: "trevo-sandwich-shop",
    name: "Trevo Sandwich Shop",
    category: "Lanches",
    neighborhood: "Asa Norte",
    description: "Lanches e sanduíches.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlGJ20ir9VCaC7_u6gUoj8u84kLwmP4UlfDTV72EWgwhVEEXOF3cHT-Px6rbpsmIlalOWjfVdKGjng8Jj_ZW0XRqLcUgLvHB15qTVV7NIMgtxPCVDITKV22UWPre6U-9rk3egbq=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlGJ20ir9VCaC7_u6gUoj8u84kLwmP4UlfDTV72EWgwhVEEXOF3cHT-Px6rbpsmIlalOWjfVdKGjng8Jj_ZW0XRqLcUgLvHB15qTVV7NIMgtxPCVDITKV22UWPre6U-9rk3egbq=w408-h544-k-no",
    coordinates: { lat: -15.7639603, lng: -47.8808887 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trevo%20Sandwich%20Shop%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7639603,-47.8808887&navigate=yes",
  },
  {
    id: "terrina",
    name: "Terrina",
    category: "Restaurante",
    neighborhood: "Asa Norte",
    description: "Restaurante pra uma refeição completa.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWne7eVXbBiRs9vXPuPGNel02n2JU5F8HZTUdAONEVU-dibEgGLvYkNMnPE8Zo58OWzKWAkKbLt8QFQwGkUoOF8zh63NDTgkmEk8rSeYQU5xyOPZM8BGg4qkfVAEKmpdyRY3HgVEkCZwQXFA=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWne7eVXbBiRs9vXPuPGNel02n2JU5F8HZTUdAONEVU-dibEgGLvYkNMnPE8Zo58OWzKWAkKbLt8QFQwGkUoOF8zh63NDTgkmEk8rSeYQU5xyOPZM8BGg4qkfVAEKmpdyRY3HgVEkCZwQXFA=w408-h306-k-no",
    coordinates: { lat: -15.770607, lng: -47.8802626 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Terrina%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.770607,-47.8802626&navigate=yes",
  },
  {
    id: "orto-pizza-local",
    name: "Orto Pizza Local",
    category: "Pizzaria",
    neighborhood: "Asa Norte",
    description: "Pizzas assadas na hora.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnTguslgEE9l7xd6RsGJ_fUxXBpiny9PAFguxz_HgU4-s9Voaimg-Lw2sm4iOr8FEUYU_8etEyARBjdwWOQ9cjdHQPfRrbhq4fK4IbUyCl7u-oaYGx13OIhqJl7U2O2K6ZxQOj8Ng=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnTguslgEE9l7xd6RsGJ_fUxXBpiny9PAFguxz_HgU4-s9Voaimg-Lw2sm4iOr8FEUYU_8etEyARBjdwWOQ9cjdHQPfRrbhq4fK4IbUyCl7u-oaYGx13OIhqJl7U2O2K6ZxQOj8Ng=w408-h544-k-no",
    coordinates: { lat: -15.7699662, lng: -47.8790421 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Orto%20Pizza%20Local%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7699662,-47.8790421&navigate=yes",
  },
  {
    id: "nattu-restaurante-verde",
    name: "Nattu Restaurante Verde",
    category: "Saudável",
    neighborhood: "Asa Norte",
    description: "Comida saudável e natural.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlJE353CH0JPgx3qyjdRTnAObSd4Mdc3j3_yGAewfbV-AJA6TdUY-ZTyup4mLCgDXrRgfqhYF6dnsByFe0ewPcf-wIJLjljMimmwWoKNX-M6oRQPvxPz6f5Oqs8GWcoLrYEWlh7=w408-h612-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlJE353CH0JPgx3qyjdRTnAObSd4Mdc3j3_yGAewfbV-AJA6TdUY-ZTyup4mLCgDXrRgfqhYF6dnsByFe0ewPcf-wIJLjljMimmwWoKNX-M6oRQPvxPz6f5Oqs8GWcoLrYEWlh7=w408-h612-k-no",
    coordinates: { lat: -15.7731443, lng: -47.8766351 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nattu%20Restaurante%20Verde%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7731443,-47.8766351&navigate=yes",
  },
  {
    id: "chapa-sanduberia",
    name: "Chapa Sanduberia",
    category: "Lanches",
    neighborhood: "Asa Norte",
    description: "Lanches e sanduíches.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn4QUO8WGz8IkZ2NaZxmmZGXie2qljEK2TfyZRkInvWPRuVqmaS7YD-W_iIOy-MRbAc20hmoXEhKiTMLabaDuvy2D07x2QoUeGnjZ25zZ4Ya3cH2g-_KPW31A0mSvZF27ZHS3uj=w408-h272-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn4QUO8WGz8IkZ2NaZxmmZGXie2qljEK2TfyZRkInvWPRuVqmaS7YD-W_iIOy-MRbAc20hmoXEhKiTMLabaDuvy2D07x2QoUeGnjZ25zZ4Ya3cH2g-_KPW31A0mSvZF27ZHS3uj=w408-h272-k-no",
    coordinates: { lat: -15.7665727, lng: -47.8775359 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chapa%20Sanduberia%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7665727,-47.8775359&navigate=yes",
  },
  {
    id: "bla-s-cozinha-criativa",
    name: "Bla's Cozinha Criativa",
    category: "Restaurante",
    neighborhood: "Asa Norte",
    description: "Restaurante de cozinha variada.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmc8J2bGcAzhfR7nTO1DWtKXRrrMKGNXOWv5VYxTKjlBCufRP8jxTvuna4saBTGlfgKj2WcSW0-FcsnW8bNsTKBJf67QM8DvdXhTYVcV-uS8J-QuRNmahJ3PFaG5qWV5kLbtV1Y=w408-h408-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmc8J2bGcAzhfR7nTO1DWtKXRrrMKGNXOWv5VYxTKjlBCufRP8jxTvuna4saBTGlfgKj2WcSW0-FcsnW8bNsTKBJf67QM8DvdXhTYVcV-uS8J-QuRNmahJ3PFaG5qWV5kLbtV1Y=w408-h408-k-no",
    coordinates: { lat: -15.7666182, lng: -47.8774815 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bla's%20Cozinha%20Criativa%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7666182,-47.8774815&navigate=yes",
  },
  {
    id: "yatai-yoru",
    name: "Yatai Yoru",
    category: "Japonesa",
    neighborhood: "Asa Norte",
    description: "Comida japonesa.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnMgoz1xlua8nRFZvRO9qyg0-TbW2BUmGXg7V_kRBbpCaM9Egyhpes45AXiJCGCpu9H_M0ARJIR7ak5eyrkN4gsao_i7mbBM407Nak_dHOyhbiq6-jtybOgaQVr3zycNiuvqJpuA3wci98H=w408-h306-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnMgoz1xlua8nRFZvRO9qyg0-TbW2BUmGXg7V_kRBbpCaM9Egyhpes45AXiJCGCpu9H_M0ARJIR7ak5eyrkN4gsao_i7mbBM407Nak_dHOyhbiq6-jtybOgaQVr3zycNiuvqJpuA3wci98H=w408-h306-k-no",
    coordinates: { lat: -15.7734545, lng: -47.8767283 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Yatai%20Yoru%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7734545,-47.8767283&navigate=yes",
  },
  {
    id: "padrinhos-smash-107-norte",
    name: "Padrinhos Smash 107 Norte",
    category: "Hamburguer",
    neighborhood: "Asa Norte",
    description: "Hamburgueria.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnCDwzGGA1WMDZmZeimcPUQRR49dFzZXTjri-9JbzqGx4iqaK7FFTQDqhVuMijfWDBwPZb_LWlLNr-2_pOMPPHH9JnzzLo1wddBtDeyigSsCG1zhm3hPYAVkS267pinuDAmt2NlTg_4FSoc=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnCDwzGGA1WMDZmZeimcPUQRR49dFzZXTjri-9JbzqGx4iqaK7FFTQDqhVuMijfWDBwPZb_LWlLNr-2_pOMPPHH9JnzzLo1wddBtDeyigSsCG1zhm3hPYAVkS267pinuDAmt2NlTg_4FSoc=w408-h544-k-no",
    coordinates: { lat: -15.7651506, lng: -47.8854138 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Padrinhos%20Smash%20107%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7651506,-47.8854138&navigate=yes",
  },
  {
    id: "futorrito-sushi-107-norte",
    name: "Futorrito Sushi 107 Norte",
    category: "Japonesa",
    neighborhood: "Asa Norte",
    description: "Culinária japonesa (sushi e cia).",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlGrO-7wE55-ETymFpBmzmP42xILvtk6qv07A72uiaIQM2Lw0AkSYvqmyu3XWvY8OUK9vG3Ek4fIL73b3Xu1t0FZXHCYda5SBLw14jA55KtS9wj9_E2GRGDFEHWC-W4ZmJkj_lOkk6R3Fy4=w408-h448-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlGrO-7wE55-ETymFpBmzmP42xILvtk6qv07A72uiaIQM2Lw0AkSYvqmyu3XWvY8OUK9vG3Ek4fIL73b3Xu1t0FZXHCYda5SBLw14jA55KtS9wj9_E2GRGDFEHWC-W4ZmJkj_lOkk6R3Fy4=w408-h448-k-no",
    coordinates: { lat: -15.7648682, lng: -47.8855603 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Futorrito%20Sushi%20107%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7648682,-47.8855603&navigate=yes",
  },
  {
    id: "dalva-cozinha-107-norte",
    name: "Dalva Cozinha 107 Norte",
    category: "Restaurante",
    neighborhood: "Asa Norte",
    description: "Restaurante pra uma refeição completa.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm_mUyGSGYWCk2ivY2wLdKW5mDyXtJIdLj-YEJftTSWodJ_lDevPaZGcz_JqLR2tF7Yrc6EnImWltKTolAkMF3DhQQ8Wq6R_mYMe6KSR9h7VvROYifd-u11cDAcFicTNzSjIX8R=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm_mUyGSGYWCk2ivY2wLdKW5mDyXtJIdLj-YEJftTSWodJ_lDevPaZGcz_JqLR2tF7Yrc6EnImWltKTolAkMF3DhQQ8Wq6R_mYMe6KSR9h7VvROYifd-u11cDAcFicTNzSjIX8R=w408-h544-k-no",
    coordinates: { lat: -15.7649173, lng: -47.8862983 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dalva%20Cozinha%20107%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7649173,-47.8862983&navigate=yes",
  },
  {
    id: "castanho-cafe-107-norte",
    name: "Castanho Café 107 Norte",
    category: "Cafeteria",
    neighborhood: "Asa Norte",
    description: "Cafeteria pra um bom café.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkWJbY6G_HAZVOwYFOY7lTvssoOQwVaEB1xIR8uWfM5gQbEdD19sHKGzyiupMLP_HhC7xMxQS4staOByz69p8Jnll6TFtFbTdVtB-zHnQJ39e1D-ef-ME6pRzqx5FoQJz2cbpfH=w408-h544-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkWJbY6G_HAZVOwYFOY7lTvssoOQwVaEB1xIR8uWfM5gQbEdD19sHKGzyiupMLP_HhC7xMxQS4staOByz69p8Jnll6TFtFbTdVtB-zHnQJ39e1D-ef-ME6pRzqx5FoQJz2cbpfH=w408-h544-k-no",
    coordinates: { lat: -15.7648725, lng: -47.8863153 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Castanho%20Caf%C3%A9%20107%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7648725,-47.8863153&navigate=yes",
  },
  {
    id: "tarso-308-norte",
    name: "TARSO 308 Norte",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar descontraído pra sentar e beber.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlXHoOSqimfeXm9aFgTku7gl5aZT6JF-Rf3BjxXqj7WOR5OIJEGueqhS4lh8-vOslNVhvpL0zX7lE1F023akbg11mhO2UrIV1DZIHR1dCnXyi4eZllEumPqT53p2eEd34E6rk8b=w408-h272-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlXHoOSqimfeXm9aFgTku7gl5aZT6JF-Rf3BjxXqj7WOR5OIJEGueqhS4lh8-vOslNVhvpL0zX7lE1F023akbg11mhO2UrIV1DZIHR1dCnXyi4eZllEumPqT53p2eEd34E6rk8b=w408-h272-k-no",
    coordinates: { lat: -15.7628096, lng: -47.8889418 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=TARSO%20308%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7628096,-47.8889418&navigate=yes",
  },
  {
    id: "oficina-bar-asa-norte",
    name: "Oficina Bar Asa Norte",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar com petiscos e cerveja gelada.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmbJja9_xCwKdxwdHVgxWc9S0qktGht_Rk9MJSCW3RLBorvmx5cb86gpfoHsMSF4SoYQ_ZMU5SpD0FZrdGnZwWmKiwm_2k0C9irhIqNieM_7uyc7pg-Pf3T7k2c9tysNvMlOd87=w426-h240-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmbJja9_xCwKdxwdHVgxWc9S0qktGht_Rk9MJSCW3RLBorvmx5cb86gpfoHsMSF4SoYQ_ZMU5SpD0FZrdGnZwWmKiwm_2k0C9irhIqNieM_7uyc7pg-Pf3T7k2c9tysNvMlOd87=w426-h240-k-no",
    coordinates: { lat: -15.771551, lng: -47.88456 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Oficina%20Bar%20Asa%20Norte%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.771551,-47.88456&navigate=yes",
  },
  {
    id: "daniel-briand-patisserie",
    name: "Daniel Briand Pâtisserie",
    category: "Padaria",
    neighborhood: "Asa Norte",
    description: "Padaria e confeitaria.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlxWvDPRzY9jkVTMxs7rENHuSPHwwBFrG2cJOBFuj-69nC28PJ-Ky52N3NhDlJVqiWhk9mvuY6PqytloMACu8c53eNdFFnREHyLeCqGP_s9zbGL_JWL7xi2qa3DXUMs3uRJ8qeB=w408-h741-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlxWvDPRzY9jkVTMxs7rENHuSPHwwBFrG2cJOBFuj-69nC28PJ-Ky52N3NhDlJVqiWhk9mvuY6PqytloMACu8c53eNdFFnREHyLeCqGP_s9zbGL_JWL7xi2qa3DXUMs3uRJ8qeB=w408-h741-k-no",
    coordinates: { lat: -15.7771333, lng: -47.8827506 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Daniel%20Briand%20P%C3%A2tisserie%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.7771333,-47.8827506&navigate=yes",
  },
  {
    id: "caju-limao",
    name: "Caju Limão",
    category: "Bar",
    neighborhood: "Asa Norte",
    description: "Bar pra tomar uma com a galera.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmj0zoOeIUbO0PbEvCwh2psQp-PrQNbqEoh9v8axSBuLhejYSfe0iW0_ZnNcxYRp5gtGabfQNS6bauNEpgzZQDgELqMMl0OWLe-v70Ag6DF_DHC1PINv-q0yfeJnttBq3bhBAgT=w408-h385-k-no",
    mapLogoUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmj0zoOeIUbO0PbEvCwh2psQp-PrQNbqEoh9v8axSBuLhejYSfe0iW0_ZnNcxYRp5gtGabfQNS6bauNEpgzZQDgELqMMl0OWLe-v70Ag6DF_DHC1PINv-q0yfeJnttBq3bhBAgT=w408-h385-k-no",
    coordinates: { lat: -15.783538, lng: -47.8786926 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Caju%20Lim%C3%A3o%2C%20Asa%20Norte%2C%20Bras%C3%ADlia%2C%20DF",
    wazeUrl: "https://www.waze.com/ul?ll=-15.783538,-47.8786926&navigate=yes",
  },

];

// "Já fui" = têm o campo rating (mesmo que vazio). "Quero ir" = sem rating.
export const visitedRestaurants = restaurantsMock.filter((r) => "rating" in r);
export const wishlistRestaurants = restaurantsMock.filter((r) => !("rating" in r));
