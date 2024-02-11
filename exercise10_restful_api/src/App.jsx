import DataFetcher from './DataFetcher';
import './App.css';

function App() {
  return (
    <div className="App container">
      {/* Contoh penggunaan: Fetch semua examples */}
      <h3>Get Data All</h3>
      <DataFetcher />
      {/* Fetch berdasarkan ID */}
      <h3>Get Data By ID</h3>
      <DataFetcher id="1" />
      {/* Fetch berdasarkan nama */}
      <h3>Get Data By Name</h3>
      <DataFetcher name="Agus" />
      {/* Fetch berdasarkan umur */}
      <h3>Get Data By Age</h3>
      <DataFetcher age="30" />
      {/* Fetch berdasarkan jenis kelamin */}
      <h3>Get Data By Gender</h3>
      <DataFetcher gender="male" />
    </div>
  );
}

export default App;
