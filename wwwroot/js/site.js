// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function GetTemporadas(idserie,tituloSerie)
{
    fetch( '/Home/VerTemporadas?IdSerie=' + idserie, {method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("ModalTitle").innerHTML = "Temporadas de la serie " + tituloSerie;
         let body="";
            data.forEach(item => {
                body += item.numeroTemporada + " " + item.tituloTemporada + "<br>";
            }); 
            document.getElementById("ModalBody").innerHTML = body;
        })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function GetActores(idserie,tituloSerie)
{
    fetch( '/Home/VerActores?IdSerie=' + idserie, {method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(data => {
         document.getElementById("ModalTitle").innerHTML = "Actores de la serie " + tituloSerie ;
            let body="";
            data.forEach(item => {
                body += item.nombre + "<br>";
            }); 
            document.getElementById("ModalBody").innerHTML = body;
        })
    .catch((error) => {
        console.error('Error:', error);
    });

}

function GetInfo(idserie)
{
    fetch( '/Home/VerInfo?IdSerie=' + idserie, {method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {console.log(response); return response.json();})
    .then(data => {
         document.getElementById("ModalTitle").innerHTML = "Serie " + data.nombre;
         const body = data.añoInicio + "<br>" + data.sinopsis;
         document.getElementById("ModalBody").innerHTML = body; 
        })
    .catch((error) => {
        console.error('Error:', error);
    });

}