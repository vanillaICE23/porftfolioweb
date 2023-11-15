const boton = document.getElementById("btnMenu");
const navegador = document.getElementById("addBar")

boton.addEventListener('click', () => {
    console.log("se abrio wacho");
    let divCreado = document.createElement('div');
    
    divCreado.innerHTML = `
    <nav class="nav-lateral"  id="navLateral">
        <ul class="nav-list-lateral" id="navListLateral">
            <li>Home</li>
            <li>Mirá lo que hice...</li>
            <li>Acá mi información</li>
            <li>Hablame, si queres un trabajo..</li>
        </ul>
    </nav>
    `
    navegador.append(divCreado);
})