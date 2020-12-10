function submit(){
    
    let price = "123456.7890";
    //let value = price.toString();
    //let value = price.toFixed(2);
    //let value = Number(price);
    //let value = parseInt(price);
    let value = parseFloat(price);


    document.getElementById("demo1").innerHTML = value;
}