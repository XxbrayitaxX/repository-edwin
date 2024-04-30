function year_leap(year){
    if(year% 4 ===0 && year%100 !==0 || year%400 ===0){
        return "es bisiesto"
    }else return "no es bisiesto"
}
let exit= year_leap(2024)
console.log(exit)