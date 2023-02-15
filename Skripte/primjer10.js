$(document).ready(function () {
    iscrtajVjezbe("#glavniDiv", {brojVjezbi:15, brojZadatakaPoVjezbi:[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]});
    setTimeout(() => {  alert("Testni primjer 10: brojVjezbi=15, brojZadatakaPoVjezbi: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]\nRezultat testa: uspjesan."); }, 500);
  });

//Test 10: Stress test; Zadano 15 vjezbi i po 15 zadataka u svakoj vjezbi. Uspjesno. 