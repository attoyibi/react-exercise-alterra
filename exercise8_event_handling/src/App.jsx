import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'



function App() {
  const [copiedText, setCopiedText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleCopy() {
    setCopiedText("Teks berhasil disalin!");
    navigator.clipboard.writeText("Teks berhasil disalin!");
    console.log("Teks berhasil disalin!");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Nama: ${name}, Email: ${email}`);
  }

  function handleChangeName(e) {
    setName(e.target.value);
    console.log(`Nama: ${e.target.value}`);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    console.log(`Email: ${e.target.value}`);
  }

  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
    console.log(`Posisi mouse: X: ${e.clientX}, Y: ${e.clientY}`);
  }

  function handleClick(e) {
    console.log(`Event type: ${e.type}`);
    console.log(`Target element: ${e.target.tagName}`);
  }

  function handleDelete(id) {
    console.log(`Tombol dengan ID ${id} diklik!`);
  }


  return (
    <div>
      <Form.Control className='mb-2' type="text" value={copiedText} readOnly />
      <Button onClick={handleCopy}>Salin Teks</Button>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="name">Nama:</Form.Label>
        <Form.Control type="text" id="name" value={name} onChange={handleChangeName} />
        <br />
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control type="email" id="email" value={email} onChange={handleChangeEmail} />
        <br />
        <Button type="submit">Kirim</Button>
      </Form>
      <hr />
      <div onMouseMove={handleMouseMove}>
        <p>Gerakkan mouse Anda di area ini!</p>
        <p>Posisi X: {position.x}, Posisi Y: {position.y}</p>
      </div>
      <hr />
      <div onClick={handleClick}>
        <p>Klik di area ini!</p>
      </div>
      <hr />
      <div>
        <div className='mb-2'>
          <Button onClick={() => handleDelete(1)}>Tombol 1</Button>
        </div>
        <div>
        <Button onClick={() => handleDelete(2)}>Tombol 2</Button>
        </div>
      </div>
    </div>
  );
}


export default App
