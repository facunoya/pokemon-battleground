import classes from './FightMenu.module.css'

const FightMenu = () => {
    return (
        <div className={classes.fightMenu}>
            <ul className={classes.optionsContainer}>
                <li className={classes.options}>Attack</li>
                <li className={classes.options}>Objects</li>
                <li className={classes.options}>Pokemon</li>
                <li className={classes.options}>Run</li>
            </ul>
        </div>
    )
}

export default FightMenu