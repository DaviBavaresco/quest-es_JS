function media(){

   var nome = prompt('Digite seu nome: ');
   var n1 = Number(prompt('Digite sua primeira nota'));
   var n2 = Number(prompt('Digite sua segunda nota'));
   var n3 = Number(prompt('Digite sua terceira nota'));
   var media = (n1 + n2 + n3) / 3;

   if(media>=7){
    document.write("Parabéns aluno " + nome +" sua média foi de " + media + " você foi aprovado.");
}else{
    document.write("Que pena aluno " + nome + " sua média foi de " + media + " você reprovou.");
}

}
media();