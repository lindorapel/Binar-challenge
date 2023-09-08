function changeWord(selectedText, changedText, text) {
    const words = text.split(' '); // Memisahkan kalimat menjadi array kata
    let modifiedText = ''; // Inisialisasi kalimat hasil modifikasi

    for (let i = 0; i < words.length; i++) {
        // Jika kata pada posisi i sesuai dengan selectedText, ganti dengan changedText
        if (words[i] === selectedText) {
            modifiedText += changedText;
        } else {
            modifiedText += words[i];
        }

        // Tambahkan spasi antara kata jika bukan kata terakhir
        if (i < words.length - 1) {
            modifiedText += ' ';
        }
    }
    return modifiedText;
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));