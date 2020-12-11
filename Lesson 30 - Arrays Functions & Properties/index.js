function submit(){
    
    let names = ["John", "Jane", "Fahad", "Monica"];
    let scores = [35, 90, 77, 80];

    let student1 = new Student("John", 35);
    let student2 = new Student("Jane", 90);
    let student3 = new Student("Fahad", 77);
    let student4 = new Student("Monica", 80);

    let students = [student1, student2, student3, student4];

    document.getElementById("demo1").innerHTML
        = students[1].name + " has scored " + students[1].score;
}
class Student{
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}