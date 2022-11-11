function bebida(){
    let bebida = document.getElementById('bebida')

}
function estado(){
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
    function cidadeb(){
        
        var conteudo = document.getElementById('conteudo')
        var sel = document.getElementById('cidades')
        var opcaoValor = sel.options[sel.selectedIndex].value
        var res = document.getElementById('reg')
        console.log(opcaoValor)
            if(opcaoValor == 'vazio'){
                res.innerHTML = 'Vazio'
            }
            else if(opcaoValor == 'sm'){
                reg.innerHTML= 'BIG BOX SUPERMECADOS<br>SHOW DE COMPRAR<br>DONA DE CASA<br>ATACADÃO DIA A DIA<br>MULTI ADEGA EXPRESS<br>ARMAZEM SUPERMERCADOS<br>'

            }
            else {
                reg.innerHTML ='Dados não disponíveis no momento'
            } 
        
        }  