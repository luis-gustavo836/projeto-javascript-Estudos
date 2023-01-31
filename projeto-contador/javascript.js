function contar(){
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    let res = document.getElementById('res')

    if(ini.value == 0 || fim.value == 0 || passo.value == 0){
        res.innerHTML = 'impossivel contar'
    } else{
        res.innerHTML = 'contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(i < f)
        for(var c = i ; c <= f ; c+= p ){       //contagem crescente
           res.innerHTML += `${c} &#128077;`
        } else{ 
            for(var c = i; c > f; c-= p ){      //contagem decrescente
            res.innerHTML += `${c} &#128077;`
            }
        }
    }
}