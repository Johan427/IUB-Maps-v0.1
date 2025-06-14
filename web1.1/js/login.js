const login = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    
    const user = document.getElementById("usuario").value.trim();
    const password = document.getElementById("contraseña").value;
    
    // Validación básica de campos vacíos
    if (!user || !password) {
        alert("Por favor complete todos los campos");
        return;
    }

    // Verificación de credenciales con switch-case (pero igual que los if originales)
    switch (true) {
        case (user === "admin" && password === "1234"): //usuario 1 (admin)
            alert("Bienvenido Admin");
            window.location.href = '../html/admin.html';
            localStorage.setItem("loggedUser", user);
            break;
            
        case (user === "usuario" && password === "1234"): //usuario2 (user)
            alert("Bienvenido usuario");
            window.location.href = '../html/usuario.html';
            localStorage.setItem("loggedUser", user);
            break;
            
        case (user === "Luis" && password === "4321"): //usuario3 (Admin)
            alert("Bienvenido usuario");
            window.location.href = '../html/admin.html';
            localStorage.setItem("loggedUser", user);
            break;
            
        case (user === "Maria" && password === "abcd"): //usuario4 (user)
            alert("Bienvenido usuario");
            window.location.href = '../html/usuario.html';
            localStorage.setItem("loggedUser", user);
            break;
            
        case (user === "Fernanda" && password === "f3rn4nd4"): //usuario5 (user)
            alert("Bienvenido usuario");
            window.location.href = '../html/usuario.html';
            localStorage.setItem("loggedUser", user);
            break;
            
        default:
            alert("Credenciales incorrectas");
            document.getElementById("contraseña").value = ""; // Limpia solo la contraseña
    }
};

const limpiar = () => {
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById("usuario").focus(); // Coloca el foco en el campo usuario
};

// Asignación de eventos (mejor práctica que onclick en HTML)
document.getElementById("loginForm").addEventListener("submit", login);
document.getElementById("btnLimpiar").addEventListener("click", limpiar);

function bMap() {
        window.open("https://www.google.com/maps", "_blank"); // Cambia por tu URL real
    }

    function bGithub() {
        window.open("https://github.com", "_blank"); // Cambia por tu repositorio
    }

    

    function bComunidad() {
        window.open("https://discord.com", "_blank"); // Cambia por tu servidor
    }