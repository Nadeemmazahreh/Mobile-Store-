let allUsers = [];


function Users(user, type){
    this.user = user;
    this.type = type;
    this.price = 0;
    this.condition = '';

    allUsers.push(this);
}

Users.prototype.getPrice = function(){
     this.price = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
}

Users.prototype.getCondition = function(){
    if(this.price < 200){
        this.condition = 'Used';
    }else{
        this.condition = 'New';
    }
}

form = document.getElementById('form');
submit = document.getElementById('submit');

form.addEventListener('submit',submitter);

function submitter(event){
    event.preventDefault();

    let username = event.target.username.value;
    let type = event.target.type.value;
    // Users.getPrice()
    // Users.getCondition()

    let user = new Users(username, type)

    updateStorage()
    console.log(allUsers);

    renderBody()
}

let container = document.getElementById('Container')
let table = document.createElement('table')
container.appendChild(table)

function renderHeader(){
    let headerRow = document.createElement('tr')
    table.appendChild(headerRow)

    let cell1 =  document.createElement('th')
    headerRow.appendChild(cell1)
    cell1.textContent = 'User'

    let cell2 =  document.createElement('th')
    headerRow.appendChild(cell2)
    cell2.textContent = 'Type'

    let cell3 =  document.createElement('th')
    headerRow.appendChild(cell3)
    cell3.textContent = 'Price'

    let cell4 =  document.createElement('th')
    headerRow.appendChild(cell4)
    cell4.textContent = 'Condition'
}

function renderBody(){
    
    console.log(allUsers);
    for (let i = 0; i < allUsers.length; i++) {
        let row = document.createElement('tr')
        table.appendChild(row)
        for (let j = 0; j < 4; j++) {
            if(j==0){
                let cell = document.createElement('td')
                row.appendChild(cell)
                cell.textContent = allUsers[i].user
            }else if (j==1){
                let cell = document.createElement('td')
                row.appendChild(cell)
                cell.textContent = allUsers[i].type
            }else if (j==2){
                let cell = document.createElement('td')
                row.appendChild(cell)
                cell.textContent = allUsers[i].price
            }else{
                let cell = document.createElement('td')
                row.appendChild(cell)
                cell.textContent = allUsers[i].condition
            }
        }   
    }
}


function updateStorage(){
    let arrayString = JSON.stringify(allUsers)
    localStorage.setItem('user data', arrayString)
}


function getData(){
    let data = localStorage.getItem('user data');
    let dataObj = JSON.parse(data);

    if(dataObj !== null){
        dataObj = allUsers;
    }
}

getData()
renderHeader()
renderBody()

