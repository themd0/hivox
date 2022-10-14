
function toggleDiv(divid)
  {
    varon = divid + 'on';
    varoff = divid + 'off';
 
    if(document.getElementById(varon).style.display == 'block')
    {
    document.getElementById(varon).style.display = 'none';
    document.getElementById(varoff).style.display = 'block';
    }
   
    else
    {  
    document.getElementById(varoff).style.display = 'none';
    document.getElementById(varon).style.display = 'block'
    }
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

Array.from(document.querySelectorAll('img')).forEach(x => {
  x.src = x.src.replace(/large/,'medium')
  console.log(x);
});
