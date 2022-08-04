function EmailVal()
{
	let mail = document.getElementById("email_ing");
	let formato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (mail.value.match(formato)){
	return (true)
	} else {
	alert("¡El email ingresado es incorrecto!")
	return (false)}
}

function esMayor()
{
	let fechaNac = new Date(document.getElementById("date").value);
	let hoy = new Date();
	let diferencia = Math.abs(hoy.getTime() - fechaNac.getTime());
	let edad = Math.ceil(diferencia/(1000*3600*24))/365;
			
	if (edad>17){
		return (true)
	} else {
		alert("Debe ser mayor de edad para ser miembro")
		return(false)}	
}