// DreamHouse AI v2.0
// Основная логика


let house = {

    size:0,

    rooms:[],

    furniture:[],

    style:"Современный",

    price:0

};





const roomPrices = {

    "Гостиная":50000,

    "Кухня":40000,

    "Спальня":45000,

    "Бассейн":150000,

    "Спортзал":100000

};




const furniturePrices = {

    "🛋":5000,

    "🛏":7000,

    "📺":4000,

    "🖥":3000

};







function createHouse(size){


    house.size=size;


    house.price=size*2000;


    render();


}








function addRoom(room){


    house.rooms.push(room);


    house.price += roomPrices[room];


    render();


}








function addFurniture(item){


    house.furniture.push(item);


    house.price += furniturePrices[item];


    render();


}









function render(){


    let area=document.getElementById("house");


    area.innerHTML="";



    if(house.size){


        let title=document.createElement("h2");

        title.innerHTML=
        "🏠 Дом "+house.size+" м²";


        area.appendChild(title);


    }



    house.rooms.forEach(room=>{


        let div=document.createElement("div");


        div.className="room";


        div.innerHTML=
        "🏠 "+room;


        area.appendChild(div);



    });







    house.furniture.forEach(item=>{


        let div=document.createElement("div");


        div.className="item";


        div.innerHTML=item;


        area.appendChild(div);


    });




    document.getElementById("price").innerHTML=

    house.price.toLocaleString()+" $";


}









function generateDesign(){



    let style=

    document.getElementById("style").value;



    house.style=style;



    let result="";




    if(style==="Современный"){


        result=
        `
        🏠 Современный дизайн:

        • Панорамные окна
        • Минимализм
        • Умный дом
        • Светлые стены
        • Большая кухня-гостиная
        `;


    }





    if(style==="Классический"){


        result=

        `
        🏛 Классический дизайн:

        • Дерево
        • Мрамор
        • Большая библиотека
        • Камин
        • Классическая мебель
        `;


    }







    if(style==="Люкс"){


        result=

        `
        💎 Люкс дизайн:

        • Мраморные полы
        • Домашний кинотеатр
        • Бассейн
        • SPA
        • Золотые детали
        `;


    }



    document.getElementById("aiResult").innerHTML=result;



}









function saveProject(){



    localStorage.setItem(

        "DreamHouseAI",

        JSON.stringify(house)

    );


    alert(

    "🏠 Проект сохранён"

    );


}









function loadProject(){



    let saved=

    localStorage.getItem(

        "DreamHouseAI"

    );



    if(!saved){


        alert(

        "Нет сохранённых домов"

        );


        return;


    }



    house=

    JSON.parse(saved);



    render();



    alert(

    "Дом загружен"

    );



}






// Автозагрузка при открытии сайта

window.onload=function(){


    let saved=

    localStorage.getItem(

    "DreamHouseAI"

    );


    if(saved){


        house=

        JSON.parse(saved);


        render();


    }


};
