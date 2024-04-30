function division(dividend, divider) {
    if (divider > 0) {    
   	 	let result = Math.floor(dividend / divider)
    	let residue = dividend % divider
		if (residue === 0) {
			return result;
		}else return result + " y sobran " + residue

    }else return "validar el numero '0'"
}
let exit = division(10,4)
console.log("Salida:", exit)	