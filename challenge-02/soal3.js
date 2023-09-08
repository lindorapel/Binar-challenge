function getAngkaTerbesarKedua(personName){
  
  if (personName == null) {
    return "ERROR : Data yang di input harus berupa array"
  }

  // Melakukan validasi apakah parameter personName ada atau array berisi 2 atau lebih
  else if (!Array.isArray(personName) || personName.length < 2) {
    return "ERROR: Array harus berisi setidaknya 2 angka";
  }
  
  // Mengurutkan array dalam urutan menurun (dari besar ke kecil)
  const sortedArray = personName.sort((a, b) => b - a);

  // Mengambil angka terbesar kedua
  const angkaTerbesarKedua = sortedArray[1];

  return angkaTerbesarKedua;
 }

// EXPECTED RESULT
// Ketika Function tersebut dipanggil
const dataAngka = [12,4,7,7,4,3,2,8]

console.log(getAngkaTerbesarKedua(dataAngka))
// EXPECTED OUTPUT :
// 8

console.log(getAngkaTerbesarKedua(0))
// EXPECTED OUTPUT :
// "ERROR : (Kamu jelasin ini eror nya apa dan kenapa)"

console.log(getAngkaTerbesarKedua())
// EXPECTED OUTPUT :
// "ERROR : (Kamu jelasin ini eror nya apa dan kenapa)"