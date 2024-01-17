import React from 'react';
import { WiThermometer, WiHumidity, WiRain, WiStrongWind } from 'react-icons/wi';
import { Card} from 'react-bootstrap';

const WeatherInfoCard = ({  weatherData }) => {

  const date = new Date( weatherData.dt * 1000).toLocaleDateString();

  return (

    <Card style={{ margin: '20px', maxWidth: '600px' }}>
        <Card.Img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMbVTPkgUWv2ztircPnSHY-GvJhMYv9uxUQ&usqp=CAU" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Body className='bg-opacity-75 bg-white fw-bold text-center' >
                <Card.Title style={{ fontSize: '1.5rem', color: '#007bff' }}>
                     Date: {date}
                </Card.Title>
                <Card.Text>Time: { weatherData.dt_txt}</Card.Text>
                <Card.Text>
                    <WiThermometer className='me-3 align-middle' /> {Math.round( weatherData.main.temp - 273.15)} ° C
                </Card.Text>
                <Card.Text>
                    <WiHumidity className='me-3 align-middle' /> Humidity: { weatherData.main.humidity}%
                </Card.Text>
                <Card.Text>
                    <WiRain className='me-3 align-middle' /> Probability of Precipitation: { weatherData.pop}
                </Card.Text>
                { weatherData.rain && (
                    <Card.Text>
                    <WiRain className='me-3 align-middle' /> Rain (3h): { weatherData.rain['3h']} mm
                    </Card.Text>
                )}
                <Card.Text>
                    <WiStrongWind className='me-3 align-middle' /> Wind Speed: { weatherData.wind.speed} m/s
                </Card.Text>
                <Card.Text>Wind Direction: { weatherData.wind.deg}°</Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
    </Card>
  )
};

export default WeatherInfoCard;
