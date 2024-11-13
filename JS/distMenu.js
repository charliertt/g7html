function fmenu(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('cuerpoPag').innerHTML = data;
                       
                // Configurar Parsley validaciones de formulario
                $('#registroForm').parsley({
                    trigger: 'input'
                });
                // Para asegurar la validación inmediata mientras el usuario escribe
                $('input').on('input', function () {
                    $(this).parsley().validate();
                });

                // Seleccionar el modal llamandolo por su Id
               
                var modal = new bootstrap.Modal(document.getElementById('exampleModal'), { backdrop: 'static', keyboard: false });
                modal.show(); 

        }).catch(error => console.log('Error al cargar la página', error));

}

