import React from "react"
import styles from './textHeaderStyles.module.scss'

interface TextHeaderProps {
    header: string
}

const TextHeader: React.FC<TextHeaderProps> = (props) => {
    const {header} = props

    return (
        <div className={styles.headerContainer}>
            <h2>{header}</h2>
        </div>
    )
}

export default TextHeader