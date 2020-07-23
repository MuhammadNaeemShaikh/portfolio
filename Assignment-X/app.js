var list = document.getElementById("list")

var month = ['JAN', "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"]
var day = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

var date = new Date();

document.getElementById("date").innerHTML = date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
document.getElementById("day").innerHTML = day[date.getDay()-1]


function ADD() {

    var time = document.getElementById("time").value;
    var todo_Item = document.getElementById("exampleInputEmail1").value;
    var li = document.createElement("li");
    var button = document.createElement("button");
    var button_Node = document.createTextNode("");
    button.innerHTML = "<i class='fa fa-pencil-square' aria-hidden='true'></i>"
    button.setAttribute("onclick", "editItem(this)");
    button.setAttribute("class", "edit_btn")
    var dlt_Button = document.createElement("button");
    dlt_Button.innerHTML = "<i class='fa fa-trash 'aria-hidden='true'></i>"
    var dlt_Node = document.createTextNode("");
    dlt_Button.setAttribute("onclick", "deleteitem(this)");
    dlt_Button.setAttribute("class", "edit_btn")

    dlt_Button.appendChild(dlt_Node);
    var text_Node = document.createTextNode(todo_Item + " ");
    var time_Node = document.createTextNode(time);
    button.appendChild(button_Node)


    li.appendChild(text_Node);
    li.appendChild(time_Node)
    li.appendChild(button)
    list.appendChild(li)
    li.appendChild(dlt_Button)

    time.value = "";
    todo_Item.value = ""
}


function deleteitem(e) {
    e.parentNode.remove();
}

function editItem(e) {

    var val = e.parentNode.firstChild.nodeValue;
    var edit_Value = prompt("Enter Edit Value", val);
    e.parentNode.firstChild.nodeValue = edit_Value;
}