function submit(){
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 77, 80];

    names.forEach((value,index) => console.log(value + "-" + index));
    scores.forEach((value,index) => console.log(value + "-" + index));

    // for (let i = 0; i < scores.length; i++){
    //     console.log(scores[i]);
    // }

    // for (let i = 0; i < names.length; i++){
    //     console.log(names[i]);
    // }

    document.getElementById("demo1").innerHTML = "";
}
