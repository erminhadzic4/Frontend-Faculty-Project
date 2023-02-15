var brVj, brZad;
let vjezbe;
let assert = chai.assert;


describe('Testovi za stranicu "Vjezbe"', function() {
 describe('Primarni testovi', function() {
     
   it("brojVjezbi mora biti prirodan cijeli broj manji od 15.", function() {
      brVj = 8;
      brZad = [3,0,0,2,3,5,6,1];
      iscrtajVjezbe("#glavniDiv", {brojVjezbi:brVj, brojZadatakaPoVjezbi:brZad});
      vjezbe = $(".vjezba").length;
      assert.isAtMost(vjezbe, 15, "Greska! broj vjezbi je veci od zadanog (15)");
      assert.isAbove(vjezbe, -1, "Greska! broj vjezbi nije prirodan broj");
      assert.isOk(Number.isInteger(brVj), "Greska! broj vjezbi nije cijeli broj"); //Provjerava da li je broj cijeli ili ne.
   });

   it("Elementi niza brojZadatakaPoVjezbi moraju biti prirodni cijeli brojevi.", function() {
    brVj = Math.trunc(brVj); //Pretvara decimalni u int zbog mogucnosti da je proslijedjen decimalni broj napocetku.
    let prirodan = true;
    assert.isAbove(Math.min(...brZad), -1, "Greska! broj vjezbi nije prirodan broj"); //Koristi se spread operator (...) jer Math.min ne ocekuje niz kao input.
    assert.isOk(prirodan, "Greska! broj vjezbi nije cijeli broj");
   });
   
   it("Treba ispisati N redova kada je brojVjezbi:N.", function() {
    let redovi = $(".vjezba").length;
    assert.equal(redovi, brVj,"Greska! Nije ispisan tacan broj redova.");
  });
  
  it("Napocetku svi zadaci moraju biti sakriveni", function() {
    let sakriveni = 1;
    let zadaci = $(".divZadataka");
    for (let i =0; i <zadaci.length; i++){
      if ($(zadaci[i]).is(':hidden') === false) sakriveni = 0;
    }
    console.log(sakriveni);
    assert.equal(sakriveni, 1,"Greska! Jedan od divova je prikazan iako ne bi trebao da bude.");
  });
});

describe('Sekundarni testovi', function() {

   it("Svaka i-ta vjezba mora imati i-ti id.", function() {
    let ima = true;
    let objekti = $(".vjezba");
    for (let i = 0; i < objekti.length; i++) if ($(objekti[i]).attr("id") != i) ima = false; //Provjerava se da li barem jedna vjezba nema korespondirajuci ID, onda test pada.
    assert.equal(ima, true,"Greska! Jedna od greski nema tacan index.");
  });

  it("Svaki i-ti divZadataka ciji element niza zadataka jeste jednak 0, ne smije imati iscrtane zadatke.", function() {
    let ima = false;
    let objekti = $(".divZadataka");
    for (let i = 0; i < objekti.length; i++)
        if($(objekti).eq(i).find(".zadatak").length != 0 && brZad[i] == 0 && brZad[i] != undefined) { //Primjer ternarne konjukcije, samo ako je sve tacno, ima postaje true.
            //zbog kratkospojne evaluacije (short circuit evaluation) prvo se gleda da li je zadatak uopce prazan ili ne.
            ima = true;
        }
    assert.equal(ima, false,"Greska! Vjezbi kao parametar nije proslijedjen zadatak.");
  });

  it("Svaki i-ti div zadataka ciji korespondirajuci element niza zadataka predstavlja broj zadataka, mora imati tacno toliko iscrtanih zadataka.", function() {
    let ima = false;
    let objekti = $(".divZadataka");
    for (let i = 0; i < objekti.length; i++) {
        if(brZad[i] < 0) continue; //Nema potrebe gledati taj element, jer funkcija sigurno nije ispisala te zadatke.
        if(($(objekti).eq(i).find(".zadatak").length) != brZad[i] && brZad[i] != undefined) //Primjer kao maloprije.
            ima = true;
        }
    assert.equal(ima, false,"Greska! Vjezbi kao parametar nije proslijedjen zadatak.");
  });

 });
});
