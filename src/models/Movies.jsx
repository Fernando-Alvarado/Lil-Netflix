import React, { useState, useEffect } from 'react';
//  Personal Components
import MovieCard from './MovieCard';
//  React-Bootstrap Components
import {Container,Row} from 'react-bootstrap';
//  Data Components
import MoviesData from '../data/api/Movies';

const Movies = () => {
    //  Constante que simula la Base de Datos
    const [db, setDb] = useState([]);

    //Una vez se renderiza la página, se obtiene la información de las peliculas una única vez
    useEffect(() => {
        setDb(MoviesData);
    }, []);

    //  Función que nos permite visualizar la información completa de la película
    const seeMovieInfo = (id) => {
        alert("Vamos a ver la info de la película con el id:" + id)
    }

    return(
        <Container className="text-center">
            <h1>Lista de Peliculas</h1>
            <hr/>
            {db.length === 0 ?(
                <p colSpan="3">Lista de Peliculas Vacía</p>
            ):(
                //md numero de cartas de peliculas por renglón (en pantallas medianas)
                <Row xs={1} md={4} className="g-5">
                    {db.map((el) => (
                        <MovieCard 
                            name={el.name}
                            image={el.image}
                            id={el.id}
                            seeMovieInfo={seeMovieInfo}
                        />
                    ))}
                </Row>
            )}
        </Container>
    );
}

//  Este componente representa la lista de películas con las que se cuenta
export default Movies;
