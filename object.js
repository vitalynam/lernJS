// Задачи из первой страницы Объекты

/*  Задача №1
Напишите код, выполнив задание из каждого пункта отдельной строкой:
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

console.log('ЗАДАЧА 1: Напишите код, выполнив задание из каждого пункта отдельной строкой:Создайте пустой объект user.Добавьте свойство name со значением John.Добавьте свойство surname со значением Smith.Измените значение свойства name на Pete.Удалите свойство name из объекта.');
const user = {};
user.name = 'John';
user.surname = 'Smith';

console.log('user', user);

user.name = 'Pete'
console.log('user', user);

delete user.name;
console.log('user', user);

/*  Задача №2
    Напишите функцию isEmpty(obj), которая возвращает true, 
    если у объекта нет свойств, иначе false.
*/
console.log("");
console.log('ЗАДАЧА 2: Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.');
let schedule = {
    uuuu: "lllll"
};
let scheduleTwo = {};

function isEmpty (obj){
    if(Object.keys(obj).length === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log('Не пустой', isEmpty(schedule))
console.log('Пустой ', isEmpty(scheduleTwo))


/*  Задача №3
    У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/
console.log("");
console.log('ЗАДАЧА 3: Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.Если объект salaries пуст, то результат должен быть 0.');

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let emptySalaries = {};

function getSum (obj) {
    let sum = 0;
    if(Object.keys(obj).length !== 0){
        for(key in obj){
            sum += obj[key];
        }
    }
    return sum;
}
console.log('Зарплата всех сотрудников', getSum(salaries));
console.log('Сотрудников нет', getSum(emptySalaries));

/*  Задача №4
Создайте функцию multiplyNumeric(obj), 
которая умножает все числовые свойства объекта obj на 2.
Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать.
 Следует напрямую изменять объект.
*/

console.log("");
console.log('ЗАДАЧА 4: создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.');

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    for(key in obj){
        if (typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(menu))