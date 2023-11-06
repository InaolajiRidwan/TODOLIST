
    

function addup() {
    var display = document.getElementById('inp');
    var todoCon = document.getElementById('todocon');
    var buttonAdd = document.getElementById('bnt1');
  
    var paragraph = document.createElement('li');

        
   
    paragraph.innerHTML = display.value;
    todoCon.appendChild(paragraph);


    paragraph.setAttribute('id','li');

    

    var button = document.createElement('button');
    var buttonContent = document.createTextNode('str');
    button.appendChild(buttonContent);
    paragraph.appendChild(button);

    button.setAttribute('id','btnn');






    button.onclick = function () {
        paragraph.style.textDecoration="line-through"
    }

    var buttondelete = document.createElement('button');
    var buttonDContent = document.createTextNode('del');
    buttondelete.appendChild(buttonDContent);
    paragraph.appendChild(buttondelete);

    buttondelete.onclick = function () {
        todoCon.removeChild(paragraph);
    }

    buttondelete.setAttribute('id','btnn2')

    if (!buttonAdd && !display.value) {
        todoCon.style.display="none";
        paragraph.style.display="none"
    }
    else {
        todoCon.style.display="block"; 
        display.value = '';
           
    }

    localStorage.setItem("local", );
    
}

localStorage.getItem("local");


function changecolor() {
    document.getElementById('changeC').style.backgroundColor='blue';
    document.getElementById('mn').style.display="none"
    document.getElementById('su').style.display="block";
}

function sun() {
    document.getElementById('changeC').style.backgroundColor='grey';
    document.getElementById('mn').style.display="block"
    document.getElementById('su').style.display="none";
}


// var Nums = [4,2,6,3];
// Nums.map(function(num){console.log(num+2)});

// var newArray = Nums.filter(function(Nums){return Nums<5});
// console.log(newArray);

// var newExis = newArray.filter(function(newArray){return newArray < 3})
// console.log (newExis);

// var forEvery = [1,2,3,4,5,6,7];
// var newForEvery = forEvery.forEach(function(forEvery){console.log(forEvery+3)});

// newArray.filter(function(newForEvery));

// var dateObject = new Date();
// console.log(dateObject.getFullYear());

// console.log(dateObject.getTime());

















// function dd() {

//     arrayName.push(input.value);
//     console.log(arrayName);
//     display.innerHTML = arrayName;
//     localStorage.setItem("arraydisplay",arrayName);
// }

// display.innerHTML = (localStorage.getItem("arraydisplay"));







