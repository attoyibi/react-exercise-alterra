import React, { useState } from 'react';
import styles from "./FormBuku.module.css"

export default function FormPage() {
  const baseData = {
    judul: "",
    pengarang: ""
  }
  const [data, setData] = useState(baseData);
  const usernameRegex = /^[A-Za-z ]*$/
  const [errorMassage, setErrorMassage] = useState('');

  const handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "pengarang") {
      if (!usernameRegex.test(e.target.value)) {
        setErrorMassage('Nama Pengarang Harus Berupa Huruf')
      } else {
        setErrorMassage('')
      }
    }
    setData({...data, [name]: value})
  };

  const handleSubmit = e => {
    if (errorMassage === '') {
      resetForm()
    }
    e.preventDefault();
  };

  const resetForm = () => {
    setData(baseData);
  }

  return (
    <>
    <h1 style={{"textAlign":"center"}}>Formulir Buku Baru</h1>
    <form onSubmit={handleSubmit} className={styles.centerForm}>
      <label>
        Judul:
        <input
          className={styles.input}
          type="text"
          name="judul"
          value={data.judul}
          onChange={handleChange}
        />
      </label>
      <label>
        Pengarang: <br/>
        <input
          className={styles.input}
          type="text"
          name="pengarang"
          value={data.pengarang}
          onChange={handleChange}
        />
      </label>
      <span className={styles.errorMassage}>{errorMassage}</span>
      <br/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
    </>
  );
};