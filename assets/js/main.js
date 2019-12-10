function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("btn-tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(menuName).style.display = "flex";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$('.first-parallax').parallax({imageSrc: './assets/images/parallax_photo.png'});
$('.second-parallax').parallax({imageSrc: './assets/images/parallax_photo-2.png'});
$('.third-parallax').parallax({imageSrc: './assets/images/parallax_photo-3.png'});