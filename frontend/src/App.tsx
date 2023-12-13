import React, {useEffect, useState} from 'react'
import CharacterInfo from "./interfaces/characterInfo"
import CharacterDetails from "./interfaces/characterDetails"
import {useParams} from "react-router-dom"
import {useLazyQuery} from "@apollo/client"
import {CharacterDataQuery, CharacterDetailsQuery} from "./graphQL/graphQueries"
import MobileTemplate from "./templates/mobileTemplate";
import WebTemplate from "./templates/webTemplate";

function App() {
    const {characterId} = useParams()
    const [characterData, setCharacterData] = useState<CharacterInfo[]>([])
    const [characterDetails, setCharacterDetails] = useState<CharacterDetails>()
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const [getCharacters, {
        loading: charactersLoading,
        error: charactersError,
        data: charactersData
    }] = useLazyQuery(CharacterDataQuery)

    const [getCharacterDetails, {
        loading: detailsLoading,
        error: detailsError,
        data: detailsData
    }] = useLazyQuery(CharacterDetailsQuery)

    useEffect(() => {
        getCharacters({variables: {first: 5}}).then(() => {
            console.log('Characters data received.')
        })
    }, [getCharacters])

    useEffect(() => {
        if (!characterId) return

        getCharacterDetails({variables: {personId: characterId}}).then(() => {
            console.log('Character details received.')
        })
    }, [characterId, getCharacterDetails])

    useEffect(() => {
        if (charactersData && charactersData.allPeople) {
            setCharacterData(prevData => [...prevData, ...charactersData.allPeople.people])
            const hasNextPage = charactersData.allPeople.pageInfo.hasNextPage
            const endCursor = charactersData.allPeople.pageInfo.endCursor
            if (hasNextPage) {
                getCharacters({variables: {first: 5, after: endCursor}}).then(() => {
                })
            }
        }
    }, [charactersData, getCharacters])

    useEffect(() => {
        if (detailsData && detailsData.person) {
            setCharacterDetails(detailsData.person)
        }
    }, [detailsData])

    useEffect(() => {
        setIsMobile(window.innerWidth < 936)

        const handleResize = () => {
            setIsMobile(window.innerWidth < 936)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            {isMobile ? (
                <MobileTemplate
                    charactersData={characterData}
                    charactersLoading={charactersLoading}
                    charactersError={!!charactersError}
                    detailsData={characterDetails}
                    detailsLoading={detailsLoading}
                    detailsError={!!detailsError}/>
            ) : (
                <WebTemplate
                    charactersData={characterData}
                    charactersLoading={charactersLoading}
                    charactersError={!!charactersError}
                    detailsData={characterDetails}
                    detailsLoading={detailsLoading}
                    detailsError={!!detailsError}/>
            )}
        </>
    )
}

export default App