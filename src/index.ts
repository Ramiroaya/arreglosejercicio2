let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");

btnEnviar1.addEventListener("click", () => {
  let arreglo: number[] = Array(5);
  let indice: number;

  for (indice = 0; indice < arreglo.length; indice++) {
    arreglo[indice] = Number(prompt("Ingrese el valor del indice" + indice));
    console.log(
      "El numero en el indice " + indice + "  es:  " + arreglo[indice]
    );
  }
});
