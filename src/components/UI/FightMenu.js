import classes from './FightMenu.module.css'
import AttackList from './AttackList'

const FightMenu = ({ pokemon }) => {

    return (
        <div className={classes.fightMenu}>

            <ul className={classes.optionsContainer}>
                <li className={classes.options}><AttackList pokemon={pokemon}></AttackList></li>
                <li className={classes.options}>Objects</li>
                <li className={classes.options}>Pokemon</li>
                <li className={classes.options}>Run</li>
            </ul>
        </div>
    )
}

export default FightMenu