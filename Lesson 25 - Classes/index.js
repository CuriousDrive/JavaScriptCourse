function submit(){
    
    let student1 = new Student("John", "Smith", 20, "B");

    let student2 = new Student();
    student2.firstName = "Jane";
    student2.lastName = "Doe";
    student2.age = 20;
    student2.grades = "A+";

    document.getElementById("demo1").innerHTML = student2.firstName;
}

class Student{
    constructor(firstName, lastName, age, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grades = grades;
    }
}