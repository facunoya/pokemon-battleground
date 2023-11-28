import classes from './Pokemon.module.css'
import LifeBar from './UI/LifeBar'

const Pokemon = ({ user, pokemon }) => {
    return (
        <div className={user === "user" ? classes.userPokemonWrapper : classes.enemyPokemonWrapper}>
            <LifeBar currentHP={pokemon.currentHP} maxHP={pokemon.maxHP}></LifeBar>
            <div className={user === "user" ? classes.userPokemon : classes.enemyPokemon}>
            </div>
        </div>
    )
}

export default Pokemon