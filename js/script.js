const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    botaoTema.classList.remove("btn-dark");

    botaoTema.classList.add("btn-light");

    botaoTema.textContent = "Modo Claro";
  } else {
    botaoTema.classList.remove("btn-light");

    botaoTema.classList.add("btn-dark");

    botaoTema.textContent = "Modo Noturno";
  }
});
