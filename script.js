const todolistContainer = document.getElementById("todolistContainer")
function pressEnter(event){
    if(event.key === "Enter"){
        todo();
    }
}

    


function todo(){

    if(document.getElementById("todo").value===""){
        alert("Please Leave your plan!")
    }else{
        const todoValue = document.getElementById("todo").value;
        const li = document.createElement("li");
        li.id="li"
        li.innerHTML = todoValue;
        todolistContainer.appendChild(li);
        document.getElementById("todo").value=""; //submit後清空INPUT
        
        
        li.addEventListener('mouseover', function () {
            this.style.textDecoration = 'line-through';
            this.style.color="#B5B5B5"
        })
        li.addEventListener('mouseout', function () {
            this.style.textDecoration = 'none';
            this.style.color="#000000"
        })
        li.addEventListener('click', function () {
            li.remove();
        })        
        
    }  
}

