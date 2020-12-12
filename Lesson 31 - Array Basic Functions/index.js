function submit(){
    
    let names = ["John", "Jane", "Fahad", "Monica", "Sherlock"];
    let scores = [35, 90, 77, 80];
    
    let lang = "JavaScript";
    let arrLang = Array.from(lang);

    for (let i = 0; i < arrLang.length; i++){
        console.log(arrLang[i]);
    }

    document.getElementById("demo1").innerHTML = names.join("*");
}