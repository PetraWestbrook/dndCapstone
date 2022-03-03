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
                <div>Challenge Rating: {monsterDisplay.challenge_Rating}</div>
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
                                <li>{form.name}</li>
                            </React.Fragment>
                        )
                    })}</div> : <React.Fragment />}
                <div>Walking Speed: {monsterDisplay.speed.walk}</div>
                {monsterDisplay.speed.fly ?
                    <div>Flying Speed: {monsterDisplay.speed.fly}</div> : <React.Fragment />}
                {monsterDisplay.speed.swim ?
                    <div>Swimming Speed: {monsterDisplay.speed.swim}</div> : <React.Fragment />}
                <div>Strength: {monsterDisplay.strength}</div>
                <div>Dexterity: {monsterDisplay.dexterity}</div>
                <div>Constitution: {monsterDisplay.constitution}</div>
                <div>Intelligence: {monsterDisplay.intelligence}</div>
                <div>Wisdom: {monsterDisplay.wisdom}</div>
                <div>Charisma: {monsterDisplay.charisma}</div>
                {monsterDisplay.proficiencies.length ? 
                    <div>Proficiencies: {monsterDisplay.proficiencies.map((proficiency) => {
                        return (
                            <React.Fragment>
                                <li>{proficiency.proficiency.name}</li>
                                <div>Value: {proficiency.value}</div>
                            </React.Fragment>
                        )    
                })}</div> : <React.Fragment />}
                {monsterDisplay.damage_Vulnerabilities.length ? 
                    <div>Damage Vulnerability: {monsterDisplay.damage_Vulnerabilities.map((damageVulnerability) => {
                        return (
                            <React.Fragment>
                                <li>{toTitleCase(damageVulnerability)}</li>
                            </React.Fragment>
                        )    
                })}</div> : <React.Fragment />}
                {monsterDisplay.damage_Resistances.length ? 
                    <div>Damage Resistance: {monsterDisplay.damage_Resistances.map((damageResistance) => {
                        return (
                            <React.Fragment>
                                <li>{toTitleCase(damageResistance)}</li>
                            </React.Fragment>
                        )    
                })}</div> : <React.Fragment />}
                {monsterDisplay.damage_Immunities.length ? 
                    <div>Damage Immunity: {monsterDisplay.damage_Immunities.map((damageImmunity) => {
                        return (
                            <React.Fragment>
                                <li>{toTitleCase(damageImmunity)}</li>
                            </React.Fragment>
                        )    
                })}</div> : <React.Fragment />}
                {monsterDisplay.condition_Immunities.length ? 
                    <div>Condition Immunity: {monsterDisplay.condition_Immunities.map((conditionImmunity) => {
                        return (
                            <React.Fragment>
                                <li>{conditionImmunity.name}</li>
                            </React.Fragment>
                        )    
                })}</div> : <React.Fragment />}
                <div>Senses:</div>
                <li>Passive Perception: {monsterDisplay.senses.passive_perception}</li>
                {monsterDisplay.senses.blindsight ?
                    <li>Blind Sight: {monsterDisplay.senses.blindsight}</li> : <React.Fragment />}
                {monsterDisplay.senses.darkvision ?
                    <li>Darkvision: {monsterDisplay.senses.darkvision}</li> : <React.Fragment />}
                {monsterDisplay.senses.tremorsense ?
                    <li>Tremorsense: {monsterDisplay.senses.tremorsense}</li> : <React.Fragment />}
                {monsterDisplay.senses.truesight ?
                    <li>Truesight: {monsterDisplay.senses.truesight}</li> : <React.Fragment />}
                <div>Languages: {toTitleCase(monsterDisplay.languages)}</div>
                {monsterDisplay.special_Abilities ? 
                    <div>Special Ability: {monsterDisplay.special_Abilities.map((specialAbility) => {
                        return (
                            <React.Fragment>
                                <li>{specialAbility.name}</li>
                                {specialAbility.dc ?
                                <div>DC: {specialAbility.dc.dc_Type.name} {specialAbility.dc.dc_Value}</div> : <React.Fragment />}
                                <div>Description: {specialAbility.desc}</div>
                                {specialAbility.usage ?
                                <div>Usage: {specialAbility.usage.times} times {specialAbility.usage.type}</div> : <React.Fragment />}
                            </React.Fragment>
                        )    
                })}</div> : <React.Fragment />}
                {monsterDisplay.actions ?
                <div>Actions: {monsterDisplay.actions.map((action) => {
                    return (
                        <React.Fragment>
                            <li>{action.name}</li>
                            <div>Description: {action.desc}</div>
                            {action.dc ? 
                            <div>DC: {action.dc.dc_Type.name} {action.dc.dc_Value}</div> : <React.Fragment />}
                            {/* <div>Attack Bonus: {action.attack_Bonus}</div> */}
                            {action.damage ?
                                action.damage.map((dmg) => {
                                    return (
                                        <React.Fragment>
                                            <div>Damage Type: {dmg.damage_Type.name}</div>
                                            <div>Damage Dice: {dmg.damage_Dice}</div>
                                        </React.Fragment>
                                    )
                                }) : <React.Fragment />}
                            </React.Fragment>
                        )
                })}</div> : <React.Fragment />}
                {monsterDisplay.legendary_Actions ?
                <div>Legendary Actions: {monsterDisplay.legendary_Actions.map((la) => {
                    return (
                        <React.Fragment>
                            <li>{la.name}</li>
                            <div>Description: {la.desc}</div>
                            {la.dc ? 
                            <div>DC: {la.dc.dc_Type.name} {la.dc.dc_Value}</div> : <React.Fragment />}
                            {/* <div>Attack Bonus: {la.attack_Bonus}</div> */}
                            {la.damage ? 
                                la.damage.map((dmg) => {
                                return (
                                    <React.Fragment>
                                        <div>Damage Type: {dmg.damage_Type.name}</div>
                                        <div>Damage Dice: {dmg.damage_Dice}</div>
                                    </React.Fragment>
                                )
                            }): <React.Fragment />}
                        </React.Fragment>
                        )
                })}</div> : <React.Fragment />}
            </React.Fragment>
            )
    }
        
    return <h1>Loading...</h1>
};
        
export default Monster