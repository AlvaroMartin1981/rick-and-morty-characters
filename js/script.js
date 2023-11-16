//ul id="character-list"
//const personajes = document.getElementById('character-list')
let pagina =1;
const paginaAnterior = document.getElementById('prev-page'); 
const paginaSiguiente = document.getElementById('next-page'); 

paginaAnterior.addEventListener('click',() =>{
    if(pagina > 1){
    pagina -=1;
    cargarPersonajes();
}})

paginaSiguiente.addEventListener('click',() =>{
    if(pagina < 42){
    pagina +=1;
    cargarPersonajes();
}})

const cargarPersonajes = async () => {
  try{  
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        console.log(respuesta);

        const datos = await respuesta.json(); 
        let characters = ''
        datos.results.forEach(character => {
           characters +=  `
                <div class="character">
                    <img class="poster" src="https://rickandmortyapi.com/api/character/${character.image}">               
                </div>
                 <h3>${character.name}</h3>
                 <h4>${character.species}</h4>`

        });

        document.getElementById('character-list').innerHTML = characters;

        /*.then(response => response.json())
        .then(data => {
        console.log(data.results[0].name)
        console.log(data.results[0].species)
        console.log(data.results[0].image)
        personajes.innerHTML +=*/
    
       

    } catch(error){
         console.log(error);
    }
}

cargarPersonajes();


/* for (let i = 0; i< data.results.lenght; i++)
            personajes.innerHTML =`
                <li>${data.results[i].imagen}</li>
                <li>${data.results[i].name}</li>
                <li>${data.results[i].species}</li>

        
        
            `*/
        //return dataResults
    

//const dataResults = ''

/*const mostrarData = (data) => {
    console.log(data)
    let obtenerData = ''
    for (let i = 0; i< data.lenght; i++)
        mostrarData +=`<li id="imageCharacter">Character</li>
        `

*/