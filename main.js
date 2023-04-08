let userName = document.querySelector('.user__name');
let userInfo = document.querySelectorAll('.user__info-text');
let editForm = document.forms.editForm;
let elements = editForm.elements;
let editBtn = document.querySelector('#editProf');

//Проверка наличия ключа в локальном хранилище
if (localStorage.getItem('htmlLS')) {
    info.inerHTML = localStorage.getItem ('userName')
}

//Клик по кнопке редактировать профиль(при клике на кнопку к форме добавляется класс active)
editBtn.addEventListener('click', function() {
    editForm.classList.add('active');
})

//Клик по кнопке закрыть форму(при клике на кнопку удаляется класс active)
elements.closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    editForm.classList.remove('active');
})

//Клик по кнопке сохранить(при клике на кнопку заполняются данные)
elements.saveBtn.addEventListener('click', (event) => {
    //отмена действия по умолчанию
    event.preventDefault();
    //из поля ввода текста - записать
    userName.textContent = elements.userName.value;
    elements.userName.value = "";
    //Получить имя элемента city
    userInfo[0].textContent = elements.city.value;
    //Получить локацию
    userInfo[1].textContent = elements.learnLocation.value;
    //Запись в локальное хранилище
    localStorage.setItem('htmlLS', info.innerHTML);
    //Сброс всех полей формы к начальным значениям
    editForm.reset();
})

//localStorage.setItem('ключ', 'значение')
localStorage.setItem('Name', 'Ivan')

//localStorage.getItem('ключ')
console.log(localStorage.getItem('Name'))
