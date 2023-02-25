function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert(`[ERRO] verifique os dados novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 15){
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if ( idade < 21){
                //rapaz
                img.setAttribute('src', 'rapaz.jpg')
            } else if (idade < 60){
                //homem
                img.setAttribute('src', 'homem.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
            
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 15){
                //menina
                img.setAttribute('src', 'menina.jpg')
            } else if ( idade < 21){
                //garota
                img.setAttribute('src', 'garota.jpg')
            } else if (idade < 60){
                //mulher
                img.setAttribute('src', 'mulher.jpg')
            } else{
                //idosa
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        img.style.width = '250px'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}