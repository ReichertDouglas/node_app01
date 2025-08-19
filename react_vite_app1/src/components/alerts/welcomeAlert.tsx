import Swal from "sweetalert2";
import confetti from "canvas-confetti";

export default function WelcomeAlert() {
  confetti({
    particleCount: 2000,
    spread: 360,
    origin: { y: 0.6 },
    colors: [
      "#bb0000",
      "#ffffff",
      "#ff0000",
      "#ffbb00",
      "#00ffbb",
      "#00bbff",
      "#bb00ff",
    ],
  });

  Swal.fire({
    title: "Parabéns!",
    text: "Você está iniciando uma jornada pela web moderna!!",
    icon: "success",
    confirmButtonText: "Vamos lá!",
  });
}
