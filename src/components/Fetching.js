import React ,{useState,useEffect} from 'react';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
function Fetching(props) {
    console.log(props.file)
    const columns = [
        {
         name: "Title",
         label: "Title",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "Writer",
         label: "Writer",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "Runtime",
         label: "Runtime",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "Released",
         label: "Released",
         options: {
          filter: true,
          sort: true
         }
        },
       ];
       const [Title,setTitle]=useState("");
       const [Writer,setWriter]=useState("");
       const [Runtime,setRuntime]=useState("");
       const [Release,setRelease]=useState("");
       useEffect(()=>{

        axios.get(
            'http://www.omdbapi.com/?i=tt3896198&apikey=a3ed9a7d',
          ).then(res => {
              setTitle(res.data.Title)
              setWriter(res.data.Writer)
              setRuntime(res.data.Runtime)
              setRelease(res.data.Released)
          })
          .catch((error) => {
                console.log(error)
              });
        },[])
       const data = [
        { Title: Title, Writer: Writer, Runtime: Runtime, Released:Release },
       ];
       const options = {
         filter:false,
         rowsPerPageOptions:[1,2,3,4]
       };

    return (
        <MUIDataTable
        title={"Movies"}
        columns={columns}
        data={data}
        options={options}
        />
    );
  }

export default Fetching;