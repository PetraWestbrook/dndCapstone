import axios from 'axios';
import { React, useEffect, useState } from 'react';

const Monsters = () => {
    const [error, setError] = useState(null);
    const [monsterDisplay, setMonsterDisplay] = useState(null);

    useEffect(() => {
        const fetchMonster = async () => {
            try {
                const {data} = await axios.get(`${process.env.REACT_APP_BASE_API}/api/Monsters/aboleth`);
                setMonsterDisplay(data);
            } catch (err) {
                setError(err);
            }
        };
        fetchMonster();
    }, []);

    
    if (monsterDisplay) {
        return (
            <h1>{monsterDisplay.name}</h1>)
        };
        
    if (error) {
        return (
        <div>Oops! Could not fetch monster.</div>
            )
        };    
};
        
export default Monsters