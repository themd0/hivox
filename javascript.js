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

$('.nsv-3, .ak-but-h, .ak-but-s, .w-ak-360, .w-ak-720').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?target=video'));
});

$('.nsv-2, .nsv-4, .d-ak-360, .d-ak-720').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?package=com.dv.adm'));
});

$('.nsv-5').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?target=video'));
});

var divs = ["nseason1", "nseason2", "nseason3", "nseason4", "nseason5", "nseason6", "nseason7"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
