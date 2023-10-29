// const typed = new Typed(".typed", {
//   strings: [
//    ,
//   ],
//   stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
//   typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
//   startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
//   backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
//   smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
//   shuffle: false, // Alterar el orden en el que escribe las palabras.
//   backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
//   loop: false, // Repetir el array de strings
//   loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
//   showCursor: true, // Mostrar cursor palpitanto
//   cursorChar: "|", // Caracter para el cursor
//   contentType: "html", // 'html' o 'null' para texto sin formato
// });

// Obtén una referencia al botón "Leer Más"
// Obtén una referencia al botón "Leer Más"
const mostrarMasBtn = document.getElementById("mostrar-mas");

// Obtén una referencia al párrafo oculto que quieres mostrar
const hiddenParagraph = document.querySelector(".knowledge__hidden-paragraph");

// Variable para rastrear el estado de visibilidad
let hidden = true;

// Agrega un evento de clic al botón
mostrarMasBtn.addEventListener("click", function () {
  // Cambia el estado de visibilidad del párrafo oculto
  hidden = !hidden;
  hiddenParagraph.style.display = hidden ? "none" : "block";
  mostrarMasBtn.textContent = hidden ? "Leer Más" : "Leer Menos";
});

// Botton go top

(function () {
  const TopBtn = document.querySelector("#Top");

  TopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
})();

// Slider

(function () {
  const sliders = [...document.querySelectorAll(".testimony__body")];
  const buttonNext = document.querySelector("#next");
  const buttonBefore = document.querySelector("#before");
  let value;

  buttonNext.addEventListener("click", () => {
    changePosition(1);
  });

  buttonBefore.addEventListener("click", () => {
    changePosition(-1);
  });

  const changePosition = (add) => {
    const currentTestimony = document.querySelector(".testimony__body--show")
      .dataset.id;
    value = Number(currentTestimony);
    value += add;

    sliders[Number(currentTestimony) - 1].classList.remove(
      "testimony__body--show"
    );
    if (value === sliders.length + 1 || value === 0) {
      value = value === 0 ? sliders.length : 1;
    }

    sliders[value - 1].classList.add("testimony__body--show");
  };
})();

// Questions

(function () {
  const titleQuestions = [...document.querySelectorAll(".questions__title")];
  console.log(titleQuestions);

  titleQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      let height = 0;
      let answer = question.nextElementSibling;
      let addPadding = question.parentElement.parentElement;

      addPadding.classList.toggle("questions__padding--add");
      question.children[0].classList.toggle("questions__arrow--rotate");

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }

      answer.style.height = `${height}px`;
    });
  });
})();

// Menu
(function () {
  const openButton = document.querySelector(".nav__menu");
  const menu = document.querySelector(".nav__link");
  const closeMenu = document.querySelector(".nav__close");
  const menuLinks = document.querySelectorAll(".nav__links");

  openButton.addEventListener("click", () => {
    menu.classList.add("nav__link--show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("nav__link--show");
  });

  // Agregar un evento clic a cada enlace del menú
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("nav__link--show"); // Cierra el menú
    });
  });
})();

// // Alert

// document.onmousedown = disableclick;
// function disableclick(event) {
//   if (event.button == 2) {
//     alert("Contact me on Discord: JessVV#8274");
//     return false;
//   }
// }

// var pause = document.querySelector(".pause");
// var play = document.querySelector(".play");
// var btn = document.querySelector("#app");

// btn.addEventListener("click", () => {
//   if (play.classList.contains("active")) {
//     play.classList.remove("active");
//     pause.classList.add("active");
//   } else {
//     pause.classList.remove("active");
//     play.classList.add("active");
//   }
// });

// Obtén una referencia al botón "Leer Más"
