

// Básico
    let ourPlanetName="Earth"
    console.log(ourPlanetName)





// Da pra fazer assim, mas fica mais complicado de entender
    alert("Olá");[1,2].forEach(alert);
// Outro jeito mais simples e legível
    alert('Olá')
    alert('Tudo')
    alert('bem')
    alert('com você')





//  A string agora é armazenada na área de memória associada à variável. Nós podemos acessá-la usando o nome da variável:
    let message;
    message = 'Olá!'
    alert(message)





// Para ser conciso, podemos combinar a declaração de variável e atribuição em uma única linha:

    let message='Olá' // define a variável e atribui o valor
    alert(message) // Olá





// Podemos também declarar múltiplas variáveis em uma linha:
    let user="John", age=20, message="Olá"

    
// Isso pode parecer mais curto, mas não recomendo. Por questão de melhor legibilidade, use uma única linha por variável. 
// A variante multilinha é um pouco mais longa, mas mais fácil de ler:
    let user="John"
    let age=20
    let message="Olá"





// Algumas pessoas também definem múltiplas variáveis nesse estilo multilinha:
    let user="John",
    age=20,
    message="Olá";
 
    



    let mensagem
    mensagem="Olá"
    mensagem='Mundo' // Sobscreveu / valor modificado
    alert(mensagem)
// Quando o valor é modificado, os dados antigos são removidos da variável:
 




// Nós também podemos declarar duas variáveis e copiar dados de uma para a outra.
    let hello=" Olá Mundo"

    let message
// copiar 'Olá Mundo' de hello para message
    message=Hello





// agora duas variáveis contêm os mesmos dados
    alert(hello)
    alert(message)





// Nos velhos tempos, era tecnicamente possível criar uma variável por uma mera atribuição do valor sem usar let. Isso ainda funciona agora se não colocarmos use strict nossos scripts para manter a compatibilidade com scripts antigos.
    num=5
    alert(num)




    







    




