import './contador.css';

import * as  XLSX from 'xlsx';
import React, { useEffect, useState } from 'react';
import db from '../../infrastructure/api/fire-credential';

export const ExcelImportButton = () => {
  //const [file, setFile] = useState();
  //const [json, setJson] = useState();

  
  const guardarImportacionInvitados = (json) => {
    
     json.forEach(async currentInvitado => {
      currentInvitado.id_cliente = currentInvitado.id_cliente.toString()
      await db.collection("invitados ").doc().set(currentInvitado)
        .then(res => {
          setNotificacion({ status:'guardado',message: `guardado en base de datos!`, err: false })
          setTimeout(() => setNotificacion({ err: false }), 3000)
        }
        )
      .catch(err => {
        setNotificacion({ message: "ALERTA! , No guardo en base de datos! "+currentInvitado.nombre, err: true })
        setTimeout(() => setNotificacion({ err: false }), 3000)
      })
      
    });
  }

  const [notificacion, setNotificacion] = useState({ message: '', err: false })

  const handleChange = (e) => {
      if (e && e.target && e.target.files) {
        try {
          const reader = new FileReader();

          const {name} = e.target.files[0]
          let ext = e.target.files[0].name.split('.').includes("xlsx")
          let fileValido = e.target.files[0].name.split('.').includes("BODA_INVITADOS")

          if(ext && fileValido){
              
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
            setNotificacion({ message: "Formato invalido o Archivo incorrecto", err: true })
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
      guardarImportacionInvitados(json)
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
