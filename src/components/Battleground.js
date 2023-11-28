import classes from './Battleground.module.css'
import Pokemon from './Pokemon'
import FightMenu from './UI/FightMenu'
import { useEffect, useState } from 'react'

const Battleground = () => {
    const [userPokemon, setUserPokemon] = useState()
    const [enemyPokemon, setEnemyPokemon] = useState()
    useEffect(() => {
        setUserPokemon({
            name: "Mew",
            maxHP: 500,
            currentHP: 200,
            currentXP: 200,
            level: 15,
            moves: [
                { name: "Quick Attack", damage: 50 },
                { name: "Punch", damage: 150 },
                { name: "Thunderbolt", damage: 40 },
                { name: "Hiper Ray", damage: 200 }
            ]
        })
        setEnemyPokemon({
            name: "Charizard",
            maxHP: 400,
            currentHP: 350,
            level: 13,
            currentXP: 500,
            moves: [
                { name: "Quick Attack", damage: 50 },
                { name: "Punch", damage: 150 },
                { name: "Thunderbolt", damage: 40 },
                { name: "Hiper Ray", damage: 200 }
            ]
        })
    }, [])
    return (
        <div className={classes.battleground}>
            {userPokemon && <Pokemon pokemon={userPokemon} user="user"></Pokemon>}
            {enemyPokemon && <Pokemon pokemon={enemyPokemon} user="enemy"></Pokemon>}
            <FightMenu></FightMenu>
        </div>
    )
}

export default Battleground