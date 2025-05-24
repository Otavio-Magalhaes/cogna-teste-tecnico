import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.produto.createMany({
    data: [
      {
        nome: "Camisa Masculina | Estilo e Conforto",
        descricao: "Camisa Masculina – Estilo e Conforto em Todos os Momentos Destaque-se com personalidade usando nossa camisa de corte moderno e acabamento premium. Confeccionada em tecido leve e respirável, ela é perfeita para o dia a dia ou ocasiões casuais. Ideal para quem não tem medo de se expressar com estilo. Tecido: Algodão penteado (ou outro tecido, se preferir especificar) Modelagem: Regular/ajustada Tamanhos disponíveis: P, M, G, GG Combine com jeans, bermudas ou peças neutras para criar um look autêntico e cheio de atitude.",
        preco: 55.00,
        imagemUrl: "https://i.imgur.com/DzYlDdL.jpeg" 
      },
      {
        nome: "Camisa Bege | Arte e Originalidade",
        descricao: "Camisa Bege – Um toque de arte e originalidade no seu visual. Esta camisa une estilo contemporâneo com uma estampa abstrata quadrada no centro, ideal para quem aprecia moda com identidade. Confeccionada em tecido leve e confortável, proporciona liberdade de movimento e um caimento impecável. Perfeita para uso casual ou eventos criativos. Tecido: Algodão com toque macio Modelagem: Regular Tamanhos disponíveis: P, M, G, GG Combine com calças jeans, sarja ou até uma bermuda para um look urbano e autêntico.",
        preco: 58.90,
        imagemUrl: "https://i.imgur.com/Un46SFG.jpeg"
      },
      {
        nome: "Calça Jeans Masculina Slim Algodão",
        descricao: "Adquira agora uma calça masculina de excelente qualidade da marca Wolfgan! Essa calça básica de algodão tem modelagem Slim e possui bolsos na frente e atrás! Com lavagens jeans azul, essa peça é super versátil, estilosa e confortável! Qualquer dúvida sobre o produto entre em contato conosco, ok? Composição: -82% Algodão -16% Poliester -2% Elastano Características: -Possui bolsos frontais e traseiros -Possui passador de cinto Medidas: 40- cós:41cm / Gancho:28cm/ Comprimento:110cm. 44- cós:44cm / Gancho:30cm/ Comprimento:111cm.",
        preco: 140.99,
        imagemUrl: "https://images.tcdn.com.br/img/img_prod/769687/calca_jeans_masculina_slim_algodao_com_elastano_40_e_44_wolfgan_1439_variacao_9653_1_6b0685f12cef1f1e7ef4dbaf36e6a64c.jpg"
      },
      {
        nome: "Bermuda Esportiva Adidas | Performance e Conforto",
        descricao: "Bermuda Esportiva Preta Adidas – Liberdade de movimento e estilo para seus treinos e dia a dia. Com design clássico na cor preta e as tradicionais três listras laterais da Adidas, essa bermuda oferece leveza, respirabilidade e desempenho. Ideal para práticas esportivas ou composições casuais com um toque esportivo. Tecido: Poliéster leve e respirável com tecnologia AEROREADY Modelagem: Regular com cós elástico e cordão interno Tamanhos disponíveis: P, M, G, GG Combine com camisetas esportivas, regatas ou tênis casuais para um visual ativo e moderno.",
        preco: 119.90,
        imagemUrl: "https://a-static.mlcdn.com.br/800x560/bermuda-adidas-moletom-must-have-masculina-preto/apacheshoes/112847/12fc6cad233205de5e515548d4b63095.jpeg"
      },
      {
        nome: "Tênis Feminino Nike | Conforto e Estilo Bege",
        descricao: "Tênis Feminino Nike Bege – O equilíbrio perfeito entre conforto e estilo para o seu dia a dia. Com design moderno e acabamento sofisticado, esse modelo foi desenvolvido pensando na rotina urbana da mulher contemporânea. Sua cor bege versátil combina com diferentes looks e ocasiões, enquanto a palmilha macia e o solado antiderrapante garantem estabilidade e conforto prolongado. Tecido: Mesh respirável e sintético Modelagem: Feminina, ajuste anatômico Tamanhos disponíveis: 34, 35, 36, 37, 38, 39 Combine com jeans, leggings ou vestidos casuais para um visual leve, esportivo e elegante.",
        preco: 229.90,
        imagemUrl: "https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-off-white-court-legacy-lift-77343/303832-1.jpg?w=670&h=670&v=no-change&qs=ignore"
      },
      {
        nome: "Boné Vermelho | Estilo Urbano New York",
        descricao: "Boné Vermelho – Estilo e atitude inspirados nas ruas de New York. Confeccionado em tecido resistente e com acabamento de alta qualidade, este boné traz bordado frontal com o clássico logotipo da cidade que nunca dorme. Seu design moderno com aba curva oferece conforto e proteção, ideal para compor looks casuais e urbanos. Tecido: Algodão com poliéster Modelagem: Ajustável com fecho traseiro Tamanhos disponíveis: Único (ajustável) Use com camisetas, jeans ou streetwear para destacar sua personalidade com autenticidade.",
        preco: 64.90,
        imagemUrl: "https://images.tcdn.com.br/img/img_prod/763583/bone_new_york_8793_1_08df9ef868202abde19e26d39956e242.jpg"
      }
    ]
  });

  console.log("Produtos inseridos com sucesso!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
