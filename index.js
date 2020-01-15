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
    document.getElementById("contactUs").style.display="none"
let skill1=document.getElementById("skill1")
skill1.addEventListener('click',function(){
    document.getElementById("page").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="block"
    document.getElementById("experience").style.display="none"
    document.getElementById("contactUs").style.display="none"
    console.log("skill1")

})

let about1=document.getElementById("about1")
about1.addEventListener('click',function(){
    document.getElementById("page").style.display="none"
    document.getElementById("about").style.display="block"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="none"
    document.getElementById("contactUs").style.display="none"
    console.log("about1")
})
let home1=document.getElementById("home1")
home1.addEventListener('click',function(){
    document.getElementById("page").style.display="block"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="none"
    document.getElementById("contactUs").style.display="none"
    console.log("home1")
})
let experience1=document.getElementById("experience1")
experience1.addEventListener('click',function(){
    document.getElementById("page").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="block"
    document.getElementById("contactUs").style.display="none"
    console.log("experience1")
})
let contact1=document.getElementById("contact1")
contact1.addEventListener('click',function(){
    document.getElementById("page").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="none"
    document.getElementById("contactUs").style.display="block"
console.log("contact1")
})
let imageM=document.getElementById("imageM")
imageM.addEventListener('click',function(){
    document.getElementById("page").style.display="block"
    document.getElementById("about").style.display="none"
    document.getElementById("skill").style.display="none"
    document.getElementById("experience").style.display="none"
    document.getElementById("contactUs").style.display="none"
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


let btn =document.querySelector("#btn").value;
let fName =document.querySelector("#fName").value;
let lName =document.querySelector("#lName").value;
let email =document.querySelector("#email").value;
let phone =document.querySelector("#phone").value;
let message =document.querySelector("#message").value;

btn.addEventListener('click',function(){
  var newContact= new contact(fName,lName,email,phone,message);

console.log(fnm(fName.value),lnm(lName.value),em(email.value),mob(phone.value),mesg(message.value));
//


  event.preventDefault();
});


function fnm(v){
  if(v.length>=3&&v.length<=25){
    let number=2;
    for(let i=0;i<v.length;i++){
        if((isNaN(v[i]) ==false ||v[i]==="@" ||v[i]==="#" ||v[i]==="!" ||v[i]==="`" ||v[i]==="~" ||v[i]==="$" ||v[i]==="%" ||v[i]==="^" ||v[i]==="&" ||v[i]==="*" ||v[i]==="=" ||v[i]==="+" ||v[i]==="/" ||v[i]==="|") && v[i]!=" " ){
            number = 3;
        };
        /*if(typeof Number(v[i]) =="number"  ){
            sym = 3;
            
        }*/
        
    };
    if(number!=3){
        return v;
    }
    else if(number==3){
      alert("Warning Unvalid Charecters in the first name")
    }
  }
  else if(v.length>25){
    alert("First name is longer than 25 charecters")
  }
  else if(v.length<3){
    alert("First name is smaller than 3 charecters")
  }
}
function lnm(v){
  if(v.length>=3&&v.length<=25){
    let number=2;
    for(let i=0;i<v.length;i++){
        if((isNaN(v[i]) ==false ||v[i]==="@" ||v[i]==="#" ||v[i]==="!" ||v[i]==="`" ||v[i]==="~" ||v[i]==="$" ||v[i]==="%" ||v[i]==="^" ||v[i]==="&" ||v[i]==="*" ||v[i]==="=" ||v[i]==="+" ||v[i]==="/" ||v[i]==="|") && v[i]!=" " ){
            number = 3;
        };
        /*if(typeof Number(v[i]) =="number"  ){
            sym = 3;
            
        }*/
        
    };
    if(number!=3){
        return v;
    }
    else if(number==3){
      alert("Warning Unvalid Charecters in the last name")
    }
  }
  else if(v.length>25){
    alert("Last name is longer than 25 charecters")
  }
  else if(v.length<3){
    alert("Last name is smaller than 3 charecters")
  }
}
function em(e){
  let a= e.split("@");
  if(a.length==2){
      let b= a[0].split(".");
      let c=a[1].split(".");
      if(b.length<=2&&c.length<=4){
          return e;
      }
      else{
        alert ("Unvalid Email");
      }
      
  }
  else{
    alert ("Unvalid Email");
  }
}
function mob(ss){
  if(((ss[0]==7)&&(ss[1]==0||ss[1]==3||ss[1]==1||ss[1]==7))&&ss.length==9){
      return ss;
  }
  else{
    alert ("Not valid Yemeni Mobile Phone Number");
  }
};
function mesg(a){
  if(a.length>=10&&a.length<=330){
    return a;
  }
  else if(a.length<10){
    alert("message is too short");
  }
  else if(a.length>330){
    alert("message is too long");
  }
}

class contact{
  constructor(firstName,lastName,email,phone,message){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.phone=phone;
    this.message;
  }
}

var newContact= new contact(fName,lName,email,phone,message);

