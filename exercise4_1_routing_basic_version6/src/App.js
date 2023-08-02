import { Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <h1>Contoh Dasar</h1>
        <p>
          Contoh ini menunjukkan beberapa fitur inti dari React Router, termasuk{" "}
          <code>&lt;Route&gt;</code> bersarang, <code>&lt;Outlet&gt;</code>,{" "}
          <code>&lt;Link&gt;</code>, dan penggunaan route "*" (dikenal sebagai
          "splat route") untuk menampilkan halaman "tidak ditemukan" ketika
          seseorang mengakses URL yang tidak dikenali.
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </p>
      </header>
    </div>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
