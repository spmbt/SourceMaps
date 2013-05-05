
//Конвертор авторского формата текста в HTML с сайта Habr

// 1) преобразует текст из div class="content original" в div class="content" и показывает вместо него
// 2) оформляет страницу в формате показа оригинального сайта или по параметрам

var IE=!!document.all,
$q = !IE ? function(q, el){return (el || document).querySelector(q) : function(q, el){return $(q, el)[0];},
$x = function(el, h){	if(h) for(var i in h) el[i] = h[i]; return el},
$e = function(h){ //el,cs,at,on,apT
	h.el = h.el ||'DIV';
	var o = typeof h.el =='string'? document.createElement(h.el) : h.el, i;
	if(h.cs){
		if(!IE)
			$x(o.style, h.cs);
		else{
			var s ='';
			for(i in h.cs)
				s += i.replace(/([A-Z])/g,'-$1').toLowerCase() +':'+ h.cs[i] +';';
			o.style.cssText = s;
	}}
	if(h.at)
		for(i in h.at)
			o.setAttribute(i, h.at[i]);
	if(h.on)
		for(i in h.on)
			o[['addEventListener','attachEvent'][+IE]](['','on'][+IE]+i, h.on[i],!1);
	h.apT && h.apT.appendChild(o);
	return o;
},
onLoadDom = function(f){
	if(window.addEventListener)
		this.addEventListener('DOMContentLoaded',f,!1);
	else
		this.attachEvent('onload',f);
};
onLoadDom(function(){
	var cOr = $q('.content.original');
	if(cOr){
		cOrChilds = cOr.childNodes;
		for(var i in cOrChilds){ var cI = cOr.cOrChilds[i];
			//замена/дополнение переносов на BR
			if(cI.nodeType == 3){
				var val = cI.value;
				for(var j =0, cL = cL.length; j < cL; j++){
					
					
				}
			}
			//добавление подсветки кодов и преобразование блоков под подсветку
			
			//стили для картинок
			
			//таблицы
			
			//ссылки на пользователей
			
			//видео
			
			//оформление данных вокруг статьи
			
			//различение ссылок
			
			//комментарии под
			
			
	}
	
	
	
});







