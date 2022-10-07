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


$('.nsv-5').each(function() {
  $(this).attr('href', $(this).attr('href').replace('.mp4','.mp4?/?package=com.anifort.player'));
});

