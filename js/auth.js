// ===============================
// CADASTRAR USUÁRIO
// ===============================
function cadastrarUsuario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const emailExistente = usuarios.some((u) => u.email === email);
  if (emailExistente) {
    alert("Este email já está cadastrado!");
    return;
  }

  const novoUsuario = { nome, email, senha };

  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Conta criada com sucesso!");
  window.location.href = "login.html";
}

// ===============================
// LOGIN DE USUÁRIO
// ===============================
function loginUsuario() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!usuario) {
    alert("E-mail ou senha incorretos!");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  alert("Login realizado com sucesso!");
  window.location.href = "index.html";
}
