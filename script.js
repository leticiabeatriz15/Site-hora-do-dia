function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imgs');
    let data = new Date();
    let hora = data.getHours();

    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'manha.jpg'
        document.body.style.background = '#f5a064'
    }else if(hora >=12 && hora < 18){
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`
        img.src = 'tarde.jpg'
        document.body.style.background = '#c96902'
    }else{
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        img.src = 'noite.jpg'
        document.body.style.background = '#1a3357'
    }
}