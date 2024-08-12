document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector("#navbarNavDropdown").classList.toggle("show");
    document.querySelector(".navbar-nav").classList.toggle("show");
  });

document.addEventListener("DOMContentLoaded", () => {
  // Function to format phone number
  function formatPhoneNumber(value) {
    return value
      .replace(/\D/g, "") // Remove non-digit characters
      .replace(/(\d{2})(\d{1,5})/, "$1 $2") // Add space after the first 2 digits
      .replace(/(\d{5})(\d{1,4})/, "$1-$2") // Add hyphen after the next 5 digits
      .trim(); // Remove extra spaces if any
  }

  // Event listener for the phone input
  const phoneInput = document.getElementById("tel");
  phoneInput.addEventListener("input", (e) => {
    e.target.value = formatPhoneNumber(e.target.value);
  });

  // Function to get current time formatted as HH:MM
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // Function to get current date formatted as YYYY-MM-DD
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Event listener for starting typing in the 'cliente' input
  clientInput.addEventListener("focus", () => {
    document.getElementById("horario-entrada").value = getCurrentTime();
    document.querySelector('input[placeholder="Data de Entrada"]').value =
      getCurrentDate();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mensalistaInput = document.getElementById("mensalista");

  mensalistaInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    if (value.length > 6) {
      value = value.slice(0, 6); // Limita a entrada a 6 caracteres
    }

    const formattedValue = value.replace(/(\d{2})(\d{2})(\d{2})/, "$1/$2/$3");

    e.target.value = formattedValue;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mensalidadeInput = document.getElementById("mensalidade");

  mensalidadeInput.addEventListener("input", function (e) {
    // Remove todos os caracteres não numéricos, exceto ponto e vírgula
    let value = e.target.value.replace(/[^\d.,]/g, "");

    // Formata para incluir "R$" no início
    if (value.length > 0) {
      value = "R$ " + value;
    }

    e.target.value = value;
  });

  // Evita a inserção de letras
  mensalidadeInput.addEventListener("keypress", function (e) {
    const char = String.fromCharCode(e.which);
    if (!/[0-9.,]/.test(char)) {
      e.preventDefault();
    }
  });
});
