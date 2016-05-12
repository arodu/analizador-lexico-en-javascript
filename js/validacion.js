function validacion(){
    var texto = document.getElementById("inputCorreo").value;
    if(/^[0-9]{3}[k|K][0-9]{4}@itscarrillopuerto.edu.mx/.test(texto)){
        //alert("La validacion "+texto+" es alumno");        
        $("#msn").children("#texto").text("El correo "+texto+" pertenece a un alumno");
        $("#msn").removeClass("hidden");
    }else{
        if(/^[A-Z-a-z]{1,2}[.]{1}[A-Z-a-z]+@itscarrillopuerto.edu.mx/.test(texto)){
            //alert("La validacion "+texto+" es docente");
            $("#msn").children("#texto").text("El correo "+texto+" pertenece a un docente");
            $("#msn").removeClass("hidden");
        }else{
            //alert("La validacion es incorrecta");
            $("#msn").children("#texto").text(texto+" no es valido, intentalo nuevamente.");
            $("#msn").removeClass("hidden");
        }
    }
}