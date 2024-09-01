// Select date class from html
const date = document.querySelector('.date')

// Select year class from html
const year = document.querySelector('.year')

// Get today's date from javascript date class and stored it in todays date variable
const todaysDate = (new Date()).toString().split(' ').splice(1,3).join(' ');

// Embed today's date in the html document
date.textContent = todaysDate

// Get year from javascript Date class and stored it in year variable
const currentYear = new Date().getFullYear().toString()



// Embed current year date in the html document
year.textContent = currentYear


{/* <div class="todooptions">
                <input class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input">
                <p>Buy water</p>
            </div> */}


// Todo Functionality
const todoInput = document.querySelector('.todoInput')
const addBtn = document.querySelector('.ri-add-box-fill')
const error = document.querySelector('.error')
const todos = document.querySelector('.todooption')
const checkBox = document.querySelector('.form-check-input')


addBtn.addEventListener('click', function(){
    if(todoInput.value === ""){
        const errorText = "Please enter a text"
        error.innerHTML = `<p class="text-center text-light my-3 py-2 bg-danger mx-auto" style="width: 55%; border-radius:10px;">${errorText}</p>`
        setTimeout(() => {
            error.innerHTML = ""
        },2500)
    }else{
        todos.innerHTML += 
        `
        <div class="todooptions">
                <div class="d-flex gap-1">
                    <input onchange="" class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input">
                    <p>${todoInput.value}</p>
                </div>
                <i class="ri-delete-bin-5-line"></i>
        </div>
        `
        todoInput.value = ""
    }
})

todos.addEventListener('click', function(e){
    console.log(e)
    if(e.target.checked){
        e.target.parentElement.classList.add("completed")
    }
    if(!e.target.checked){
        e.target.parentElement.classList.remove("completed")
    }
    if(e.target.classList.contains("ri-delete-bin-5-line")){
        e.target.parentElement.remove()
    }
})


