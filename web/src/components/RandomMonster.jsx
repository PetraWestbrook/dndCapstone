import axios from 'axios';
import  React, { useEffect, useState } from 'react';
import Monster from './MonsterDisplay';

const Monsters = () => {
    const [error, setError] = useState(null);
    const [monsterList, setMonsterList] = useState(null);
    
    useEffect(() => {
        const fetchMonsterList = async () => {
            try {
                const {data} = await axios.get(`${process.env.REACT_APP_BASE_API}/api/Monsters`);
                setMonsterList(data);
            } catch (err) {
                setError(err)
            }
        };
        fetchMonsterList().catch(console.error);
    }, []);
    
    if (error) {
        return (
            <div>Oops! Could not fetch monster list.</div>
            )
        }

    if (monsterList) {
        let randomIndex = Math.floor(Math.random() * monsterList.count)
        let randomMonster = monsterList.results[randomIndex].index
        return (
            <Monster MonsterName={randomMonster}/>
            )
        }
        
    return <h1>Loading...</h1>

};

        
export default Monsters