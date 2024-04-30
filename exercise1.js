function operation(number1, number2){
    let division, addition, rest, multiplication, mensaje
    if(typeof date !== 'string'){
            addition= number1+number2
            rest= number1-number2
            multiplication= number1*number2
        if(number1> 0 && number2> 0){
            division= number1/number2
            console.log(mensaje="la suma es: ",addition, "la resta es: ",rest, "la multiplicacion es: ", multiplication, "la division es: ", division) 
        }else console.log(mensaje= "valide bien los numeros")
        
    }else console.log(mensaje="valide bien los numeros")

    return mensaje
}
let total =operation(0,3)
