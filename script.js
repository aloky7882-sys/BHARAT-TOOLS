// Search Tools
const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {

        let value = search.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(function(card){

            let text = card.innerText.toLowerCase();

            if(text.includes(value)){
                card.style.display="block";
            }else{
                card.style.display="none";
            }

        });

    });
}

// Button Animation
let buttons=document.querySelectorAll("button");

buttons.forEach(function(btn){

btn.addEventListener("mouseover",function(){

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseout",function(){

btn.style.transform="scale(1)";

});

});