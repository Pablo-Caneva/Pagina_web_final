function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      cargarTabla(this);
    }
    xhttp.open("GET", "asociados.xml");
    xhttp.send();
  }
  function cargarTabla(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("SOCIO");
    let table="<tr><th>Nombre</th><th>Apellido</th><th>Ciudad</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("APELLIDO")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("CIUDAD")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("socios").innerHTML = table;
  }

function appendDoc(form) {
    var xml = $("asociados.xml");
    xml.append (
        $("SOCIO").append(
            $("NOMBRE").text(form.find("input[id='nombre']").val())
        ).append(
            $("APELLIDO").text(form.find("input[id='apellido']").val())
        ).append(
            $("CIUDAD").text(form.find("input[id='ciudad']").val())
        )
    );
    return xml.html();
}