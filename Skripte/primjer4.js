$(document).ready(function () {
    iscrtajVjezbe("#glavniDiv", {brojVjezbi:3, brojZadatakaPoVjezbi:[5,2]});
    setTimeout(() => {  alert("Testni primjer 4: brojVjezbi=3, brojZadatakaPoVjezbi: [5,2]\nRezultat testa: uspjesan."); }, 500);
  });

/*Test 4: Zadan manji broj zadataka po vjezbi nego sto je samih vjezbi. Uspjesno.
Napomena: Posto u postavci ne pise sta se treba desiti ukoliko dodje do ovog slucaja, ja sam odlucio da
funkcija iscrta zadani broj vjezbi i zadatke koji su proslijedjeni a da ostale vjezbe imaju 0 zadataka.*/