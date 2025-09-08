// ByClicking on button load tree data 
const loadTree = (id) => {
  const cardContainers = document.getElementById("cardContainer");
  cardContainers.innerHTML = "";
  const url = fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayCards(data.plants);
    });
};
// ByClicking on category Btn card  display section
const displayCards = (plantCards) => {
  const cardContainers = document.getElementById("cardContainer");

  for (let plantCard of plantCards) {
    const treeByplant = document.createElement("div");
    treeByplant.innerHTML = ` 
  <div class="bg-white shadow-xl max-w-[260px] max-h-[470px] p-2.5 rounded-[7px]">
          <img
            src="${plantCard.image}"
            class="w-full max-h-[200px] rounded-[10px]"
            alt=""
          />
          <h1   onclick="loadModal(${plantCard.id})" class="text-xl font-bold my-2.5 cursor-pointer">${plantCard.name}</h1>
          <p class="text-wrap text-[12px]">${plantCard.description}</p>
          <div class="flex justify-between my-2.5">
            <p class="bg-[#dcfce7] py-1.5 px-2.5 rounded-2xl">${plantCard.category}</p>
            <p class="font-bold"><span>$</span>${plantCard.price}</p>
          </div>
          <button onclick="loadHist(${plantCard.id})"  class="cartBtns  btn bg-[#15803d] text-white rounded-2xl w-full">Add to Cart</button>
        </div>
  `;
    cardContainers.append(treeByplant);
  }
};

// history load section 
const loadHist = (id) => {
  const url = fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((hiscart) => {
      displayHis(hiscart.plants);
    });
};
// history display section 
const displayHis = (data) => {
  // console.log(data.name);
  alert("test");
  const cartContainer = document.getElementById("cartContainr");
  const cart = document.createElement("div");
  //   console.log(datas);
  cart.innerHTML = `
    <div class="flex items-center mb-2.5 gap-5 bg-green-300 px-2.5 py-2 rounded-xl">
              <div>
                <h1>${data.name} </h1>
                <p><span>৳</span>${data.price} </p>
              </div>
              <div>
              <a><button>X</button></a>
              </div>
            </div>
    `;
  cartContainer.append(cart);
  // }
};
// this function called from add to cart button 

// Bydefault card load section
const loadCard = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((allplants) => {
      displayCard(allplants.plants);
    });
};
// Bydefault card display section

const displayCard = (cards) => {
  const cardContainers = document.getElementById("cardContainer");
  for (let card of cards) {
    const cards = document.createElement("div");
    cards.innerHTML = ` 
    <div class=" bg-white shadow-xl max-w-[260px] max-h-[470px] p-2 rounded-[7px]">
          <img
            src="${card.image}"
            class="w-full max-h-[200px] rounded-[10px]"
            alt=""
          />
          <h1  onclick="loadModal(${card.id})" class="modals text-xl font-bold my-2.5 cursor-pointer"> ${card.name}</h1>
          <p class="text-wrap text-[12px]">${card.description}</p>
          <div class="flex justify-between my-2.5">
            <p class="bg-[#dcfce7] py-1.5 px-2.5 rounded-2xl">${card.category}</p>
            <p class="font-bold"><span>$</span>${card.price}</p>
          </div>
          <button onclick="loadHist(${card.id})"  class="cartBtns btn bg-[#15803d] text-white rounded-2xl w-full">Add to Cart</button>
        </div>
    `;
    cardContainers.append(cards);
  }
};
loadCard();
// categoris section starts
// plants button load section

