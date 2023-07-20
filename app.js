let button = document.querySelectorAll('button');

color();
function color() {
    button.forEach(function(imagen) {
      imagen.addEventListener('click', function() {
        button.forEach(function(button) {
          if (button === imagen) {
            button.classList.toggle('color'); 
          } else {
            button.classList.remove('color'); 
          }
        });
      });
    });
  }

