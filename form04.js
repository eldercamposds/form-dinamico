function filial(){
    let sel = document.getElementById('filialid')
    var opcaoValor = sel.options[sel.selectedIndex].value
    var res = document.getElementById('res')
    let estadotit = document.getElementById('estadotit')
    console.log(opcaoValor)
        if(opcaoValor == 'bsb'){
            estadotit.innerHTML = 'BSB'
            res.innerHTML ='Trecho 01 conjunto 04 lote 20, 21 parte A<br>Polo de desenvolvimento JK<br>Cidade: Santa Maria<br>CEP: 72549-520<br>Telefone:<br>(61) 2107-8400 — (61) 98222-5558'
        } else if(opcaoValor == 'itj'){
            estadotit.innerHTML = 'Itajaí'
            res.innerHTML = 'Rodovia BR 101 nº 9485 Marginal leste KM 122<br>Bairro: Cidade Nova<br>Cidade: Itajaí<br>CEP: 88308-620<br>Telefone: (47) 3348-4110'
        } else if (opcaoValor == 'sp'){
            estadotit.innerHTML = 'São Paulo'
            res.innerHTML = 'Rua Barão de Cotegipe, 300, Galpão 1 e 2<br>Loteamento Jardim Ruyce<br>Bairro: casa Grande<br>Cidade: Diadema<br>CEP: 09.961-670<br>Telefone: (11) 4061-2020<br>e-mail: import2@siqueiracampos.net.br'       
        } else if (opcaoValor == 'rec'){
            estadotit.innerHTML = 'Recife'
            res.innerHTML = 'Rodovia BR 101.Súl Nº 1532, KM 81,7<br>Bairro: Prazeres<br>Cidade: Jaboatão dos Guararapes<br>CEP: 54335-000<br>Telefone: (81) 2121-4080'
        } else if (opcaoValor == 'go'){
            estadotit.innerHTML = 'Goiânia'
            res.innerHTML = 'Avenida Perimetral Norte Nº 3223, Galpão 9<br>Bairro: Fazenda caveiras<br>Cidade: Goiânia<br>CEP: 74574-002<br>Telefone: (62) 3254-9750'
        } else if (opcaoValor == 'mg'){
            estadotit.innerHTML = 'Minas Gerais'
            res.innerHTML = 'Avenida Cardeal Eugênio Pacelli, Nº. 1445, Galpões 1, 2 e 3<br>Bairro: Cidade Industrial<br>Cidade: Contagem<br>CEP: 32.210-000<br>Telefone: (31) 2586-1021'
        }else if (opcaoValor == 'bah'){
            estadotit.innerHTML = 'Bahia'
            res.innerHTML = 'Rua Doutor Altino Teixeira, 279B<br>Porto Seco – Pirajá<br>Cidade: Salvador<br>CEP: 41.233-010<br>Telefone: (71) 3508-4082'
        }else{
            estadotit.innerHTML = 'Selecione uma filial'
            res.innerHTML = ''
        }
    
    }  
