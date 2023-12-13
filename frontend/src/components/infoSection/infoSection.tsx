import React from "react"
import styles from './infoSectionStyles.module.scss'
import characterDetails from "../../interfaces/characterDetails"
import TextHeader from "../textHeader/textHeader"
import DataCell from "../dataCell/dataCell"
import LoadingCell from "../loadingCell/loadingCell"
import NoticeCell from "../noticeCell/noticeCell"


interface InfoSectionProps {
    characterDetails: characterDetails,
    loading: boolean,
    error: boolean
}

const InfoSection: React.FC<InfoSectionProps> = (props) => {
    const {characterDetails, loading, error} = props
    const {eyeColor, hairColor, skinColor, birthYear, vehicleConnection} = characterDetails

    return (
        <div className={styles.infoSection}>
            {!loading && (
                <>
                    <TextHeader header={'General Information'}/>
                    <DataCell label={'Eye Color'} value={eyeColor}/>
                    <DataCell label={'Hair Color'} value={hairColor}/>
                    <DataCell label={'Skin Color'} value={skinColor}/>
                    <DataCell label={'Birth Year'} value={birthYear}/>

                    {vehicleConnection.vehicles.length !== 0 && (
                        <>
                            <TextHeader header={'Vehicles'}/>
                            {vehicleConnection.vehicles.map(vehicle => (
                                <DataCell label={vehicle.name} key={vehicle.name}/>
                            ))}
                        </>
                    )}
                </>
            )}

            {loading && <LoadingCell/>}
            {error && <NoticeCell message={'Failed to Load Details'}/>}
        </div>
    )
}

export default InfoSection