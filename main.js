/* Definimos las constantes */
const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

// x es el valor que pasa el usuario
const Pedirpoke = async (x) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${x}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
// Divide un número por 10.
const div10 = (x) =>{
    res = x / 10
    return res;
}
//Agarra un string y lo devuelve pero con la primera letra en mayúsculas.
function mayus(word) {
    return word[0].toUpperCase() + word.slice(1);
  }


//Crear el elemento a renderizar
const createTask = task =>{
    const {name, height, weight, types, sprites,} = task; 
return `
 <li class="card">
    <h2>${name.toUpperCase()}</h2>
    <img src= "${sprites.other.home.front_default}" alt="Foto de ${task.name}">
    <div class="pesoYalt">
            ${types
                .map( tipo => {
                  return ` <h3 class="${mayus(tipo.type.name)} poke__type">
                          ${mayus(tipo.type.name)} </h3>`;
                }).join('')
              }
        </div>
    <div class="pesoYalt"> 
        <h3>Peso: ${div10(weight)}kg</h3>
        <h3>Altura: ${div10(height)}m</h3>
    </div>

 </li>
`};

// Renderiza la tarea
const renderTask = (poke) => {
    list.innerHTML = createTask(poke);
};


const buscapoke = async (e) =>{
    e.preventDefault();
    const task = input.value.trim();
    input.value = '';

    //ESTO LO QUISE PONER EN UNA FUNCION APARTE PERO NO PUDE POR EL AWAIT.
    //Decide si el usuario no da nigun numero, si da uno que no esta entre los pokemones o si crea la card correctamente

    if (task == 0){
        return alert(`Ingrese un número por favor.`);
    }
    else if (task < 0 || task > 903){
        return alert(`El número ${task} no pertenece a ningun pokemon.`);
    }
    else{
        // sacamos el pokemon
        fetchedPoke = await Pedirpoke (task);
        //renderizamos
        return renderTask(fetchedPoke);
    }

}

const init = () => {
    form.addEventListener('submit', buscapoke)
}
init();

// probar si no coincide el numero con el que quiero en el input ir directamente a otra opcion