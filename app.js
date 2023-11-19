function func(e) {
    //console.log(e);
    document.getElementById("inp").value += e
}
function eq() {
    let a = document.getElementById("inp")
    a.value = eval(a.value)
}
function deltall() {
    document.getElementById("inp").value = " "
}
function delt() {
    let d = document.getElementById("inp");
    let f = d.value;
    if (f.length > 0) {
        let newNumber = f.slice(0, -1);
        d.value = newNumber;
    }
}