import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState([
    {
      nama: "Andi",
      umur: 20,
      jenisKelamin: "Laki-laki",
    },
    {
      nama: "Budi",
      umur: 25,
      jenisKelamin: "Laki-laki",
    },
  ]);
  const [namaBaru, setNamaBaru] = useState("");
  const [umurBaru, setUmurBaru] = useState("");
  const [jenisKelaminBaru, setJenisKelaminBaru] = useState("");





  useEffect(() => {
    setData(data);
  }, [data]);

  const addData = () => {
    if (namaBaru === "" || umurBaru === "" || jenisKelaminBaru === "") {
      alert("Semua data harus diisi");
      return;
    }

    const newData = {
      nama: namaBaru,
      umur: umurBaru,
      jenisKelamin: jenisKelaminBaru,
    };

    setData([...data, newData]);

    setNamaBaru("");
    setUmurBaru("");
    setJenisKelaminBaru("");
  };

  const deleteData = (nama) => {
    const newData = data.filter((item) => item.nama !== nama);

    setData(newData);
  };

  // Silahkan isi bagian updateData
  // const updateData = (nama) => {
  // };



  return (
    <div className="container">
      <h1>Daftar</h1>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Jenis Kelamin</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.nama}>
              <td>{item.nama}</td>
              <td>{item.umur}</td>
              <td>{item.jenisKelamin}</td>
              <td>
                <Button variant="danger" onClick={() => deleteData(item.nama)}>
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

      </Table>
      <br />
      <h2>Tambah Data</h2>
      <Form>
        <Form.Group>
          <Form.Label>Nama:</Form.Label>
          <Form.Control
            type="text"
            value={namaBaru}
            onChange={(e) => setNamaBaru(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Umur:</Form.Label>
          <Form.Control
            type="number"
            value={umurBaru}
            onChange={(e) => setUmurBaru(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Jenis Kelamin:</Form.Label>
          <Form.Control
            as="select"
            value={jenisKelaminBaru}
            onChange={(e) => setJenisKelaminBaru(e.target.value)}
          >
            <option value="">Pilih jenis kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="button" onClick={addData}>
          Tambah Data
        </Button>
      </Form>
    </div>
  );
};

export default App;