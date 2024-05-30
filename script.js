"use strict";

one.onclick = function createForm() {
    aHtmlTag(formDef1);
}

two.onclick = function createForm() {
    aHtmlTag(formDef2);
}

function aHtmlTag(aNewHtml) {
    var aNewHtml;

    var s="";
        s+="<div class='wrapper_form'>";
        for ( var i = 0; i < aNewHtml.length; i++ ) {
            if (aNewHtml[i].kind === "longtext") {
                s+="<label class='label_form'>" + aNewHtml[i].label + "</label><input id='longtext' name='" + aNewHtml[i].name + "'></input><br>";
            } else if (aNewHtml[i].kind === "number") {
                s+="<label class='label_form'>" + aNewHtml[i].label + "</label><input id='number' type='number' name='" + aNewHtml[i].name + "'></input><br>";
            } else if (aNewHtml[i].kind === "shorttext") {
                s+="<label class='label_form'>" + aNewHtml[i].label + "</label><input id='shorttext' name='" + aNewHtml[i].name + "'></input><br>";
            } else if (aNewHtml[i].kind === "check") {
                s+="<label class='label_form'>" + aNewHtml[i].label + "</label><input id='check' type='checkbox' name='" + aNewHtml[i].name + "'></input><br>";
            } else if (aNewHtml[i].kind === "memo") {
                s+="<label class='label_form'>" + aNewHtml[i].label + "</label><br><textarea class='textarea_memo' id='memo' name='" + aNewHtml[i].name + "'></textarea><br>";
            } else if (aNewHtml[i].kind === "submit") {
                s+="<button class='button_submit'>" + aNewHtml[i].label + "</button>";
            } else if (aNewHtml[i].kind === "combo") {
                s+="<label class='label_form'>" + aNewHtml[i].label + "</label><select class='select_combo' id='combo' name='" + aNewHtml[i].name + "'>"
                for (var j = 0; j < aNewHtml[i].variants.length; j++) {
                s+="<option value='" + aNewHtml[i].variants[j].value + "'>" + aNewHtml[i].variants[j].text + "</option>";
            } s+="</select><br>"

            } else if (aNewHtml[i].kind === "radio") {
                s+="<label class='label_form'>" + aNewHtml[i].label + "</label>";
                for (var j = 0; j < aNewHtml[i].variants.length; j++) {
                s+="<input class='input_radio' id='radio' type='radio' name='" + aNewHtml[i].name + "' value='" + aNewHtml[i].variants[j].value + "'>" + aNewHtml[i].variants[j].text + "</option>";
            } s += "<br>";
        }
    }

    s+="</div>";

    var contElem=document.getElementById('forms');
    contElem.innerHTML=s;
    console.log(contElem.innerHTML);
}

var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];