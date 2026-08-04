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
        $("#ModalTitle").text("Temporadas de la serie " + tituloSerie);
         let body="";
            data.forEach(item => {
                body += item.numeroTemporada + " " + item.tituloTemporada + "<br>";
            }); 
            $("#ModalBody").html(body);
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
         $("#ModalTitle").text("Actores de la serie " + tituloSerie);
            let body="";
            data.forEach(item => {
                body += item.nombre + "<br>";
            }); 
            $("#ModalBody").html(body);
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
         $("#ModalTitle").text("Serie " + data.nombre);
            const body = data.añoInicio + "<br>" + data.sinopsis;
            $("#ModalBody").html(body);  
        })
    .catch((error) => {
        console.error('Error:', error);
    });

}