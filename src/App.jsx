import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Encode from "./components/Encode";
import Decode from "./components/Decode";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      {/* Latar belakang utama aplikasi dengan gradien gelap */}
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
        <Navbar />

        <main className="flex flex-col flex-grow pt-24 px-6">
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/encode" element={<Encode />} />
            <Route path="/decode" element={<Decode />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="mt-auto text-center text-xs text-slate-500 py-8 px-4">
          Proyek ini dikembangkan sebagai bagian dari tugas akademis.
          Mengimplementasikan algoritma steganografi domain DCT yang
          dimodifikasi berdasarkan metode F5 dan optimDMCSS.
        </footer>
      </div>
    </Router>
  );
}

export default App;
