const students = [
    {
        name:'Khangai',
        birthOfYear:1982,
        hobby:'karate',
        single: false
    },
    {
        name:'Dulguun',
        birthOfYear:1997,
        hobby:'bodybuilding',
        single: true
    },
    {
        name:'Aldar',
        birthOfYear:1999,
        hobby:'Watch Movie',
        single: true
    }
]

function findOlderStudents (array) {
    for (let i = 0; i < array.length; i++) {
        let age = 2022 - array[i].birthOfYear;
        if(age > 20) {
            console.log(`${array[i].name} ${age} nastai ${array[i].single ? 'single': 'married'}`);
        }
    }
}
findOlderStudents(students); //Khangai, Dulguun