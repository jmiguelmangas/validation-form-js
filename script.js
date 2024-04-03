//añadimos event listener al boton submit

document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault(); //suprimir actualizacion de la pagina

  //VALIDAMOS CAMPOS DEL FORMULARIO0

  //validar nombre

  let entradaNombre = document.getElementById("name");
  let errorNombre = document.getElementById("nameError");

  if (entradaNombre.value.trim() === "") {
    //trim borra los espacios de los lados
    errorNombre.textContent = "Por favor, introduce un nombre valido";
    errorNombre.classList.add("error-message");
  } else {
    errorNombre.textContent = "";
    errorNombre.classList.remove("error-message");
  }

  //validar correo electronico

  let entradaEmail = document.getElementById("email");
  let errorEmail = document.getElementById("emailError");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(entradaEmail.value)) {
    //trim borra los espacios de los lados
    errorEmail.textContent = "Por favor, introduce un Email valido";
    errorEmail.classList.add("error-message");
  } else {
    errorEmail.textContent = "";
    errorEmail.classList.remove("error-message");
  }

  //validar password

  let entradaContrasena = document.getElementById("password");
  let errorContrasena = document.getElementById("passwordError");
  let contrasenaPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
  if (!contrasenaPattern.test(entradaContrasena.value)) {
    //trim borra los espacios de los lados
    errorContrasena.textContent =
      "Por favor, la contraseña al menos debe tener 8 caracteres";
    errorContrasena.classList.add("error-message");
  } else {
    errorContrasena.textContent = "";
    errorContrasena.classList.remove("error-message");
  }

  //Si todos los campos son validos enviar formularios
  if (
    !errorNombre.textContent &&
    !errorEmail.textContent &&
    !errorContrasena.textContent
  ) {
    //BACKEND QUE RECIBA LA INFO
    alert("El formulario se ha enviado con exito");
    document.getElementById("formulario").reset();
  }
});
