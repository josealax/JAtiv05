function media(){
    let nome = window.prompt('Qual o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let n3 = Number(window.prompt(`Qual a terceira nota?`))
    let n4 = Number (window.prompt(`Qual sua ultima nota?`))
    med = (n1 + n2 + n3 + n4)/4

    let msg
    if (med >=7){
        msg = 'Meus parabéns!'
    }else {
        msg = 'Estude um pouco mais!'
    }

    let res = document.getElementById('situacao')
    res.innerHTML = `<p> Calcular a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p> As notas obtidas foram <mark>${n1}, ${n2}, ${n3} e ${n4}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p> A mensagem que temos é: <strong style= 'color:red;'>${msg}</strong></p>`
}