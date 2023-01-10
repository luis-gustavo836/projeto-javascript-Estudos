function tabuada(){
    var n1 = document.getElementById('num')
    var n2 = document.getElementById('tabu')
    if(n1.value == 0){
        alert('por favor digite um numero')
    }else{
        var n = Number(n1.value)
        n2.innerText = ''
        for(c=1;c<=10;c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            n2.appendChild(item)
        }
        }
    }