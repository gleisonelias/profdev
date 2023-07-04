//BOTÕES

$("body").mousemove(function(){
	$(".z-bandpopup table:has(.z-listcell-content):contains(RUA HIGINO LUIZ FERREIRA, 235)").addClass("turmas");
	$(".turmas").find("div:contains(RUA HIGINO LUIZ FERREIRA, 235)").each(function(){
		$(this).html($(this).html().replace("RUA HIGINO LUIZ FERREIRA, 235","PAM"))
	});

$(".form-group span:contains(Etapa da Matrícula)+span input").one("click",function(){
if($(".form-group span:contains(Etapa da Matrícula)+span input").val()==""){
$(".form-group span:contains(Etapa da Matrícula)+span a i").click();
setTimeout(function(){
$(".z-listcell:visible>div:last-child").click()},2500)
}
});

if($("span.mainbar__title:contains(Atividades Avaliativas)").length>0 && $(".notes-gen").length==0){
	$("span.mainbar__title:contains(Atividades Avaliativas)").append('<button type="button" class="btn notes-gen z-button" style="background-color: limegreen;display:none" onclick="gerarBoletim()">BOLETIM</button>')
}else if($("span.mainbar__title:contains(Atividades Avaliativas)").length==0 || $(".z-listheader-content:contains(Nome)").length == 0){$(".notes-gen").remove()}else{$(".notes-gen").fadeIn();}

if(($(".next-button").length==0) && ($('button.btn.btn-default.btn-abrir.z-button:contains(Voltar):visible').length > 0)){
	$('button.btn.btn-default.btn-abrir.z-button:contains(Voltar):visible').after('<button type="button" class="btn next-button z-button" style="background-color: deeppink;" onclick="$(\'tr.z-listitem.z-listitem-selected+tr\').click()">‎ </button>')
};
if(($(".prev-button").length==0) && ($('button.btn.btn-default.btn-abrir.z-button:contains(Voltar):visible').length > 0)){
	$('button.btn.btn-default.btn-abrir.z-button:contains(Voltar):visible').after('<button type="button" class="btn prev-button z-button" style="background-color: deeppink;" onclick="$(\'tr.z-listitem.z-listitem-selected\').prev(\'tr\').click()">‎ </button>')
}
});

var naf = 0;
function autoPresence(nf){
	
	if($(".z-loading-icon:contains(Processando)").length>0){
	setTimeout(function(){
    autoPresence(nf)
           },500)
	}else{
	if((nfi < 2) || ($(".z-loading-icon:contains(Processando)").length>0)){tif=1500}else{tif=350}

$(".z-groupbox-content:contains(Presença) div table tr.z-listitem").eq(nfi).each(function(){
    
$(this).find("button.z-button:contains(Faltas do Aluno)").click();

setTimeout(function(){
    	$(".z-groupbox-content:contains(Presença) div table tr.z-listitem").eq(nfi).css("outline","auto green 2px");
    	
if(parseInt($(".col-md-6.text-right:contains(Total de faltas:) span+.z-label").text())>nf){
	if ($(".z-loading-icon:contains(Processando)").length==0){
    $(".z-groupbox-content:contains(Presença) div table tr.z-listitem").eq(nfi).find('.slider.round').click();
    naf++;
    	$(".z-groupbox-content:contains(Presença) div table tr.z-listitem").eq(nfi).css("outline","auto red 2px");
	}
    
}
    $('.z-window-close').click();

if(nfi<$(".z-groupbox-content:contains(Presença) div table tr.z-listitem").length){

setTimeout(function(){
    if ($(".z-loading-icon:contains(Processando)").length==0){
    	nfi++
    }
    autoPresence(nf)
           },tif*2)

}else{window.alert("Pronto.\n Foi dado falta a "+naf+" alunos.")}
    
},tif);


});

}

}




var alunos;
function refNotes(){
if (alunos > -1){
if(($(".z-loading-icon:contains(Processando)").length==0)){
alunos--;
$("tr.z-listitem:has(button.z-button:contains(Ver Detalhes))").eq(alunos).find("button.z-button:contains(Ver Detalhes)").click();
wind = $(".z-window:contains(Atividades do)");
linha = ("<tr><td>"+wind.find(".well.info").text().trim()+"</td><td>"+parseFloat(wind.find('.z-caption-content:contains(1º B)').text().split(": ")[1])+"</td><td>"+parseFloat(wind.find('.z-caption-content:contains(2º B)').text().split(": ")[1])+"</td><td>"+parseFloat(wind.find('.z-caption-content:contains(3º B)').text().split(": ")[1])+"</td><td>"+
parseFloat(wind.find('.z-caption-content:contains(4º B)').text().split(": ")[1])+"</td><td></tr>").replaceAll("NaN","<span class='null'>0</span>");
$("#boletimdeturma tr:first-child+tr").after(linha);
wind.find(".z-window-icon.z-window-close").click();
wind.remove();
setTimeout(function(){refNotes()},600);
}else{setTimeout(function(){refNotes()},800);}
}else{
	$("#boletimdeturma tr+tr+tr").each(function(){
	$(this).find("td:last-child").text(parseFloat($(this).find("td").eq(1).text())+parseFloat($(this).find("td").eq(2).text())+parseFloat($(this).find("td").eq(3).text())+parseFloat($(this).find("td").eq(4).text()));
	if(parseFloat($(this).find("td:last-child").text())<60){$(this).find("td:last-child").css("color","red")};
	$(this).find("td+td").not(":last").each(function(){
		if(parseFloat($(this).text()) < 15){$(this).css("color","red");}
	});
	});
	$("#boletimdeturma span.null").remove();
	$(".z-window-icon.z-window-close").click();
	$("center#bdt").slideDown(function(){location.href = "#boletimdeturma"});}
};

function gerarBoletim(){
$("center#bdt").remove();
$(".main>.content").append('<center id="bdt"><style> .content>#bdt:first-child {display: none !important;} #boletimdeturma tr+tr+tr td { border: solid 2px transparent; min-width:50px} #boletimdeturma tr+tr+tr { border: solid 1px; } #boletimdeturma tr+tr:nth-child(odd) { background: white; } #boletimdeturma tr+tr:nth-child(even) { background: #eaeaea; } .notes-gen:before{content: "≛" !important} table#boletimdeturma tr:first-child td, #boletimdeturma tr:first-child+tr td { border: solid 1px; font-weight: bold; text-align: center; padding:2px; } </style><table id="boletimdeturma"> <tr><th>TOTALIZAÇÃO DAS NOTAS</th></tr><tr><td>⬐ Nome | ⤥ Notas | Bimestre ➜</td><td>1o</td><td>2o</td><td>3o</td><td>4o</td> <td>TOTAL</td></tr></table></center>');

$("center#bdt").slideUp();
alunos = $("tr.z-listitem:has(button.z-button:contains(Ver Detalhes))").length;
refNotes();
}
