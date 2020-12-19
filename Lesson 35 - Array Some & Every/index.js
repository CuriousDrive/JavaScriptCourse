function submit() {
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 50, 80];
    
    let awesomeScores = scores.filter((value) => value > 75);
    awesomeScores.forEach((value) => console.log(value));

    console.log("-----------------");

    document.getElementById("demo1").innerHTML = "";
}