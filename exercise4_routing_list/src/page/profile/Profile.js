import './Profile.css'
import { useHistory } from "react-router-dom";


const Profile = (props) => {

    const { id, nama, umur, jenisKelamin, nomor } = props.location.state.data;
    
    return (
        <div>
            <div className="header">
                <h1 >Info Pengunjung</h1>
                <p>Pengunjung dengan nomor {nomor}, bernama {nama}, dia seorang {jenisKelamin} berumur {umur} tahun</p>
                <p>Id user : {id}</p>
                <button>Go home</button>
            </div>
        </div>
    )
}

export default Profile;