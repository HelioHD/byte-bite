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
  }
];
