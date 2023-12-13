import React from "react"
import styles from './loadingCellStyles.module.scss'
import {ReactComponent as LoadIcon} from '../../assets/load.svg'

interface LoadingCellProps {

}

const LoadingCell: React.FC<LoadingCellProps> = (props) => {
    return (
        <div className={styles.loadingContainer}>
            <LoadIcon/>
            <h2>Loading</h2>
        </div>
    )
}

export default LoadingCell