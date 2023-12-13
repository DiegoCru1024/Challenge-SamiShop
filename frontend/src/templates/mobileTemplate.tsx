import React from "react"
import TemplateProps from "../interfaces/templateProps"
import TitleBar from "../components/titleBar/titleBar"
import SideBar from "../components/sideBar/sideBar"
import InfoSection from "../components/infoSection/infoSection"
import {useParams} from "react-router-dom"

const MobileTemplate: React.FC<TemplateProps> = (props) => {
    const {charactersData, charactersLoading, charactersError, detailsData, detailsLoading, detailsError} = props
    const {characterId} = useParams()

    return (
        <div className={'mobileAppContainer'}>
            <TitleBar
                title={detailsData && !detailsLoading && characterId ? detailsData.name : 'People of Star Wars'}/>
            {!characterId && (
                <SideBar characterData={charactersData} loading={charactersLoading} error={charactersError}/>
            )}

            {characterId && detailsData && (
                <InfoSection characterDetails={detailsData} loading={detailsLoading} error={detailsError}/>
            )}
        </div>
    )
}

export default MobileTemplate