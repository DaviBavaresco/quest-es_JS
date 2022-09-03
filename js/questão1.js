function NomeInvertido(nome){
    let ListaNomes = [];
   for (let i = 0; i < 4; i++) {
       let nome = prompt("Digite nomes:");
       ListaNomes.push(nome);
   }
  document.writeln("Lista de nomes: " + ListaNomes);
  
  document.writeln("Lista de nomes invertida: " + ListaNomes.reverse());
}
NomeInvertido();