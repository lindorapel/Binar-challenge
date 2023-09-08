const dataPenjualanPakAldi = [
  {
    namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan : 760000,
    kategori : "Sepatu Sport",
    totalTerjual : 90,
  },
  {
    namaProduct : 'Sepatu Warior Tristan Black Brown High',
    hargaSatuan : 960000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 37,
  },
  {
    namaProduct : 'Sepatu Warior Tristan Maroon High',
    hargaSatuan : 360000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 90,
  },
  {
    namaProduct : 'Sepatu Warior Rainbow Tosca Corduroy',
    hargaSatuan : 120000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 90,
  }
]

function hitungTotalPenjualan(dataPenjualan){
  //tulis kode logic kamu didalam blok ini ya
  
  let totalPenjualan = 0;
  
  // Melakukan Validasi terhadapt parameter yang diterima
  if (typeof dataPenjualan !== 'object') {
    return "Error : Invalid data type";
  }

  for (let i = 0; i < dataPenjualan.length; i++) {
    totalPenjualan += dataPenjualan[i].totalTerjual;  
  }

 
  return totalPenjualan
}

//EXPECTED RESULT
// Ketika Function tersebut dipanggin dengan variabel dataPenjualanPakAldi

console.log(hitungTotalPenjualan(dataPenjualanPakAldi))

// EXPECTED OUTPUT => 307
// 307 dari mana? dari setiap value property 'totalTerjual', yaitu 90 + 37 + 90 +90