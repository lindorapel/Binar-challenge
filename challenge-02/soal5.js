const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
]

function getInfoPenjualan(dataPenjualan){
    // tulis kode logic kamu didalam blok ini ya

    let totalKeuntungan = 0;    
    let totalModal = 0;
    let persentaseKeuntungan = 0;
    let bukuTerlaris = {
        namaProduk: '',
        totalTerjual: 0
    };
    let penulisTerlaris = {
        penulis : '',
        totalTerjual : 0
    };

    // Objek untuk melacak total penjualan per penulis
    const penulisTotalTerjual = {};
    
    // Melakukan Validasi terhadapt parameter yang diterima
        if (typeof dataPenjualan !== 'object') {
            return "Error : Invalid data type";
        }
    
        for (let i = 0; i < dataPenjualan.length; i++) {

        let buku = dataPenjualan[i];

        totalKeuntungan += (buku.hargaJual - buku.hargaBeli) * buku.totalTerjual ; // Mencari total Keuntungan dari banyaknya buku yang terjual
        totalModal += (buku.hargaBeli * buku.totalTerjual); // Mencari total modal
        
        // Mencari Buku terlaris
        if (buku.totalTerjual >  bukuTerlaris.totalTerjual) {
            bukuTerlaris.namaProduk = buku.namaProduk;
            bukuTerlaris.totalTerjual = buku.totalTerjual;
        }
        // Melacak total penjualan per penulis
        if (penulisTotalTerjual[buku.penulis]) {
            penulisTotalTerjual[buku.penulis] += buku.totalTerjual;
        } else {
            penulisTotalTerjual[buku.penulis] = buku.totalTerjual;
        }
        //console.log(penulisTotalTerjual[buku.namaProduk])
    }
    // Mencari Penulis terlaris
    for (const penulis in penulisTotalTerjual) {
        if (penulisTotalTerjual.hasOwnProperty(penulis)) {
            if (penulisTotalTerjual[penulis] > penulisTerlaris.totalTerjual) {
                penulisTerlaris.penulis = penulis;
                penulisTerlaris.totalTerjual = penulisTotalTerjual[penulis];
            }
        }
    }

    // Mencari persentase keuntungan
    persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(1) + '%';

    const result = {
        totalKeuntungan: `Rp. ${totalKeuntungan.toLocaleString()}`,
        totalModal: `Rp. ${totalModal.toLocaleString()}`,
        persentaseKeuntungan: `${persentaseKeuntungan}`,
        produkBukuTerlaris: bukuTerlaris.namaProduk,
        penulisTerlaris: penulisTerlaris.penulis  
    }
    return result;
}
console.log(getInfoPenjualan(dataPenjualanNovel));