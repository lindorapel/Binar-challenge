const checkTypeNumber = (givenNumber) => {
    // tulis kode logic didalam blok ini
    
    // Melakukan pengecekan apakah parameter givenNumber tidak memiliki nilai(null)
    if ( givenNumber == null) {
        return "Error : Bro where is te parameter?";
    }
    
    // Mengecek apakah parameter givenNumber tidak merupakan tipe data number(angka)
    if (typeof givenNumber !== 'number') {
        return "Error : Invalid data type";
    }

    // Melakukan pengecekan apakah parameter givenNumber bernilai ganjil/genap
    if (givenNumber % 2 === 0) {
        return "GENAP";
    } else {
        return "GANJIL";
    }
};

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)) // Output yang keluar => "GENAP"
console.log(checkTypeNumber(3)) // Output yang keluar => "GANJIL"
console.log(checkTypeNumber("3")) // Output yang keluar => "Error : Invalid data type"
console.log(checkTypeNumber({})) // Output yang keluar => "Error : Invalid data type"
console.log(checkTypeNumber([])) // Output yang keluar => "Error : Invalid data type"
console.log(checkTypeNumber()) // Output yang keluar => "Error : Bro where is te parameter?"