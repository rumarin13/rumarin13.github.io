/**************************************************************GALERIA DINAMICA********************************************************************/ 

/**************************************************************CARRUSEL CAMISETAS***************************/ 


izquierda_c1 = document.getElementById('izquierda_c1');

derecha_c1 = document.getElementById('derecha_c1');

carrusel_galeria_1= document.getElementById('carrusel_galeria_1')

imagenes_camisetas_ob = {

    1: '"../assets/fotos/camiseta_azul.png" alt="camiseta_azul" width="225" height="225"' ,

    2: '"../assets/fotos/camiseta_negra.png" alt="camiseta_negra" width="192" height="269"',

    3: '"../assets/fotos/camiseta_roja.png" alt="camiseta_roja" width="225" height="225" ',

    4: '"../assets/fotos/camiseta_rosa.png" alt="camiseta_rosa" width="183" height="275"' ,

    5: '"../assets/fotos/camiseta_verde.png" alt="camiseta_verde" width="192" height="262"'  
}



lado_iz=1;

lado_centro=2;

lado_dere=3;


derecha_c1.addEventListener('click',function(){

    if( lado_iz === 5) {
        lado_iz = 0
    }
    if( lado_dere === 5) {
        lado_dere = 0
    }

    if( lado_centro === 5) {
        lado_centro = 0
    }

    lado_iz++;
    lado_centro++;
    lado_dere++;


    let cambio_imagen= `

    
    <a href="#"><img src= ${imagenes_camisetas_ob[lado_iz]} class="fotos_lados crece"></a>

    <a href="#"><img src= ${imagenes_camisetas_ob[lado_centro]} class="fotos_central crece"></a>

    <a href="#"><img src= ${imagenes_camisetas_ob[lado_dere]} class="fotos_lados crece"></a>
    
    `

    carrusel_galeria_1.innerHTML = cambio_imagen;
    

})


izquierda_c1.addEventListener('click',function(){

    if( lado_iz === 1) {
        lado_iz = 6
    }
    if( lado_dere === 1) {
        lado_dere = 6
    }

    if( lado_centro === 1) {
        lado_centro = 6
    }

    lado_iz--;
    lado_centro--;
    lado_dere--;


    let cambio_imagen= `

    
    <a href="#"><img src= ${imagenes_camisetas_ob[lado_iz]} class="fotos_lados crece"></a>

    <a href="#"><img src= ${imagenes_camisetas_ob[lado_centro]} class="fotos_central crece"></a>

    <a href="#"><img src= ${imagenes_camisetas_ob[lado_dere]} class="fotos_lados crece"></a>
    
    `

    carrusel_galeria_1.innerHTML = cambio_imagen;
    

})

/**************************************************************CARRUSEL CALZADOS***************************/ 

izquierda_c2 = document.getElementById('izquierda_c2');

derecha_c2 = document.getElementById('derecha_c2');

carrusel_galeria_2= document.getElementById('carrusel_galeria_2')


imagenes_calzados_ob = {

    1 : '"../assets/fotos/calzado_cuerda.png" alt="calzado_cuerda" width="204" height="248"',

    2 : '"../assets/fotos/sandalia_arreglada.png" alt="sandalia_arreglada" width="195" height="255"',

    3 : '"../assets/fotos/sandalia_sport.png" alt="sandalia_sport" width="197" height="255"',

    4: '"../assets/fotos/sandalias.png" alt="sandalias" width="210" height="240"',

    5: '"../assets/fotos/tenis_ecologicos.png" alt="tenis_ecologicos" width="225" height="225"'


}


lado_iz=1;

lado_centro=2;

lado_dere=3;


derecha_c2.addEventListener('click',function(){

    if( lado_iz === 5) {
        lado_iz = 0
    }
    if( lado_dere === 5) {
        lado_dere = 0
    }

    if( lado_centro === 5) {
        lado_centro = 0
    }

    lado_iz++;
    lado_centro++;
    lado_dere++;


    let cambio_imagen= `

    
    <a href="#"><img src= ${imagenes_calzados_ob[lado_iz]} class="fotos_lados crece"></a>

    <a href="#"><img src= ${imagenes_calzados_ob[lado_centro]} class="fotos_central crece"></a>

    <a href="#"><img src= ${imagenes_calzados_ob[lado_dere]} class="fotos_lados crece"></a>
    
    `

    carrusel_galeria_2.innerHTML = cambio_imagen;
    

})


izquierda_c2.addEventListener('click',function(){

    if( lado_iz === 1) {
        lado_iz = 6
    }
    if( lado_dere === 1) {
        lado_dere = 6
    }

    if( lado_centro === 1) {
        lado_centro = 6
    }

    lado_iz--;
    lado_centro--;
    lado_dere--;


    let cambio_imagen= `

    
    <a href="#"><img src= ${imagenes_calzados_ob[lado_iz]} class="fotos_lados crece"></a>

    <a href="#"><img src= ${imagenes_calzados_ob[lado_centro]} class="fotos_central crece"></a>

    <a href="#"><img src= ${imagenes_calzados_ob[lado_dere]} class="fotos_lados crece"></a>
    
    `

    carrusel_galeria_2.innerHTML = cambio_imagen;
    

})

/**************************************************************CARRUSEL CASA ECOLOGICA***************************/ 

imagenes_cosas_ob = {

    1 : '"../assets/fotos/bolsa.png" alt="bolsa" width="248" height="208"',

    2 : '"../assets/fotos/posavasos.png" alt="posavasos" width="194" height="259"',

    3 : '"../assets/fotos/cosa_eco.png" alt="cosa_eco" width="247" height="204"',

    4 : '"../assets/fotos/maceta.png" alt="maceta" width="300" height="168"',

    5 : '"../assets/fotos/cocina_eco.png" alt="cocina_eco" width="265" height="190"',

}

izquierda_c3 = document.getElementById('izquierda_c3');

derecha_c3 = document.getElementById('derecha_c3');

carrusel_galeria_3= document.getElementById('carrusel_galeria_3')


imagenes_cosas_ob = {

    1 : '"../assets/fotos/bolsa.png" alt="bolsa" width="248" height="208"',

    2 : '"../assets/fotos/posavasos.png" alt="posavasos" width="194" height="259"',

    3 : '"../assets/fotos/cosa_eco.png" alt="cosa_eco" width="247" height="204"',

    4 : '"../assets/fotos/maceta.png" alt="maceta" width="300" height="168"',

    5 : '"../assets/fotos/cocina_eco.png" alt="cocina_eco" width="265" height="190"',

}


lado_iz=1;

lado_centro=2;

lado_dere=3;


derecha_c3.addEventListener('click',function(){

    if( lado_iz === 5) {
        lado_iz = 0
    }
    if( lado_dere === 5) {
        lado_dere = 0
    }

    if( lado_centro === 5) {
        lado_centro = 0
    }

    lado_iz++;
    lado_centro++;
    lado_dere++;


    let cambio_imagen= `

    
    <a href="#"><img src= ${imagenes_cosas_ob[lado_iz]} class="fotos_lados crece"></a>

    <a href="#"><img src= ${imagenes_cosas_ob[lado_centro]} class="fotos_central crece"></a>

    <a href="#"><img src= ${imagenes_cosas_ob[lado_dere]} class="fotos_lados crece"></a>
    
    `

    carrusel_galeria_3.innerHTML = cambio_imagen;
    

})


izquierda_c3.addEventListener('click',function(){

    if( lado_iz === 1) {
        lado_iz = 6
    }
    if( lado_dere === 1) {
        lado_dere = 6
    }

    if( lado_centro === 1) {
        lado_centro = 6
    }

    lado_iz--;
    lado_centro--;
    lado_dere--;


    let cambio_imagen= `

    
    <a href="#"><img src= ${imagenes_cosas_ob[lado_iz]} class="fotos_lados crece"></a>

    <a href="#"><img src= ${imagenes_cosas_ob[lado_centro]} class="fotos_central crece"></a>

    <a href="#"><img src= ${imagenes_cosas_ob[lado_dere]} class="fotos_lados crece"></a>
    
    `

    carrusel_galeria_3.innerHTML = cambio_imagen;
    

})



