function submit(){
    
    let student1 = new Student("John", "Smith", 20, "B");
    document.getElementById("demo1").innerHTML = student1.showGrades();
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