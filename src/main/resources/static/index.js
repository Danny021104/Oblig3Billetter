$(function(){
    hentAlle();
});

function kjopBilett() {
    // Henter verdier til inputfeltene
    const nyBilett = {
        film: $("#film").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    };

    if (Object.values(nyBilett).includes("") || nyBilett.film === "Velg film her" || nyBilett.antall <= 0) {
        // legger ut feilmeldinger og validerer inpuutfeltene
        if (nyBilett.antall === "" || nyBilett.antall <= 0) {
            $("#antallFeil").html("Må skrive noe inn i antall");
        } else {
            $("#antallFeil").html("");
        }
        if (nyBilett.fornavn === "") {
            $("#fornavnFeil").html("Må skrive noe inn i fornavnet");
        } else {
            $("#fornavnFeil").html("");
        }
        if (nyBilett.etternavn === "") {
            $("#etternavnFeil").html("Må skrive noe inn i etternavnet");
        } else {
            $("#etternavnFeil").html("");
        }
        if (nyBilett.telefonnr === "") {
            $("#telefonnrFeil").html("Må skrive noe inn i telefonnr");
        } else {
            $("#telefonnrFeil").html("");
        }
        if (nyBilett.epost === "") {
            $("#epostFeil").html("Må skrive noe inn i epost");
        } else {
            $("#epostFeil").html("");
        }
    } else {
        // lagrer objektet i arrayet og skriver den samtidig ut
        $.post("/lagre", nyBilett, function () {
            hentAlle();
        });
        // inputfeltene "blankes"
        $(":input").val("");
        $("#film").val("Velg film her");

        // oppståtte feilmeldinger "blankes"
        $(".feilmelding").html("");
    }
}

function hentAlle() {
    $.get("/hentAlle", function (bilettene) {
        skrivUtBillett(bilettene);
    });
}

//formaterer tabell og skriver ut bilett
function skrivUtBillett(bilett) {
    let ut = "<table class='table table-light table-striped table-hover'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";

    for (let b of bilett) {
        ut += "<tr><td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+
            "</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+
            "</td></tr>";
    }
    ut+="</table>";
    $("#billettListe").html(ut);
}
//sletter bilettene
function slettAlleBiletter() {
    $.get("/slettAlle", function () {
        hentAlle();
    });
}
