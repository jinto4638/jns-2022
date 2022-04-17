let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
/*
themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
/*menu and theme buttons end */

/*form submision start here*/
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyxyAYiuje-ZFM9RbKJXCZXvLddIn4W2r72AzrhztDjqlr3si2QLZLEEM45JB4jP-eurg/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            window.location.href = "/pages/form-submission.html"

        },
        error: function (err) {
            alert("Something Error/check Network connection")

        }
    })
})
/*form submision end here*/
//-----------------------------------------------------------------------------------------------------------------

/*--BACK TO TOP BUTTON----*/
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active" , window.scrollY > 200)
  })

  function scrollToTop(){
    window.scrollTo(0, 0);
}
/*--BACK TO TOP BUTTON----*/


/*colour changing button*/
let theme = document.querySelector('#colour-settings-icon');
let main = document.querySelector('.custom-color-btn');
let close = document.getElementById('mainContainer');

theme.onclick = () => {
    theme.classList.toggle('fa-times');
    main.classList.toggle('act');
}
close.onclick = () => {
    main.classList.remove('act')
    theme.classList.remove('fa-times')
}


/*----------colour chamge testing----------*/
var colourtogRed = document.getElementById("clrbtn-red");
var colourtogOrange = document.getElementById("clrbtn-ORANGE");
var colourtogPink = document.getElementById("clrbtn-PINK");
var colourtogPurple = document.getElementById("clrbtn-purple");
var colourtogGreen = document.getElementById("clrbtn-green");
var colourtogBlue = document.getElementById("clrbtn-blue");
/*----------bg colour change testing----------*/
var colourtogNormal = document.getElementById("clrbtn-normal");
var colourtogDark = document.getElementById("clrbtn-dark");
var colourtogSpeial = document.getElementById("clrbtn-special");


colourtogRed.onclick = function () {

    colourtogBlue.classList.remove('on');
    colourtogOrange.classList.remove('on');
    colourtogPink.classList.remove('on');
    colourtogPurple.classList.remove('on');
    colourtogGreen.classList.remove('on');
    colourtogRed.classList.toggle('on');
    if (colourtogRed.classList.contains('on')) {
        document.body.classList.remove('redtheme', 'orangetheme', 'pinktheme', 'purpletheme', 'greentheme', 'bluetheme')

        document.body.classList.add("redtheme");
    }
    else {
        document.body.classList.remove("redtheme");
    }

}


colourtogOrange.onclick = function () {
    colourtogRed.classList.remove('on');

    colourtogBlue.classList.remove('on');
    colourtogPink.classList.remove('on');
    colourtogPurple.classList.remove('on');
    colourtogGreen.classList.remove('on');
    colourtogOrange.classList.toggle('on');
    if (colourtogOrange.classList.contains('on')) {
        document.body.classList.remove('redtheme', 'orangetheme', 'pinktheme', 'purpletheme', 'greentheme', 'bluetheme')
        document.body.classList.toggle("orangetheme");
    }

    else {
        document.body.classList.remove("orangetheme");
    }
}

colourtogPink.onclick = function () {
    colourtogRed.classList.remove('on');

    colourtogBlue.classList.remove('on');
    colourtogOrange.classList.remove('on');
    colourtogPurple.classList.remove('on');
    colourtogGreen.classList.remove('on');
    colourtogPink.classList.toggle('on');
    if (colourtogPink.classList.contains('on')) {
        document.body.classList.remove('redtheme', 'orangetheme', 'pinktheme', 'purpletheme', 'greentheme', 'bluetheme')
        document.body.classList.toggle("pinktheme");
    }
    else {
        document.body.classList.remove("pinktheme");
    }
}


colourtogPurple.onclick = function () {
    colourtogRed.classList.remove('on');

    colourtogBlue.classList.remove('on');
    colourtogOrange.classList.remove('on');
    colourtogPink.classList.remove('on');
    colourtogGreen.classList.remove('on');
    colourtogPurple.classList.toggle('on');
    if (colourtogPurple.classList.contains('on')) {
        document.body.classList.remove('redtheme', 'orangetheme', 'pinktheme', 'purpletheme', 'greentheme', 'bluetheme')
        document.body.classList.toggle("purpletheme");
    }
    else {
        document.body.classList.remove("purpletheme");
    }
}

colourtogGreen.onclick = function () {
    colourtogRed.classList.remove('on');

    colourtogBlue.classList.remove('on');
    colourtogOrange.classList.remove('on');
    colourtogPink.classList.remove('on');
    colourtogPurple.classList.remove('on');
    colourtogGreen.classList.toggle('on');
    if (colourtogGreen.classList.contains('on')) {
        document.body.classList.remove('redtheme', 'orangetheme', 'pinktheme', 'purpletheme', 'greentheme', 'bluetheme')
        document.body.classList.toggle("greentheme");
    }
    else {
        document.body.classList.remove("greentheme");
    }
}

colourtogBlue.onclick = function () {
    colourtogRed.classList.remove('on');

    colourtogOrange.classList.remove('on');
    colourtogPink.classList.remove('on');
    colourtogPurple.classList.remove('on');
    colourtogGreen.classList.remove('on');
    colourtogBlue.classList.toggle('on');
    if (colourtogBlue.classList.contains('on')) {
        document.body.classList.remove('redtheme', 'orangetheme', 'pinktheme', 'purpletheme', 'greentheme', 'bluetheme')
        document.body.classList.toggle("bluetheme");
    }
    else {
        document.body.classList.remove("bluetheme");
    }
}
//for background theme changing

// let themeToggler = document.querySelector('#clrbtn-normal');
// /*for dark and night mode*/
// themeToggler.onclick = () => {

//     themeToggler.classList.toggle('on');
//     if (themeToggler.classList.contains('on')) {
//         document.body.classList.remove('activeBlue');

//         document.body.classList.add('activeBlack');
//     } else {
//         document.body.classList.remove('activeBlack');
//     }
// }

/*new colour*/
let bgBlack = document.getElementById('bg-black');
let bgWhite = document.getElementById('bg-white');
let bgBlue = document.getElementById('bg-blue');
let bgviolet = document.getElementById('bg-violet');

bgBlack.onclick = () => {
    bgWhite.classList.remove('on');
    bgBlue.classList.remove('on');
    bgviolet.classList.remove('on');

    bgBlack.classList.add('on');
    if (bgBlack.classList.contains('on')) {
        document.body.classList.remove('activeWhite');
        document.body.classList.remove('activeBlue');
        document.body.classList.remove('activeviolet');


        document.body.classList.add('activeBlack');
    } else {
        document.body.classList.remove('activeBlack');
    }
}

bgWhite.onclick = () => {
    bgBlue.classList.remove('on');
    bgBlack.classList.remove('on');
    bgviolet.classList.remove('on');

    bgWhite.classList.add('on');
    if (bgWhite.classList.contains('on')) {
        document.body.classList.remove('activeBlack');
        document.body.classList.remove('activeBlue');
        document.body.classList.remove('activeviolet');


        document.body.classList.add('activeWhite');
    } else {
        document.body.classList.remove('activeWhite');
    }
}

bgBlue.onclick = () => {
    bgBlack.classList.remove('on');
    bgWhite.classList.remove('on');
    bgviolet.classList.remove('on');

    bgBlue.classList.add('on');
    if (bgBlue.classList.contains('on')) {
        document.body.classList.remove('activeBlack');
        document.body.classList.remove('activeWhite');
        document.body.classList.remove('activeviolet');


        document.body.classList.add('activeBlue');
    } else {
        document.body.classList.remove('activeBlue');
    }
}
bgviolet.onclick = () => {
    bgBlack.classList.remove('on');
    bgWhite.classList.remove('on');
    bgBlue.classList.remove('on');

    bgviolet.classList.add('on');
    if (bgviolet.classList.contains('on')) {
        document.body.classList.remove('activeBlack');
        document.body.classList.remove('activeWhite');
        document.body.classList.remove('activeBlue');

        
        document.body.classList.add('activeviolet');
    } else {
        document.body.classList.remove('activeviolet');
    }
}

