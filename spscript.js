var mainimg = document.getElementById("mainimg")
var smallimg = document.getElementsByClassName("small-img")






smallimg[0].addEventListener("click",()=>{
    mainimg.src = smallimg[0].src;
    }
)

smallimg[1].addEventListener("click",()=>{
    mainimg.src = smallimg[1].src;
    }
)
smallimg[2].addEventListener("click",()=>{
    mainimg.src = smallimg[2].src;
    }
)

smallimg[3].addEventListener("click",()=>{
    mainimg.src = smallimg[3].src;
    }
)



var changepro=document.getElementsByClassName("img-change")
var price = document.getElementsByClassName("price")

var finalprice = document.getElementById("finalprice")




changepro[0].addEventListener("click",()=>{
    mainimg.src = changepro[0].src;
    finalprice.innerText=price[0].innerText
    }
)

changepro[1].addEventListener("click",()=>{
    mainimg.src = changepro[1].src;
    finalprice.innerText=price[1].innerText
    }
)
changepro[2].addEventListener("click",()=>{
    mainimg.src = changepro[2].src;
    finalprice.innerText=price[2].innerText
    }
)
changepro[3].addEventListener("click",()=>{
    mainimg.src = changepro[3].src;
    finalprice.innerText=price[3].innerText
    }
)

