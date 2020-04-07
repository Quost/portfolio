/* JavaScript principal do site */

 //adiciona mascara ao telefone
 function MascaraTelefone(campo, e) {
    if (mascaraInteiro(e) === false) {
        e.returnValue = false; //Remove o valor da tecla não permitada
    }
    if (campo.value.length >= 14) { //9 digitos
        return formataCampo(campo, '(00) 0 0000-0000', e);
    } else { //8 digitos
        return formataCampo(campo, '(00) 0000-0000', e);
    }
}

//adiciona mascara ao CNPJ/CPF
function MascaraCPFCNPJ(campo, e) {
    if (mascaraInteiro(e) === false) {
        e.returnValue = false; //Remove o valor da tecla não permitada
    }
    if (campo.value.length >= 14) { //CNPJ
        return formataCampo(campo, '00.000.000/0000-00', e);
    } else { //CPF
        return formataCampo(campo, '000.000.000-00', e);
    }
}

//valida numero inteiro com mascara
function mascaraInteiro(e) {
    if (navigator.appName === "Netscape") { //Mozilla
        if (e.charCode < 48 || e.charCode > 57) { //código ASCII referentes a números
            return false;
        }
    } else { //Outros navegadores
        if (e.keyCode < 48 || e.keyCode > 57) {
            return false;
        }
    }
    return true;
}

//formata de forma generica os campos
function formataCampo(campo, Mascara, evento) {
    var boleanoMascara;

    if(navigator.appName === "Netscape") {
        var Digitato = evento.charCode;
    } else {
        var Digitato = evento.keyCode;
    }
    exp = /\-|\.|\/|\(|\)| /g;
    campoSoNumeros = campo.value.toString().replace(exp, "");

    var posicaoCampo = 0;
    var NovoValorCampo = "";
    var TamanhoMascara = campoSoNumeros.length;
    ;

    if (Digitato !== 8) { // backspace
        for (i = 0; i <= TamanhoMascara; i++) {
            boleanoMascara = ((Mascara.charAt(i) === "-") || (Mascara.charAt(i) === ".")
                    || (Mascara.charAt(i) === "/"));
            boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === "(")
                    || (Mascara.charAt(i) === ")") || (Mascara.charAt(i) === " "));
            if (boleanoMascara) {
                NovoValorCampo += Mascara.charAt(i);
                TamanhoMascara++;
            } else {
                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                posicaoCampo++;
            }
        }
        campo.value = NovoValorCampo;
        return true;
    } else {
        return true;
    }
}