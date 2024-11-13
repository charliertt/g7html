function fmenu(page) {
    
    fetch(`${page}.html`)
    .then(response => response.text())
    .then(data => {
        document.getElementById('cuerpoPag').innerHTML = data;

        // Inicializar Parsley después de cargar el formulario
        $('#registroForm').parsley();
        
        // Configuración del modal
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'), { backdrop: 'static', keyboard: false });
        modal.show();
    })
    .catch(error => console.log('Error al cargar la página', error));
}

//Funcion para mostrar la imagen
function mostrarVistaPrevia(event) {
    const archivo = event.target.files[0]; // Obtener el archivo seleccionado
    const vistaPrevia = document.getElementById("vistaPrevia"); // Elemento para mostrar la imagen
    const vistaPrevia2 = document.getElementById("vistaPrevia2"); // Elemento para mostrar la imagen

// Si hay un archivo, creamos un objeto URL para mostrarlo
if (archivo) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        vistaPrevia.src = e.target.result; // Establecer la fuente de la imagen
        vistaPrevia.style.display = 'block'; // Mostrar la imagen
        vistaPrevia2.src = e.target.result; // Establecer la fuente de la imagen
        vistaPrevia2.style.display = 'block'; // Mostrar la imagen
    }

    reader.readAsDataURL(archivo); // Leer el archivo como una URL de datos
} else {
    vistaPrevia.style.display = 'none'; // Si no hay archivo, ocultamos la vista previa
    vistaPrevia2.style.display = 'none'; // Si no hay archivo, ocultamos la vista previa
}
}

//funcion para mostrar el texto
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
