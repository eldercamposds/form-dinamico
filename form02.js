console.log("Rodando o formulário dinâmico")
function setorsel(){
    let selselector = document.getElementById('selsetor')
    let opcaoValor = selselector.options[selselector.selectedIndex].value
    let form = document.getElementById('form')
    console.log(opcaoValor)
    if(opcaoValor == 'setor01'){
        form.action = 'https://formsubmit.co/eldercamposdev@gmail.com'
    }else if(opcaoValor == 'setor02'){
        form.action = "https://formsubmit.co/zerelder@gmail.com"
    }else{
        form.action = ''
    }
}
