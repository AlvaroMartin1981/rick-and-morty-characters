//ul id="character-list"
const characterList = document.getElementById('character-list')
const prevPageButton = document.getElementById('prev-page')
const nextPageButton = document.getElementById('next-page')
//name
//image
//species

let currenPage = 1

const getCharactersRichAndMorty = (page) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('la solicitud no se puede procesar')
            }   return response.json()
        })
        .then(data => {
            const characters = data.results
            characterList.innerHTML =''
            characters.forEach(element => {
                characterList.innerHTML += `
                    <li>
                         <figure>  
                             <img src="${element.image}" alt="${element.name}" />
                            <figcaption>
                                 <p><span>Name:</span>${element.name}</p>
                                 <p><span>Species:</span>${element.species}</p>
                            </figcaption>
                        </figure>
                    </li>
                `
            })
        })
        .catch(error => characterList.innerHTML = `se ha roto el universo, ${error}`)
}

nextPageButton.addEventListener('click', function (){
    if (currenPage <42) {
        getCharactersRichAndMorty(currenPage++); 
    }
    
})
prevPageButton.addEventListener('click', function (){
    if (currenPage >1) {
    getCharactersRichAndMorty(currenPage--); 
    }   
})

getCharactersRichAndMorty(currenPage)







/*let pagina =1;
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

    } catch(error){
         console.log(error);
    }
}
cargarPersonajes();*/




 /*.then(response => response.json())
        .then(data => {
        console.log(data.results[0].name)
        console.log(data.results[0].species)
        console.log(data.results[0].image)
        personajes.innerHTML +=*/



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