let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
    },
        {
        name: 'Индра',
        age: 19,
        gender: "female"
    },
        {
        name: 'Хатнаа ',
        age: 21,
        gender: "male"
    },
        {
        name: 'Тэмүүлэн',
        age: 23,
        gender: "male"
    },
        {
        name: 'Намуун',
        age: 23,
        gender: "female"
    },
]

function findGender (array, studentGender) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].gender == studentGender) {
            temp=temp+1
        }
    }
}

findGender(students, 'male');
findGender(students, 'female');