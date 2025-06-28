
import { Link } from 'react-router-dom'; // <-- Pastikan ini diimpor
import { HiArrowRight } from 'react-icons/hi2'; // <-- Impor ikonnya

const Home = () => {
  return (
    // Kontainer untuk konten utama halaman, dibuat agar berada di tengah
    <div className="flex-grow flex items-center justify-center">
      <div className="text-center w-full max-w-3xl mx-auto">
        {/* Kartu dengan efek "Glassmorphism" */}
        <div className="bg-slate-800/50 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-cyan-500/10">
          
          {/* Judul Utama dengan Gradien Teks */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 inline-block">
            Image Steganography
          </h1>

          {/* Badge/Tag untuk nama algoritma */}
          <div className="mt-4">
            <span className="inline-block bg-cyan-900/70 text-cyan-200 text-xs font-semibold px-4 py-1 rounded-full ring-1 ring-cyan-200/30">
              Modified F5 / optimDMCSS
            </span>
          </div>

          {/* Sub-judul dengan penekanan */}
          <h2 className="mt-8 text-lg text-slate-300">
            Sembunyikan pesan rahasia di dalam gambar digital Anda.
          </h2>

          {/* Deskripsi teknis */}
          <h2 className="text-sm text-slate-400 italic mt-2">
            Menggunakan algoritma berbasis DCT:{" "}
            <span className="font-semibold text-cyan-400">F5</span> dan{" "}
            <span className="font-semibold text-cyan-400">optimDMCSS</span>.
          </h2>
          
          {/* === TOMBOL AKSI DITAMBAHKAN DI SINI === */}
          <div className="mt-10">
            <Link
              to="/encode"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <span>Embed Sekarang!</span>
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
          {/* === BATAS AKHIR TOMBOL AKSI === */}

        </div>
      </div>
    </div>
  );
};

export default Home;
