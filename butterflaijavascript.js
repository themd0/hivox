$('.extL.alt').each(function() {
  $(this).attr('href', $(this).attr('href').replace('/search', 'https://klaster-news-13.blogspot.com/search'));
});


/*<![CDATA[*/
/* Dark Mode */ function darkMode(){var e=qSel("#mainCont");Pu.sLS("webMode","drK"===Pu.gLS("webMode")?"lgT":"drK"),"drK"===Pu.gLS("webMode")?(e.classList.remove("syD","lgT"),addCt(e,"drK")):(e.classList.remove("drK","syD"),addCt(e,"lgT")),themeColor("themeC")};
/* Header Scroll */ function headScroll(){var e=window.pageYOffset||document.documentElement.scrollTop,d=qSel("#header"),l=qSel("#mobile-menu");20<e?(addCt(d,"stick"),addCt(l,"slide")):(remCt(d,"stick"),remCt(l,"slide"))}window.addEventListener("scroll",headScroll);
/* Private Blog Notif */ "true"==isPrivateBlog&&toastNotif('<i class="check"></i>'+blogTitle+" Blog is Private.");
/* Images */ (function(){var imgU=qSell('img.imgThm, .sImg .im, .cmAv .im, .pIm .im, .admIm .im, .sldC .sldIm');for(var i=0;i<imgU.length;i++){if(imgU[i].getAttribute('data-src')){var uImg=imgU[i].getAttribute('data-src');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&(uImg.includes('-pd')==!0||uImg.includes('-p-k-no-nu')==!0)&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-src',uImg.replace('-nu','-nu-rw-e30').replace('-pd','-pd-rw-e30'))}}else if(imgU[i].getAttribute('src')){var uImg=imgU[i].getAttribute('src');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('p-k-no-nu')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-src',uImg.replace('-nu','-nu-rw-e30'))}else{imgU[i].setAttribute('data-src',uImg)};addCt(imgU[i],'lazy');imgU[i].setAttribute('src','data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')}else if(imgU[i].getAttribute('data-style')){var uImg=imgU[i].getAttribute('data-style');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('w60')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace('w60','w60-rw-e30'))}else if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('p-k-no-nu')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace('-nu','-nu-rw-e30'))}else if((uImg.includes('=s')==!0||uImg.includes('/s')==!0)&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace(/\/s[0-9]+(\-c)?/,'/s1280-rw-e30').replace(/\=s[0-9]+(\-c)?/,'=s1280-rw-e30'))}}};})();
/* Defer Img */ Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'}),'undefined'!=typeof infinite_scroll&&infinite_scroll.on('load',function(){Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'}) });
/* Push Ads - remove if you are adding the push script below ins tag */ pushAds();
/* LAZYLOAD SCRIPTS - DON'T REMOVE FUNCTIONS */
function lazyCustomJs(){
  /* lazy category post */ if(getid('HTML2')!=null){ctgryPst(ctgryLb1, '#HTML2 .ctgry', 6, 600, 200, true);if(getid('HTML3')!=null){ctgryPst(ctgryLb2, '#HTML3 .ctgry', 6, 600, 200, true)}};
  /* YOUR CUSTOM JS */
};
function scrollCustomJs(){
  /* YOUR CUSTOM JS */
};
/*]]>*/
<b:if cond='data:view.isSingleItem'>/*<![CDATA[*/
/* lazy youtube */ !function(){for(var t=qSell(".lazyYt"),e=0;e<t.length;e++){var a="https://img.youtube.com/vi/"+t[e].dataset.embed+"/sddefault.jpg",s=new Image;s.setAttribute("class","lazy"),s.setAttribute("data-src",a),s.setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="),s.setAttribute("alt","Youtube video"),s.addEventListener("load",void t[e].appendChild(s)),t[e].addEventListener("click",function(){var t=document.createElement("iframe");t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen",""),t.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1"),this.innerHTML="",this.appendChild(t)})}}();
/* Lightbox image */ for(var imageslazy=qSell(".pS .separator img, .pS .tr-caption-container img, .pS .psImg >img, .pS .btImg >img"),i=0;i<imageslazy.length;i++)imageslazy[i].setAttribute("onclick","return false");function wrap(i,a,t){for(var r=document.querySelectorAll(a),e=0;e<r.length;e++){var m=i+r[e].outerHTML+t;r[e].outerHTML=m}}wrap('<div class="zmImg">',".pS .separator >a","</div>"),wrap('<div class="zmImg">',".pS .tr-caption-container td >a","</div>"),wrap('<div class="zmImg">',".pS .separator >img","</div>"),wrap('<div class="zmImg">',".pS .tr-caption-container td >img","</div>"),wrap('<div class="zmImg">',".pS .psImg img","</div>");for(var containerimg=document.getElementsByClassName("zmImg"),i=0;i<containerimg.length;i++)containerimg[i].onclick=function(){this.classList.toggle("s")};
/*]]>*/</b:if>
 
