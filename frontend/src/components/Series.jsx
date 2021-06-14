import React, { useState, useEffect } from 'react';
//  Personal Components
import SerieCard from './SerieCard';
//  React-Bootstrap Components
import {Container,Row} from 'react-bootstrap';
//  Data Components
import SeriesData from '../api/Series';

const Series = () => {
    //  Constante que simula la Base de Datos
    const [db, setDb] = useState([]);

    //  Una vez renderizada la página, se obtiene la información de las películas
    useEffect(()=>{
        setDb(SeriesData);
    }, []);

    //  Función que nos permite visualizar la información completa de la película
    const seeSerieInfo = (id) => {
        alert("Vamos a ver la info de la película con el id:" + id)
    }

    return(
        <>
            <Container className="text-center">
                <h1>Lista de Series</h1>
                <hr/>
                {db.length ===0 ? (
                    <p colSpan="3">Lista de Series Vacía</p>
                ):(
                    //md -> número de cartas de series por renglón (en pantallas medianas)
                    <Row xs={1} md={4} className="g-5">
                        {db.map((el) => (
                            <SerieCard
                                name={el.name}
                                image={el.image}
                                id={el.id}
                                seeSerieInfo={seeSerieInfo}
                            />
                        ))}
                    </Row>
                )}
            </Container>
        </>
    );
}

//  Este componente representa la lista de series con las que se cuenta
export default Series;