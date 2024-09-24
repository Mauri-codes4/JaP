document.addEventListener("DOMContentLoaded", function () {
  // Escribe el código necesario aquí
  const button = document.getElementById('highlightBtn');

        button.addEventListener('click', function() {

            const p = document.getElementById('lorem');

            p.classList.add('highlight');
        });

  //
});
