function submit(){
    
    let names = ["John", "Jane", "Fahad", "Monica"];
    let scores = [35, 90, 77, 80];

    scores[1] = 50;

    document.getElementById("demo1").innerHTML = scores[1];
}