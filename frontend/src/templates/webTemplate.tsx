import React from "react"
import TemplateProps from "../interfaces/templateProps"
import TitleBar from "../components/titleBar/titleBar"
import SideBar from "../components/sideBar/sideBar"
import InfoSection from "../components/infoSection/infoSection"

const WebTemplate: React.FC<TemplateProps> = (props) => {
    const {charactersData, charactersLoading, charactersError, detailsData, detailsLoading, detailsError} = props

    return (
        <div className={'appContainer'}>
            <TitleBar title={'Ravn Star Wars Registry'}/>
            <SideBar characterData={charactersData} loading={charactersLoading} error={charactersError}/>
            {detailsData && (
                <InfoSection characterDetails={detailsData} loading={detailsLoading}
                             error={detailsError}/>
            )}
        </div>
    )
}

export default WebTemplate