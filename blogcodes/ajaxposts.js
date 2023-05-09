
$(document).ready(function(){
$('html').css('opacity',1);
if(location.pathname == "/"){
    mainHtm="<div id='main'>";
catLeng = $("#Label1 ul li").length;
$("#Label1 ul li").each(function(){
$(this).append("<temp id='feed'></temp>");
$(this).find("temp#feed").load($(this).find("a.label-name").attr("href")+"?max-results=200 .blog-posts.hfeed.container",function(){
$(this).find("article").each(function(){
if($(this).is('article:first-of-type')){mainHtm+=('<div class="category"><h2>'+$(this).closest("li").find("a.label-name").text()+'</h2>');};
intHtml = ('<div class="mmd"> <a href="{URL}" {MMD}>{NOME} <br/><div class="minipost">{TXT}</div></a></div>').replaceAll("{NOME}",$(this).find("h3.post-title.entry-title").text()).replaceAll("{URL}",$(this).find("h3.post-title.entry-title a").attr("href"));
if($(this).find(".snippet-item").text().includes("#MMD Desc")){intHtml = intHtml.replace('{MMD}','old="{IDADE}" desc="{DESC}"').replaceAll("{DESC}", $(this).find(".snippet-item").text().split("#MMD Descrição:")[1].split("//")[0].trim()).replaceAll("{IDADE}",$(this).find(".snippet-item").text().split("Idade:")[1].split("//")[0].trim())}
else {intHtml = intHtml.replace('{MMD}','').replace('{TXT}',$(this).find("div.post-body.entry-content").html())}
mainHtm+=intHtml; 
if($(this).is('article:last-of-type')){mainHtm+="</div>";};
});
});
});
$(document).ajaxComplete(function(){
    catLeng--;if(catLeng==0){
    mainHtm+="</div>";    
    $('#bodyMain').html(mainHtm);$(".category:first~.category").addClass("wrapped");
    endLoading();
}})}else if ((location.pathname).includes("/search/") || (location.href).includes("/search?")){
    mainHtm = '<div id="main"><div class="category"><h2>Procurando por: '+$("span.search-label,span.search-query").text()+'</h2>'
$("div#Blog1 article").each(function(){
intHtml = ('<div class="mmd"> <a href="{URL}" {MMD}>{NOME} <br/><div class="minipost">{TXT}</div></a></div>').replaceAll("{NOME}",$(this).find("h3.post-title.entry-title").text()).replaceAll("{URL}",$(this).find("h3.post-title.entry-title a").attr("href"));
if($(this).find(".snippet-item").text().includes("#MMD Desc")){intHtml = intHtml.replace('{MMD}','old="{IDADE}" desc="{DESC}"').replaceAll("{DESC}", $(this).find(".snippet-item").text().split("#MMD Descrição:")[1].split("//")[0].trim()).replaceAll("{IDADE}",$(this).find(".snippet-item").text().split("Idade:")[1].split("//")[0].trim())}
else {intHtml = intHtml.replace('{MMD}','').replace('{TXT}',$(this).find("div.post-body.entry-content").html())}
mainHtm+=intHtml; 
});
mainHtm+="</div></div>";
 $('#bodyMain').html(mainHtm);
 endLoading();
    }else{
        if($("desc:contains(#MMD)").length==0){$("bodyMain").html($("article").html())}
        else{$('#bodyMain').html($(".post-body.entry-content").html())};
        endLoading()};
});
function endLoading(){
if($(window).width() < $(window).height()){ screenRatio = 'width="'+(175*(($(window).width()*0.9)/$(window).height()))+'" height="175"'}
    else{screenRatio = 'width="300" height="'+(300*($(window).height()/($(window).width()*0.9)))+'"'};

    $('.mmd [href][old]').each(function(){$(this).find("div.minipost").replaceWith('<img '+screenRatio+' class="screen" src="https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url='+$(this).attr('href')+'"/>');});

    $('[old]').each(function(){$(this).after('<age><ic style=" background-position: '+(parseInt($(this).attr('old'))*7)+'%; "></ic><et>'+$(this).attr('old')+'</et><desc>'+$(this).attr('desc')+'</desc></age>')});
$(".minipost *").not("img").each(function(){
$(this).replaceWith($(this).html())});$(".minipost *").not("img").each(function(){
$(this).replaceWith($(this).html())});
$(".category").each(function(){$(this).find("div.mmd").wrapAll("<div>")});
$("body:has(.category .mmd age) #posheader").append("<center><img src=\"https://icons.veryicon.com/png/o/miscellaneous/mall-icon-set/filter-44.png\" style=\"width: 20px; vertical-align: middle; margin: 10px;\" height=\"20px\" \><button class=\"tab\" onclick=\"$('#main').fadeOut();$('.category,.mmd').slideDown('fast');$('.category:not(:has(.mmd:not(:has(age)))),.mmd:has(age)').slideUp('fast');$('#main').fadeIn();\">Postagens</button><button  class=\"tab\"  onclick=\"$('#main').fadeOut();$('.category,.mmd').slideUp('fast');$('.category,.mmd').has('age').slideDown('slow');$('#main').fadeIn();\" title=\"Materiais Manipulativos Digitais e Jogos\"><span style='opacity:0.3;transition:.1s'>🎲</span> MMD</button><button  class=\"tab\"  onclick=\"$('.category,.mmd').slideDown('fast');\">Tudo</button><p style=\"display:none\">Apenas conteúdo com materiais manipulativos (interativos) e jogos pedagógicos são exibidos nesse filtro.</p></center>");
$('body').fadeOut('fast').fadeIn("slow",function(){
setTimeout(function(){if(window.localStorage["home"]!=undefined){$("#posheader center > button.tab").eq(window.localStorage["home"]).click()};},750);
$(".loadingMode,desc:not(.mmd *)").remove();

//POSTAGEM DE RESPOSTAS

$("temp#qload").load("/2023/04/o-que-e-educacao.html?m=1 #comment-holder");
$(document).ajaxComplete(function(){
    $("temp#qload li").eq(parseInt(Math.random()*($("temp#qload li").length))).find(" .comment-block:not(.comment-block *)").each(function(){
    $("#quotes #qautor").text($(this).find(".user").text());
    $("#quotes #qpost").text($(this).find("p.comment-content").text());
$("#qautor").append(" - <a href='/2023/04/o-que-e-educacao.html?m=1' title='Dê sua resposta!'>O que é educação?</a>");
});
$("temp#qload").remove();
});
if($('.post-labels a[href*="/search/label/Sua%20vez%21"]').length>0){
$("div.comment-replybox-thread").after("<br><h3 title='Você pode inserir citação de uma personalidade, basta citar o nome no campo do autor!'>Respostas que outros leitores já enviaram ou ditas por personalidades:</h3><div id='creplies'></div>");
$("h3+#creplies").append($("#comment-holder ol").first());
}
})

}
$(document).on("click", "#posheader button.tab", function(){
$("button.tab").removeClass("act");
$(this).addClass("act");
window.localStorage["home"]=$(this).index()-1;
});
$(document).on("click", ".category h2", function(){
       $(".category").not($(this).parent()).addClass("wrapped");
      $(this).parent(".category").toggleClass("wrapped");
        $(".wrapped h2+div").slideUp("slow");
    $(".category:not(.wrapped) h2+div").slideDown("slow");
});
