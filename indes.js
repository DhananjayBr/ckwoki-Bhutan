//SWIPER JS
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      390: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  



  //navigatio on click
//  const menu = document.getElementById("navbar");
  function call(){
    document.getElementById("navbar").style.left = "0";
  }
  function remo(){
    document.getElementById("navbar").style.left = "-100%"; 
  }
  function lili(){
    document.getElementById("navbar").style.left = "-100%";
  }


  //email validation
  const email = document.getElementById("email");
  const emailError = document.getElementById("email-error");
function eerror(){
  let RegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.match(RegExp)){
    emailError.innerText = "";
  }
  else{
    emailError.innerText = "Please Enter Valid Email Id";
    return false;
  }
}
//mobile no validation
function mobilevali(){
  const n = document.getElementById("number2").value;
if(n==""){
  document.getElementById("Mobile-error").innerHTML = "Please fill up Mobile No";
  return false;
}
else{
  document.getElementById("Mobile-error").innerHTML = "";
}
if(isNaN(n)){
  document.getElementById("Mobile-error").innerHTML = "Only Number Allowed";
  return false;
}
else{
  document.getElementById("Mobile-error").innerHTML = "";
}
if(n.length<10){
  document.getElementById("Mobile-error").innerHTML = "Mobile Number Must Be 10 Digit";
  return false;
}
else{
  document.getElementById("Mobile-error").innerHTML = "";
}
if(n.length>10){
  document.getElementById("Mobile-error").innerHTML = "Mobile Number Must Be 10 Digit";
  return false;
}
else{
  document.getElementById("Mobile-error").innerHTML = "";
}
}
//name error validation

function nameError(){
const name = document.getElementById("name").value;
if(name==""){
  document.getElementById("name-error").innerHTML = "Please Enter Name";
  return false;
}
else{
  document.getElementById("name-error").innerHTML = "";
}
}

// video play in js

var playVideo = document.getElementById("play-video");
var myVideo = document.getElementById("my-video");

function stopVideo(){
  playVideo.style.display = "none";
  myVideo.pause();
}

function playVide(file){
  myVideo.src = file;
  playVideo.style.display = "block";
  myVideo.play();
}


// email submit in js
function emailSubmit(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "dhananshort@gmail.com",
    Password : "2894F0B61DB6575B2642118FEEE03EFF8179",
    To : 'them@website.com',
    From : document.getElementById("email").value,
    Subject : "This is the New Contact Form",
    Body : "Hello I'm " + document.getElementById("name").value,
}).then(
  message => alert("Send Sucsessfully")
);

}