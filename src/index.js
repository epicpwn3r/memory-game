document.addEventListener("DOMContentLoaded", () =>{

  //Creation of each card object
  const cards = [
    {
      name: "burger",
      image: "src/images/cheeseburger.png",
    },
    {
      name: "fries",
      image: "src/images/fries.png",
    },
    {
      name: "hotdog",
      image: "src/images/hotdog.png",
    },
    {
      name: "ice-cream",
      image: "src/images/ice-cream.png",
    },
    {
      name: "milkshake",
      image: "src/images/milkshake.png",
    },
    {
      name: "pizza",
      image: "src/images/pizza.png",
    },
    {
      name: "burger",
      image: "src/images/cheeseburger.png",
    },
    {
      name: "fries",
      image: "src/images/fries.png",
    },
    {
      name: "hotdog",
      image: "src/images/hotdog.png",
    },
    {
      name: "ice-cream",
      image: "src/images/ice-cream.png",
    },
    {
      name: "milkshake",
      image: "src/images/milkshake.png",
    },
    {
      name: "pizza",
      image: "src/images/pizza.png",
    },
  ];

  //console.log(cards);

  //sort random array
  const randomCards = cards.sort(() => 0.5 - Math.random());
  console.log(randomCards);

  const grid = document.querySelector(".grid");
  const score = document.querySelector("#score");
  let cardsChosen = [];
  let cardsChosenIDs = [];
  let cardsWon = [];
  //Board creation
  function createBoard(){
    for (var i = 0; i < randomCards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/images/blank.png"); //Set default card has blank
      card.setAttribute("data-id", i); //Set a card Id for each card on board
      card.addEventListener("click", flipCard); //Add listener to check for click and execute fliCard function
      grid.appendChild(card); // append the new card has child of Board
    }

  }

  function flipCard() {

    let cardId = this.getAttribute("data-id"); // store card id from clicked card

    cardsChosen.push(cards[cardId].name); //add clicked card name to array of names
    console.log(cardsChosen);
    cardsChosenIDs.push(cardId); //add clicked card Id to array of IDS
    this.setAttribute("src", cards[cardId].image); //set the clicked blank card image has the corresponding card Id image
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 200);
    }


  }

  function checkForMatch(){
    const currentCards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIDs[0];
    const optionTwoId = cardsChosenIDs[1];
    const optionOneName = cardsChosen[0];
    const optionTwoName = cardsChosen[1];


    if (optionOneId == optionTwoId) {
      alert("Same card chosen!");
      currentCards[optionOneId].setAttribute("src", "src/images/blank.png");
      currentCards[optionTwoId].setAttribute("src", "src/images/blank.png");
    }
    else if (optionOneName === optionTwoName) {
      alert("You have found a match");
      currentCards[optionOneId].setAttribute("src", "src/images/white.png");
      currentCards[optionTwoId].setAttribute("src", "src/images/white.png");
      currentCards[optionOneId].removeEventListener("click", flipCard);
      currentCards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    }
    else {
      alert("No match");
      currentCards[optionOneId].setAttribute("src", "src/images/blank.png");
      currentCards[optionTwoId].setAttribute("src", "src/images/blank.png");
    }
    cardsChosen = [];
    cardsChosenIDs = [];
    score.textContent = cardsWon.length;
    if (cardsWon.length === cards.length / 2) {
      alert("YOU HAVE WON!");
      window.location.reload();
    }
    console.log(cardsWon.length);
  }
  createBoard();

});
