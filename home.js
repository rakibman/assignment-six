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
// ByClicking on Btn card  display section
const displayCards = (plantCards) => {
  const cardContainers = document.getElementById("cardContainer");

  for (let plantCard of plantCards) {
    const treeByplant = document.createElement("div");
    treeByplant.innerHTML = ` 
  <div class="bg-white shadow-xl max-w-[260px]  p-2 rounded-[7px]">
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
let totalPrice = 0;
const displayHis = (data) => {
  // console.log(data.name);
  // alert("test");
  const cartContainer = document.getElementById("cartContainr");
  const cart = document.createElement("div");
  //   console.log(datas);
  cart.innerHTML = `
    <div id="carted${data.id}" class="w-full  flex items-center justify-between mb-2.5 gap-5 bg-green-300 px-2.5 py-2 rounded-xl">
              <div>
                <h1>${data.name} </h1>
                <p>৳<span id="cart_money">${data.price}</span ></p>
              </div>
              <div>
              <button   onclick="deleteCart(${data.id})"  class="text-red-500"><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
    `;
  cartContainer.append(cart);
  totalPrice = parseInt(data.price) + parseInt(totalPrice);
  document.getElementById("total_money").innerText = parseInt(totalPrice);
};
// delet section start
//  this function called from carted history /x/ button
const deleteCart = (id) => {
  // alert("test");
  const cartItem = document.getElementById(`carted${id}`);
  const deleteItem = cartItem.parentElement;
  console.log(cartItem, deleteItem);
  deleteItem.remove();
};

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
    <div class=" bg-white shadow-xl max-w-[260px] p-2 rounded-[7px]">
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
// modal section
// load modal section 
const loadModal = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((modalData) => {
      displayModal(modalData.plants);
    });
};
// display modal section 
const displayModal = (data) => {
  const modalInfo = document.getElementById("infoOfmodal");
  const modalInject = document.createElement("div");
  modalInject.innerHTML = `
              <div class="bg-white p-3 ">
                <h1 class="text-2xl font-bold py-3">${data.name}</h1>
                <img src="${data.image}" class="rounded-xl max-h-[350px] w-full py-3 " alt="">
                <p><span class="text-xl font-bold py-3">Category:</span>${data.category}</p>
                <p><span class="text-xl font-bold ">Price:</span>${data.price}</p>
                <p><span class="text-xl font-bold ">Decription:</span>${data.description}</p>
              </div>
  `;
  modalInfo.innerHTML = "";
  modalInfo.append(modalInject);
  console.log(data.name, modalInfo);
  document.getElementById("my_modal_5").showModal();
};
// categoris section starts
// plants button load section
const loadButton = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayButton(data.categories);
    });
};
// plants button display section
const displayButton = (datas) => {
  const btnContainers = document.getElementById("btnContainer");
  datas.forEach((data) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button onclick="loadTree(${data.id})" class="btn btn-soft btn-primary mb-3">${data.category_name} </button>
   `;
    btnContainers.append(btnDiv);
    // console.log(data.category_name);
  });
};
loadButton();
