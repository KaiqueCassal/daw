function convert(){
    let maior = parseFloat(document.getElementById("bMaior").value)
    let menor = parseFloat(document.getElementById("bMenor").value)
    let alt = parseFloat(document.getElementById("alt").value)
    let r = document.getElementById('result')

    
    let a = ((maior+ menor) * alt)/2


    r.innerHTML = `<p>Resultado: ${a}</p>`
    }
        
