function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

const task = [];
const AddTask =() =>{
    const name = document.getElementById("name").value;

    const tempObj = {
        id:Date.now(),
        itemName:name
    }
    
    task.push(tempObj);
    console.log(task);
    taskOnScreen();

}
function taskOnScreen(){
    
    const element = document.createElement("div");
    element.setAttribute("class","cards");    

    element.innerText = task[task.length-1].itemName;
    const existingElement = document.getElementById
    ("flex-cards");
    existingElement.appendChild(element); 
    existingElement.style.display = 'cover'
    
    const hr_line = document.createElement("hr");
    element.appendChild(hr_line);
    hr_line.style.margin = '1px'

    const ultag = document.createElement("ul");
    element.appendChild(ultag);

    const add = document.createElement("img");
    add.setAttribute("src","add_btn.jpg")
    add.classList.add("add_btn");
    element.appendChild(add);
    add.setAttribute("onclick", "addCard()");


    const dlt = document.createElement("img");
    dlt.setAttribute("src","dlt_btn.png")
    dlt.classList.add("dlt_btn");
    element.appendChild(dlt);
    dlt.setAttribute("onclick","dltCard(this)");

    //add new items
    document.getElementById('addbtn').addEventListener('click',
    function(){
    const secondinput = document.getElementById('name1').value;
    document.getElementById("name1").value = "";

    //create element
    const addsbtn = document.createElement('li');
    const donebtn = document.createElement('button');
    addsbtn.innerText = secondinput;
    addsbtn.style.color="#6dd17c";
    addsbtn.style.fontSize="15px";
    const ul = document.querySelector('ul');

    //appending created element
    ul.appendChild(addsbtn);
    ultag.appendChild(addsbtn);
    ultag.appendChild(donebtn);
    donebtn.setAttribute("id","mrk_done");
    donebtn.innerText = "Mark Done";
    donebtn.addEventListener('click',
    function(){
        addsbtn.style.textDecoration = "line-through";
      });
    });
}
  //delete card
  let dltCard = (e) => {
    e.parentElement.remove();
    const noCards = document.getElementsByClassName("cards").length;
    if(!noCards){
        $("#text-empty").show();
    }
  };
 function addCard(){
    var popup1 = document.getElementById("popup1");
    popup1.classList.toggle('active1');
 } 

function closeTask(){
    popup1.classList.remove('active1');
}
    


