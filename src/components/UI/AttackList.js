import classes from './AttackList.module.css'
import { useEffect, useState } from 'react'
const AttackList = ({ pokemon, enemyPokemon }) => {
    const damageCaused = (damage) => {
        if (enemyPokemon && enemyPokemon.currentHP > 0) {
            const result = enemyPokemon.currentHP - damage;
            if (result <= 0) {
                enemyPokemon.currentHP = 0
                console.log('queda asi: ', enemyPokemon)
            } else {

                console.log('vida: ', result)
                enemyPokemon.currentHP = result

                console.log('queda asi: ', enemyPokemon)
            }

            return result
        } else {
            enemyPokemon.currentHP = 0

            console.log('queda asi: ', enemyPokemon)
            return enemyPokemon
        }
    };
    return (
        <ul className={classes.movesContainer} >
            {pokemon && pokemon.moves.map((x, i) => { return <li key={x.name + i} className={classes.moves} onClick={() => { damageCaused(x.damage); console.log(x.damage) }}>{x.name}</li> })}
        </ul>
    )
}
export default AttackList