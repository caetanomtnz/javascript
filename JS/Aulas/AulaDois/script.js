// Var type boolean true / false
 
//  Éativado  verdadeiro 
var IsEnabled=true

console.log(IsEnabled)



// Array
  
var names=['Andreia', 'Caetano','Bruno']
console.log(names)
console.log(names[0]) 

names.push('Amora') // Matriculou o aluno
console.log(names.length)// mostra quantos tem

var teams = new Array()
teams.push('Brazil')
console.log(teams)
 
//IF - Condicional
  


function isEqual(name){
    if(name==='Miguel'){
        return 'É igual a Miguel'
    } else if(name=='Maria'){
        return 'É igual a Maria '
    } else{
        return 'Não é igual a nada'
    }
}












//console.log('Eu sou script.js') 






var name='Caetano'
var number=14
console.log(name)
console.log(number)

function print(name){
    console.log(name)
}

/////////////////////////////////////

print('Texto1')
print('Texto2')
print('Texto3')
print('Texto4')
print('Texto5')

////////////////////////////////////

function sun(numero1, numero2){
    console.log(numero1 + numero2)
}

sun(80,70)

////////////////////////////////////

var IsEnabled=true

console.log(IsEnabled)

////////////////////////////////////

var name='Caetano Martinazzo'

console.log(name)

///////////////////////////////////

var names=['caetano','andreia','bruno']

console.log(names)
console.log(names[1])
console.log(names.length)
console.log(names.push('Amorinha'))

//////////////////////////////////

var teams= new Array()
teams.push('Brazil')
console.log(teams)

///////////////////////////////////

 
function testName(name){
    if(name.length > 10){
        return 'Big Name'
    }else{
        return'Small Name'
        }
    }

    function isEqual(name) {
      if(name === 'Miguel'){
        return 'É igual Miguel'
     } else if(name === 'Maria') {
        return 'E Maria'
     }else{
        return 'Nao e nada'
     }   
     
    }

console.log(isEqual('Miguel'))
console.log(testName("Caetano Martinazzo"))
