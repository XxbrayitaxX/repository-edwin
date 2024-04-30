function password_verify(password){
    if(password.length === 8){
        if(/[A-Z]/.test(password)){
            if(/\d/.test(password)){
               if(!/\s/.test(password)){
                return "contraseña valida"
               }else return "no debe tener espacios"
            }else return "debe tener minimo un numero"
        }else return "debe tener minimo una mayuscula"
    }else return "debe tener 8 caracteres"
}
exit= password_verify("Fa er122")
console.log(exit)