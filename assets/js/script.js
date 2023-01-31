const item=document.getElementById('item');
const oneliner=document.getElementById('oneliner');
const img=document.getElementById('img');
const hotel=document.getElementById('hotel');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

const menuitems=[
{
    id:1,
    item:'mobile1',
    oneliner:'mobile with earphones',
    img:'assets/images/mobile1.jpg',
    hotel:'mobile name1',
    desc:'one:here mobile with earphones'
},

{
    id:2,
    item:'mobile2',
    oneliner:'a lady using mobile',
    img:'assets/images/mobile2.jpg',
    hotel:'mobile name2',
    desc:'two:here a lady using mobile enjoying by listening songs'
},

{
    id:3,
    item:'mobile3',
    oneliner:'taking picture',
    img:'assets/images/mobile3.jpg',
    hotel:'mobile name3',
    desc:'three:here a person taking picture of a beautiful nature view'
},

{
    id:4,
    item:'mobile4',
    oneliner:'using mobile',
    img:'assets/images/mobile4.jpg',
    hotel:'mobile name4',
    desc:'four:here a boy using mobile and he enjoying by using mobile and listening songs'
},

{
    id:5,
    item:'mobile5',
    oneliner:'searching something',
    img:'assets/images/mobile5.jpg',
    hotel:'mobile name5',
    desc:'five: a men using mobile and he is searching something on it'
},

{
    id:6,
    item:'mobile6',
    oneliner:'its a different view 6',
    img:'assets/images/mobile6.jpg',
    hotel:'mobile name 6',
    desc:'six:its a different mobile 6'
},

{
    id:7,
    item:'mobile7',
    oneliner:'its a different view 7',
    img:'assets/images/mobile7.jpg',
    hotel:'mobile name7',
    desc:'seven:its a different mobile 7'
},

{
    id:8,
    item:'mobile8',
    oneliner:'its a different view 8',
    img:'assets/images/mobile8.jpg',
    hotel:'mobile name8',
    desc:'eight:its a different mobile 8'
},

{
    id:9,
    item:'mobile9',
    oneliner:'its a different view 9',
    img:'assets/images/mobile9.jpg',
    hotel:'mobile name9',
    desc:'nine:its a different mobile 9'
},

{
    id:10,
    item:'mobile 10',
    oneliner:'mobile with pizzas',
    img:'assets/images/mobile10.jpg',
    hotel:'mobile name 10',
    desc:'ten:here mobile taking pizza pictures'
},



]

let currentmenu=0;

const allmenu = () =>{
    let menu=menuitems[currentmenu]
    item.textContent=menu.item;
    oneliner.textContent=menu.oneliner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc;
}

// random
random.addEventListener('click',()=>{
    currentmenu=Math.floor(Math.random()*menuitems.length)
    //console.log(currentmenu)
    allmenu(currentmenu);
})

//previous button
prev.addEventListener('click',()=>{
    currentmenu--;
    if(currentmenu<0){
        currentmenu=menuitems.length-1;

    }
    allmenu(currentmenu);
})

//next button

next.addEventListener('click',()=>{
    currentmenu++;
    if(currentmenu>menuitems.length-1){
        currentmenu=0;
    }
    allmenu(currentmenu);
});

window.addEventListener('DOMContentLoaded',()=>{
    allmenu(currentmenu);
});






