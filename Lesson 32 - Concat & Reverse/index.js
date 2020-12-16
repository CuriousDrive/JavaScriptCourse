function submit(){
    
    let names1 = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 77, 80];
    let names2 = ["Bill", "Steve", "Satya"];

    let finalList = names1.concat(names2);
    finalList = finalList.reverse();

    for (let i = 0; i < finalList.length; i++){
        console.log(finalList[i]);
    }

    document.getElementById("demo1").innerHTML = finalList.indexOf("Sherlock");
}