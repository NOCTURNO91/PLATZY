var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";
var resultado = function(jugador,maquina){
    if(jugar != maquina){
        if(jugador === op1 & maquina === op3){
            console.log("Jugador GANA con" + op1);

        }else if(jugador === op2 & maquina === op1){
            console.log("jugador GANA con" + op2);

        }else if(jugador === op3 & maquina === op2){
            console.log("Jugador GANA con" + op3)
        }else{
            console.log("Maquina GANA!!")
        }
    }else if(jugador === maquina){
        console.log("Empate")
    }
}
resultado(op1,op2);