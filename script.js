// Popula o select de estados
const JSONurl = "https://gist.githubusercontent.com/henriquejensen/1032c47a44d2cddaa2ef47fc531025db/raw/c58fdc848baf2a1fb53e617a0ad4e9754ec68e35/json-estados-brasileiros";

$.getJSON(JSONurl, function (data)
{
	$.each(data.UF, function (key, val)
	{
		$("#uf").append($('<option value="'+val.nome+'">'+val.sigla+'</option>'));
	})
});

// Inicializa e configura a lista de dentistas
$(document).ready(function () {
	$("#dentistas").DataTable( {
		ordering: false,
		searching: false,
		lengthChange: false,
		pageLength: 5,
		language: {
			info: "Mostrando _START_ a _END_ de _TOTAL_",
			infoEmpty: "Nenhum registro encontrado",
			paginate: {
				next: "Próxima",
				previous: "Anterior"
			}
		},
		columns: [
			{ width: "20%" },
			{ width: "10%" },
			{ width: "15%" },
			{ width: "25%" },
			{ width: "30%" }
		]
	} );
});