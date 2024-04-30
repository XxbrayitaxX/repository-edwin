function calculate(text){
    let number_L = text.length - space(text)
    let number_S = text.replace(/[^0-9]/g,"").length

    console.log("la cantidad de letras es: "+number_L)
    console.log("la cantidad de numeros es: "+number_S)
}
function space(text){
    let number_P = text.split(" ").length - 1

    console.log("la cantidad de espacios es: "+number_P)
    return number_P
}
calculate("Alejo vive en nuestros corazones")