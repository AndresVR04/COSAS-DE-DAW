function iniciar(){
    //Definir objetos sobre los que se escucharán eventos
    //y asociar los eventos correspondientes
    //Primera caja de texto
    var textFieldFocus = document.frmEjemplo.txtfoco;
    textFieldFocus.onfocus = foco;
    
    //Segunda caja de texto
    var textFieldKey = document.frmEjemplo.txttecla;
    textFieldKey.onkeypress = tecla;

    //Campo Select
    var SelectField = document.frmEjemplo.selopciones;
    SelectField.onchange = function(){
        cambioOpcion(this.options[this.selectedIndex].value);
    };

    //Primer Campo de Checkbox
    var chkbox1 = document.getElementById("chkbox1");
    chkbox1.addEventListener("click", function(){
        activarCasilla(chkbox1, chkbox1.value);
    }, false);

    //Segundo Campo de Checkbox
    var chkbox2 = document.getElementById("chkbox2");
    chkbox2.addEventListener("click", function(){
        activarCasilla(chkbox2, chkbox2.value);
    }, false);

    //Tercer Campo de Checkbox
    var chkbox3 = document.getElementById("chkbox2");
    chkbox3.addEventListener("click", function(){
        activarCasilla(chkbox3, chkbox3.value);
    }, false);
}