setTimeout(function() {
  $('body')
    .removeClass('loading')
    .addClass('loaded');
}, 2000);

// Slick - jquery
$(document).ready(function () {
  $(".demo").slick({
    dots: false,
    slidesToShow: 4, // 4 images
    slidesToScroll: 1,
    touchMove: false,
  });
});

// coming-slide
// Slick - jquery
$(document).ready(function () {
  $(".coming-slide").slick({
    dots: false,
    slidesToShow: 4, // 4 images
    slidesToScroll: 1,
    touchMove: false,
  });
});

// Tab on page load
function movieFilter(evt, movieList) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(movieList).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// youtube popup 
$(".youtube-link").grtyoutube();

// search list 
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("keyWord")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

