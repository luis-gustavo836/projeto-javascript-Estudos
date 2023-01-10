let num = document.querySelector('input#num')
let scrou = document.querySelector('select#scrou')
let res = document.querySelector('div#res')
let valores =[]

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        scrou.appendChild(item)
        res.innerText = ''
    } else{
        alert('valor invalido ou ja adicionado')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        alert('impossivel finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>voce tem ${total} números</p>`
        res.innerHTML += `<p>seu numero maior é o ${maior}</p>`
        res.innerHTML += `<p>seu numero menor é o ${menor}</p>`
        res.innerHTML += `<p>a soma dos seu numeros deram ${soma}</p>` 
        res.innerHTML += `a media dos valores digitados é ${media}</p>`
        }
        
        
    }