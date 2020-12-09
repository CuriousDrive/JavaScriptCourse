function submit(){
    
    let sentence = "John goes to school everyday";
    //let value = sentence.length;
    //let value = sentence.toUpperCase();
    //let value = sentence.toLowerCase();
    //let value = sentence.replace("John", "Jane");
    //let value = sentence.includes("School");
    let value = sentence.startsWith("John");

    document.getElementById("demo1").innerHTML = value;
}