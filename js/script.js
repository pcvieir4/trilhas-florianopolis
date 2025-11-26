// BANCO DE TRILHAS
const trilhas = [
  {
    nome: "Lagoinha do Leste",
    regiao: "Sul",
    duracao: "2–3h",
    dificuldade: "Difícil",
    imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/11/29/8d/img-20170103-wa0029-largejpg.jpg?w=900&h=-1&s=1",
    descricao: "Uma das praias mais isoladas e bonitas da ilha."
  },
  {
    nome: "Morro da Cruz",
    regiao: "Centro",
    duracao: "40min",
    dificuldade: "Moderada",
    imagem: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/06/o-que-conhecer-em-florianopolis.jpg",
    descricao: "Vista 360° da ilha — perfeita para fotos."
  },
  {
    nome: "Costa da Lagoa",
    regiao: "Leste",
    duracao: "2–3h",
    dificuldade: "Leve",
    imagem: "https://imgmd.net/images/v1/guia/1677766/costa-da-lagoa.jpg",
    descricao: "Trilha plana com cachoeiras e restaurantes típicos."
  },
  {
    nome: "Morro das Aranhas",
    regiao: "Norte",
    duracao: "1–2h",
    dificuldade: "Moderada",
    imagem: "https://trilhandomontanhas.com.br/wp-content/uploads/2020/09/trilha-morro-das-aranhas.jpg",
    descricao: "Vista para Ingleses e Santinho."
  },
  {
    nome: "Praia Brava → Lagoinha",
    regiao: "Norte",
    duracao: "1–2h",
    dificuldade: "Leve",
    imagem: "https://floripacentrosul.com.br/wp-content/uploads/2020/06/capa2-1024x585.jpg",
    descricao: "Trilha costeira com mirantes."
  },
  {
    nome: "Trilha do Saquinho",
    regiao: "Sul",
    duracao: "1–2h",
    dificuldade: "Moderada",
    imagem: "https://viveirodocampo.com.br/wp-content/uploads/2024/01/Trilha-do-Saquinho-Florianopolis.jpg",
    descricao: "Vista incrível da Praia da Solidão."
  }
];

// FUNÇÃO QUE RENDERIZA OS CARDS
function renderizarTrilhas() {
  const regiao = document.getElementById("filtroRegiao").value;
  const dificuldade = document.getElementById("filtroDificuldade").value;

  const container = document.getElementById("listaTrilhas");
  container.innerHTML = "";

  const filtradas = trilhas.filter(t => {
    const matchRegiao = regiao === "todas" || t.regiao === regiao;
    const matchDificuldade = dificuldade === "todas" || t.dificuldade === dificuldade;
    return matchRegiao && matchDificuldade;
  });

  if (filtradas.length === 0) {
    container.innerHTML = "<p>Nenhuma trilha encontrada.</p>";
    return;
  }

  filtradas.forEach(t => {
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

// EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  renderizarTrilhas();

  document.getElementById("filtroRegiao").addEventListener("change", renderizarTrilhas);
  document.getElementById("filtroDificuldade").addEventListener("change", renderizarTrilhas);
});
