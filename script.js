const redR = document.querySelector("#red");
const greenR = document.querySelector("#green");
const blueR = document.querySelector("#blue");

function colorMixer(red, green, blue) {
  const hexa = (n) => Number(n).toString(16);
  const rgbToHex = (r, g, b) => "#" + hexa(r) + hexa(g) + hexa(b);

  let color = rgbToHex(red, green, blue);
  document.body.style.background = color;

  document.querySelector("p").innerText = color;
}

document.addEventListener("input", () => {
  colorMixer(redR.value, greenR.value, blueR.value);
});
