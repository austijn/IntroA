let clickCount = 0;

document.addEventListener("click", function () {
  clickCount++;

  if (clickCount === 1) {
    // First click: show second image
    document.getElementById("img1").style.opacity = "0";

    document.getElementById("img2").style.opacity = "1";
  }

  if (clickCount === 2) {
    // Second click: go to next site
    window.location.href = "https://mekhiwashington.github.io/TheHospitalRoom/";
  }
});
