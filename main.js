/* Definimos las constantes */
const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

//Crear el elemento a renderizar en caso que el ID sea entre 1 y 7
const createTask = task =>
`
 <li class="card">
    <h2>${task.name}</h2>
    <img ${task.img} alt="Foto de ${task.name}">
    <h3>${task.type}</h3>
    <div class="pesoYalt"> 
        <h3>Peso: ${task.peso}kg</h3>
        <h3>Altura: ${task.altura}m</h3>
    </div>

 </li>
`;
//Crear el elemento a renderizar en caso que el ID no este entre 1 y 7
const wrongId = (poke) =>
`
    <li class="card red">
        <h2>El Id ${poke.id} no coincide con ningun Pokemon</h2>
    </li>
`;
//Crear el elemento a renderizar en caso que el usuario no escriba un numero
const noNumber = () =>
    `
    <li class="card red">
        <h2>Ingrese un numero por favor</h2>
    </li>
`;

// Funcion que decide si el objeto dado, pertenece a uno de los de la lista o no
const decider = (pizza) =>{
   /*  console.log(pizza); */
    if (pizza.id == 0){
        return noNumber ();
    }
    else if (pizza.id < 0 || pizza.id > 7){ //EN VEZ DE ENTRE 0 Y 7, ENTRE 0 Y LOS POKEMONES QUE HAY
        return wrongId (pizza);
    }
    else{
        return createTask (pizza);
    }
};

// Renderizar la o las tareas y corre la funcion que decide a que grupo pertenece el ID
renderTask = TodoList => {
    list.innerHTML = TodoList.map(pizza => decider(pizza));
};


const init = () => {
    form.addEventListener('submit', e =>{
        e.preventDefault();
        const task = input.value.trim();
        input.value = '';
        //Detectamos si el numero que puso el usuario es pertenece a un ID ya creado, sino creamos uno
        nuevoObjeto (task);
        renderTask(thisPizza); //RENDERIZAR DIRECTAMNTE EL OBJETO DEL POKEMON
    })
}
init();

// probar si no coincide el numero con el que quiero en el input ir directamente a otra opcion