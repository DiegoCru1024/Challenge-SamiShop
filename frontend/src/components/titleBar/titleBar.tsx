import React from "react"
import styles from './titleBarStyles.module.scss'
import {Link, useParams} from "react-router-dom";
import {ReactComponent as BackArrow} from '../../assets/backArrow.svg';

interface TitleBarProps {
    title: string,
}

const TitleBar: React.FC<TitleBarProps> = (props) => {
    const {title} = props
    const {characterId} = useParams()

    return (
        <div className={styles.titleContainer}>
            {characterId && <Link to={'/'}><BackArrow/></Link>}
            <h3>{title}</h3>
        </div>
    )
}

export default TitleBar