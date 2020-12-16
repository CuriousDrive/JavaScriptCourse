function submit(){
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 77, 80];

    //let results = names.slice(2, 5);
    names.splice(2, 3, "Bill", "Steve", "Satya");

    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
    }

    document.getElementById("demo1").innerHTML = "";
}