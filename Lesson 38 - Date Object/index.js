function submit() {
  
    let myBirthday = new Date("December 08 1988");
    myBirthday.setFullYear(1989);
    document.getElementById("demo1").innerHTML = myBirthday.toDateString();
}