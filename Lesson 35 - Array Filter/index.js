function submit() {
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 50, 80];
    
    let goodScores = scores.map((value) => value = value + 3);
    goodScores.forEach((value) => console.log(value));

    console.log("----------------");

    let awesomeScores = scores.filter((value) => value > 75);
    awesomeScores.forEach((value) => console.log(value));

    document.getElementById("demo1").innerHTML = "";
}