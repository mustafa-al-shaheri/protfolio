// let icon=document.getElementById("navIcon")
// // document.getElementById("navIcon").style.display="block"

// icon.addEventListener("mouseenter",function(){
    
// //  document.getElementById("navIcon").style.display="none"
// //  document.getElementById("display").innerHTML="Home"
//  console.log(icon)
 
// })

// icon.addEventListener("mouseout",function(){
//     // document.getElementById("navIcon").style.color="red"
//     // document.getElementById("display").innerHTML=""
//     // document.getElementById("navIcon").style.display="block"


// //  document.getElementById("navIcon").className="iconHoverOff"
// //  document.getElementById("display").className="iconHoverOff"
//  console.log(icon)
// })


// slide show///////////////////////////////////////////
document.getElementById("page").style.display="block"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="none"
    document.getElementById("contact").style.display="none"
let skill1=document.getElementById("skill1")
skill1.addEventListener('click',function(){
    document.getElementById("page").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="block"
    document.getElementById("experience").style.display="none"
    document.getElementById("contact").style.display="none"
    console.log("skill1")

})

let about1=document.getElementById("about1")
about1.addEventListener('click',function(){
    document.getElementById("page").style.display="none"
    document.getElementById("about").style.display="block"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="none"
    document.getElementById("contact").style.display="none"
    console.log("about1")
})
let home1=document.getElementById("home1")
home1.addEventListener('click',function(){
    document.getElementById("page").style.display="block"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="none"
    document.getElementById("contact").style.display="none"
    console.log("home1")
})
let experience1=document.getElementById("experience1")
experience1.addEventListener('click',function(){
    document.getElementById("page").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="block"
    document.getElementById("contact").style.display="none"
    console.log("experience1")
})
let contact1=document.getElementById("contact1")
contact1.addEventListener('click',function(){
    document.getElementById("page").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="none"
    document.getElementById("contact").style.display="block"
console.log("contact1")
})
let imageM=document.getElementById("imageM")
imageM.addEventListener('click',function(){
    document.getElementById("page").style.display="block"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="none"
    document.getElementById("contact").style.display="none"
    console.log("M")
})



$('.mouseover1').mouseover(function(){
    $('.home1').show(),$('.mouseover1').hide();;
});

$('.mousehover1').mouseleave(function(){
    $('.home1').hide(),$('.mouseover1').show();;
});

// about icon//////////////////////
$('.mouseover2').mouseover(function(){
    $('.about1').show(),$('.mouseover2').hide();;
});

$('.mousehover2').mouseleave(function(){
    $('.about1').hide(),$('.mouseover2').show();;
});

// skills////////////////////
$('.mouseover3').mouseover(function(){
    $('.skill1').show(),$('.mouseover3').hide();;
});

$('.mousehover3').mouseleave(function(){
    $('.skill1').hide(),$('.mouseover3').show();;
});

// experience1//////////////////////////

$('.mouseover4').mouseover(function(){
    $('.experience1').show(),$('.mouseover4').hide();;
});

$('.mousehover4').mouseleave(function(){
    $('.experience1').hide(),$('.mouseover4').show();;
});

// contact1/////////////////////

$('.mouseover5').mouseover(function(){
    $('.contact1').show(),$('.mouseover5').hide();;
});

$('.mousehover5').mouseleave(function(){
    $('.contact1').hide(),$('.mouseover5').show();;
});