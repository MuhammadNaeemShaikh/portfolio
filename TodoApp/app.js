
var date = new Date();

var day = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
var month = ["JAN", "FEB", "MARCH", "APR", "MAY", "JUNE", "JULY", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]

var todayDate = document.getElementById('date');
todayDate.innerHTML = (date.getDate() +1)+ " " + month[date.getMonth()-1] + " " + date.getFullYear();


var todayDay = document.getElementById('day');
todayDay.innerHTML = day[date.getDay()+1];


//denfine databse
var database = firebase.database().ref('todos');


database.on('child_added', function (data) {


    //create li tag with input 

    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().value);
    li.appendChild(liText)


    // //create edit button 

    var edit_Button = document.createElement("button");
    edit_Button.innerHTML = "<i class='fa fa-pencil-square' aria-hidden='true'></i>"
    edit_Button.setAttribute("onclick", "editItem(this)");
    edit_Button.setAttribute("class", "edit_btn")
    edit_Button.setAttribute("id",data.val().key)
    li.appendChild(edit_Button)

    // //create dlt button

    var dltButton = document.createElement("button");
    dltButton.innerHTML = "<i class='fa fa-trash 'aria-hidden='true'></i>"
    dltButton.setAttribute("onclick", "dltItem(this)");
    dltButton.setAttribute("class", "edit_btn")
    dltButton.setAttribute("id",data.val().key)
    li.appendChild(dltButton)


    list.appendChild(li);

})

function add() {

    var inputValue = document.getElementById('task');
    var key = database.push().key;
    var todo = {
        value: inputValue.value,
        key: key
    }
    database.child(key).set(todo);

    inputValue.value = "";
}

function dltItem(e) {
    e.parentNode.remove();
    database.child(e.id).remove();
}


function editItem(e) {
    var edit_Value = prompt("Enter Update Value",e.parentNode.firstChild.nodeValue );
    var editTodo = {
        value :edit_Value,
        key:e.id
    }
    database.child(e.id).set(editTodo);
    e.parentNode.firstChild.nodeValue = edit_Value;
}
