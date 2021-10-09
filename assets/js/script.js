let numero_juegos = 0;
let score_jugador = 0, score_maquina = 0;
const button1 = document.getElementById('piedra');
const button2 = document.getElementById('papel');
const button3 = document.getElementById('tijeras');

const jugadas = document.getElementById('jugadas');
const lb_quienGana = document.getElementById('quienGana');
const lb_scoreJugador = document.getElementById('score-jugador');
const lb_scoreMaquina = document.getElementById('score-maquina');
const img_jugador = document.getElementById('img_jugador');
const img_maquina = document.getElementById('img_maquina');

do{
    numero_juegos = prompt("Cuantas veces quieres jugar?");
}while(numero_juegos <= 0 || (isNaN(numero_juegos)));

jugadas.innerHTML = "Jugadas restantes: " + numero_juegos;

function jugar(eleccion_jugador) {
    if(numero_juegos <= 0 || (isNaN(numero_juegos))){
        numero_juegos = prompt("Cuantas veces quieres jugar?");
        if(numero_juegos <= 0 || (isNaN(numero_juegos))){return jugar(1);}
        score_jugador = 0;
        score_maquina = 0;
        jugadas.innerHTML = "Jugadas restantes: " + numero_juegos;
        lb_quienGana.innerHTML = "Cachipun";
        lb_scoreMaquina.innerHTML = "Maquina " + score_maquina + "  > >";
        lb_scoreJugador.innerHTML = "< < " + score_jugador + " Jugador";
        img_jugador.src = "assets/img/interrogacion.png";
        img_maquina.src = "assets/img/interrogacion.png";
        return 0;
    }
    let eleccion_maquina = Math.floor(Math.random()*3) + 1;
    switch(eleccion_jugador){
        case 1:
            if(eleccion_maquina == 1){
                lb_quienGana.innerHTML = "Empate";
                img_jugador.src = "assets/img/rock.png";
                img_maquina.src = "assets/img/rock.png";
            }else if(eleccion_maquina == 2){
                lb_quienGana.innerHTML = "Gana Maquina";
                score_maquina++;
                img_jugador.src = "assets/img/rock.png";
                img_maquina.src = "assets/img/paper-white.png";
            }else{
                lb_quienGana.innerHTML = "Gana Jugador";
                score_jugador++;
                img_jugador.src = "assets/img/rock-white.png";
                img_maquina.src = "assets/img/scissors.png";
            }
            break;
        case 2:
            if(eleccion_maquina == 1){
                lb_quienGana.innerHTML = "Gana Jugador";
                score_jugador++;
                img_jugador.src = "assets/img/paper-white.png";
                img_maquina.src = "assets/img/rock.png";
            }else if(eleccion_maquina == 2){
                lb_quienGana.innerHTML = "Empate";
                img_jugador.src = "assets/img/paper.png";
                img_maquina.src = "assets/img/paper.png";
            }else{
                lb_quienGana.innerHTML = "Gana Maquina";
                score_maquina++;
                img_jugador.src = "assets/img/paper.png";
                img_maquina.src = "assets/img/scissor-white.png";
            }
            break;
        case 3:
            if(eleccion_maquina == 1){
                lb_quienGana.innerHTML = "Gana Maquina";
                score_maquina++;
                img_jugador.src = "assets/img/scissors.png";
                img_maquina.src = "assets/img/rock-white.png";
            }else if(eleccion_maquina == 2){
                lb_quienGana.innerHTML = "Gana Jugador";
                score_jugador++;
                img_jugador.src = "assets/img/scissor-white.png";
                img_maquina.src = "assets/img/paper.png";
            }else{
                lb_quienGana.innerHTML = "Empate";
                img_jugador.src = "assets/img/scissors.png";
                img_maquina.src = "assets/img/scissors.png";
            }
            break;
    }
    numero_juegos--;
    jugadas.innerHTML = "Jugadas restantes: " + numero_juegos;
    lb_scoreMaquina.innerHTML = "Maquina " + score_maquina + "  > >";
    lb_scoreJugador.innerHTML = "< < " + score_jugador + " Jugador";
    if(numero_juegos <= 0){
        jugadas.innerHTML = "JUEGO TERMINADO";
        if(score_maquina > score_jugador){
            lb_quienGana.innerHTML = "HA GANADO MAQUINA. Click en cualquier boton para volver a jugar";
        }else if(score_jugador > score_maquina){
            lb_quienGana.innerHTML = "HA GANADO JUGADOR. Click en cualquier boton para volver a jugar";
        }else{
            lb_quienGana.innerHTML = "NADIE HA GANADO. Click en cualquier boton para volver a jugar";
        }
    }
}

button1.onclick = () => {jugar(1)};
button2.onclick = () => {jugar(2)};
button3.onclick = () => {jugar(3)};