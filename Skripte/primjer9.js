$(document).ready(function () {
    iscrtajVjezbe("#glavniDiv", {brojVjezbi:20, brojZadatakaPoVjezbi:[5,5,5,5,5,5,5,5,5,5,5,5,5]});
    setTimeout(() => {  alert("Testni primjer 9: brojVjezbi=20, brojZadatakaPoVjezbi: [5,5,5,5,5,5,5,5,5,5,5,5,5]\nRezultat testa (test ne treba ispisati nista): uspjesan."); }, 500);
  });

/*Test 9: Zadano vise vjezbi od zadanog maksimuma u postavci. Uspjesno.
Napomena: S obzirom da u postavci ne pise da li se trebaju ispisati prvih 15 vjezbi ukoliko je broj vjezbi veci od maksimuma, ja sam 
samo uradio da se prekine izvrsavanje funkcije.*/