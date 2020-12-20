function submit() {
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 50, 80];

    names.sort();
    names.reverse();
    names.forEach((value) => console.log(value));
    
    document.getElementById("demo1").innerHTML = "";
}