$(document).ready(function () {
    iscrtajVjezbe("#glavniDiv", {brojVjezbi:-1, brojZadatakaPoVjezbi:[5,2]});
    setTimeout(() => {  alert("Testni primjer 5: brojVjezbi=-1, brojZadatakaPoVjezbi: [5,2]\nRezultat testa (test ne treba ispisati nista): uspjesan."); }, 500);
  });

//Test 5: Zadan negativan broj vjezbi. Uspjesno.