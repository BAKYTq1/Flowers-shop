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