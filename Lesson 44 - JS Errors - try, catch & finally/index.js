function submit() {

    let x = 20;
    //let y = 10;

    try {
        let result = x / y;
        document.getElementById("demo1").innerHTML = result;
    }
    catch {
        alert("something has gone wrong. please contact system admin");
    }
    finally {
        alert("finally is getting called");
    }

}