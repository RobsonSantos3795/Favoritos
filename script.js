function login() {
    let opcao = document.getElementById("opcao");
    let sele = opcao.value;
    if (sele) {
        window.location.href = sele;
    } else {
        alert("Por favor, selecione um valor válido!");
    }
}

function login2() {
    let opcao2 = document.getElementById("opcao2");
    let sele2 = opcao2.value;
    if (sele2) {
        window.location.href = sele2;
    } else {
        alert("Por favor, selecione um valor válido!");
    }
}

function login3() {
    window.location.href = "https://secretaria-da-educacao.vercel.app/";
}

function login4() {
    let opcao4 = document.getElementById("sele4");
    let sele4 = opcao4.value;
    if (sele4) {
        window.location.href = sele4;
    } else {
        alert("Por favor, selecione um valor válido!");
    }
}

function login1() {
    window.location.href = "https://app.powerbi.com/groups/me/list?experience=power-bi";
}