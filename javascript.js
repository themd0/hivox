var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos &gt; currentScrollPos) {
    document.getElementById(&quot;xx-input&quot;).style.top= &quot;20px&quot;;
  } else {
    document.getElementById(&quot;xx-input&quot;).style.top= &quot;-50px&quot;;
  }
  prevScrollpos = currentScrollPos;
}

$('.nsv-2').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?target=video'));
});

$('.nsv-4, .d-ak-360, .d-ak-720').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?package=com.dv.adm'));
});

$('.nsv-5, .ak-but-h, .ak-but-s, .w-ak-360, .w-ak-720').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?package=com.anifort.player'));
});
