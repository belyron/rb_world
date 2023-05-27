window.onload = function() {
    updateSliderItem()
}

const members = [
    {
        name: 'Акбота (Бота, белирон)', 
        role: 'Main rapper', 
        description: 'Меня зовут Акбота, BDA-2207. Занималась танцами 5-6 лет. Сейчас учу хореографии сама, в основном к поп.',
        image: 'bota.jpg'
    },
    {
        name: 'Маку (Мади Макауиа)', 
        role: 'Ген директор', 
        description: 'Меня зовут Мадияр, можете звать меня Маку или Мади. Занимаюсь танцами 2 года. Группа SE-2112.',
        image: 'maku.jpg'
    },
    {
        name: 'Маку2 (Мади Макауиа)', 
        role: 'main dancer', 
        description: 'Меня зовут Мадияр, можете звать меня Маку или Мади. Занимаюсь танцами 2 года. Группа SE-2112.',
        image: 'maku.jpg'
    },
    {
        name: 'Маку3 (Мади Макауиа)', 
        role: 'lead rapper, lead vocalist', 
        description: 'Меня зовут Мадияр, можете звать меня Маку или Мади. Занимаюсь танцами 2 года. Группа SE-2112.',
        image: 'maku.jpg'
    },
    {
        name: 'Макu4 (Мади Макауиа)', 
        role: 'makne', 
        description: 'Меня зовут Мадияр, можете звать меня Маку или Мади. Занимаюсь танцами 2 года. Группа SE-2112.',
        image: 'maku.jpg'
    },
    {
        name: 'Маку5 (Мади Макауиа)', 
        role: 'Center', 
        description: 'Меня зовут Мадияр, можете звать меня Маку или Мади. Занимаюсь танцами 2 года. Группа SE-2112.',
        image: 'maku.jpg'
    },
]

const slider_prevButton = document.querySelector('.slider-buttons .prev')
const slider_nextButton = document.querySelector('.slider-buttons .next')

let slider_number = 0
const max_slider_number = members.length

slider_prevButton.addEventListener('click', () => {
    if (slider_number - 1 < 0) slider_number = max_slider_number - 1
    else slider_number = slider_number - 1

    updateSliderItem()
})

slider_nextButton.addEventListener('click', () => {
    if (slider_number + 1 >= max_slider_number) slider_number = 0
    else slider_number = slider_number + 1

    updateSliderItem()
})

function updateSliderItem () {

    const image = document.querySelector('.slider-item img')
    const name = document.querySelector('.slider-item .name')
    const role = document.querySelector('.slider-item .role')
    const description = document.querySelector('.slider-item .description')

    console.log(slider_number)

    image.src = './src/images/' + members[slider_number].image
    name.innerHTML = members[slider_number].name
    role.innerHTML = members[slider_number].role
    description.innerHTML = members[slider_number].description
}