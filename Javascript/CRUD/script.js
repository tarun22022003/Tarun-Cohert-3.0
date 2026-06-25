const create = document.querySelector(".create");
const cross = document.querySelector(".cross");
const input_form = document.querySelector(".card");
const form = document.querySelector("form");
const producT_card = document.querySelector(".collection");

create.addEventListener("click", () => {
  input_form.style.display = "flex";
});
cross.addEventListener("click", () => {
  input_form.style.display = "none";
});

let collection = [];
let updateIndex = null;

let show_card = function () {
  producT_card.innerHTML = "";
  collection.forEach((elem, index) => {
    producT_card.innerHTML += `<div class="item_card">
      <div class="image">
        <img
          src="${elem.image}"
          alt=""
        />
      </div>
      <div class="details">
        <h2>${elem.name}</h2>
        <h3>${elem.price}</h3>
      </div>
      <div class="control_button">
        <button onclick="updateProduct('${elem.id}')" class="edit">Edit</button>
        <button onclick="deleteProduct('${index.id}')" class="Delete">Delete</button>
      </div>

    </div>`;
  });
};
show_card();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target[0].value;
  let price = event.target[1].value;
  let image = event.target[2].value;

  if (name.trim() === "" || price.trim() === "" || image.trim() === "") {
    return;
  }
  let obj = {
    id: Math.floor(Math.random() * 10),
    name,
    price,
    image,
  };
  if (updateIndex !== null) {
    collection[updateIndex] = obj;
    updateIndex = null;
  } else {
    collection.push(obj);
  }

  show_card();
  form.reset();
  input_form.style.display = "none";
});

const updateProduct = (unique_id) => {
  unique_id = Number(unique_id);
  input_form.style.display = "flex";
  let update_collection = collection.find((elem) => elem.id === unique_id);
  updateIndex = collection.findIndex((elem) => elem.id === unique_id);
  form[0].value = update_collection.name;
  form[1].value = update_collection.price;
  form[2].value = update_collection.image;
};
const deleteProduct = (delete_id) => {
  delete_id = Number(delete_id);
  collection.splice(delete_id, 1);

  show_card();
};
