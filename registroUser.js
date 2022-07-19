const boton = document.getElementById('botonRegistro');
const registerCont = document.getElementById('contUser');

boton.addEventListener('', () => {

    let nombre = document.getElementById('nombre').value;
    let usuario = document.getElementById('usuario').value;
    let userPass = document.getElementById('pass').value;
    let email = document.getElementById('email').value;
 
    // Lo muestro por consola

    console.log(`
    Nombre: ${nombre}
    Usuario: ${usuario}
    Contraseña: ${pass}
    Email: ${email}
    `);

    // Lo muestro en el DOM
    registerCont.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Usuario: ${usuario}</p>
        <p>Contraseña: ${pass}</p>
        <p>Email: ${email}</p>
        `;
   
})

