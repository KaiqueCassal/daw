function convert(){
    let cel = document.getElementById("c")
    let r = document.getElementById('result')

    if (cel==null){
        alert('<ERRO>\nVerifique se colocou a temperatura')
    } else {
        let fah = cel.value * 1.8 + 32
        let kel = cel.value + 273.15

        r.innerHTML = `<p>Graus Fahrenheit: ${fah} °F</p> \n
        <p>Graus Kelvin: ${kel} K</p>`
    }
        
}