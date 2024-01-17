import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey } from '../data'
import MessageError from './MessageError'
import { Col, Container, Row } from 'react-bootstrap'
import WeatherInfoCard from './WeatherInfoCard'


export default function Results() {
    const {lng, lat}  = useParams()
    const [forecastlist, setForecast] = useState([])
    const [meteo, setMeteo] = useState('')
    const [msgErr, setMsgErr] = useState('')

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' +lat+ '&lon=' + lng +'&appid='+apiKey , {method: 'GET'})
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setForecast(json.list)
            setMsgErr(json.message);
        })
    }, [lat , lng])

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' +lat+ '&lon=' + lng +'&appid='+apiKey , {method: 'GET'})
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setMeteo(json)
            setMsgErr(json.message);
        })
    }, [lat , lng])

    return (
        <Container>
            <h1 className='text-center my-5'>{meteo.name}</h1>
            <Row className='container'>
                <Col xs={6}>
                    <h2 className='text-center my-2'>Err Meteo de' giorno </h2>
                    <WeatherInfoCard weatherData={meteo} />
                    {msgErr && <MessageError err={msgErr} />}
                </Col>

                <Col xs={6}>
                    <h2 className='text-center my-2'>...Della Settimana</h2>
                    {forecastlist.map((forecast, i) => <WeatherInfoCard key={i} weatherData={forecast} />)}
                    {msgErr && <MessageError err={msgErr} />}
                </Col>
            </Row>
        </Container>
        
    )
}
