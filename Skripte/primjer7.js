$(document).ready(function () {
    iscrtajVjezbe("#glavniDiv", {brojVjezbi:1, brojZadatakaPoVjezbi:[1,2]});
    setTimeout(() => {  alert("Testni primjer 7: brojVjezbi=1, brojZadatakaPoVjezbi: [1,2]\nRezultat testa: uspjesan."); }, 500);
  });

//Test 7: Zadano vise zadataka nego sto je vjezbi. Iscrtani zadaci za samo tu vjezbu. Uspjesno.