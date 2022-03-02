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
                <div>Size: {monsterDisplay.size}</div>
                <div>Type: {toTitleCase(monsterDisplay.type)}</div>
                {monsterDisplay.subtype ?
                    <div>Subtype: {toTitleCase(monsterDisplay.subtype)}</div> : <React.Fragment />}
                <div>Armor Class: {monsterDisplay.armor_Class}</div>
                <div>Hit Points: {monsterDisplay.hit_Points}</div>
                <div>Hit Dice: {monsterDisplay.hit_Dice}</div>
                {monsterDisplay.forms ?
                    <div>Form(s): {monsterDisplay.forms.map((form) => {
                        return (
                            <React.Fragment>
                                <div>{form.name}</div>
                            </React.Fragment>
                        )
                    })}</div> : <React.Fragment />}
                <div>Walking Speed: {monsterDisplay.speed.walk}</div>
                <div>Flying Speed: {monsterDisplay.speed.fly}</div>
                <div>Strength: {monsterDisplay.strength}</div>
                <div>Dexterity: {monsterDisplay.dexterity}</div>
                <div>Constitution: {monsterDisplay.constitution}</div>
                <div>Intelligence: {monsterDisplay.intelligence}</div>
                <div>Wisdom: {monsterDisplay.wisdom}</div>
                <div>Charisma: {monsterDisplay.charisma}</div>
                <div>{monsterDisplay.proficiencies.map((proficiency) => {
                    return (
                        <React.Fragment>
                            <div>Proficiencies:</div>
                            <div>{proficiency.proficiency.name}</div>
                            <div>Value: {proficiency.value}</div>
                        </React.Fragment>
                    )
                })}</div>
                <div>Damage Vulnerabilities: {monsterDisplay.damage_Vulnerabilities.map((damageVulnerabilities) => {
                    return (
                        <React.Fragment>
                            <div>{damageVulnerabilities}</div>
                        </React.Fragment>
                    )
                })}</div>
                <div>Damage Resistances: {monsterDisplay.damage_Resistances.map((damageResistances) => {
                    return (
                        <React.Fragment>
                            <div>{damageResistances}</div>
                        </React.Fragment>
                    )
                })}</div>
            </React.Fragment>
            )
    }
        
    return <h1>Loading...</h1>
};
        
export default Monster