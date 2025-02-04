const cards = document.querySelectorAll(".card");
let matchedCards =0;
let cardOne, cardTwo;
let disableDeck = false;
function flipCard(e){
    let clickedCard = e.target;
    //getting user clicked card
    if(clickedCard!==cardOne && !disableDeck){
        clickedCard.classList.add("flip");

        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck =true;
        let cardOneImg =cardOne.querySelector("img").src,cardTwoImg =cardTwo.querySelector("img").src;
        matchCards(cardOneImg,cardTwoImg);
    
    }
      
}
function matchCards(img1, img2)
{
    if(img1 === img2){
        //when matched
        matchedCards++;
        if(matchedCards === 8){

            setTimeout(()=>{
                return shuffleCards();
            },1000);
        }
        cardOne.removeEventListener("click",flipCard);
        cardTwo.removeEventListener("click",flipCard);
        //update cardOne and cardTwo to null
        cardOne= cardTwo ="";
        return disableDeck =false;
    }
    //when not matched
    setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    },400);

    //settimeout is more like a time-enumarator
    setTimeout(()=>{
        cardOne.classList.remove("shake","flip");
        cardTwo.classList.remove("shake", "flip");
        cardTwo = cardOne = "";//set them back to null
        disableDeck =false;
    },1000);
}

function shuffleCards(){
    matchedCards =0;
    cardOne =cardOne ="";
    let arr =[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

    arr.sort(()=> Math.random()>0.5?1:-1); //sorting randomly

    cards.forEach((card,index)=>{
        card.classList.remove("flip");
        let imgTag =card.querySelector("img");
        imgTag.src = `${arr[index]}.jpg`
        card.addEventListener("click",flipCard);
 
    });
}

shuffleCards(); 
cards.forEach(card => {
    //added click events to all cards
    card.addEventListener( "click", flipCard);
});