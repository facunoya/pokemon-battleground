import classes from './FightMenu.module.css'
import SubMenu from './SubMenu'
import { useState } from 'react'


const FightMenu = ({ pokemon, clickHandler }) => {
    const [subMenuActive, setSubMenuActive] = useState(false)
    const toggleSubMenu = (option) => {
        setSubMenuActive(!subMenuActive)
    }
    return (
        <div className={classes.fightMenu}>
            {subMenuActive ? <SubMenu pokemon={pokemon} clickHandler={clickHandler} toggleSubMenu={toggleSubMenu}></SubMenu> :
                <ul className={classes.optionsContainer}>
                    <li className={classes.options} onClick={() => toggleSubMenu("attacks")}>Attacks</li>
                    <li className={classes.options} onClick={() => toggleSubMenu("objects")}>Objects</li>
                    <li className={classes.options} onClick={() => toggleSubMenu("pokemon")}>Pokemon</li>
                    <li className={classes.options} onClick={() => toggleSubMenu("run")}>Run</li>
                </ul>
            }
        </div >
    )
}

export default FightMenu