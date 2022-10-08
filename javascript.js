function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("xx-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("xx-ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$('.tag-manga').each(function() {
  $(this).attr('href', $(this).attr('href').replace('/p/','#'));
});


$('.nsv-5').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?package=com.anifort.player'));
});


$('.tag-harem, .tag-action, .tag-shounen, .tag-sports, .tag-games, .tag-micha, .tag-ecchi, .tag-shoujou, .tag-sci-fi, .tag-drama, .tag-demons, .tag-army, .tag-fantasy, .tag-comedy, .tag-mystery, .tag-vampire, .tag-unn, .tag-history, .tag-nlife, .tag-seinen, .tag-romance, .tag-romance, .tag-super, .tag-powers, .tag-horror, .tag-psycho, .tag-school, .tag-music, .tag-thriller, .tag-crime, .tag-shoujo, .tag-police, .tag-jussi, .tag-thriller, .tag-isekai, .tag-magic, .tag-fights, .tag-nlife, .tag-adventure, .tag-VG, .tag-animeism, .tag-BR, .tag-HSG, .tag-manga, .tag-short, .tag-chinese, .tag-novel, .xx-button, .xx-button1, .xx-year, .xx-age, .xx-rate').each(function() {
  $(this).attr('href', $(this).attr('href').replace('/','#'));
});
