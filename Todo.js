let todoList = [
    {
        item : 'Buy Ball',
        dueDate : '04-10-2023'
    },
    {
        item : 'Buy Bat',
        dueDate : '04-10-023'
    }
];



displayItems();

function AddTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#tododate');
    
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if (!todoItem || !todoDate){
        return alert("Todo and Date is required")
    }

    console.log(todoDate)
   
    todoList.push({item:todoItem, dueDate:todoDate});
    console.log(todoList)
    displayItems();
    inputElement.value ='';
    dateElement.value = '';


}

function displayItems(){  
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i= 0; i < todoList.length; i++){ 
        let {item, dueDate} = todoList[i];

        newHtml  +=`
       
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick ="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
        `;
    }
    
    containerElement.innerHTML = newHtml;
}