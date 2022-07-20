/*Sugerir

SelectGenPelis1

function sugerirPelis() {
    if (SelectGenPelis1 == 'Accion' || SelectGenPelis1 == 'accion' || SelectGenPelis1 == 'ACCIÓN'  ) {
    
    let opcion = Number(prompt(`Quizá te guste alguna de esas pelis:
    \n ${topPelisAccion}
    \n Elige 1, 2, 3 para añadir a tu hub o 4 para todas`));
    
        switch (opcion) {
            case 1:
                tusActores.push('Arnold Swarzeneger');
                console.log(tusActores);
                break;
            case 2:
                sugerir2();    
                    break;
            default:
                break;
            }
        }
    }

*/

// Peliculas

// Pelicuas Funcion constructorsa

class Pelicula{
    //constructor
    constructor(titulo,imagen,director,genero,descripcion_corta,anio,pais,protagonistas,premios){
    this.titulo = titulo;
    this.imagen = imagen;
    this.director = director;
    this.genero = genero;
    this.descripcion_corta = descripcion_corta;
    this.anio = Number(anio);
    this.pais = pais;
    this.protagonistas = protagonistas;
    this.premios = premios;
    }
    //funciones
    mostrar() {
        console.log('Título: ' + this.nombre + 'Director: ' + this.director + 'Genero: ' + this.genero + ' Descripción corta: + ' + this.descripcion_corta + 'Año: '+ 
        this.anio + 'Pais: ' + pais + 'Protagonistas: ' + this.protagonistas + 'Premios: ' + this.premios );
    }
}


// Peliculas
const TopGun = new Pelicula('Top Gun', ' ../img/cover-topgun-1', 'Tony Scott', 'Accion/Bélica', 'sss ', 1989, 'USA', 'Tom Cruise,  Val Kilmer, Kelly McGillis', 'Óscar a la Mejor canción Original por la canción Take my breath away de Berlin'); 
const Terminator = new Pelicula('Terminator ','../img/cover-terminator-1-1', 'James Cameron', 'Ciencia Ficción/Accion', 'sss ', 1984, 'USA', 'Arnold Schwarzenegger, Linda hamilton, Michael Biehn', 'Saturn Awards');
const junglaCristal = new Pelicula('Jungla de Cristal','../img/cover-junglaCristal-1', 'John McTiernan', 'Accion', 'sss ', 1988, 'USA', 'Bruce Willis,  Alan Rickman, Bonnie Bedelia', 'Premios Óscar: Mejor edición de sonido, Mejor montaje, Mejor sonido');

let topPelisAccion = [TopGun, Terminator, junglaCristal, TopGun, junglaCristal, Terminator];

function renderizarPelis(){
    let pelisSuggest = document.getElementById('cardsPelis');    
    
    topPelisAccion.forEach((peli)=>{ 
        
        let peliHTML = `

        <div class="col-6 col-md-2 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${peli.imagen}" alt="${peli.titulo}">
            <div class="card-body">
                <h5 class="card-title "><strong>${peli.titulo}<strong></h5>
                <p class="card-text">descripcion_corta</p>
                <p>Director: <strong>${peli.director}</strong></p>
                <p>Genero: ${peli.genero}</p>
                <p>Año: ${peli.anio}</p>
                <p>Páis: ${peli.pais}</p>
                <p>Protagonistas: ${peli.protagonistas}</p>
                <p>Premios:${peli.premios}</p>
                <button class="btn btn-primary" >Añadir a My Cult Hub</button>
            </div>
        </div>
        </div>
        `
        pelisSuggest.innerHTML += peliHTML
    });

}
renderizarPelis()

// Musica

class Album{
    //constructor
    constructor(titulo,musico,genero,descripcion_corta,anio,pais,protagonistas,premios){
    this.titulo = titulo;
    this.musico = musico;
    this.genero = genero;
    this.descripcion_corta = descripcion_corta;
    this.anio = Number(anio);
    this.pais = pais;
    }
    //funciones
    mostrar() {
        console.log('Título: ' + this.nombre + 'Arista: ' + this.musico + 'Genero: ' + this.genero + ' Descripción corta: + ' + this.descripcion_corta + 'Año: '+ 
        this.anio + 'Pais: ' + pais );
    }
}

const Nevermind = new Album('Nevermind', 'Nirvana', 'sss ', 1991, 'USA'); 
const whisu_w_h = new Album('Whis You Were Here', 'Pink Floyd', 'sss ', 1975, 'UK');
const led_zep_4 = new Album('Led Zeppelin IV', 'Led Zeppelin', 'sss ', 1972, 'UK'); 