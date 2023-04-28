function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        // document.querySelector('.icon').src = "img/menuHambuergerWhite.png";
    }
    else {
        menuMobile.classList.add('open');
        // document.querySelector('.icon').scr = "img/menuCloseWhite.png";
    }
}

function somar() {

    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    if (n1 != '' && n2 != '') {
        var somar = parseFloat(n1) + parseFloat(n2)

        alert("O resultado da soma é: " + somar)

        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }
    else {
        alert("Preencha os campos com os valores!")
    }

}


function subtrair() {

    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    var subtrair = parseFloat(n1) - parseFloat(n2);

    if (n1 != '' && n2 != '') {
        alert("O resultado da subtração é: " + subtrair)

        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }
    else {
        alert("Preencha os campos com os valores!")
    }

}


function multiplicar() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    var multiplicar = n1 * n2;

    if (n1 != '' && n2 != '') {
        alert("O resultado da multiplicação é de: " + multiplicar)
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    } 
    else {
        alert("Preencha os campos com os valores!")
    }
}

function dividir() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    var dividir = n1 / n2;

    if (n1 != '' && n2 != '') {
        alert("O resultado da divisão é de: " + dividir)
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    } 
    else {
        alert("Preencha os campos com os valores!")
    }
}

function cancelar() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";



}
function gerar(){
    var xmlHttpRequest = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/image/random"
    xmlHttpRequest.open("GET", url, true);

    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == 3) {
            console.log('Carregando o conteúdo');
        }
        if (xmlHttpRequest.readyState == 4) {
             
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);

            console.log('Requisição Finalizada');
            console.log('Resultado da Requisição: ' + jsonResponse);
            console.log('Resultado da Requisição: ' + jsonResponse.message);

            var imGen = document.getElementById("img_gen");
            imGen.src = jsonResponse.message;
        }
    };
         
    xmlHttpRequest.send(null);
}

