
// MENÚ PARA CELULARES
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const abierto = nav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", abierto);
  menuToggle.setAttribute(
    "aria-label",
    abierto ? "Cerrar menú" : "Abrir menú"
  );

  menuToggle.textContent = abierto ? "✕" : "☰";
});

// CERRAR EL MENÚ AL ELEGIR UNA SECCIÓN
document.querySelectorAll(".nav a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

// BOTONES DE DETALLES
const detailMessage = document.getElementById("detailMessage");

document.querySelectorAll(".details-btn").forEach((boton) => {
  boton.addEventListener("click", () => {
    detailMessage.textContent = boton.dataset.message;
  });
});

// FORMULARIO DE CONTACTO
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();

  formMessage.textContent =
    `¡Gracias, ${nombre}! Este formulario es una demostración. ` +
    "Todavía no envía mensajes a Helena.";

  contactForm.reset();
});

// AÑO AUTOMÁTICO
document.getElementById("year").textContent =
  new Date().getFullYear();
/* Sección de proyectos */
.proyectos {
  padding: 90px 24px;
  background: #f8f7f3;
}

.proyectos-contenido {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.proyectos .etiqueta {
  font-size: 12px;
  letter-spacing: 4px;
  color: #71816c;
  margin-bottom: 18px;
}

.proyectos h2 {
  font-size: clamp(30px, 5vw, 48px);
  font-weight: 500;
  margin: 0 0 16px;
  color: #343a35;
}

.proyectos .intro {
  color: #777b74;
  margin-bottom: 45px;
}

.lista-proyectos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  text-align: left;
}

.tarjeta-proyecto {
  padding: 30px;
  background: #ffffff;
  border: 1px solid #e7e8e1;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s, box-shadow 0.2s;
}

.tarjeta-proyecto:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px #0000000d;
}

.tarjeta-proyecto .numero {
  color: #82917b;
  font-size: 25px;
  margin-bottom: 28px;
}

.tarjeta-proyecto h3 {
  font-size: 21px;
  color: #343a35;
  margin: 0 0 14px;
}

.tarjeta-proyecto p {
  color: #777b74;
  line-height: 1.7;
  margin-bottom: 28px;
}

.boton-detalles {
  margin-top: auto;
  display: inline-block;
  color: #536b50;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #82917b;
  padding-bottom: 5px;
}

.boton-detalles:hover {
  color: #283f29;
}

/* En pantallas pequeñas */
@media (max-width: 800px) {
  .lista-proyectos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 550px) {
  .proyectos {
    padding: 60px 18px;
  }

  .lista-proyectos {
    grid-template-columns: 1fr;
  }
}