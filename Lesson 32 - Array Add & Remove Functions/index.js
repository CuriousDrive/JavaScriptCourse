function submit(){
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 77, 80];

    //scores.push(100);
    //let lastNumber = scores.pop();
    //scores.unshift(10);
    let firstNumber = scores.shift();

    for (let i = 0; i < scores.length; i++){
        console.log(scores[i]);
    }

    document.getElementById("demo1").innerHTML = firstNumber;
}