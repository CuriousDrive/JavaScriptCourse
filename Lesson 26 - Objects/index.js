function submit(){
    
    let student1 = new Student("John", "Smith", 20, "B");

    let student2 = new Student();
    student2.firstName = "Jane";
    student2.lastName = "Doe";
    student2.age = 20;
    student2.grades = "A+";

    let motorcycle = {
        type: "Sports",
        color: "Red",
        price: 10000,
        getPrice: function () {
            return this.price * 0.83 + " in Euros";
        }
    }

    motorcycle.price = 7000;

    document.getElementById("demo1").innerHTML = motorcycle.getPrice();
}

class Student{
    constructor(firstName, lastName, age, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grades = grades;
    }

    submitAssignment() {
        return this.firstName + " has submitted the assignment";
    }

    showGrades() {
        return this.grades;
    }
}