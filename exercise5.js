function factorial(number){
    let result= 1
    if(number<0){
        for(i=2; i<=number; i++){
            result= result*i
        }
        return result
    }else return "0 no se puede factorizar"
}
exit= factorial(5)
console.log(exit)