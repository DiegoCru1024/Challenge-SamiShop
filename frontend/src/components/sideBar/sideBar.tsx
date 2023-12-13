import React from "react"
import styles from './sideBarStyles.module.scss'
import CharacterInfo from "../../interfaces/characterInfo"
import CharacterCard from "../characterCard/characterCard"
import LoadingCell from "../loadingCell/loadingCell"
import NoticeCell from "../noticeCell/noticeCell"

interface SideBarProps {
    characterData: CharacterInfo[],
    loading: boolean,
    error: boolean,
}

const SideBar: React.FC<SideBarProps> = (props) => {
    const {characterData, loading, error} = props

    return (
        <div className={styles.sideBarContainer}>
            {characterData.map((character) => (
                <CharacterCard character={character} key={character.name}/>
            ))}

            {loading && <LoadingCell/>}
            {error && <NoticeCell message={'Failed to Load Data'}/>}
        </div>
    )
}

export default SideBar