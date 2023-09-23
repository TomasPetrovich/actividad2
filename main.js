class Usuario {
    constructor(usuario, contraseña) {
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

const listaDeUsuarios = [
    new Usuario("tomas petrovich", "coderhouse"),
    new Usuario("adrian gonzalez", "coderhouse"),
    new Usuario("luis gonzalez", "coderhouse"),
];

let usuarioValido = null;
let tieneUsuarioCreado = confirm("¿Tiene un usuario creado?");

if (!tieneUsuarioCreado) {
    const nuevoUsuario = prompt("Ingrese su nuevo usuario");
    const nuevaContraseña = prompt("Ingrese su nueva contraseña");
    
    listaDeUsuarios.push(new Usuario(nuevoUsuario, nuevaContraseña));
    alert("Usuario creado exitosamente. Ahora puede iniciar sesión.");
}

while (!usuarioValido) {
    const usuarioIngresado = prompt("Ingrese su usuario");
    const contraseñaIngresada = prompt("Ingrese su contraseña");

    usuarioValido = listaDeUsuarios.find(usuario => usuario.usuario === usuarioIngresado && usuario.contraseña === contraseñaIngresada);

    if (!usuarioValido) {
        alert("Usuario o contraseña incorrectos. Intente de nuevo.");
    }
}

alert("Bienvenido");

