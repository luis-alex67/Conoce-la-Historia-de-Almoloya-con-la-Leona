// Datos de ejemplo (luego lo convertimos a JSON si quieres)
const lugares = {
  La_Chimenea: {
    titulo: "Plaza principal",
    texto: "Aquí va la info del lugar: historia breve, recomendaciones, horarios, etc."
  },
  museo: {
    titulo: "Museo local",
    texto: "Info del museo: qué hay, qué se recomienda ver, costos aproximados, etc."
  }
};

const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");
const closeBtn = document.getElementById("closeBtn");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

function openModal(id){
  const lugar = lugares[id];
  if(!lugar) return;

  modalTitle.textContent = lugar.titulo;
  modalText.textContent = lugar.texto;

  backdrop.hidden = false;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(){
  // Oculta directo (simple). Luego si quieres lo hacemos con animación de salida.
  backdrop.hidden = true;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
}

// Click en hotspots
document.querySelectorAll(".hotspot").forEach(el => {
  el.addEventListener("click", () => {
    const id = el.dataset.id;
    openModal(id);
  });
});

// Cerrar
closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

// Cerrar con ESC
window.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && !modal.hidden){
    closeModal();
  }
});
