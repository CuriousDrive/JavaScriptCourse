function submit() {
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 50, 80];
    
    let awesomeScores = scores.filter((value) => value > 75);
    awesomeScores.forEach((value) => console.log(value));

    console.log("-----------------");

    //console.log(scores.some((value) => value > 75));

    console.log(scores.every((value) => value > 15));

    document.getElementById("demo1").innerHTML = "";
}