function submit() {
  
    let myBirthday = new Date("12/08/1988");
    let ageDiffM = Date.now() - myBirthday.getTime();
    let ageDate = new Date(ageDiffM);
    document.getElementById("demo1").innerHTML = ageDate.getFullYear() - 1970;
}