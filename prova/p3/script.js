function mudarCor(){
    let i = document.getElementById('inpu')
    let b = document.getElementById('bot')


    i.innerHTML = `<p>
    Cor (Hexadecimal)<input type="text" name="hex" id="cor">
</p>`
    b.innerHTML = `<p><button onclick="mudarCor()">MUDAR</button></p>`

    let corFundo = document.getElementById("cor")

    document.body.style.backgroundColor = `${cor}`
    }
        
