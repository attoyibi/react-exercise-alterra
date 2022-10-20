import '../../page/home/Home.css';
import { useHistory } from "react-router-dom";
const ListItem = (props) => {

    const { id, nama, umur, jenisKelamin } = props.data;
    

    return (
        <tr>
            <td >{nama}</td>
            <td>{umur}</td>
            <td>{jenisKelamin}</td>
            <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
        </tr>
    )
}

export default ListItem;