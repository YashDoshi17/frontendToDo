import Axios from "axios";
import {useState, useEffect} from "react";
import CompletedListRow from "./CompletedListRow";

function CompletedList(){
    const[arr, setArr] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/completedTaskRoute/")
        .then((res)=>{
            if(res.status === 200){
                setArr(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    },[])

    const ListItems = ()=>{
        return arr.map((val,ind)=>{
            return <CompletedListRow obj={val} />
        })
    }

    return(
        <table class="table table-bordered table-striped table-success" style={{maxWidth:"60%", margin:"10px auto"}}>
            <thead>
                <tr>
                    <th class="text-center">Task</th>
                    <th class="text-center">Due Date</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}


export default CompletedList;