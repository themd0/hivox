$('.extL.alt').each(function() {
  $(this).attr('href', $(this).attr('href').replace('/search', 'https://klaster-news-13.blogspot.com/search'));
});


/*<![CDATA[*/
/* LAZYLOAD SCRIPTS - DON'T REMOVE FUNCTIONS */
function lazyCustomJs(){
  /* lazy category post */ if(getid('HTML2')!=null){ctgryPst(ctgryLb1, '#HTML2 .ctgry', 6, 600, 200, true);if(getid('HTML3')!=null){ctgryPst(ctgryLb2, '#HTML3 .ctgry', 6, 600, 200, true)}};
  /* YOUR CUSTOM JS */
};
function scrollCustomJs(){
  /* YOUR CUSTOM JS */
};
/*]]>*/
/* lazy youtube */ 
!function(){for(var t=qSell(".lazyYt"),e=0;e<t.length;e++){var a="https://img.youtube.com/vi/"+t[e].dataset.embed+"/sddefault.jpg",s=new Image;s.setAttribute("class","lazy"),s.setAttribute("data-src",a),s.setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="),s.setAttribute("alt","Youtube video"),s.addEventListener("load",void t[e].appendChild(s)),t[e].addEventListener("click",function(){var t=document.createElement("iframe");t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen",""),t.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1"),this.innerHTML="",this.appendChild(t)})}}();
/* Lightbox image */ 
for(var imageslazy=qSell(".pS .separator img, .pS .tr-caption-container img, .pS .psImg >img, .pS .btImg >img"),i=0;i<imageslazy.length;i++)imageslazy[i].setAttribute("onclick","return false");function wrap(i,a,t){for(var r=document.querySelectorAll(a),e=0;e<r.length;e++){var m=i+r[e].outerHTML+t;r[e].outerHTML=m}}wrap('<div class="zmImg">',".pS .separator >a","</div>"),wrap('<div class="zmImg">',".pS .tr-caption-container td >a","</div>"),wrap('<div class="zmImg">',".pS .separator >img","</div>"),wrap('<div class="zmImg">',".pS .tr-caption-container td >img","</div>"),wrap('<div class="zmImg">',".pS .psImg img","</div>");for(var containerimg=document.getElementsByClassName("zmImg"),i=0;i<containerimg.length;i++)containerimg[i].onclick=function(){this.classList.toggle("s")};
 
