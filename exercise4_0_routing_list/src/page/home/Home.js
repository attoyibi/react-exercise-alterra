import { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from '../../component/home/PassengerInput';
import ListPassenger from '../../component/home/ListPassenger';

const defaultValue = [
    {
        id: uuidv4(),
        nomor: 1,
        nama: 'Yoga',
        umur: 22,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nomor: 2,
        nama: 'Ria',
        umur: 19,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nomor: 3,
        nama: 'Fahmi',
        umur: 25,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nomor: 4,
        nama: 'Lala',
        umur: 21,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nomor: 5,
        nama: 'Ivan',
        umur: 25,
        jenisKelamin: 'Pria'
    }
];

function Home() {
    const [data, setData] = useState(defaultValue);
    const [nomorUrut, setNomorUrut] = useState(5);

    const hapusPengunjung = (id) => {
        setData([
        ...data.filter((item) => {
            return item.id !== id
        }),
        ])
    }

    const tambahPengunjung = (newUser) => {
        const newData = {
        id: uuidv4(),
        ...newUser,
        }
        setData([...data, newData])
        setNomorUrut(newUser["nomor"])
    }

    return (
        <div>
            <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
            <PassengerInput tambahPengunjung={tambahPengunjung} nomor={nomorUrut} />
        </div>
    )
}

export default Home;