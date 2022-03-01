import axios from 'axios';
import  React, { useEffect, useState } from 'react';

const Monster = (props) => {
    const [error, setError] = useState(null);
    const [monsterDisplay, setMonsterDisplay] = useState(null);

    useEffect(() => {
        const fetchMonster = async () => {
            try {
                const {data} = await axios.get(`${process.env.REACT_APP_BASE_API}/api/Monsters/${props.MonsterName}`);
                setMonsterDisplay(data);
            } catch (err) {
                setError(err)
            }
        };
        fetchMonster().catch(console.error);
    }, [props.MonsterName]);

    if (error) {
        return (
            <div>Oops! Could not fetch monster.</div>
            )
    }

    if (monsterDisplay) {
        function toTitleCase(str) {
            return str.replace(/\w\S*/g, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        return (
            <React.Fragment>
                <h1>{monsterDisplay.name}</h1>
                <p>Size: {monsterDisplay.size}</p>
                <p>Type: {toTitleCase(monsterDisplay.type)}</p>
                {/* <p>Subtype: {toTitleCase(monsterDisplay.subtype)}</p> */}
                <p>Armor Class: {monsterDisplay.armor_Class}</p>
            </React.Fragment>
            )
    }
        
    return <h1>Loading...</h1>
};
        
export default Monster