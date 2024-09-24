
/*********************************** datos de contacto ************************************************/


var form = document.querySelector('#formulario_de_solicitud');

var boton = document.querySelector('#submit_enviar');

boton.addEventListener('click', (evento) => {

    evento.preventDefault();

    valido = validar();

    if (valido == false || terminos =='denegados') {

        if(terminos == 'denegados'){ mensaje += 'Lea y acepte la política de privacidad'}

        if(valido == false){ alert(mensaje);}}

    else {

        form.submit();

    }
});

contador_errores = 0

function validar() { 
    
    nombre = document.getElementById('nombre').value;

    apellidos = document.getElementById('apellidos').value;

    telefono_de_contacto = document.getElementById('telefono_de_contacto').value;

    correo_electronico = document.getElementById('correo_electronico').value;

    mensaje = '';

    contador_errores = 0



    let re_nombre = /^[a-zA-Z]{1,15}$/;

    if (nombre == null || nombre == '' || !re_nombre.test(nombre)) {
        mensaje += 'El nombre no es correcto    ';
        contador_errores+= 1;
    }


    let re_apellidos = /^[a-zA-Z]{1,40}$/;

    if (apellidos == null || apellidos == '' || !re_apellidos.test(apellidos)) {
        mensaje += 'El apellido no es correcto     ';
        contador_errores+= 1;
    }


    let re_telefono_de_contacto = /^[0-9]{1,9}$/;

    if (telefono_de_contacto == null || telefono_de_contacto == '' || !re_telefono_de_contacto.test(telefono_de_contacto)) {
        mensaje += 'El número de teléfono no es correcto,debe contener solamente números y deben ser 9 digitos    ';
        contador_errores+= 1;
    }


    let re_correo_electronico = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (correo_electronico == null || correo_electronico == '' || !re_correo_electronico.test(correo_electronico)) {
        mensaje += 'El correo electrónico no es correcto     ';
        contador_errores+= 1;
    }


    if(contador_errores > 0){return false

    }else{  return true;}

}



/*********************************** PRESUPUESTO ************************************************/

/****productos**********/

    
    productos = document.getElementById('productos')

    igualador= 0
    
    productos.addEventListener('change', function() {

        productoElegido = productos.value; 

        

        if (productoElegido == "1") {
            añadir(20) ;
            añadir(-igualador) ;
            igualador= 20
        } 
        else if (productoElegido == "2") {
            añadir(12) ;
            añadir(-igualador) ;
            igualador= 12
        } 
        else if (productoElegido == "3") {
            añadir(30) ;
            añadir(-igualador) ;
            igualador= 30
        }
    
    })
/*******contador dinero *******/
contador_tamaño= 0

presupuesto_input = document.getElementById('presupuesto_input')

var contador_dinero = 0

function añadir(dinero){

    contador_dinero += dinero

    presupuesto_input.value = contador_dinero

}

/*******plazo *********/
mi_plazo = document.getElementById('plazo')

igualador=0

mi_plazo.addEventListener('input',function(){

    plazo_cliente = parseFloat(mi_plazo.value);

    if(plazo_cliente<=7){
        añadir(10)
        añadir(-igualador)
        igualador= 10
    }
    if(plazo_cliente<=10 && plazo_cliente>=8 ){
        añadir(7)
        añadir(-igualador)
        igualador=7
    }
    if(plazo_cliente>=11 && plazo_cliente<=15){
        añadir(2)
        añadir(-igualador)
        igualador=2
    }
    if( plazo_cliente>=16){
    
        añadir(-igualador)
        igualador=0
    }





})

/************EXTRAS *********/

paquete_folios_extra = document.getElementById('paquete_folios_extra')

camisetas_extra = document.getElementById('camisetas_extra')

sandalias_extra = document.getElementById('sandalias_extra')


paquete_folios_extra.addEventListener('change',function(){

    if(paquete_folios_extra.checked){añadir(3)

    }else{añadir(-3)}
})

camisetas_extra.addEventListener('change',function(){

    if(camisetas_extra.checked){añadir(20)

    }else{añadir(-20)}
})



sandalias_extra.addEventListener('change',function(){

    if(sandalias_extra.checked){añadir(3)

    }else{añadir(-3)}
})




/*******TERMINOS Y PRIVACIDAD ************/ 



terminos_privacidad = document.getElementById('terminos_privacidad')

terminos='denegados'

terminos_privacidad.addEventListener('change',function(){

    if(terminos_privacidad.checked){terminos='aceptados'

    }else{terminos = 'denegados'}
})
















/*********************************** TAMAÑO ************************************************/


var boton_pequeño = document.getElementById('pequeño')

var boton_normal = document.getElementById('normal')

var boton_grande = document.getElementById('grande')


function marcado(elemento){

    boton_pequeño.style.background = 'rgb(33, 33, 33)'

    boton_normal.style.background = 'rgb(33, 33, 33)'

    boton_grande.style.background = 'rgb(33, 33, 33)'


    elemento.style.background = 'rgb(66, 105, 66)'

}

boton_pequeño.addEventListener('click',function(){


    if(contador_tamaño === 2){

            añadir(  -50)

            contador_tamaño= 0
        }

    if(contador_tamaño === 3){

        añadir(  -100)

        contador_tamaño= 0
    }


    if(contador_tamaño === 0){
        
        añadir(  20)

        contador_tamaño= 1
    } 

    marcado(boton_pequeño)
    

})

boton_normal.addEventListener('click',function(){

    if(contador_tamaño === 1){

        añadir(  -20)

        contador_tamaño= 0

    }

    if(contador_tamaño === 3){

        añadir(  -100)
        
        contador_tamaño= 0
    }
    if(contador_tamaño === 0){
        


        añadir(  50)

        contador_tamaño= 2
    } 
    
    marcado(boton_normal)

    
})

boton_grande.addEventListener('click',function(){

    if(contador_tamaño === 2){

        añadir(  -50)

        contador_tamaño= 0

    }

    if(contador_tamaño === 1){

        añadir(  -20)

        contador_tamaño= 0

    }

    if(contador_tamaño === 0){

        añadir(  100)

        contador_tamaño= 3
    } 
    marcado(boton_grande)
})




