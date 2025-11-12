import axios from "axios"
import { StudentUrl } from "../api"

export const GetStudents = async () =>{
    const token = localStorage.getItem('token');
    const res = await axios.get(StudentUrl,{
        headers : {Authorization : `Bearer ${token}`}
    }
    )
    return res.data.data;
}