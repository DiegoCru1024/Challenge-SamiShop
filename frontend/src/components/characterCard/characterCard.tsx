import React from "react"
import styles from './characterCardStyles.module.scss'
import CharacterInfo from "../../interfaces/characterInfo"
import {ReactComponent as Indicator} from '../../assets/indicator.svg'
import {Link} from "react-router-dom"

interface CharacterCardProps {
    character: CharacterInfo
}

const CharacterCard: React.FC<CharacterCardProps> = (props) => {
    const {character} = props
    const {id, name, species, homeworld} = character

    return (
        <Link className={styles.cardContainer} to={`/${id}`}>
            <div>
                <h2>{name}</h2>
                <p>{species ? species.name : 'Human'} from {homeworld ? homeworld.name : 'N/A'}</p>
            </div>
            <Indicator/>
        </Link>
    )
}

export default CharacterCard