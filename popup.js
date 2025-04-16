window.onload = function() {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-popup");
  
    // Exibe o pop-up
    popup.showModal();
  
    // Fecha o pop-up ao clicar no botão "Close"
    closeBtn.addEventListener("click", function() {
      popup.close();
    });
  };
  