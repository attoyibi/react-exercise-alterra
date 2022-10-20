import React, { useState, useRef } from "react";
import styles from "./FormBuku.module.css";

export default function FormPage() {
  const baseData = {
    judul: "",
    pengarang: "",
    cetakan: "",
    tahunTerbit: 0,
    kotaTerbit: "",
    harga: 0,
    selecTag: "",
    jenisKelamin: "",
  };
  const fotoSampul = useRef("");
  console.log("fotoSampul=", fotoSampul);
  const [data, setData] = useState(baseData);
  const usernameRegex = /^[A-Za-z ]*$/;
  const [errorMassage, setErrorMassage] = useState("");
  const [radioButton1, setRadioButton1] = useState(false);
  const [radioButton2, setRadioButton2] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    console.log("name = ", e);
    let value = e.target.value;
    if (name === "pengarang") {
      if (!usernameRegex.test(e.target.value)) {
        setErrorMassage("Nama Pengarang Harus Berupa Huruf");
      } else {
        setErrorMassage("");
      }
    }
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    if (errorMassage !== "") {
      alert(`Data Buku Tidak Lengkap`);
    } else {
      alert(`Data Buku "${data.judul}" Berhasil Diterima`);
      console.log(data);
      resetForm();
    }
    e.preventDefault();
  };

  const resetForm = () => {
    setData(baseData);
    fotoSampul.current.value = "";
  };
  const handleChangeSelecTag = (e) => {
    console.log("e = ", e);
    setData({ ...data, selecTag: e.target.value });
  };
  const handleChangeRadioButton = (e) => {
    console.log(e);
    if (e.target.name === "laki") {
      setRadioButton1(e.target.checked);
      setRadioButton2(!e.target.checked);
      setData({ ...data, jenisKelamin: e.target.name });
      // console.log(data);
    } else if (e.target.name === "perempuan") {
      setRadioButton1(!e.target.checked);
      setRadioButton2(e.target.checked);
      setData({ ...data, jenisKelamin: e.target.name });

      // console.log(data);
    }
  };

  return (
    <>
      <h1 style={{ "text-align": "center" }}>Formulir Buku Baru</h1>
      <form onSubmit={handleSubmit} className={styles.centerForm}>
        <label>
          Judul:
          <input
            required
            className={styles.input}
            type="text"
            name="judul"
            value={data.judul}
            onChange={handleChange}
          />
        </label>
        <label>
          Pengarang: <br />
          <input
            required
            className={styles.input}
            type="text"
            name="pengarang"
            value={data.pengarang}
            onChange={handleChange}
          />
        </label>
        <label>
          Cetakan: <br />
          <input
            type="text"
            name="cetakan"
            value={data.cetakan}
            onChange={handleChange}
          />
        </label>
        <label>
          Tahun Terbit: <br />
          <input
            type="number"
            name="tahunTerbit"
            value={data.tahunTerbit}
            onChange={handleChange}
          />
        </label>
        <label>
          Kota Terbit: <br />
          <input
            type="text"
            name="kotaTerbit"
            value={data.kotaTerbit}
            onChange={handleChange}
          />
        </label>
        <label>
          Harga: <br />
          <input
            type="number"
            name="harga"
            value={data.harga}
            onChange={handleChange}
          />
        </label>
        <label>
          Foto Sampul: <br />
          <input
            type="file"
            name="fotoSampul"
            ref={fotoSampul}
            onChange={handleChange}
          />
        </label>
        <span className={styles.errorMassage}>{errorMassage}</span>
        {/* tambahan ku */}
        <label>
          Pick your favorite flavor:
          <select value={data.selecTag} onChange={handleChangeSelecTag}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          <p>Jenis Kelamin</p>
          <input
            type="radio"
            checked={radioButton1}
            name="laki"
            onClick={handleChangeRadioButton}
          />
          Laki-laki
          <input
            type="radio"
            checked={radioButton2}
            name="perempuan"
            onClick={handleChangeRadioButton}
          />
          Perempuan
        </label>
        {/* tambahan ku  */}
        <br />
        <br />
        <input type="submit" value="Submit" />
        {/* <button className={styles.buttonSubmit} onClick={handleSubmit}>Submit</button> */}
        <button className={styles.buttonReset} onClick={resetForm}>
          Reset
        </button>
      </form>
    </>
  );
}
