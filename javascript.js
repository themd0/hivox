
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

$('.nsv-5').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?package=com.anifort.player'));
});

$('.nsv-4').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?package=com.dv.adm'));
});

