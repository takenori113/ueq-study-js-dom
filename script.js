export const main = () => {
  document.querySelector("a").textContent = "REDIMPULZ"
  document.querySelector("a").setAttribute("href", "https://redimpulz.com/")
  const para = document.createElement("p");
  document.querySelector("section").appendChild(para);
  para.textContent = "We hope you enjoy JavaScript."
  para.setAttribute("class","highlight")
  document.querySelector("#temp").remove();
};

window.addEventListener("load", main);
