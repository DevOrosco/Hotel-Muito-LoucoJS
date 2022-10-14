var nomeHotel = prompt("Insira o nome do hotel: ");

    alert(`O nome do Hotel é ${nomeHotel}`);

var nomeUsuario = prompt("Insira o nome do Usuario: ");

function inicio_validacao(){ //VALIDAÇÃO DE LOGIN DO USÚARIO 

    let senha = 2678;
    let senhaValidacao = parseInt(prompt("Insira a senha: "));

        if (senhaValidacao != senha){

            alert("Senha Invalida!! Tente novamente o processo de Validação");
            inicio_validacao();

        }

    alert(`Bem vindo ao ${nomeHotel}, ${nomeUsuario}. É um imenso prazer ter você aqui`);

}

function erro_processamento(){ //CASO O USUARIO SELECIONE UMA OPÇÃO OU INSIRA UM VALOR NÃO EXISTENTE SERÁ APRESENTADO MESAGEM DE ERRO

    alert("Opção inválida \n Insira uma opção de 1 a 10, sendo 10 para sair do sistema");

}

function inicio_hotel(){  //INICIAÇÃO DO MENU DE OPÇÕES

    let opcao = parseInt(prompt("Insira a opção desejada: \n 1). Reserva de Quartos \n 2). Cadastro de Hóspedes \n 3). Cadastro e Pesquisa de Hóspedes \n 4). Reserva para Eventos  \n 5). Reserva de Buffet para Eventos \n 6). Reserva de Auditório para Evento \n 7). Reserva Restaurante \n 8). Verificação de Abastecimento de Gasolina/Alcool \n 9). Manutenção p/ Ar Condicionado \n 10). Sair "));

    switch(opcao){

        case 1:

            reserva_quartos(); //OK
            inicio_hotel();

        case 2:

            cadastro_hospedes_2(); //OK
            inicio_hotel();
        
        case 3:

            cadastro_hospedes_3(); //OK
            inicio_hotel();

        case 4:
            
            reserva_evento(); //OK
            inicio_hotel();
        
        case 5:

            reserva_buffet(); //OK
            inicio_hotel();

        case 6:

            reserva_auditorio(); //OK
            inicio_hotel();

        case 7:

            reserva_restaurante(); //OK
            inicio_hotel();

        case 8:

            abastecimento_carro(); //OK
            inicio_hotel();

        case 9:

            aluguel_arCondicionado();   //OK
            inicio_hotel();

        case 10:

            sair();     //OK
            break;

        default:

            erro_processamento(); //OK

    }
}

function reserva_quartos(){// RESERVA DE QUARTOS ANTECIPADA

    let diaria_hotel = parseInt(prompt("Insira o valor de uma diária do Hotel: ")); //Recebe valor da Diaria

        if(diaria_hotel <= 0 || isNaN(diaria_hotel)){ //Condicional para verificar digitação de dados corretos do usuario

            alert(`${nomeUsuario}, este valor é inválido. Tente novamente !`);
            inicio_hotel();

        }

    let dia_hospedagem = parseInt(prompt("Insira a quantidade de dias que deseja reservar: ")); //Recebe dias de estadia
    
        if(dia_hospedagem <= 0 || isNaN(dia_hospedagem)){ //Condicional para verificar digitação de dados corretos do usuario e limite de estadia

            alert(`Valor Invalido, ${nomeUsuario}`);
            inicio_hotel();

        }else if(dia_hospedagem > 30){

            alert(`Valor Invalido, ${nomeUsuario}`);
            inicio_hotel();

        }
    
    let valor_hospedagem = diaria_hotel * dia_hospedagem; //Calculo do total da estadia com preço da diaria e dias de hospedagem

    let nome_hospede1 = prompt("Insira o nome do Hóspede: "); //Recebe nome do Hospede

    let confirma_reserva = confirm(`${nomeUsuario}, você confirma reserva para ${nome_hospede1}? `); //Recebe prompt de confirmação 

        if(confirma_reserva){   //Condicional para validar a confirmação de reserva

            alert(`${nomeUsuario}, reserva efetuada para ${nome_hospede1}. O valor total é de R$ ${valor_hospedagem}.`);

        }else{

            alert(`${nomeUsuario}, reserva não efetuada`);
        }
        
}

function cadastro_hospedes_2(){ // CADASTRO DE HÓSPEDES QUE FAZEM A COMPRA DE QUARTOS NA HORA

    alert("Iremos cadastrar os hóspedes, caso queria para de cadastrar digite 'PARE' a qualquer momento! \n Dependendo da idade do hóspede o valor muda conforme abaixo: \n Hóspede menor de 6 anos - Possui direito a gratuidade! \n Hóspede maior de 60 anos - Possui direito a meia diária!"); //Alerta para exibir condições de uso da função

    let valor_diaria = parseInt(prompt("Insira o valor da Diária: ")); //Recebe valor da Diaria

        while(isNaN(valor_diaria) || valor_diaria <= 0){ //Enquanto o valor recebido não estar diferentes da condições colocadas, ira pedir dados novamente

            alert("Insira um valor válido");                        //Exibe mensagem de erro 
            valor_diaria = parseInt(prompt("Insira o valor da diária"));        //Pede dados novamente

        }
    
    let nome_hospede2;      //Recebe nome do Hospede
    let idade_hospede2;     //Recebe idade do hospede
    let diaria_porPesssoa = 0;  //Recebe valor da diaria por pessoa
    let valorMeia_diaria = 0; //Caso o hospede tenha mais de 60 anos, ira ser atribuido meia diaria para o calculo do valor total
    let qtdMeia_diaria = 0;    //Recebe a quantidade de Meia diaria
    let qtdGratuidade = 0;      //Recebe quantidade de gratuidade caso o hospede seja menor de 6 anos
    let total_diaria = 0;       //Recebe valor total de todo calculo


    nome_hospede2 = prompt("Insira o nome do hóspede: ");
        
        while(nome_hospede2 != "PARE"){   //Laço de Repetição para que o usuario continue usando até que digite PARE a qualquer momento

            idade_hospede2 = parseInt(prompt("Insira a idade do hóspede: ")); //Recebe a idade do Hospede

                while(isNaN(idade_hospede2) || idade_hospede2 < 0){ //Condicional para verificação de dados digitados

                    alert(`Idade do hóspede ${nome_hospede2} inválida. Tente novamente!!`);     //Exibe mensagem de erro
                    idade_hospede2 = parseInt(prompt("Insira a idade do hóspede: "));           //Pede dados novamente

                }

                if(idade_hospede2 <= 6){        //Condicionais para verificação de Gratuidade

                    alert(`${nome_hospede2} possui gratuidade.`);   //Exibe que hospede possui gratuidade
                    qtdGratuidade++;                               //Atribui +1 para Qtd de gratuidade
                    
                }else if(idade_hospede2 >= 60){             //Condicional para verificação de Meia Diaria

                    alert(`${nome_hospede2} paga meia diária.`);        //Exibe que hospede possui direito a Meia Diaria
                    valorMeia_diaria += valor_diaria / 2;               //Calculo para valor de Meia diaria
                    qtdMeia_diaria++;                                   //Atribui +1 para quantidade de Meia Diaria
                    
                }else{                                          //Caso não seja, Gratuidade e nem Meia, é a Diaria interia

                    diaria_porPesssoa += valor_diaria;                  //Recebe valor da diaria para calculo
                    alert(`${nome_hospede2} paga diária inteira.`);     //Exibe que hospede paga Diaria Interia
                    
                }

                nome_hospede2 = prompt("Insira o nome do hóspede: ");       //Pede nome do Hospede

        }
            
    total_diaria = valorMeia_diaria + diaria_porPesssoa; //Recebe calculo total
    
    alert(`${nomeUsuario}, o valor total da hospedagem é R$ ${total_diaria} com: ${qtdGratuidade} de gratuidades e ${qtdMeia_diaria} de meia diária.`); //Exibe para o usuario o valor total da reserva

}

function cadastro_hospedes_3(){ // CASDASTRO DE HÓSPEDE FEITO NA HORA COM OPÇÃO DE PESQUISA DE HÓSPEDES CADASTRADOS

    var lista_hospedes_function3 = []   //Array para receber a lista de hospedes

        function inicio_cadastroFunction_hospedes_3(){   //Função para cadastro, pesquisa de hospedes - Menu Inicial da Função

            let opcao = parseInt(prompt("Insira a opção desejada: \n 1). Cadastrar \n 2). Pesquisar \n 3). Sair \n"));

            switch(opcao){

                case 1:

                    cadastro_function_3();      //Função para cadastro de hospedes
                    inicio_cadastroFunction_hospedes_3();

                case 2:

                    pesquisa_function_3();      //Função para pesquisar hospedes cadastrados
                    inicio_cadastroFunction_hospedes_3();

                case 3:

                    sair();                     //Função para sair da Função
                
                default:

                    erro_funtion_3();           //Função que exibe erro caso seja selecionada uma opção não existente

            }

        function cadastro_function_3(){

            if(lista_hospedes_function3.length >= 15){      //Condicional para definir um limite de cadastros

                alert("Número máximo de Hóspedes cadastrados.");        //Caso limite seja ultrapassado, exibe mensagem de que o limite foi alcançado


            }else{

                var nome_hospede3 = prompt("Por favor, insira o nome da(o) Hóspede: ");  //Recebe o nome do Hospede para inclusão no Array
                
                lista_hospedes_function3.push(nome_hospede3); //Inclui nome recebido para o Array
                console.log(lista_hospedes_function3);          //Exibe a lista inteira para validação
                alert(`Sucesso! Hóspede ${nome_hospede3}, foi cadastrado com sucesso. \n`);     //Exibe para o usuario que o hospede foi cadastrado

            }


        }

        function pesquisa_function_3(){

            var nome_hospede3 = prompt("Por favor, insira o nome da(o) Hóspede: ");     //Recebe nome de hospede para pesquisa
            
            if(lista_hospedes_function3.includes(nome_hospede3)){       //Condicional para verificar se o hospede esta incluso no Array

                alert(`${nome_hospede3}, encontrada(o).`);  //Exibe para o Usuario que o hospede foi encontrado no Array

            }else{

                alert(`${nome_hospede3}, não foi econtrada(o).`); //Exibe para o Usuario que o hospede não foi encontrado no Array

            }

        }

        function sair(){

            let confirma = confirm("Você deseja sair? ");  //Questiona o usuario se deseja sair 

            if(confirma){           //Condicional para verificação de confirmação de saida

                inicio_hotel();     //Chama função que retorna ao menu Inicial do Hotel

            }else{

                inicio_cadastroFunction_hospedes_3();       //Chama função que o mantém no Cadastro e Pesquisa de Hospedes
            }

        }

        function erro_funtion_3(){

            alert("Opção inválida ! \n Insira uma opção de 1 a 3. ");       //Exibe mensagem de erro, caso seja selecionado uma opção não existente 
            inicio_cadastroFunction_hospedes_3();

        }
    }

    inicio_cadastroFunction_hospedes_3();

}

function reserva_evento(){ // FAZ RESERVA DE GARÇONS E HORAS DE EVENTO  

    let qtdHorasEvento = parseInt(prompt("Insira qual a duração prevista para o evento: "));        //Recebe quantidade de horas de evento

        if(qtdHorasEvento == NaN || qtdHorasEvento == ""){      //Verifica dados recebidos da Qtd de Horas do Evento

            alert("Valor Inválido!");           //Exibe mensagem de erro
            reserva_evento();                   //Chama a função para retorna a inserção de dados

        }

    let qtdGarcom = parseInt(prompt("Insira a quantidade de garçons que deseja contratar para o evento. \n **OBS: Cada garçom custa R$10,50** "));      //Recebe quantidade de garçons

        if(qtdGarcom == NaN || qtdGarcom == ""){    //Verifica dados recebidos do garçon

            alert("Valor Inválido");                //Exibe mensagem de Erro
            reserva_evento();                       //Chama a função para retornar a inserção de dados

        }

        let precoGarcom = qtdGarcom * 10.50;        //Calculo para preço de contratação por garçon

        let precoTotalEvento = precoGarcom * qtdHorasEvento;        //Calculo para preço total do evento com quantidade de eventos mais a hora total de evento

        alert(`O custo total do Evento será: R$ ${precoTotalEvento} `);     //Exibe o custo total do Evento

        let confirma_reserva = confirm("Gostaria de Efetuar a reserva?");     //Questiona ao usuario a confirmação da reserva

        if(confirma_reserva){           //Condicional para vericação de confirmação

            alert(`${nomeUsuario}, reserva efetuada com sucesso.`);     //Caso seja confirmado, exibe que a reserva foi efetuada

        }else{

            alert("Reserva não efetuada.");             //Caso não seja confirmado, exibe que a reserva não foi efetuada

        }
}

function reserva_buffet(){ // FAZ RESERVA DE BUFFET CALCULANDO SALGADO, ÁGUA, CAFÉ E QUANTIDADE MÁX DE PESSOAS

    let qtdConvidados = parseInt(prompt("Insira a quantidade de convidados:"));     //Recebe qtd de convidados

    if(qtdConvidados == NaN || qtdConvidados == ""){        //Verifica dados recebido dos convidados

        alert("Valor Inválido!");       //Exibe mensagem de erro
        reserva_buffet();               //Chama função que retorna para inserção de dados

    }

    if(qtdConvidados > 350){            //Condicional que verifica a quantidade maxima de convidados

        alert("Quantidade de convidados supera a capacidade máxima de locação. \n Insira um número menor de convidados");   //Mensagem de aviso de Lotação Maxima
        reserva_buffet();
    }

    let qtdCafe = qtdConvidados * 0.2;  //Calcula a quantidade de litros de café p/Convidado
    let qtdAgua = qtdConvidados * 0.5;  //Calcula a quantidade de litros de agua p/Convidado
    let qtdSalgado = qtdConvidados * 7; //Calcula a quantidade de salgados p/Convidado
    
    let precoSalgado_total; //Recebe custo total do Salgado

        if(qtdSalgado < 100){       //Condicional de Calculo para caso a quantidade de Salgados seja menor do que 100

            precoSalgado_total = qtdSalgado * 2.94;     //Calculo
            
        }else if(qtdSalgado == 100){    //Condional de Calculo para caso a quantidade de Salgados seja igual a 100

            precoSalgado_total = 34;    //Valor p/cento de Salgado

        }else if(qtdSalgado > 100){     //Condicional de Calculo para caso a quantidade de Salgados seja maior de que 100

            precoSalgado_total = 34;    //Preço recebe o valor de um Cento de Salgado
            qtdSalgado - 100;           //Como o valor do Cento de Salgado ja esta calculado precisamos calcular a diferença por isso retiramos 100 salgados da quantidade
            precoSalgado_total += qtdSalgado * 2.94;    //Calculo para o valor da diferença de salgados para ser somado com o preço do Cento de Salgado

        }else if(qtdSalgado == 200){    //Condicional para calculo caso a quantidade de Salgados seja igual a 200

            precoSalgado_total = 34 * 2;    //Recebe o valor do Cento de salgado multiplicado por 2

        }else if(qtdSalgado > 200){     //Condicional para calculo caso a quantidade de Salgados seja maior do que 200

            precoSalgado_total = 34 * 2;    //Recebe o valor do Cento de salgado multiplicado por 2
            qtdSalgado - 200;               //Como o valor do Cento de Salgado ja esta calculado precisamos calcular a diferença por isso retiramos 200 salgados da quantidade
            precoSalgado_total += qtdSalgado * 2.94;    //Calculo para o valor da diferença de salgados para ser somado com o preço do Cento de Salgado

        }else if(qtdSalgado == 300){        //Condicional para calculo caso a quantidade de Salgados seja igual a 300

            precoSalgado_total = 34 * 3;    //Recebe o valor do Cento de salgado multiplicado por 3

        }else if(qtdSalgado > 300){         //Condicional para calculo caso a quantidade de Salgados seja maior do que 300

            precoSalgado_total = 34 * 3;    //Recebe o valor do Cento de salgado multiplicado por 3
            qtdSalgado - 300;               //Como o valor do Cento de Salgado ja esta calculado precisamos calcular a diferença por isso retiramos 300 salgados da quantidade
            precoSalgado_total += qtdSalgado * 2.94;    //Calculo para o valor da diferença de salgados para ser somado com o preço do Cento de Salgado

        }

    let precoCafe_total = qtdCafe * 0.80;       //Calculo para custo total de café com base na qtd de café
    let precoAgua_total = qtdAgua * 0.40;       //Calculo para custo total de água com base na qtd de água
    let precoEvento_total = precoAgua_total + precoCafe_total + precoSalgado_total;     //custo total do evento somando água, café e salgados


    let confirma_reservaEvento = confirm(`O evento precisará de ${qtdCafe} litros de Café, ${qtdAgua} litros de Água e ${qtdSalgado} unidades de Salgado. O custo total do evento é R$ ${precoEvento_total}. 
    
    Gostaria de efetuar a reserva?`);       //Exibe para o Usuario um prompt de confirmação para a reserva, exibindo quantidade total de Agua, Cafe e Salgado mais o Custo Total do Evento

    if(confirma_reservaEvento){             //Verificação da Confirmação de Reserva

        alert(`${nomeUsuario}, reserva foi efetuada com sucesso!!`);        //Caso seja confirmada a reserva sera exibido para o usuario que a reserva foi efetuada

    }else{

        alert("Reserva não efetuada! ");        //Caso não seja confirmada a reserva sera exibido para o usuario que a reserva não foi efetuada

    }

}

function reserva_auditorio(){ // FAZ RESERVA DE AUDITÓRIO COM BASE NA QUANTIDADE DE CONVIDADOS E ENCAMINHA PARA O MAIS ADEQUADO

    let qtdConvidados_auditorio = parseInt(prompt("Insira a quantidade de convidados para o Evento:"));     //Recebe qtd de convidados para o auditorio
        
        if(qtdConvidados_auditorio == NaN || qtdConvidados_auditorio  == ""){       //Condicional para verificação de dados dos convidados

            alert("Valor Inválido!");           //Exibe uma mensagem de erro 
            reserva_auditorio();                //Chama a função que retorna para inserção de dados

        }    

        if(qtdConvidados_auditorio > 350){      //Condicional para verificar limite de convidados

            alert("Capacidade máxima excedida, insira um número menor de convidados");      //Exibe para o usuario mensagem de capacidade de lotação atingiu o limite
            reserva_auditorio();                                                            //Chama a função que retona para inserção de dados
            
        }

        if(qtdConvidados_auditorio <= 220){         //Condicional para caso a quantidade de convidados seja menor ou igual a 220
            if(qtdConvidados_auditorio <= 150){     //Segunda Condicional para caso a quantidade de convidados seja menor ou igual a 150

                alert("Use o auditório Laranja");       //Caso atenda as condições sugere locação do auditorio laranja, exibindo uma mensagem para o usuario

            }else if(qtdConvidados_auditorio > 150){    //Condicional para caso a quantidade de convidados seja maior do que 150

                let qtdConvidadosAuditorio_total = 150; //Recebe quantidade fixa de 150 convidados
                let qtdConvidados_adicional = qtdConvidados_auditorio - qtdConvidadosAuditorio_total;   //Calcula a quantidade de convidados adicionais para inserção de cadeiras adicionais

                alert(`Use o auditório Laranja(inclua mais ${qtdConvidados_adicional} cadeiras)`);      //Exibe uma mensagem para o usuario indicando o auditorio laranja e a quantidade de cadeiras adicionais necessarias para locação de todos os convidados

            }
            
        }else{  

            alert("Use o auditório Colorado");  //Indica ao usuario o auditorio Colorado

        }

    let confirma_reservaAuditorio = confirm("Deseja efetuar a reserva?");       //Exibe ao usuario um prompt para confirmação da reserva

        if(confirma_reservaAuditorio){      //Condicional para verificação da reserva

            alert(`${nomeUsuario}, reserva efetuada com sucesso!`);     //Caso seja confirmada a reserva, exibe reserva efetuada

        }else{

            alert("Reserva não efetuada");          //Caso não seja confirmada a reserva, exibe reserva não efetuada

        }

}

function reserva_restaurante(){ // FAZ RESERVA DE RESTAURANTE COM BASE NO HORARIO E DIA DISPONIVEL

    let diaSemana = prompt("Insira o dia da semana que deseja reservar (Ex: segunda, terça, etc): ");       //Recebe o dia da semana desejado para verfificação de disponibilidade
    var lista_diaSemana = ["segunda", "quarta", "quinta", "sabado", "domingo"];         //Array com dias da semana com disponibilidade

        if(diaSemana == "" || diaSemana == Number){         //Verificação de dados do dia da semana

            alert("Insira um dia da semana valido");        //Exibe mensagem de erro
            reserva_restaurante();                          //Chama a função que retorna para a inserção de dados

        }else if(lista_diaSemana.includes(diaSemana)){      //Caso não haja erro entra na Condicional que verifica se o dia da semana possui disponibilidade, fazendo a pesquisa no Array

            alert(`${diaSemana} possui disponibilidade`);   //Caso o dia seja encontrado no Array sera exibido para usuario que o dia desejado possui disponibilidade

        }else{

            alert(`${diaSemana} não possui disponibilidade`);   //Caso o dia não seja encontrado no Array sera exibido para o usuario que o dia desejado não possui disponibilidade
            inicio_hotel();

        }

    var lista_restaurantes = ["nirvana", "metalica", "redhot", "foofighters"];  //Array que possui os restaurantes listados com disponibilidade
    var horario_disponivelSemana = [10, 12, 14, 16, 18, 20, 22, 23];            //Array que possui os horarios disponiveis de Segunda a Sexta
    var horario_disponivelFdS = [7, 9, 12, 13, 15];                             //Array que possui os horarios disponiveis de Sabado e Domingo

    let restaurante = prompt(`Insira o restaurante desejado:\n ${lista_restaurantes}`);     //Exibe o Array de Restaurantes para o usuario e recebe o restaurante desejado
        if(restaurante == "" || restaurante == Number){     //Verifica dados recebidos  do restaurante

            alert("Dado Invalido. Tente Novamente!");       //Exibe mensagem de erro
            reserva_restaurante();                          //Chama a função que retorna para a inserção de dados

        }else if(lista_restaurantes.includes(restaurante)){     //Condicional para verificar se o restaurante esta incluso no Array

            alert("Restaurante Selecionado!");  //Caso o  restaurante esteja incluso no Array, exibe que o restaurante foi selecionado

        }else{

            alert("Restaurante Inválido!");     //Caso o restaurante não esteja incluso no Array, exibe que prestaurante é invalido
            inicio_hotel();                     //Chama a função que retorna para o menu inicial do hotel

        }

    if(diaSemana == "sabado" || diaSemana == "domingo"){            //Verifica se o dia desejado é Sabado ou Domingo

        let horario = parseInt(prompt(`Insira o horario desejado:\n ${horario_disponivelFdS}`));    //Caso seja sabado ou domingo, exibe o horario de final de semana para o usuario

            if(horario == "" || horario == NaN){    //Verifica o dado recebido do horario

                alert("Dados Invalidos! Tente Novamente."); //Exibe mensagem de Erro
                reserva_restaurante();                      //Chama a função que retorna para inserção de dados

            }
            
            if(horario_disponivelFdS.includes(horario)){    //verifica se o horario está incluso no Array de horario do Final de Semana

                let empresa = prompt("Insira o nome da empresa que está reservando:");      //Recebe o nome da empresa que esta efetuando a reserva
                    if(empresa == "" || empresa == Number){         //Verfica dados recebidos do nome da empresa

                        alert("Dado Invalido! Tente novamente!");       //Exibe mensagem de erro
                        reserva_restaurante();                          //Chama a função que retorna para inserção de dados

                    }

                let confirma_reservaRestaurante = confirm(`Deseja confirmar a reserva para ${empresa}, dia da semana ${diaSemana} ás ${horario}`);      //Exibe prompt para o usuario confirmar a reserva com nome da empresa, dia da semana e horario desejado
                    
                    if(confirma_reservaRestaurante){        //Verificação de Confirmação da reserva

                        alert(`Restaurante ${restaurante} reservado para empresa ${empresa} na(o) ${diaSemana} ás ${horario}`);     //Caso seja confirmada a reserva, exibe reserva efetuada para empresa x, no dia y, em horario z

                    }else{

                        alert("Reserva não efetuada!");     //Caso não seja confirmada a reserva, exibe que a reserva não foi efetuada

                    }
            }else{

                alert("Ops! Houve algum erro. Tente novamente!");       //Caso algum dado não atenda nenhuma das condicionais acima, sera exibida mensagem de erro.
                inicio_hotel();                                         //Chama a função que retorna para o menu inicial do hotel

            }
    }else{

        let horario = parseInt(prompt(`Insira o horario desejado:\n ${horario_disponivelSemana}`));  //Exibe o Array dos horarios da semana disponiveis e recebe o horario desejado pelo usuario

        if(horario == "" || horario == NaN){        //Verificação de dados recebidos pelo horario da semana 

            alert("Dados Invalidos! Tente Novamente.");     //Exibe mensagem de Erro
            reserva_restaurante();                          //Chama a função que retorna para inserção de dados

        }else if(horario_disponivelSemana.includes(horario)){   //Condicional para verificar se o horario desejado esta incluso na Array de horario da semana

            let empresa = prompt("Insira o nome da empresa que está reservando:");      //Recebe nome da empresa que esta efetuando a reserva
                if(empresa == "" || empresa == Number){     //Verificação de dados recebidos pelo nome da empresa

                    alert("Dado Invalido! Tente novamente!");       //Exibe mensagem de erro
                    reserva_restaurante();                          //Chama a função que retorna para inserção de dados

                }

            let confirma_reservaRestaurante = confirm(`Deseja confirmar a reserva para ${empresa}, dia da semana '${diaSemana}' ás ${horario}`);        //Exibe prompt para o usuario confirmar a reserva com nome da empresa, dia da semana e horario desejado
                
                if(confirma_reservaRestaurante){

                    alert(`Restaurante ${restaurante} reservado para empresa ${empresa} na(o) '${diaSemana}' ás ${horario}`);       //Caso seja confirmada a reserva, exibe reserva efetuada para empresa x, no dia y, em horario z

                }else{

                    alert("Reserva não efetuada!");         //Caso não seja confirmada a reserva, exibe que a reserva não foi efetuada


                }
        }else{

            alert("Ops! Houve algum erro. Tente novamente!");           //Caso algum dado não atenda nenhuma das condicionais acima, sera exibida mensagem de erro.
            inicio_hotel();                                             //Chama a função que retorna para o menu inicial do hotel

        }
    }
}

function abastecimento_carro(){ // VERIFICA QUAL O MELHOR PREÇO DE ALCOOL E GASOLINA ENTRE OS DOIS POSTOS FILIADOS

    //Recebendo Valores de Gasolina e Alcool do Posto Wayne
    let alcoolWayne = parseFloat(prompt("Insira o preço do Alcool no Posto Wayne: "));
    let gasolinaWayne = parseFloat(prompt("Insira o preço da Gasolina no Posto Wayne"));

    //Variaveis para receber o melhor custo beneficio de Alcool e Gasolina Wayne
    let melhorOpcaoAlcoolWayne;
    let melhorOpcaoGasolinaWayne;

    //Recebendo Valores de Gasolina e Alcool do Posto Stark
    let alcoolStark = parseFloat(prompt("Insira o preço da Alcool no Posto Stark"));
    let gasolinaStark = parseFloat(prompt("Insira o preço da Gasolina no Posto Stark"));

    //Variaveis para receber o melhor custo beneficio de Alcool e Gasolina Stark
    let melhorOpcaoAlcoolStark;
    let melhorOpcaoGasolinaStark;

    /*Calculo de Custo Beneficio Alcool X Gasolina - Caso 30% do valor da Gasolina somado com valor do Alcool seja menor igual ao valor da Gasolina então o Alcool tem um custo beneficio melhor, caso contrario, o ideial é optar pela gasolina Wayne*/
    let percentual_AlcoolGasolinaWayne = ((gasolinaWayne * (30/100)) + alcoolWayne);

        if(percentual_AlcoolGasolinaWayne <= gasolinaWayne){         //Condicional para Atribuição de Melhor opção após o calculo da Posto Wayne
            
            melhorOpcaoAlcoolWayne = alcoolWayne;

        }else{                                                         
        
            melhorOpcaoGasolinaWayne = gasolinaWayne;

        }
    
    /*Calculo de Custo Beneficio Alcool X Gasolina - Caso 30% do valor da Gasolina somado com valor do Alcool seja menor igual ao valor da Gasolina então o Alcool tem um custo beneficio melhor, caso contrario, o ideial é optar pela gasolina Stark*/
    let percentual_AlcoolGasolinaStark = ((gasolinaStark * (30/100)) + alcoolStark);

        if(percentual_AlcoolGasolinaStark <= gasolinaStark){

            melhorOpcaoAlcoolStark = alcoolStark;                 //Condicional para Atribuição de Melhor opção após o calculo da Posto Stark

        }else{

            melhorOpcaoGasolinaStark = gasolinaStark;

        }

    let melhorOpcaoFinalAlcool;
    let melhorOpcaoFinalGasolina;
    let percentual_Final = 0;

        if(melhorOpcaoAlcoolWayne < melhorOpcaoAlcoolStark){    //Condicional para verificação da melhor opção de Alcool entre os postos

            melhorOpcaoFinalAlcool = melhorOpcaoAlcoolWayne;

        }else{

            melhorOpcaoFinalAlcool = melhorOpcaoAlcoolStark;
            
        }

        if(melhorOpcaoGasolinaWayne < melhorOpcaoGasolinaStark){ //Condicional para verificação da melhor opção de Gasolina entre os postos

            melhorOpcaoFinalGasolina = melhorOpcaoGasolinaWayne;

        }else{

            melhorOpcaoFinalGasolina = melhorOpcaoGasolinaStark;
            
        }

        //Fazendo calculo de Verificação para caso, aconteça de cair como melhor opção alcool e gasolina cada um de postos divergentes
        if(melhorOpcaoFinalAlcool == melhorOpcaoAlcoolStark && melhorOpcaoFinalGasolina == melhorOpcaoGasolinaWayne){ 

            percentual_Final = (melhorOpcaoFinalGasolina * (30/100)) + melhorOpcaoAlcoolStark;
                if(percentual_Final <= melhorOpcaoFinalGasolina){

                    alert(`${nomeUsuario}, melhor abastecer com o Alcool do Posto Stark`);              //Exibe ao usuario o posto Stark para se abastecer com Alcool

                }else{

                    alert(`${nomeUsuario}, melhor abastecer com a Gasolina do Posto Wayne`);            //Exibe ao usuario o posto Wayne para se abastecer com Gasolina
                    
                }
        //Fazendo calculo de Verificação para caso, aconteça de cair como melhor opção alcool e gasolina cada um de postos divergentes
        }else if(melhorOpcaoFinalAlcool == melhorOpcaoAlcoolWayne && melhorOpcaoFinalGasolina == melhorOpcaoGasolinaStark){

            percentual_Final = (melhorOpcaoFinalGasolina * (30/100)) + melhorOpcaoFinalAlcool;
                if(percentual_Final <= melhorOpcaoFinalGasolina){

                    alert(`${nomeUsuario}, melhor abastecer com o Alcool do Posto Wayne`);          //Exibe ao usuario o posto Wayne para se abastecer com Alcool

                }else{

                    alert(`${nomeUsuario}, melhor abastecer com a Gasolina do Posto Stark`);        //Exibe ao usuario o posto Stark para se abastecer com Gasolina

                }

        }else if(melhorOpcaoAlcoolWayne < melhorOpcaoAlcoolStark){

            melhorOpcaoFinalAlcool = melhorOpcaoAlcoolWayne;

        }else if(melhorOpcaoAlcoolStark < melhorOpcaoAlcoolWayne){

            melhorOpcaoFinalAlcool = melhorOpcaoAlcoolStark;
            
        }else if(melhorOpcaoGasolinaWayne < melhorOpcaoGasolinaStark){ 

            melhorOpcaoFinalGasolina = melhorOpcaoGasolinaWayne;

        }else{

            melhorOpcaoFinalGasolina = melhorOpcaoGasolinaStark;
            
        }

}

function aluguel_arCondicionado(){  // CALCULA O PREÇO DE MANUNTENÇÃO DE AR CONDICIONADO COM DESCONTO APLICAVEL E PARA MAIS DE UMA EMPRESA

        var menor_empresa;      //Variavel para armazenar a empresa que tiver o menor custo de serviço
        let menor_custo = 100000000000;     //Variavel para armazenar o menor custo da empresa, inicialmente ela armazena um alto valor para depois ser feita a comparação na condicional com operador logico e armazenar em seguida em valor abaixo e seguir fazendo a substituição por um valor menor

        let insercao_novosDados = "S";      //Variavel para receber resposta do usuario para inserir novos dados ou não

        do{                           //Laço de repetição para repetir conforme a resposta do usuario, enquanto for "S" irá executar o laço se não deixa de executar

            let nome_empresa = prompt("Insira o nome da empresa:");         //Recebe o nome da empresa de manutenção

                if(nome_empresa == Number || nome_empresa == ""){       //Condicional para verificar dados recebidos do nome da empresa

                    alert("Dado inválido. Tente novamente!");               //Exibe mensagem de erro
                    aluguel_arCondicionado();                              //Chama a função que retorna para inserção de dados
                    
                }

            let custo_porAparelho = parseInt(prompt("Insira o valor por aparelho:"));       //Recebe o valor de manuntenção por aparelho
                
                if(custo_porAparelho == "" || custo_porAparelho == NaN){      //Condicional para verificar dados recebidos do custo por aparelho

                    alert("Valor inválido. Tente novamente!");                  //Exibe mensagem de erro
                    aluguel_arCondicionado();                                  //Chama a função que retorna para inserção de dados

                }

            let qtdAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));         //Recebe a quantidade de aparelhos que vão para manutenção

                if(qtdAparelhos == "" || qtdAparelhos == NaN){          //Condicional para verificar dados recebidos da quantidade de aparelhos

                    alert("Valor inválido. Tente novamente!");           //Exibe mensagem de erro
                    aluguel_arCondicionado();                           //Chama a função que retorna para inserção de dados

                }

            let porcentagem_desconto = parseInt(prompt("Qual a porcentagem de desconto?"));         //Recebe a porcentagem de desconto estipulada pelo usuario

                if(porcentagem_desconto == "" || porcentagem_desconto == NaN){          //Condicional para verificar dados recebidos da porcentagem de desconto

                    alert("Valor inválido. Tente novamente!");        //Exibe mensagem de erro          
                    aluguel_arCondicionado();                         //Chama a função que retorna para inserção de dados     

                }

            let qtdMinimaAparelho_desconto = parseInt(prompt("Qual a quantidade minima de aparelhos para desconto?"));      //Recebe quantidade minima de aparelho que vão para manuntenção para ser aplicado a porcentagem de desconto

                if(qtdMinimaAparelho_desconto == "" || qtdMinimaAparelho_desconto == NaN){          //Condicional para verificar dados recebidos da quantidade minima de aparelhos para desconto 

                    alert("Valor inválido. Tente novamente!");          //Exibe mensagem de erro
                    aluguel_arCondicionado();                           //Chama a função que retorna para inserção de dados

                }

            let custo_totalAparelho = custo_porAparelho * qtdAparelhos;         //Calculo de custo total da manuntenção de todos aparelhos

                if(qtdAparelhos >= qtdMinimaAparelho_desconto){                 //Condicional para verificar se é aplicavel o desconto

                    custo_totalAparelho -= (custo_totalAparelho * (porcentagem_desconto/100));      //Calculo para apliacação do desconto

                }
            
            alert(`O serviço da ${nome_empresa} custará R$ ${custo_totalAparelho}`);            //Exibe para o usuario o nome da empresa e o custo total do serviço

                if(custo_totalAparelho < menor_custo){          //Condicional para verificar o menor custo

                    menor_empresa = nome_empresa;               //Recebe o nome da empresa que possui o menor custo de serviço
                    menor_custo = custo_totalAparelho;          //Recebe o valor de menor custo de serviço

                }

            insercao_novosDados = prompt("Deseja informar novos dados? (S/N)");         //Exibe um prompt para usuario perguntando se deseja inserir novos dados

                while(insercao_novosDados == "" || insercao_novosDados == Number){       //Laço de repetição para verificar dados da resposta de novos dados e receber uma resposta valida, enquanto não for enviada uma resposta valida o laço continuara executando

                    alert("Dado inválido. Se deseja inserir novos dados digite 'S', se não digite 'N' ");       //Exibe uma mensagem de erro com uma orientação ao usuario
                    insercao_novosDados = prompt("Deseja informar novos dados? (S/N)");             //recebe uma nova resposta

                }

        }while(insercao_novosDados == "S")          //Laço de repetição verifica a resposta do é "S" e repete todo processo, do contrario finaliza e sai do laço

        alert(`O orçamento de menor valor é o de ${menor_empresa} por R$ ${menor_custo}`);          //Exibe para o usuario o orçamento da empresa de menor custo
        
}

function sair(){                //EXECUTA PROTOCOLO DE SAIDA

    let confirmar_saida = confirm("Deseja realmente sair do programa ?");       //Exibe ao usuario um prompt de confirmação para saida do programa

    if(confirmar_saida){        //Condicional para verificar confirmação de saida

        alert(`Muito Obrigado. Até logo, ${nomeUsuario}`);        //Exibe mensagem de saida do programa ao usuario
        window.close();        //Comando fecha a aba do navegador em que esta sendo executado o programa

    }else{

        inicio_hotel();       //Caso usuario não queria fechar ainda o programa é retornado ao menu inicial do hotel    

    }
}


inicio_validacao();
inicio_hotel();