setInterval(carregar, 1000)
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} min.`
    if (hora >= 6 && hora < 12) {
        document.querySelector('h1').innerHTML = 'BOM DIA'
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        document.querySelector('h1').innerHTML = 'BOA TARDE'
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        document.querySelector('h1').innerHTML = 'BOA NOITE'
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }

}

