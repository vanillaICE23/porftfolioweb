const boton = document.getElementById("btnMenu");
const navegador = document.getElementById("addBar")

boton.addEventListener('click', () => {
    addBar.innerHTML= "";
    console.log("se abrio wacho");
    let divCreado = document.createElement('div');
    
    divCreado.className = "nav-container"
    divCreado.innerHTML = `
    
    <nav class="nav-lateral-container"  id="navLateral">
        <div class="nav-list-lateral" id="navListLateral">  
            <h1 class="cerrar" id="cerrartodo">x</h1>
            <ul class="lista">
                <li><a href="">Home</a></li>
                <li><a href="">Mirá lo que hice...</a></li>
                <li><a href="">Quien soy</a></li>
                <li><a href="">Contacto.</a></li>
            </ul>
        </div>    
    </nav>
    `
    
    navegador.append(divCreado);
    const nav = document.getElementById("navLateral");
    const cerrarboton = document.getElementById("cerrartodo");

    cerrarboton.addEventListener('click',() => {
        nav.style.display = "none";
    });
    
})