import axios from 'axios';
import  React, { useEffect, useState } from 'react';

const Monsters = (props) => {
    const [error, setError] = useState(null);
    const [monsterDisplay, setMonsterDisplay] = useState(null);
    console.log('monsterComponent')

    useEffect(() => {
        const fetchMonster = async () => {
            try {
                const {data} = await axios.get(`${process.env.REACT_APP_BASE_API}/api/Monsters/${props.MonsterName}`);
                setMonsterDisplay(data);
            } catch (err) {
                setError(err)
                console.log(err)
            }
        };
        console.log('useEffect')
        fetchMonster().catch(console.error);
    }, [props.MonsterName]);

    
    
    if (error) {
        return (
            <div>Oops! Could not fetch monster.</div>
            )
        }

    if (monsterDisplay) {
        return (
            <React.Fragment>
                <h1>{monsterDisplay.name}</h1>
                <p>{monsterDisplay.size}</p>
            </React.Fragment>
            )
        }
        
    return <h1>Loading...</h1>
};
        
export default Monsters