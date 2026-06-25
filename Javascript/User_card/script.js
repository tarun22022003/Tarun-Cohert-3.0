const btn = document.querySelector('.btn');
const age = document.querySelector('.age');
const name = document.querySelector('.name');
const imageurl = document.querySelector('.imageurl');
const form = document.querySelector('form');
const taskmanager = document.querySelector(".taskmanager");

let cards = [
    {
        id : 1,
        name: "Mountains",
        age:5000,
        image : "https://picsum.photos/seed/picsum/200/300"
    },
       {
        id : 2,
        name: "Mountains ",
        age:5000,
        image : "https://picsum.photos/seed/picsum/200/300"
    },
       {
        id : 3,
        name: "Mountains ",
        age: 5000,
        image : "https://picsum.photos/seed/picsum/200/300"
    }
]

let display = ()=> {
    cards.forEach((elem)=>{
        taskmanager.innerHTML += ` <div class="card">
        <div class="image">
        <img src="${elem.image}" alt="" class="person_image">
        </div>
        <div class="details">
        <h3>${elem.name}</h3>
        <h4>${elem.age}</h4>
        </div>
        <div class="buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>

        </div>
        </div>`


    })

}
display();


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const user_age = age.value;
    const user_name = name.value;
    const user_image = imageurl.value;
    console.log(user_age);
    if(user_age.trim && user_name.trim && user_image.trim ==="") return;
    taskmanager.innerHTML += ` <div class="card">
        <div class="image">
        <img src="${user_image}" alt="" class="person_image">
        </div>
        <div class="details">
        <h3>${user_name}</h3>
        <h4>${user_age}</h4>
        </div>
        <div class="buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>

        </div>
        </div>`
        form.reset();

})
taskmanager.addEventListener("click", (e)=>{
 if(e.target.classList.contains("delete-btn")){
    e.target.closest(".card").remove();
 }
})