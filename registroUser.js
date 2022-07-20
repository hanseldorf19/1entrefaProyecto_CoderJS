const boton = document.getElementById('botonRegistro');
const userData = document.getElementById('contenedor');

function processUserData() {

    let nombre = document.getElementById('nombre').value;
    let usuario = document.getElementById('usuario').value;
    localStorage.setItem('usuario', usuario);
    let pass = document.getElementById('passw').value;
    localStorage.setItem('pass', pass);
    let email = document.getElementById('email').value;

    // Lo muestro por consola
    console.log(`
        Nombre: ${nombre}
        Usuario: ${usuario}
        Contraseña: ${pass}
        Email: ${email}
        `);
    // lo guardo en un array, o no haria falta¿?


    // Lo muestro en el DOM
    userData.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Usuario: ${usuario}</p>
        <p>Contraseña: ${pass}</p>
        <p>Email: ${email}</p>
        <br/>
        <h4>¿Es correcto?</h4>
        <button id="continuar" class="btn btn-secundary white text-decoration-none"><a href="../index.html">Continuar</a></button>
        <button id="repetir" class="btn btn-secundary white text-decoration-none"><a href="registro.html">Repetir</a></button>
    `;
}

