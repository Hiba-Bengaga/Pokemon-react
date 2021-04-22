import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import Loader from '../components/Loader';

const Types = ({ match }) => {

    const type = match.params.id;

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)

    const getPokemonList = async (type) => {
        const details = await getPokemonData(type);
        setPokemon(details.data.pokemon);
        console.log(details.data.pokemon)
        setLoading(false);
    }

    const getPokemonData = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        return res;

    }



    useEffect(() => {
        getPokemonList();

    }, [])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Row>
                    {pokemon.map(p => (
                        <Col key={p.pokemon.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded' style={{ border: 'none' }}>
                                <Link to={`/pokemon/${p.pokemon.id}`}>
                                    <Card.Img style={{ width: '8rem' }} variant='top' />
                                </Link>
                                <Card.Body  >
                                    <Link to={`/pokemon/${p.pokemon.name}`}>
                                        <Card.Title as='div'><strong> {p.pokemon.name}</strong></Card.Title>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            )}
        </>
    )
}

export default Types
