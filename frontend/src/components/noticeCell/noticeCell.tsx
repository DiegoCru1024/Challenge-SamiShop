import React from "react"
import styles from './noticeCellStyles.module.scss'

interface NoticeCellProps {
    message: string
}

const NoticeCell: React.FC<NoticeCellProps> = (props) => {
    const {message} = props
    return (
        <div className={styles.noticeContainer}>
            <h2>{message}</h2>
        </div>
    )
}

export default NoticeCell