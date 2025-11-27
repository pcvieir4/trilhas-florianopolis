// ---------------------------------------------------------------------------
// BANCO DE TRILHAS
// ---------------------------------------------------------------------------
// Aqui criamos um array chamado "trilhas". Ele funciona como um banco de dados
// simples dentro do JavaScript. Cada trilha é um objeto contendo informações
// usadas para preencher os cards na tela.
// ---------------------------------------------------------------------------

const trilhas = [
  {
    nome: "Lagoinha do Leste",
    regiao: "Sul",
    duracao: "2–3h",
    dificuldade: "Difícil",
    imagem:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/11/29/8d/img-20170103-wa0029-largejpg.jpg?w=900&h=-1&s=1",
    descricao: "Uma das praias mais isoladas e bonitas da ilha.",
  },

  // (Outras trilhas seguem o mesmo padrão)
  {
    nome: "Morro da Cruz",
    regiao: "Centro",
    duracao: "40min",
    dificuldade: "Moderada",
    imagem:
      "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/06/o-que-conhecer-em-florianopolis.jpg",
    descricao: "Vista 360° da ilha — perfeita para fotos.  ",
  },

  {
    nome: "Costa da Lagoa",
    regiao: "Leste",
    duracao: "2–3h",
    dificuldade: "Leve",
    imagem: "https://imgmd.net/images/v1/guia/1677766/costa-da-lagoa.jpg",
    descricao: "Trilha plana com cachoeiras e restaurantes típicas.",
  },

  {
    nome: "Morro das Aranhas",
    regiao: "Norte",
    duracao: "1–2h",
    dificuldade: "Moderada",
    imagem:
      "https://trilhasemsc.com.br/public/img/trilhas/detalhes-principal/trilha-do-morro-das-aranhas.jpg",
    descricao: "Vista para Ingleses e Santinho.",
  },

  {
    nome: "Praia Brava → Lagoinha",
    regiao: "Norte",
    duracao: "1–2h",
    dificuldade: "Leve",
    imagem:
      "https://img.nsctotal.com.br/wp-content/uploads/2023/11/Praia-Brava-foto-Allan-CarvalhoPMF-2.jpg",
    descricao: "Trilha costeira com mirantes.",
  },

  {
    nome: "Trilha do Saquinho",
    regiao: "Sul",
    duracao: "1–2h",
    dificuldade: "Moderada",
    imagem:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/10/42/5b/praia-do-saquinho.jpg?w=900&h=500&s=1",
    descricao: "Vista incrível da Praia da Solidão.",
  },
  {
    nome: "Trilha do Morro do Lampião",
    regiao: "Sul",
    duracao: "1h–1h30",
    dificuldade: "Leve",
    imagem:
      "https://suldefloripa.com.br/wp-content/uploads/2021/02/Trilha-Morro-do-Lampiao-SuldeFloripa.com_.br-17.jpeg",
    descricao:
      "Trilha curta com vista elevada da região do Saquinho e da Praia da Solidão.",
  },

  {
    nome: "Trilha dos Naufragados",
    regiao: "Sul",
    duracao: "2–3h",
    dificuldade: "Moderada",
    imagem:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/13/ae/1e/praia-dos-naufragados.jpg?w=1200&h=-1&s=1",
    descricao:
      "Uma das trilhas mais clássicas de Floripa, levando ao farol e à Praia de Naufragados.",
  },

  {
    nome: "Piscinas Naturais de Barra da Lagoa",
    regiao: "Norte",
    duracao: "20–40min",
    dificuldade: "Leve",
    imagem:
      "https://destinoflorianopolis.com.br/wp-content/uploads/2017/07/piscinas-naturias-em-florian%C3%B3polis.jpg",
    descricao:
      "Caminhada rápida por pedras e costões, chegando a piscinas naturais cristalinas.",
  },
];

// ---------------------------------------------------------------------------
// FUNÇÃO RESPONSÁVEL POR RENDERIZAR OS CARDS NA TELA
// ---------------------------------------------------------------------------
// Esta função é chamada quando a página carrega e sempre que o usuário muda
// algum filtro. Ela:
// 1. Lê os filtros selecionados
// 2. Filtra as trilhas de acordo com esses filtros
// 3. Cria os cards HTML dinamicamente
// ---------------------------------------------------------------------------

function renderizarTrilhas() {
  // Lê os valores selecionados nos filtros
  const regiao = document.getElementById("filtroRegiao").value;
  const dificuldade = document.getElementById("filtroDificuldade").value;

  // Seleciona o container onde os cards serão colocados
  const container = document.getElementById("listaTrilhas");

  // Limpa o conteúdo atual para evitar duplicações
  container.innerHTML = "";

  // -------------------------------------------------------------------------
  // FILTRAGEM DAS TRILHAS
  // -------------------------------------------------------------------------
  // Aqui usamos o método .filter() para retornar apenas as trilhas compatíveis
  // com os filtros escolhidos.
  // "t" é cada trilha do array. Usamos duas comparações:
  //
  // - matchRegiao: verifica se a região da trilha combina com o filtro
  // - matchDificuldade: o mesmo, mas para a dificuldade
  //
  // Se o usuário selecionar "todas", não filtramos por esse campo.
  // -------------------------------------------------------------------------

  const filtradas = trilhas.filter((t) => {
    const matchRegiao = regiao === "todas" || t.regiao === regiao;
    const matchDificuldade =
      dificuldade === "todas" || t.dificuldade === dificuldade;

    return matchRegiao && matchDificuldade; // só retorna trilhas que batem nos dois filtros
  });

  // Caso nenhum resultado seja encontrado, exibimos uma mensagem
  if (filtradas.length === 0) {
    container.innerHTML = "<p>Nenhuma trilha encontrada.</p>";
    return; // encerra a função
  }

  // -------------------------------------------------------------------------
  // CRIAÇÃO DOS CARDS
  // -------------------------------------------------------------------------
  // Para cada trilha filtrada, criamos um bloco HTML usando Template Literals.
  // O "+=" serve para ir adicionando os cards dentro do container.
  // -------------------------------------------------------------------------

  filtradas.forEach((t) => {
    container.innerHTML += `
      <div class="explore-card">
        
        <div class="explore-card-img">
          <img src="${t.imagem}" alt="${t.nome}" />
        </div>

        <div class="explore-card-body">

          <h3 class="explore-card-title">${t.nome}</h3>

          <div class="explore-card-meta">
            <span>📍 ${t.regiao}</span>
            <span>⏱ ${t.duracao}</span>
            <span>🔥 ${t.dificuldade}</span>
          </div>

          <p class="explore-card-desc">${t.descricao}</p>

          <button class="explore-btn">Ver Detalhes</button>

        </div>
      </div>
    `;
  });
}

// ---------------------------------------------------------------------------
// EVENTOS DA PÁGINA
// ---------------------------------------------------------------------------
// Aqui garantimos que a função "renderizarTrilhas" é executada assim que a
// página terminar de carregar. Depois adicionamos "listeners" aos selects,
// ou seja, sempre que o usuário mudar um filtro, o conteúdo da página é
// atualizado automaticamente.
// ---------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Renderiza todas as trilhas na primeira carga da página
  renderizarTrilhas();

  // Atualiza trilhas quando mudar o filtro de região
  document
    .getElementById("filtroRegiao")
    .addEventListener("change", renderizarTrilhas);

  // Atualiza trilhas quando mudar o filtro de dificuldade
  document
    .getElementById("filtroDificuldade")
    .addEventListener("change", renderizarTrilhas);
});

document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("usuarioLogado"));

  const btnLogin = document.getElementById("btnLogin");
  const saudacao = document.getElementById("saudacaoUsuario");

  if (user) {
    // Oculta o botão de login
    if (btnLogin) btnLogin.style.display = "none";

    // Mostra saudação
    if (saudacao) {
      saudacao.style.display = "inline-block";
      saudacao.textContent = `Olá, ${user.nome.split(" ")[0]} `;
    }
  }
});
