document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-grid img");
    images.forEach(image => {
      image.addEventListener("click", () => {
        const src = image.src;
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.innerHTML = `<div class="modal-content"><span class="close">&times;</span><img src="${src}" class="modal-image"></div>`;
        document.body.appendChild(modal);
        document.querySelector(".modal .close").addEventListener("click", () => {
          document.body.removeChild(modal);
        });
      });
    });
  });
  