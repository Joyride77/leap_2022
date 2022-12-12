let teacherDolgor = {
    firstName : 'Dolgor',
    lastName : 'Dondog',
    age : 35,
    experience : 10,
    children: [],
    isMarried : true,
    address : {
        district : 'BGD',
        khoroolol : '2-r',
        khoroo : "1-r",
        houseNumber : '016',
        doorNumber : '4'
    },
    GPA : 94.5,

    introduction : function () {
        console.log(`
        Minii neriig ${this.lastName}-ii ${this.firstName} gedeg. Bi ${this.age} nastai. 
        Bi ${this.experience} jiliin ajiliin turshlagatai. 
        Bi ${this.address.district}-t amidardag.`)
    }
}

teacherDolgor.introduction();

let teacherDolgorClone = teacherDolgor;

teacherDolgorClone.firstName = 'Dolgor Clone';
console.log(teacherDolgor.firstName);
console.log(teacherDolgorClone.firstName);

// Spread operator ...
let teacherDolgorRealClone = {...teacherDolgor};
teacherDolgorRealClone.firstName = 'Dolgor Real Clone';
console.log(teacherDolgorRealClone.firstName); //Dolgor Real Clone
console.log(teacherDolgorClone.firstName); //Dolgor Clone

// console.log(Object.keys(teacherDolgor));
// console.log(Object.values(teacherDolgor));

let newTeacher = Object.create ({
    firstName: 'firstName',
    lastName:'lastName'
});

console.log(newTeacher);