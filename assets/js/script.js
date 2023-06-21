function resetto() {
  document.getElementById("formmm").reset();
}

function convertto() {
  const iniValue = document.getElementById("adaValue").value;
  if (iniValue === "") {
    alert("Input a number");
  } else {
    if (document.getElementById("label-v1").innerHTML == "Celsius:") {
      var ituValue = (iniValue * 9) / 5 + 32;
      document.getElementById("hasilValue").value = ituValue;
      document.getElementById("ck").value = `Fahrenheit = (${iniValue} * 9) / 5 + 32 = ${ituValue}`;
    } else {
      var ituValue = ((iniValue - 32) * 5) / 9;
      document.getElementById("hasilValue").value = ituValue;
      document.getElementById("ck").value = `Celsius = (${iniValue} - 32) * 5 / 9 = ${ituValue}`;
    }
  }
}

function reverseto() {
  document.getElementById("label-v1").innerHTML = "Fahrenheit:";
  document.getElementById("label-v2").innerHTML = "Celsius:";
  document.getElementById("adaValue").placeholder = "Fahrenheit";
  document.getElementById("hasilValue").placeholder = "Celsius";
  document.getElementById("reverser").setAttribute("onclick", "reverseto2()");
}

function reverseto2() {
  document.getElementById("label-v1").innerHTML = "Celsius:";
  document.getElementById("label-v2").innerHTML = "Fahrenheit:";
  document.getElementById("adaValue").placeholder = "Celsius";
  document.getElementById("hasilValue").placeholder = "Fahrenheit";
  document.getElementById("reverser").setAttribute("onclick", "reverseto()");
}
