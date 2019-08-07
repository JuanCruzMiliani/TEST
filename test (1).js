document.getElementById("form1").onsubmit = function () {
    1 = parseInt(document.querySelector('input[name = "1"]:checked').value);
	  2 = parseInt(document.querySelector('input[name = "2"]:checked').value);
	  3 = parseInt(document.querySelector('input[name = "3"]:checked').value);
    4 = parseInt(document.querySelector('input[name = "4"]:checked').value);
	  5 = parseInt(document.querySelector('input[name = "5"]:checked').value);
	  6 = parseInt(document.querySelector('input[name = "6"]:checked').value);
    7 = parseInt(document.querySelector('input[name = "7"]:checked').value);
    8 = parseInt(document.querySelector('input[name = "8"]:checked').value);
    9 = parseInt(document.querySelector('input[name = "9"]:checked').value);
    10 = parseInt(document.querySelector('input[name = "10"]:checked').value);
    11 = parseInt(document.querySelector('input[name = "11"]:checked').value);
    12 = parseInt(document.querySelector('input[name = "12"]:checked').value);
    13 = parseInt(document.querySelector('input[name = "13"]:checked').value);
    14 = parseInt(document.querySelector('input[name = "14"]:checked').value);
    15 = parseInt(document.querySelector('input[name = "15"]:checked').value);
	  resultado = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 +15;

	document.getElementById("grade").innerHTML = result;

  if (resultado > 14) {result2 = alert=( sos una persona muy activa, te gusta estar en grupo, salir, y hacer deportes)};
  if (resultado > 20 && resultado < 30) {result2 = alert=(sos una persona a la que le gusta salir ,eres culto y no tienes problemas en adrle una mano  a nadie)};
  if (resultado  >= 30 && resultado <= 36) {result2 =alert=(sos una persona culta, que no tiene problema en ayudar  )};
  if (resultado > 36) {result2 =alert= (sos una persona tranquila, a la que le gusta estar y hacer las cosas solo. eres reservada,y culta)};
return false;
             }
