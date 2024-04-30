let name, greeting
function greetingU(name){
    const expression= /^[A-Za-z]+$/;
    if(expression.test(name)){
        console.log(greeting="Hola "+name+", bienvendio a mi programa")
    }else console.log("valide bien su nombre")
    
    return greeting
}
let fin=greetingU("Faber")