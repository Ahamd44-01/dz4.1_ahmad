document.addEventListener("DOMContentLoaded", function() {
  function showLight(color) {

      document.getElementById("red").style.backgroundColor = "grey";
      document.getElementById("yellow").style.backgroundColor = "grey";
      document.getElementById("green").style.backgroundColor = "grey";
      const message = document.getElementById("message");

      if (color === "красный") {
          document.getElementById("red").style.backgroundColor = "red";
          message.innerText = "STOP";
      } else if (color === "желтый") {
          document.getElementById("yellow").style.backgroundColor = "yellow";
          message.innerText = "WAIT";
      } else if (color === "зеленый") {
          document.getElementById("green").style.backgroundColor = "green";
          message.innerText = "GO";
      } else {
          message.innerText = "Неправильный цвет";
      }
  }

  const userColor = prompt("Введите цвет (красный, желтый или зеленый):").toLowerCase().trim();
  showLight(userColor);
});