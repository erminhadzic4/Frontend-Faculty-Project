$(document).ready(function () {
    iscrtajVjezbe("#glavniDiv", {brojVjezbi:3, brojZadatakaPoVjezbi:[3,2]});
    setTimeout(() => {  alert("Testni primjer 8: brojVjezbi=3, brojZadatakaPoVjezbi: [3,2]\nRezultat testa: uspjesan."); }, 500);
  });

//Test 8: Zadano manje zadataka nego sto je vjezbi. Iscrtani zadaci za samo te vjezbe. Zadnja vjezba nema zadataka. Uspjesno.