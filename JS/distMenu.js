function fmenu(page) {
    fetch(`${page}.html`)
    .then(response => response.text())
    .then(data => {
        document.getElementById('cuerpoPag').innerHTML = data;

     
        $('#registroForm').parsley();

       
        $('#registroForm').parsley().on('form:submit', function() {
            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: 'Todos los campos son válidos.',
                confirmButtonText: 'Aceptar',
                timer: 3000, 
                timerProgressBar: true, 
            }).then(() => {
                
                window.location.href = "index.html";
            });
        
            return false; 
        });
        
       
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'), { backdrop: 'static', keyboard: false });
        modal.show();
    })
    .catch(error => console.log('Error al cargar la página', error));
}

// Función para mostrar la imagen de vista previa
function mostrarVistaPrevia(event) {
    const archivo = event.target.files[0]; 
    const vistaPrevia = document.getElementById("vistaPrevia"); 
    const vistaPrevia2 = document.getElementById("vistaPrevia2"); 

    // Si hay un archivo, creamos un objeto URL para mostrarlo
    if (archivo) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            vistaPrevia.src = e.target.result; 
            vistaPrevia.style.display = 'block';
            vistaPrevia2.src = e.target.result; 
            vistaPrevia2.style.display = 'block';
        }

        reader.readAsDataURL(archivo); 
    } else {
        vistaPrevia.style.display = 'none'; 
        vistaPrevia2.style.display = 'none'; 
    }
}

// Función para mostrar el texto
function mostrarTexto() {
    // Obtener el valor del input
    const texto = document.getElementById('nombres').value;
    const texto1 = document.getElementById('nombres1').value;
    const texto2 = document.getElementById('correo').value;
    
    // Mostrar el texto en el div con id "textoMostrado"
    document.getElementById('textoMostrado').textContent = texto;
    document.getElementById('textoMostrado1').textContent = texto1;
    document.getElementById('textoMostrado2').textContent = texto2;
}
