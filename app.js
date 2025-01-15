
const cards = document.querySelector('#card')
const card = [
    {
        Image: './img/image 18.png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: '101  красная роза',
        price: '2280',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (1).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: '25 розовых пионовидных роз',
        price: '1680',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (2).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Влюбленность',
        price: '1270',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (3).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Корзина все для тебя',
        price: '2020',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
   
    {
        Image: './img/image 18.png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: '101  красная роза',
        price: '2280',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (1).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: '25 розовых пионовидных роз',
        price: '1680',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (2).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Влюбленность',
        price: '1270',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (3).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Корзина все для тебя',
        price: '2020',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
   
]
card.forEach((card) => {
    const newdiv = document.createElement('div')
    newdiv.innerHTML = `
    <div class="w-[340px] h-[544px] rounded-[3px] pl-[10px] pr-[10px] justify-center flex flex-wrap shadow-2xl items-center border-[1px] border-[#956D84]">
             <div class="w-[340px] h-[304px] bg-[#FBF9FA] justify-center items-center flex relative ">
                <img src="${card.Image}" alt="" >
                <img src="${card.Image2}" alt="" class='absolute right-[13px] bottom-[27px]'>
                <img src="${card.Image3}" alt="" class='absolute top-[33px] right-[24px]'>
                <img src="${card.Image4}" alt="" class='absolute top-[6px] left-[20px]' >
             </div>
                     <div class='flex  mt-[14px] w-[100%]'>
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                     </div>
                     <div class='flex justify-between items-center h-[28px] w-[310px] mt-[12px] leading-[20px]'>
                        <h1 class='w-[144px] h-[27px] text-[18px] font-[200]'>${card.text}</h1>
                        <ul class='text-[18px] font-bold items-center  mt-[20px]'><li class='text-[#BDBDBD] font-[300] line-through	'>2800 грн</li>
                        <ul><li class='text-[#956D84]'>${card.price} грн</li>
                        </ul>
                     </div>
                     <button class='w-[220px] h-[65px] m-auto mt-[35px] bg-[#956D84] rounded-[7px] text-[17px] font-[700] text-white'>${card.btnText}</button>
                     <a href="">
                        <h3 class='mt-[12px] text-[17px] mb-[15px] font-[400] text-[#828282] underline'>${card.buy}</h3>
                     </a>
                    </div>
    `
   cards.appendChild(newdiv)
})
const cardTwo = document.querySelector('#cardTwo')
const cardT = [
    {
        Image: './img/image 18 (4).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Мечтательница',
        price: '2280',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (5).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Корзина солнечного настроения',
        price: '1680',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (6).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        textprice: '101 ',
        text: 'Цветочная клумба',
        price: '1270',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (7).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        textprice: '101 ',
        text: 'Конзина Дюймовочка',
        price: '2020',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (4).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Мечтательница',
        price: '2280',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (5).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Корзина солнечного настроения',
        price: '1680',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (6).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        textprice: '101 ',
        text: 'Цветочная клумба',
        price: '1270',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (7).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        textprice: '101 ',
        text: 'Конзина Дюймовочка',
        price: '2020',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
   
]
cardT.forEach((card) => {
    const newdivT = document.createElement('div')
    newdivT.innerHTML = `
             <div class="w-[340px] h-[544px] rounded-[3px] pl-[10px] pr-[10px] justify-center flex flex-wrap shadow-2xl items-center border-[1px] border-[#956D84]">
             <div class="w-[340px] h-[304px] bg-[#FBF9FA] justify-center items-center flex relative ">
                <img src="${card.Image}" alt="" >
                <img src="${card.Image2}" alt="" class='absolute right-[13px] bottom-[27px]'>
                <img src="${card.Image3}" alt="" class='absolute top-[33px] right-[24px]'>
                <img src="${card.Image4}" alt="" class='absolute top-[6px] left-[20px]' >
             </div>
                     <div class='flex  mt-[14px] w-[100%]'>
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                     </div>
                     <div class='flex justify-between items-center h-[28px] w-[310px] mt-[12px] leading-[20px]'>
                        <h1 class='w-[144px] h-[27px] text-[18px] font-[200]'>${card.text}</h1>
                        <ul class='text-[18px] font-bold items-center'>
                        <ul><li class='text-[#956D84]'>${card.price} грн</li>
                        </ul>
                     </div>
                     <button class='w-[220px] h-[65px] m-auto mt-[35px] bg-[#956D84] rounded-[7px] text-[17px] font-[700] text-white'>${card.btnText}</button>
                     <a href="">
                        <h3 class='mt-[12px] text-[17px] mb-[15px] font-[400] text-[#828282] underline'>${card.buy}</h3>
                     </a>
                    </div>
    `
   cardTwo.appendChild(newdivT)
})
// section5
const cardTree = document.querySelector('#cardTree')
const cardTe = [
    {
        Image: './img/image 18 (8).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Торт Наполеон',
        price: '2280',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (9).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Киевский торт',
        price: '1680',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (10).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        textprice: '101 ',
        text: 'Торт Левантинер',
        price: '1270',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (11).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        textprice: '101 ',
        text: 'Торт на день рождения',
        price: '2020',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (8).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Торт Наполеон',
        price: '2280',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (9).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        text: 'Киевский торт',
        price: '1680',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (10).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        textprice: '101 ',
        text: 'Торт Левантинер',
        price: '1270',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
    {
        Image: './img/image 18 (11).png',
        Image2: './img/top.png',
        Image3: './img/Frame 47.svg',
        Image4: './img/sale.svg',
        Image5: './img/Star 5.svg',
        textprice: '101 ',
        text: 'Торт на день рождения',
        price: '2020',
        btnText: 'Заказать',
        buy:'Быстрый заказ'
    },
 
   
]
cardTe.forEach((card) => {
    const newdivTe = document.createElement('div')
    newdivTe.innerHTML = `
             <div class="w-[340px] h-[544px] rounded-[3px] pl-[10px] pr-[10px] justify-center flex flex-wrap shadow-2xl items-center border-[1px] border-[#956D84]">
             <div class="w-[340px] h-[304px] bg-[#FBF9FA] justify-center items-center flex relative ">
                <img src="${card.Image}" alt="" >
                <img src="${card.Image2}" alt="" class='absolute right-[13px] bottom-[27px]'>
                <img src="${card.Image3}" alt="" class='absolute top-[33px] right-[24px]'>
                <img src="${card.Image4}" alt="" class='absolute top-[6px] left-[20px]' >
             </div>
                     <div class='flex  mt-[14px] w-[100%]'>
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                        <img src="${card.Image5}" alt="">
                     </div>
                     <div class='flex justify-between items-center h-[28px] w-[310px] mt-[12px] leading-[20px]'>
                        <h1 class='w-[144px] h-[27px] text-[18px] font-[200]'>${card.text}</h1>
                        <ul class='text-[18px] font-bold items-center'>
                        <ul><li class='text-[#956D84]'>${card.price} грн</li>
                        </ul>
                     </div>
                     <button class='w-[220px] h-[65px] m-auto mt-[35px] bg-[#956D84] rounded-[7px] text-[17px] font-[700] text-white'>${card.btnText}</button>
                     <a href="">
                        <h3 class='mt-[12px] text-[17px] mb-[15px] font-[400] text-[#828282] underline'>${card.buy}</h3>
                     </a>
                    </div>
    `
   cardTree.appendChild(newdivTe)
})

const carouselItems = [
    {
        img: './img/devka1.png',
        title: 'Какие цветы под запретом: что нельзя дарить',
        description: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    {
        img: './img/devk2.png',
        title: 'Как сохранить букет свежим: советы и рекомендации',
        description: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    {
        img: './img/devka3.png',
        title: 'Цветочный этикет - как правильно дарить цветы',
        description: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    {
        img: './img/devka1.png',
        title: 'Какие цветы под запретом: что нельзя дарить',
        description: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    {
        img: './img/devk2.png',
        title: 'Как сохранить букет свежим: советы и рекомендации',
        description: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    {
        img: './img/devka3.png',
        title: 'Цветочный этикет - как правильно дарить цветы',
        description: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    
    {
        img: './img/devka1.png',
        title: 'Какие цветы под запретом: что нельзя дарить',
        description: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    {
        img: './img/devk2.png',
        title: 'Как сохранить букет свежим: советы и рекомендации',
        description: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    {
        img: './img/devka3.png',
        title: 'Цветочный этикет - как правильно дарить цветы',
        description: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    

    
];

const carousel = document.getElementById('carousel');

// Populate carousel with items
carouselItems.forEach(item => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item p-4 ';
    carouselItem.innerHTML = `
        <div class="rounded w-[464px] h-[540px] shadow-2xl overflow-hidden ">
        <div class='flex'>
        <div class="h-[221px] w-full bg-[#956D84] mt-[147px] "></div>
        <img src="${item.img}" alt="" class=" mt-[20px]  w-[412px]  h-[348px]">
        <div class="h-[221px] w-full bg-[#956D84] mt-[147px] "></div>
        </div>
            <div class="p-4  w-[464px] h-[171px] bg-[#956D84]">
                <h3 class="text-lg mt-[29px] font-semibold">${item.title}</h3>
                <p class="text-sm text-gray-700">${item.description}</p>
            </div>
        </div>
    `;
    carousel.appendChild(carouselItem);
});

let index = 0;

function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

document.getElementById('prev').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : carouselItems.length - 1;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    index = (index < carouselItems.length - 1) ? index + 1 : 0;
    updateCarousel();
});

updateCarousel();

