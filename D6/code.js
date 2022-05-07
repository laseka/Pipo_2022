function pustoTu(str) 
{
  if (str.length == 0)
  {
     return true; 
  }  	
  return false; 
}

function bialeZnaki(string) {
  return /[\s\t\r\n]{1,}/.test(string);
}

function walidujNapis(napis, komunikat) {
  if (pustoTu(napis) || bialeZnaki(napis)) {
    alert(komunikat);
    return false;
  }
  return true;
}

function poprawnyAdres(adres, obiekt) {
  let email_form = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorField = "blad_email";
  if (email_form.test(adres))
    return true;
  else {
    document.getElementById(errorField).innerHTML = "Niepoprawny adres email!";
    obiekt.focus();
    return false;
  }
}

// console.log(poprawnyAdres("fff"));
// console.log(poprawnyAdres("aga@gmail.com"));

function walidacjaFocus(obiekt, wiadomosc) {
  let str = obiekt.value;
  let errorField = "blad_" + obiekt.name.substr(0, obiekt.name.length);
  if (bialeZnaki(str) || pustoTu(str)) {
    document.getElementById(errorField).innerHTML = wiadomosc;
    obiekt.focus();
    return false;
  }
  else {
    document.getElementById(errorField).innerHTML = "";
    obiekt.blur();
    return true;
  }
}

function walidacjaEmailFocus(obiekt, wiadomosc) {
  let str = obiekt.value;
  let errorField = "blad_" + obiekt.name.substr(0, obiekt.name.length);
  if (bialeZnaki(str) || pustoTu(str)) {
    document.getElementById(errorField).innerHTML = wiadomosc;
    obiekt.focus();
    return false;
  }
  else if(!poprawnyAdres(str, obiekt)){
    return false;
  }
  else {
    document.getElementById(errorField).innerHTML = "";
    obiekt.blur();
    return true;
  }
}

function walidacjaKodFocus(obiekt, wiadomosc) {
  let str = obiekt.value;
  let errorField = "blad_" + obiekt.name.substr(0, obiekt.name.length);
  let wyObiekt = document.forms["user_data"]["wyksztalcenie"];
  if(wyObiekt.value == "wyksztalcenie_s" || 
     wyObiekt.value == "wyksztalcenie_w"){
    return true;
  }
  else if (bialeZnaki(str) || pustoTu(str)) {
    document.getElementById(errorField).innerHTML = wiadomosc;
    obiekt.focus();
    return false;
  }
  else {
    document.getElementById(errorField).innerHTML = "";
    obiekt.blur();
    return true;
  }
}

//console.log(document.forms["user_data"]["imie"].name.substr(0, document.forms["user_data"]["imie"].name.length));

function walidacjaAllFocus(obiekt, wiadomosc, funkcja) {
  if (funkcja(obiekt, wiadomosc)) {
    return true;
  }
  else {
    return false;
  }
}

function weryfikacja() {
  var imieObiekt = document.forms["user_data"]["imie"];
  var emailObiekt = document.forms["user_data"]["email"];
  var kodObiekt = document.forms["user_data"]["kod"];
  var wiadomoscObiekt = document.forms["user_data"]["wiadomosc"];
  
  var imieAlert = "Podaj imię!";
  var emailAlert = "Podaj email!";
  var kodAlert = "Podaj kod pocztowy!";
  var wiadomoscAlert = "Dodaj wiadomość!";
  
  if (walidacjaAllFocus(imieObiekt, imieAlert, walidacjaFocus) && 
      walidacjaAllFocus(emailObiekt, emailAlert, walidacjaEmailFocus) && 
      walidacjaAllFocus(kodObiekt, kodAlert, walidacjaKodFocus) && 
      walidacjaAllFocus(wiadomoscObiekt, wiadomoscAlert, walidacjaFocus)) {
    return true;
  }
  
  return false;
}

function pokazElement() {
  element = "KodPocztowy";
  document.getElementById(element).style.visibility = 'visible';
}
function ukryjElement() {
  element = "KodPocztowy";
  document.getElementById(element).style.visibility = 'hidden';
}

function licznikWierszy(i, e) {
  if (e) {
    if (i % 2 == 1) {
      e.setAttribute("style", "background-color: skyblue;");
    }
    
    e = e.nextSibling;
    
    while (e && e.nodeType != 1) {
      e = e.nextSibling;
    }
    
    licznikWierszy(++i, e);
  }
}

//console.log(document.getElementsByTagName("tr"));
licznikWierszy(1, document.getElementsByTagName("tr")[0]);

function nastepnyWezel(e) {
  while (e && e.nodeType != 1) {
    e = e.nextSibling;
  }
  return e;
}

function poprzedniWezel(e) {
  while (e && e.nodeType != 1) {
    e = e.previousSibling;
  }
  return e;
}

function zamienWezly() {
  b = document.getElementsByTagName('tr')[1];
  let tab = poprzedniWezel(b.previousSibling);
  let tBody = nastepnyWezel(tab.parentNode.firstChild);
  let lastNode = poprzedniWezel(tBody.parentNode.lastChild);
  //console.log(tab);
  //console.log(tBody);
  //console.log(lastNode);
  tBody.parentNode.removeChild(lastNode); 
  let firstNode = nastepnyWezel(tBody.parentNode.firstChild);
  //console.log(firstNode);
  tBody.parentNode.insertBefore(lastNode, firstNode);
}

function licznik(wiadomosc, pozostalo, limit){
  //console.log(wiadomosc.value.length);
  //console.log(pozostalo.innerHTML);
  //console.log(limit);
  let nowyLimit = limit - wiadomosc.value.length;
  pozostalo.innerHTML = nowyLimit;
}


// function ukryjKod(){
//   let wyObiekt = document.forms["user_data"]["wyksztalcenie"];
//   if(wyObiekt.value == "wyksztalcenie_p"){
//     document.forms["user_data"]["kod"].style.visibility = "visible";
//   }
//   else {
//     document.forms["user_data"]["kod"].style.visibility = "hidden";
//   }
// }