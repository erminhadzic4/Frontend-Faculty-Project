let otvoren = false;
let trenutniOtvoreni;
let prethodniOtvoreni;
let id;

function iscrtajVjezbe(divDOMelement, {brojVjezbi, brojZadatakaPoVjezbi}) {
  for (let i = 0; i < brojVjezbi; i++) {
    $(divDOMelement).append('<div class="vjezba" id="'+(i+1)+'"onclick="iscrtajZadatke(this);"><h3>VJEZBA ' + i + "</h3></div>"); //promjena 1 
    $(divDOMelement).append('<div class="divZadataka" id="divZadatka' + i + '">');
    $('#divZadatka' + i).hide();
    for (let j = 0; j < brojZadatakaPoVjezbi[i]; j++) 
      $('#divZadatka'+i).append('<div class="zadatak" id="zadatak' + j+ '"><p>ZADATAK ' + j + '</p></div>');
  }
  $('#divZadatka'+1).append('<div class="zadatak" id="zadatak' + 1+ '"><p>ZADATAK ' + 1+ '</p></div>'); //promjena 2
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
 
