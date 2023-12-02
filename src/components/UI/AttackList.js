import classes from './AttackList.module.css'

const AttackList = ({ pokemon, clickHandler }) => {

    return (
        <ul className={classes.movesContainer} >
            {pokemon && pokemon.moves.map((x, i) => { return <li key={x.name + i} className={classes.moves} onClick={() => { clickHandler(pokemon.moves[i]); console.log('daño: ', x.damage) }}>{x.name}</li> })}
            <div className={classes.attack}></div>
        </ul>
    )
}
export default AttackList