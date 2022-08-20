import './contador.css';

import * as  XLSX from 'xlsx';
import React, { useEffect, useState } from 'react';


export const ExcelImportButton = () => {
  //const [file, setFile] = useState();
  //const [json, setJson] = useState();
  const [notificacion, setNotificacion] = useState({ message: '', err: false })

  const handleChange = (e) => {
      if (e && e.target && e.target.files) {
        try {
          const reader = new FileReader();

          const {name} = e.target.files[0]
          let ext = e.target.files[0].name.split('.').includes("xlsx")

          if(ext){
              
            reader.readAsArrayBuffer(e.target.files[0]);
            reader.onload = (x) => {
              
              const data = x.target.result;
              const workbook = XLSX.read(data, { type: "array" });
              const sheetName = workbook.SheetNames[0];
              const worksheet = workbook.Sheets[sheetName];
              const json = XLSX.utils.sheet_to_json(worksheet);
              guardar(json,name)
            };
            e.target.value = null;
          } 
          if(!ext ){
            setNotificacion({ message: "Formato invalido", err: true })
          }
        }catch (err) {
          setNotificacion({ message: "El no fue importado, archivo invalido", err: true })
        }
    }

  }


const guardar = (json,filename) => {

  if (json) {
    let res = window.confirm(`Deseas guardar ${filename}`);
    if(res) {
      setNotificacion({ status:'importado',message: `${filename}, guardado exitosamente!`, err: false })
      setTimeout(() => setNotificacion({ err: false }), 3000)

      //console.log('guardando.....',json)
    }else if(!res){
      setNotificacion({ err: false })
    }
    //setJson();
  }
}

useEffect(() => {
}, [notificacion])

return (
  <>

   <h3> Importar Invitados </h3>
    <form >
      <input
        type="file"
        name="upload"
        id="upload"
        onChange={handleChange}
      />
    </form>

    {!notificacion.err && notificacion.status ? <p className='alert alert-success'>{notificacion.message}</p> : null}
    {notificacion.err ? <p className='alert alert-danger'>{notificacion.message}</p> : null}
  </>
);
};
