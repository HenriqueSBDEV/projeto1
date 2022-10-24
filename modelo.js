function start(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nbr')
    var res = document.getElementById('res')
    var sexo = document.getElementsByName('sexo')
    if (fano.value.length == 0 || Number(fano.value) > 2022){
        window.alert('[ERRO] Coloque os dados corretamente')
    } else{
        var fsex= document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade > 0 && idade < 10){
            // Criança
            img.setAttribute('src' , 'criancaH.jpg')
            } else if (idade < 21){
            // Jovem
            img.setAttribute('src' , 'jovemH.jpg')
            } else if (idade <50){
            //Adulto
            img.setAttribute('src' , 'adultoH.jpg')
            } else if (idade >50){
            //Idoso
            img.setAttribute('src' , 'idosoH.jpg')
            }
        }else{
            genero = 'mulher'
            if(idade > 0 && idade < 10){
                    // Criança
                    img.setAttribute('src' , 'criancaM.jpg')
                    } else if (idade < 21){
                    // Jovem
                    img.setAttribute('src' , 'jovemM.jpg')
                    } else if (idade <50){
                    //Adulto
                    img.setAttribute('src' , 'adultoM.jpg')
                    } else if (idade >50){
                    //Idoso
                    img.setAttribute('src' , 'idosoM.jpg')
                    }
        }
        res.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos </strong>`
        res.appendChild(img)
        img.style.cssText =
        'border-radius: 50%;' +
        'width: 350px;' +
        'margin-top: 40px;'+
        'heigth: 350px';
    }
}