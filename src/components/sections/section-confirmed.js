import React , {useEffect,useState} from 'react'
import './header.css'
import db from '../../infrastructure/api/fire-credential'

export const SectionConfirmed = () => {

    const [clientes, setclientes] = useState([])
    const getClient = async() => {
        return await db.collection('clientes').get()
    }

    useEffect(() => {
        getClient().then(res=> console.log(res))
    }, [])
    
    return (
        <div className='d-flex section-container-back'>
            <div className='header-title'>
                <h1 className='title-bg'> Confirmar asistencia </h1>
                <a href="" class="btn btn-success ">Confirmar</a>
            </div>
        </div>

    )
}