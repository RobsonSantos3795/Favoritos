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

function entrou1() {
    let cor1 = document.getElementById("bt1");
    cor1.style.background = "green";
} 
function saiu1() {
    let cor1 = document.getElementById("bt1");
    cor1.style.background = "yellow";
}

function entrou2() {
    let cor2 = document.getElementById("bt2");
    cor2.style.background = "green";
}
function saiu2() {
    let cor2 = document.getElementById("bt2");
    cor2.style.background = "yellow";
}

function entrou3() {
    let cor3 = document.getElementById("bt3");
    cor3.style.background = "green";
}
function saiu3() {
    let cor3 = document.getElementById("bt3");
    cor3.style.background = "yellow";
}

function entrou4() {
    let cor4 = document.getElementById("bt4");
    cor4.style.background = "green";
}
function saiu4() {
    let cor4 = document.getElementById("bt4");
    cor4.style.background = "yellow";
}

function entrou5() {
    let cor5 = document.getElementById("bt5");
    cor5.style.background = "green";
}
function saiu5() {
    let cor5 = document.getElementById("bt5");
    cor5.style.background = "yellow";
}
