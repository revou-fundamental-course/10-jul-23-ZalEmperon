function operasiBMI(){ // Fungsi Pengoperasian dan Keputusan BMI
  // Elemen dengan id formBMI akan melakukan aksi berikut jika melakukan submit
  document.getElementById('formBmi').addEventListener("submit", function (event) {
    event.preventDefault();
    let brtGndr, brtBdn, brtTngg, brtTotal, brtPesan;
    // Mendapatkan Value/nilai dari inputan form
    brtGndr = document.querySelector('input[name="gender"]:checked').value;
    brtBdn = document.getElementById('berat').value;
    brtTngg = document.getElementById('tinggi').value;
    //Hitung BMI
    brtTotal = (brtBdn / ((brtTngg/100)**2)).toFixed(1);
    //Perkondisian BMI
    if(brtTotal < 18.5){
      brtPesan = 'berada dalam kategori kekurangan berat badan. Kondisi ini dapat berpotensi menyebabkan masalah kesehatan seperti kekurangan gizi, kelemahan, dan gangguan kesehatan lainnya.';
    }else if(brtTotal >= 18.5 && brtTotal <= 24.9){
      brtPesan = 'berada pada kategori berat badan yang normal. Tetap menjaga pola makan sehat, berolahraga secara teratur, dan hidup gaya hidup sehat adalah kunci untuk mempertahankan berat badan ideal.';
    }else if(brtTotal >= 25 && brtTotal <= 29.9){
      brtPesan = 'berada dalam kategori kelebihan berat badan. Kelebihan berat badan dapat meningkatkan resiko kesehatan. Penting untuk mengadopsi gaya hidup sehat,untuk mengurangi berat badan dan memperbaiki kesehatan.';
    }else if(brtTotal >= 30){
      brtPesan = 'berada dalam kategori Kegemukan. Kondisi ini dapat menyebabkan masalah kesehatan serius, termasuk diabetes, dan penyakit jantung. Diperlukan perubahan gaya hidup menuju sehat dan mendapatkan dukungan dari ahli kesehatan.';
    }
    // Memanggil Fungsi Tampil
    tampilBMI(brtTotal, brtPesan, brtGndr);
  });
}

// Fungsi Menampilkan Hasil kalkulator
function tampilBMI(berat, pesan, gender){
  document.getElementById('nampil').style.display = 'grid';
  document.getElementById('gambarHasil').src = 'asset/img/'+gender+'.png'
  document.getElementById('skorHasil').innerHTML =  'Hasil BMI mu ' + berat ;
  document.getElementById('teksHasil').innerHTML =  '<br>Kamu '+ pesan;
}

// Fungsi Menghilangkan Hasil kalkulator
function resetBMI(){
  document.getElementById('nampil').style.display = 'none';
}
// Memanggil Fungsi Operasi
operasiBMI();