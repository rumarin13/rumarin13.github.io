
/***************************************************** noticia aleatoria     ***********************************************************************/






function noticiaAleatoria() {
    $.ajax({
        url : '../assets/json/articulos.json',

        type : 'get',

        success : function(datos){

            objeto_json = datos

            function aleatoria(){

                return  Math.floor(Math.random()*objeto_json.noticias.length)

            }

            let i = 1;
            let numeroAleatorio = [];
            let noticiaSeleccionada = [];
            let noticia_aleatoria = [];


            while(i<5){


            numeroAleatorio[i]=aleatoria();

            let nuevoNumero = aleatoria();

            while (numeroAleatorio.includes(nuevoNumero)) {

            nuevoNumero = aleatoria();
            }
        
            numeroAleatorio[i] = nuevoNumero;

            noticiaSeleccionada[i] = objeto_json.noticias[numeroAleatorio[i]]

            noticia_aleatoria[i] =`
            <h2>${noticiaSeleccionada[i].titulo}</h2>
            <p>${noticiaSeleccionada[i].contenido}</p>`;


            $('.noticia'+i).html (noticia_aleatoria[i])

            i++
        }




        }
    })
}

$(document).ready(function(){
    noticiaAleatoria();
})

/*****************************************************  CARRUSEL_INDEX     ***********************************************************************/

izquierda = document.getElementById('izquierda_index');

derecha = document.getElementById('derecha_index');

imagen_noticias= document.getElementById('imagen_carrusel')

noticias_objetos = {

    0 : document.getElementById( 'mar'),

    1 : document.getElementById( 'ozono'),

    2 : document.getElementById( 'incendio')


}

imagenes_noticias_ob = {
     0: 'src= "./assets/fotos/contaminacion_maritima.png" alt="mar" width="1920px" height="1080px"' ,

   1: 'src= "./assets/fotos/capa_ozono.png" alt="mar" width="287px" height="176px"',

    2: 'src="./assets/fotos/foto_incendio.png" alt="incendio" width="1024px" height="536px"'
}

contador_carrusel_i = 1;

contador_carrusel_d = 1;



izquierda.addEventListener('click',function(){


    let meter_imagen = `<img ${imagenes_noticias_ob[contador_carrusel_i]}>`   ;


    imagen_noticias.innerHTML= meter_imagen;

    
    contador_carrusel_i ++

    if(contador_carrusel_i === 3 ){

        contador_carrusel_i = 0
    }

})

derecha.addEventListener('click',function(){


    let meter_imagen = `<img ${imagenes_noticias_ob[contador_carrusel_d]}>`   ;


    imagen_noticias.innerHTML= meter_imagen;

    
    contador_carrusel_d ++

    if(contador_carrusel_d ===3 ){

        contador_carrusel_d = 0
    }

})









