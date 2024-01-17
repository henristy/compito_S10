import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from './Select';

export default function SearchArea() {

    const [regioni,setRegioni] = useState([]);
    const [province, setProvince] = useState([]);
    const [comuni, setCommuni] = useState([]);

    const [regione,setRegione] = useState('');
    const [provincia, setProvincia] = useState('');
    const navigate = useNavigate()

    const setCoord = (name) => {
        navigate('/' + comuni.find(commune => commune.nome===name).nome + 
                 '/' + comuni.find(commune => commune.nome===name).coordinate.lat + 
                 '/' + comuni.find(commune => commune.nome===name).coordinate.lng 
                )
    }
    
    useEffect(() => {
        fetch('https://axqvoqvbfjpaamphztgd.functions.supabase.co/regioni', {method: 'GET'})
        .then(res => res.json())
        .then(json => {
            setRegioni(json)
        })
    }, [])

    useEffect(() => {
        fetch('https://axqvoqvbfjpaamphztgd.functions.supabase.co/province', {method: 'GET'})
        .then(res => res.json())
        .then(json => {
            setProvince(json.filter(obj => obj.regione === regione))
        })
    }, [regione])

    useEffect(() => {
        fetch('https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni/provincia/'+ provincia , {method: 'GET'})
        .then(res => res.json())
        .then(json => {
            setCommuni(json)
        })
    }, [provincia])
    

    return (
        <>
        {/* <Form>
            <Form.Control value={input}  size="lg" type="text" placeholder="Find out about the weather in your city! or any city..."
                onChange={(e) => {
                    setInput(e.target.value);
                    setMsgErr('');
                }}
            />
            <Button variant="primary" type="button" onClick={getCities} >Search</Button>
        </Form> */}

        <Select names={regioni} selected={setRegione}/>
        {regione && <Select names={province.map(provincia => provincia.nome)} selected={setProvincia} />}
        {provincia && <Select names={comuni.map(comune => comune.nome)} selected={setCoord} />}

        </>

            
    )
}
