function submit() {
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 77, 80];

    scores.forEach((value, index, scores) => scores[index] = value*10);
    scores.forEach((value, index) => console.log(value + "-" + index));

    document.getElementById("demo1").innerHTML = "";
}