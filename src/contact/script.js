document.addEventListener("DOMContentLoaded", function() {
    const showFormBtn = document.getElementById("showFormBtn");
    const customerForm = document.getElementById("contactForm");
  
    showFormBtn.addEventListener("click", function() {
      if (customerForm.style.display === "none" || customerForm.style.display === "") {
        customerForm.style.display = "flex";
        showFormBtn.textContent = "Ocultar formulário"
      } else {
        customerForm.style.display = "none";
        showFormBtn.textContent = "Mostrar formulário"
      }
    });
  });