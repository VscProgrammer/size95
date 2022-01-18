$(document).ready(function(){

    $(document).ready(function(){

        $('#btnSend').click(function(){
    
            var errores = '';
    
            // Validado Nombre ==============================
            if( $('#names').val() == '' ){
                errores += '<p>Escriba su nombre</p>';
                $('#names').css("border-bottom-color", "#F14B4B")
            } else{
                $('#names').css("border-bottom-color", "#d1d1d1")
            }

            // Validado apellido ==============================
            if( $('#last_name').val() == '' ){
                errores += '<p>Escriba su apellido</p>';
                $('#last_name').css("border-bottom-color", "#F14B4B")
            } else{
                $('#last_name').css("border-bottom-color", "#d1d1d1")
            }

            // Validado apellido ==============================
            if( $('#identity').val() == '' ){
                errores += '<p>Escriba su cedula de identidad</p>';
                $('#identity').css("border-bottom-color", "#F14B4B")
            } else{
                $('#identity').css("border-bottom-color", "#d1d1d1")
            }
    
    
            // Validado Correo ==============================
            if( $('#birth').val() == '' ){
                errores += '<p>Escriba su fecha de nacimiento</p>';
                $('#birth').css("border-bottom-color", "#F14B4B")
            } else{
                $('#birth').css("border-bottom-color", "#d1d1d1")
            }
    
            // Validado Mensaje ==============================
            if( $('#phone').val() == '' ){
                errores += '<p>Escriba su numero de telefono</p>';
                $('#phone').css("border-bottom-color", "#F14B4B")
            } else{
                $('#phone').css("border-bottom-color", "#d1d1d1")
            }

            // Validado Mensaje ==============================
            if( $('#email').val() == '' ){
                errores += '<p>Escriba su correo electronico</p>';
                $('#email').css("border-bottom-color", "#F14B4B")
            } else{
                $('#email').css("border-bottom-color", "#d1d1d1")
            }

             // Validado Mensaje ==============================
             if( $('#direction').val() == '' ){
                errores += '<p>Escriba su direccion</p>';
                $('#direction').css("border-bottom-color", "#F14B4B")
            } else{
                $('#direction').css("border-bottom-color", "#d1d1d1")
            }

              // Validado Mensaje ==============================
              if( $('#genero').val() == '' ){
                errores += '<p>Seleccione su genero</p>';
                $('#genero').css("border-bottom-color", "#F14B4B")
            } else{
                $('#genero').css("border-bottom-color", "#d1d1d1")
            }

           

            

            // ENVIANDO MENSAJE ============================
            if( errores == '' == false){
                var mensajeModal = '<div class="modal_wrap">'+
                                        '<div class="mensaje_modal">'+
                                            '<h3>Errores encontrados</h3>'+
                                            errores+
                                            '<span id="btnClose">Cerrar</span>'+
                                        '</div>'+
                                    '</div>'
    
                $('body').append(mensajeModal);
            }
    
            // CERRANDO MODAL ==============================
            $('#btnClose').click(function(){
                $('.modal_wrap').remove();
            });
        });
    
    });

    




});
