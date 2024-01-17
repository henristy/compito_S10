import React from 'react'
import Welcome from '../components/Welcome'
import SearchArea from '../components/SearchArea'
import { Container } from 'react-bootstrap'

export default function HomePage() {
  return (
    
    <Container >
        <Welcome />
        <SearchArea />
    </Container>
  )
}
