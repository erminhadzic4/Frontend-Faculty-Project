$(document).ready(function () {
    iscrtajVjezbe("#glavniDiv", {brojVjezbi:0, brojZadatakaPoVjezbi:[-1]});
    setTimeout(() => {  alert("Testni primjer 6: brojVjezbi=0, brojZadatakaPoVjezbi: [-1]\nRezultat testa (test ne treba ispisati nista): uspjesan."); }, 500);
  });

//Test 6: Zadano 0 vjezbi i negativan broj zadataka po vjezbi. Uspjesno.