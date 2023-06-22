function resetto() {
  document.getElementById("formmm").reset();
}

function convertto() {
  const iniValue = document.getElementById("adaValue").value; /* Mengambil value angka dari input ber-id "adaValue" */
  if (iniValue === "") {
    alert("Input a number"); /* Mengeluarkan pop-up jika menekan tombol convert tanpa mengisi angka terlebih dahulu */
  } else {
    if (document.getElementById("label-v1").innerHTML == "Celsius:") {
      var ituValue = ((iniValue * 9) / 5 + 32).toFixed(2); /* Rumus Output jika Input berbasis derajat Celsius */
      document.getElementById("hasilValue").value = ituValue; /* Print output ke element dengan id "hasilValue" */
      document.getElementById("ck").value = `Fahrenheit = (${iniValue} * 9) / 5 + 32 = ${ituValue}${String.fromCharCode(176)}F`; /* Cara Kalkulasi */
    } else {
      var ituValue = (((iniValue - 32) * 5) / 9).toFixed(2); /* Rumus Output jika Input berbasis derajat Fahrenheit */
      document.getElementById("hasilValue").value = ituValue; /* Print output ke element dengan id "hasilValue" */
      document.getElementById("ck").value = `Celsius = (${iniValue} - 32) * 5 / 9 = ${ituValue}${String.fromCharCode(176)}C`; /* Cara Kalkulasi */
    }
  }
}

/* Fungsi reverseto() dan reverseto2() berfungsi untuk mengubah teks html dan mengubah attribute onclick dalam tag button agar dapat berjalan dua arah */

function reverseto() {
  document.getElementById("label-v1").innerHTML = "Fahrenheit:";
  document.getElementById("label-v2").innerHTML = "Celsius:";
  document.getElementById("adaValue").placeholder = "Fahrenheit";
  document.getElementById("hasilValue").placeholder = "Celsius";
  document.getElementById("text-cf").innerHTML = "Fahrenheit to Celsius";
  document.getElementById("cels").innerHTML = "Fahrenheit";
  document.getElementById("fahr").innerHTML = "Celsius";
  resetto();
  document.getElementById("reverser").setAttribute("onclick", "reverseto2()");
}

function reverseto2() {
  document.getElementById("label-v1").innerHTML = "Celsius:";
  document.getElementById("label-v2").innerHTML = "Fahrenheit:";
  document.getElementById("adaValue").placeholder = "Celsius";
  document.getElementById("hasilValue").placeholder = "Fahrenheit";
  document.getElementById("text-cf").innerHTML = "Celsius to Fahrenheit";
  document.getElementById("cels").innerHTML = "Celsius";
  document.getElementById("fahr").innerHTML = "Fahrenheit";
  resetto();
  document.getElementById("reverser").setAttribute("onclick", "reverseto()");
}
