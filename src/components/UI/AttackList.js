import classes from './AttackList.module.css'
const AttackList = ({ pokemon }) => {

    return (
        <ul className={classes.movesContainer} >
            {pokemon && pokemon.moves.map((x, i) => { return <li key={x.name + i} className={classes.moves} onClick={() => { console.log(x.damage) }}>{x.name}</li> })}
        </ul>
    )
}
export default AttackList