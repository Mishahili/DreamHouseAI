// DreamHouse AI v3.0
// 2D Builder Engine


let currentMode = "wall";


let gridSize = 10;


let map = [];



let house = {

    size:0,
    rooms:[],
    furniture:[],
    style:"Современный",
    price:0

};




// создание карты

function createGrid(){


    let grid=document.getElementById("grid");


    if(!grid) return;


    grid.innerHTML="";


    map=[];



    for(let y=0;y<gridSize;y++){


        map[y]=[];


        for(let x=0;x<gridSize;x++){


            map[y][x]="";


            let cell=document.createElement("div");


            cell.className="cell";


            cell.dataset.x=x;

            cell.dataset.y=y;



            cell.onclick=function(){

                build(
                    x,
                    y,
                    cell
                );

            };



            grid.appendChild(cell);


        }


    }



}





// выбор инструмента


function setMode(mode){


    currentMode=mode;


    alert(
    "Выбран режим: "+mode
    );


}





// строительство


function build(x,y,cell){



let symbol="";

let cost=0;




switch(currentMode){



case "wall":

symbol="🧱";

cost=500;

break;



case "door":

symbol="🚪";

cost=2000;

break;



case "window":

symbol="🪟";

cost=3000;

break;



case "sofa":

symbol="🛋";

cost=5000;

break;



case "bed":

symbol="🛏";

cost=7000;

break;



case "tree":

symbol="🌳";

cost=1000;

break;



}



map[y][x]=symbol;


cell.innerHTML=symbol;


house.price+=cost;


updatePrice();



}





// цена


function updatePrice(){


let price=document.getElementById("price");


if(price){

price.innerHTML=
house.price.toLocaleString()+" $";

}


}





// старые функции дома



function createHouse(size){


house.size=size;


house.price=size*2000;


updatePrice();


}





function addRoom(room){


house.rooms.push(room);


house.price+=50000;


updatePrice();


}





function addFurniture(item){


house.furniture.push(item);


house.price+=5000;


updatePrice();


}







// AI дизайн



function generateDesign(){


let style=document.getElementById("style").value;



let text="";



if(style==="Современный"){


text=
`
🏠 Современный дом:

• Панорамные окна
• Большая кухня-гостиная
• Умный дом
• Минимализм
• Светлый интерьер

`;

}



if(style==="Классический"){


text=
`
🏛 Классический дом:

• Дерево
• Камень
• Библиотека
• Камин
• Большие комнаты

`;

}



if(style==="Люкс"){


text=
`
💎 Люкс:

• Мрамор
• SPA
• Кинотеатр
• Бассейн
• Лифт

`;

}



document.getElementById("aiResult").innerHTML=text;


}





// сохранение


function saveProject(){



let data={

house:house,

map:map

};



localStorage.setItem(

"DreamHouseAI",

JSON.stringify(data)

);



alert(
"Дом сохранён"
);



}







// загрузка



function loadProject(){



let data=

JSON.parse(

localStorage.getItem(

"DreamHouseAI"

)

);



if(!data){

alert(
"Сохранений нет"
);

return;

}



house=data.house;


map=data.map;



loadMap();



updatePrice();



}





function loadMap(){


let cells=document.querySelectorAll(".cell");


cells.forEach(cell=>{


let x=cell.dataset.x;

let y=cell.dataset.y;


cell.innerHTML=

map[y][x];


});


}






window.onload=function(){


createGrid();


let saved=

localStorage.getItem(

"DreamHouseAI"

);



if(saved){


let data=

JSON.parse(saved);



house=data.house;


map=data.map;



loadMap();


updatePrice();


}



};
