function submit() {
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 50, 80];

    let sum = names.reduceRight((prev, curr) => prev + curr);
    
    document.getElementById("demo1").innerHTML = sum;
}