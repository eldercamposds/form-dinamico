function mudar(){
    // select estados
    var select = document.getElementById('estados') 
    var opcaoValor = select.options[select.selectedIndex].value;
    // texto da section
    var res03 = document.getElementById('conteudo')
    var res02 = document.getElementById('res02')
    var res01 = document.getElementById('res01')
    var res = document.getElementById('res')
    
    console.log(opcaoValor);
    // select cidades
    const opt = document.getElementById('cidades')
    opt.options.length = 0
        if(opcaoValor == 'vazio'){
            opt.options[opt.options.length] = new Option('Selecione um estado', 'vazio')
        }   
        else if(opcaoValor == 'bsb'){          
                opt.options[opt.options.length] = new Option('Selecione uma cidade', 'vazio', true, true)
                opt.options[opt.options.length] = new Option('Santa Maria', 'sm')       
    
        } 
        else if (opcaoValor == 'sp'){
                opt.options[opt.options.length] = new Option('Selecione uma cidade', 'vazio')
                opt.options[opt.options.length] = new Option('Diadema', 'sp2' ) 
            } 
        else if (opcaoValor == 'sc'){
            opt.options[opt.options.length] = new Option('Selecione uma cidade', 'vazio')
            opt.options[opt.options.length] = new Option('Itajaí', 'ita' ) 
        } 
        else if (opcaoValor == 'pe'){
            opt.options[opt.options.length] = new Option('Selecione uma cidade', 'vazio')
            opt.options[opt.options.length] = new Option('Recife', 'rec' ) 
        } 
        else if (opcaoValor == 'go'){
            opt.options[opt.options.length] = new Option('Selecione uma cidade', 'vazio')
            opt.options[opt.options.length] = new Option('Goiânia', 'goi' ) 
        } 
        else if (opcaoValor == 'scmg'){
            opt.options[opt.options.length] = new Option('Selecione uma cidade', 'vazio')
            opt.options[opt.options.length] = new Option('Contagem', 'cont' )
    
        } 
        else if (opcaoValor == 'ba'){
            opt.options[opt.options.length] = new Option('Selecione uma cidade', 'vazio')
            opt.options[opt.options.length] = new Option('Salvador', 'sal' ) 
        } 
    
    }
    function cidade(){
        
        var conteudo = document.getElementById('conteudo')
        var sel = document.getElementById('cidades')
        var opcaoValor = sel.options[sel.selectedIndex].value
        var res = document.getElementById('res')
        console.log(opcaoValor)
        res02.style.visibility = 'block'
            if(opcaoValor == 'vazio'){
                res.innerHTML = 'Vazio'
            }
            else if(opcaoValor == 'sm'){
                    res02.innerHTML ='Novo Contato Aparece aqui'
                    res.innerHTML= 'Santa Maria'
                    let a = document.getElementById('meu-link')
                    a.href = 'https://www.google.com.br'
                } 
            else if(opcaoValor == 'gua'){
                    conteudo.style.visibility = 'hidden'
                } 
            else if (opcaoValor == 'sp2'){
                    conteudo.style.visibility = 'visible'
                    res02.innerHTML ='Entre em contato'
                    res.innerHTML= 'São Paulo'
                    const a = document.querySelector("#meu-link")
                    a.href = 'https://www.bing.com.br'
                } 
            else {
                conteudo.style.display = 'none'
                
                } 
            
        
        }  