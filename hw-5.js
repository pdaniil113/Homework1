function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function checkParity(num) {
    if (num % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

function printSquare(num) {
    console.log(num * num);
}

function getSquare(num) {
    return num * num;
}

function checkAge() {
    const userAge = parseInt(prompt('Сколько вам лет?'), 10);


    if (isNaN(userAge)) {
        alert('Вы ввели неправильное значение');
    } else if (userAge >= 0 && userAge <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

checkAge();


function multiplyNumbers(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {

        return num1 * num2;
    }
}


function calculateCube() {
    const userInput = prompt('Введите число:');
    const parsedNumber = parseFloat(userInput);


    if (isNaN(parsedNumber)) {
        return 'Переданный параметр не является числом';
    } else {
        const cubeValue = parsedNumber ** 3;
        return `${parsedNumber} в кубе равняется ${cubeValue}`;
    }
}


const circle1 = {
    radius: 5,


    getArea: function () {
        return Math.PI * this.radius ** 2;
    },


    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};


const circle2 = {
    radius: 8,


    getArea: function () {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};



