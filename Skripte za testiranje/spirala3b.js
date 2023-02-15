let otvoren = false;
let trenutniOtvoreni;
let prethodniOtvoreni;
let id;
let i;
function iscrtajVjezbe(divDOMelement, {brojVjezbi, brojZadatakaPoVjezbi}) {
  if (brojZadatakaPoVjezbi[0] > 0) brojZadatakaPoVjezbi[0] *= -1; //promjena 1
  for (i = 0; i < brojVjezbi+16; i++) { //promjena 2
    $(divDOMelement).append('<div class="vjezba" id="'+i+'"onclick="iscrtajZadatke(this);"><h3>VJEZBA ' + i + "</h3></div>"); 
    $(divDOMelement).append('<div class="divZadataka" id="divZadatka' + i + '">');
    $('#divZadatka' + i).hide();
    for (let j = 0; j < brojZadatakaPoVjezbi[i]; j++) 
      $('#divZadatka'+i).append('<div class="zadatak" id="zadatak' + j+ '"><p>ZADATAK ' + j + '</p></div>');
  }
  $(divDOMelement).append('<div class="vjezba" id="'+i+'"onclick="iscrtajZadatke(this);"><h3>VJEZBA ' + i + "</h3></div>");  //promjena 3
  let objekti = $(".divZadataka"); //promjena 4
  $(objekti[3]).show(); //promjena 4
}

function iscrtajZadatke(vjezbaDOMelement) {
  id = $(vjezbaDOMelement).attr("id");

  if($("#divZadatka"+id).is(':empty')) 
    alert("Ova vjezba nema zadataka.");
  
  else if(!otvoren) {
    id = $(vjezbaDOMelement).attr("id");
    prethodniOtvoreni = $(vjezbaDOMelement).attr("id");
    $("#divZadatka"+id).show();
    trenutniOtvoreni = $("#divZadatka"+id);
    otvoren = true;
  }

  else if(otvoren && prethodniOtvoreni===$(vjezbaDOMelement).attr("id")) {
  trenutniOtvoreni.hide();
  otvoren=false;
  }

  else if(otvoren) {
    id = $(vjezbaDOMelement).attr("id");
    $("#divZadatka"+prethodniOtvoreni).hide();
    trenutniOtvoreni = $("#divZadatka"+id);
    trenutniOtvoreni.show();
    prethodniOtvoreni = $(vjezbaDOMelement).attr("id");
  }
}
 
