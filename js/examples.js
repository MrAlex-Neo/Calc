let name = prompt('Ваше имя:')
let age = +prompt('Укажите ваш возраст:')
let gender = prompt('Укажите ваш пол (man/woman)')
let es = prompt("Введите наименование задачи: arith (среднее арифметическое), degree(возвести число в степень), percent(%). Если вы просто хотите воспользоваться калькулятором, то введите ниже арифметическое действие (+, -, *, /). Если вы хотите сгенерировать случайный пароль(random), то тогда впишите в поле для ввода первого числа слово password, а в поле для второго числа укажите из скольки чисел должен будет состоять пароль")
let a = Number(prompt('Первое число:'))
let b = Number(prompt('Второе число:'))
let answer
let message
let myAge = 29
let meet

// if (es == "amount") {
//     answer = a + b
//     message = `Ваш ответ: ${answer}!`
// } else {
//     if (es == "arith") {
//         answer = (a + b) / 2
//         message = `Ваш ответ: ${answer}!`
//     } else {
//         if (es == "+") {
//             answer = a + b
//             message = `Ваш ответ: ${answer}!`      
//         } else {
//             if (es == "-") {
//                 answer = a - b
//                 message = `Ваш ответ: ${answer}!`  
//             } else {
//                 if (es == "*") {
//                     answer = a * b
//                     message = `Ваш ответ: ${answer}!` 
//                 } else {
//                     if (es == "/") {
//                         answer = a / b
//                         message = `Ваш ответ: ${answer}!` 
//                     } else {
//                         if (es == "percent") {
//                             answer = (a / 100) * b
//                             message = `Ваш ответ: ${answer}%!` 
//                         } else {
//                             if (es == "degree") {
//                                 answer = a ** b
//                                 message = `Ваш ответ: ${answer}!` 
//                             } else {
//                                 message = "Ошибка ввода!"
//                             }
                            
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


switch (es){
    case 'arith':
        answer = (a + b) / 2
        message = `Ваш ответ: ${answer}!`
        break;
    case 'degree':
        answer = Math.pow(a,b)
        message = `Ваш ответ: ${answer}!`
        break;
    case 'percent':
        answer = (a / 100) * b
        message = `Ваш ответ: ${answer}!`
        break;
    case '+':
        answer = a + b
        message = `Ваш ответ: ${answer}!`
        break;
    case '-':
        answer = a - b
        message = `Ваш ответ: ${answer}!`
        break;
    case '*':
        answer = a * b
        message = `Ваш ответ: ${answer}!`
        break;
    case '/':
        answer = a / b
        message = `Ваш ответ: ${answer}!`
        break;
    case 'random':
        a = 'password'
        answer = Math.random()
        b = Math.pow(10,b)
        answer = answer * b
        answer = Math.trunc(answer)
        message = `Ваш ответ: ${answer}!`
        break;
    case false:
        message = "Ошибка ввода!"
        break; 
}
message = `Ваш ответ: ${answer}!`

if (age <= myAge && gender == "man") {
    meet = `Привет, ${name}! ${message}`
} else {
    if ((age > myAge && gender == "man") || (age >= myAge && gender == "woman")) {
        meet = `Здравствуйте, ${name}! ${message}`
    } else {
        meet = `Здравствуйте, ${name}! ${message}`
        if (age < 18  && gender == "woman") {
        } else {
            if (age < myAge && gender == "woman") {
                meet = `Привет, ${name}! ${message}    А ваши родители кондитеры? Если нет, то откуда у них тогда взялся такой сладкий пирожочек?) Ну а если серьезно, то нам лучше прододжить наше общение лично. Записывай мой номер, детка: +998900183395 `
            } else {
                meet = "Ошибка ввода!"
            }   
        }   
    } 
}
alert(meet)


const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = C.width = innerWidth,
  H = C.height = innerHeight
  
const str = "101010 111 000 101 010 110 001 01010 0101001 10011110 010 010100001 10 10 01",
  matrix = str.split('')
  
let font = 11,
  // количество колонок = ширина холста / размер шрифта
  col = W / font
  arr = []
  
for(let i = 0; i < col; i++) arr[i] = 1

function draw() {
  // определяем цвет фона
  // полупрозрачный цвет позволяет добиться эффекта постепенного затухания символов
  $.fillStyle = "rgba(0, 0, 0, .05)"

  // заливаем холст выбранный цветом
  $.fillRect(0, 0, W, H)

  // меняем цвет для шрифта
  $.fillStyle = "#0f0"

  // устанавливаем параметры шрифта
  $.font = font + "px system-ui"

  // рисуем символы
  for (let i = 0; i < arr.length; i++) {
    // выбираем случайный набор символов
    let txt = matrix[Math.floor(Math.random() * matrix.length)]

    // рисуем символы
    // двигаемся вправо и вниз
    // fillText(набор символов, координата x = значение i, умноженное на размер шрифта, координата y = значение arr, умноженное на размер шрифта)
    $.fillText(txt, i * font, arr[i] * font)
    
    // если "y" больше высоты холста или Math.random() выдает больше 0.975 (чем это значение меньше, тем больше будет пустот на экране), то поднимаемся наверх (обнуляем "y")
    // это позволяет обеспечить разницу отрисовки отдельных колонок
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0
    
    // увеличиваем значение y
    arr[i]++
    }
}

setInterval(draw, 123)

window.addEventListener('resize', () => location.reload())
