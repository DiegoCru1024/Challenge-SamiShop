import React from "react"
import styles from './dataCellStyles.module.scss'

interface DataCellProps {
    label: string,
    value?: string
}

const DataCell: React.FC<DataCellProps> = (props) => {
    const {label, value} = props

    return (
        <div className={styles.dataContainer}>
            <h2 className={styles.label}>{label}</h2>
            {value && <h2 className={styles.value}>{value}</h2>}
        </div>
    )
}

export default DataCell