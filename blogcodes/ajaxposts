
$(document).ready(function(){
if(location.pathname == "/"){
    mainHtm="<div id='main'>";
catLeng = $("#Label1 ul li").length;
$("#Label1 ul li").each(function(){
$(this).append("<temp></temp>");
$(this).find("temp").load($(this).find("a.label-name").attr("href")+"?max-results=200 .blog-posts.hfeed.container",function(){
$(this).find("article").each(function(){
if($(this).is('article:first-of-type')){mainHtm+=('<div class="category"><h2>'+$(this).closest("li").find("a.label-name").text()+'</h2>');};
intHtml = ('<div class="mmd"> <a href="{URL}" {MMD}>{NOME} <br/><div class="minipost">{TXT}</div></a></div>').replaceAll("{NOME}",$(this).find("h3.post-title.entry-title").text()).replaceAll("{URL}",$(this).find("h3.post-title.entry-title a").attr("href"));
if($(this).find(".snippet-item").text().includes("#MMD Desc")){intHtml = intHtml.replace('{MMD}','old="{IDADE}" desc="{DESC}"').replaceAll("{DESC}", $(this).find(".snippet-item").text().split("#MMD Descrição:")[1].split("Idade:")[0]).replaceAll("{IDADE}",$(this).find(".snippet-item").text().split("Idade:")[1])}
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
if($(this).find(".snippet-item").text().includes("#MMD Desc")){intHtml = intHtml.replace('{MMD}','old="{IDADE}" desc="{DESC}"').replaceAll("{DESC}", $(this).find(".snippet-item").text().split("#MMD Descrição:")[1].split("Idade:")[0]).replaceAll("{IDADE}",$(this).find(".snippet-item").text().split("Idade:")[1])}
else {intHtml = intHtml.replace('{MMD}','').replace('{TXT}',$(this).find("div.post-body.entry-content").html())}
mainHtm+=intHtml; 
});
mainHtm+="</div></div>";
 $('#bodyMain').html(mainHtm);
 endLoading();
    }else{$('#bodyMain').html($(".post-body.entry-content").html());endLoading();};
});
function endLoading(){
if($(window).width() < $(window).height()){ screenRatio = 'width="'+(175*(($(window).width()*0.9)/$(window).height()))+'" height="175"'}
    else{screenRatio = 'width="300" height="'+(300*($(window).height()/($(window).width()*0.9)))+'"'};

    $('.mmd [href][old]').each(function(){$(this).find("div.minipost").replaceWith('<img '+screenRatio+' class="screen" src="https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url='+$(this).attr('href')+'"/>');});

    $('[old]').not('[disabled]').each(function(){$(this).after('<age><ic style=" background-position: '+(parseInt($(this).attr('old'))*7)+'%; "></ic><et>'+$(this).attr('old')+'</et><desc>'+$(this).attr('desc')+'</desc></age>')});
$(".minipost *").not("img").each(function(){
$(this).replaceWith($(this).html())});$(".minipost *").not("img").each(function(){
$(this).replaceWith($(this).html())});
$('body').fadeOut('fast').fadeIn("slow",function(){
$(".loadingMode").remove();

})

}
$(document).on("click", ".category h2", function(){
       $(".category").not($(this).parent()).addClass("wrapped");
      $(this).parent(".category").toggleClass("wrapped")});
