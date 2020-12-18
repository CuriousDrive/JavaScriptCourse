function submit() {
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 50, 80];
    
    scores.forEach((value,index,score) => scores[index] = value*100);
    scores.forEach((value) => console.log(value));
    
    document.getElementById("demo1").innerHTML = "";
}