import React from 'react'
import DownloadedMovies from './componentesPanelControl/DownLoadedMov'
import PastLinks from './componentesPanelControl/LinksPasados'
import Errores from './componentesPanelControl/Errores'

const ControlPanel = () => {
    //aqui se renderizaran todos los compenentes del panel de control
    return (
        <div>
            <h1>esta es la pagina del panela de control</h1>
                <DownloadedMovies/>
                <PastLinks/>
                <Errores/>
        </div>
    )
}

export default ControlPanel