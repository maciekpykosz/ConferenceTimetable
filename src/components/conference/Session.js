import React, {useEffect, useRef, useState} from 'react'
import API from '../../services/api'
import {Presentation} from "./Presentation";
import {useParams} from "react-router-dom";
import {Card, Typography} from "antd";
import {returnErrorMessage} from "../../services/responseAlert";
import {useResize} from "../../hooks/useResize";


const {Title} = Typography

export const Session = ({sessionShort}) => {
    const [downloadedSessions, setDownloadedSessions] = useState({})
    const [downloadedRooms, setDownloadedRooms] = useState({})
    const [downloadedPresentations, setDownloadedPresentations] = useState([])
    const dayParams = useParams()
    const componentRef = useRef()
    const { width } = useResize(componentRef)
    const sessions = Object.entries(downloadedSessions)
    const rooms = Object.entries(downloadedRooms)
    const presentations = []
    let sessionName
    let sessionLocalization
    let roomName
    let roomLat
    let roomLng

    useEffect(() => {
        async function asyncFunc() {
            return await API.get(`/sessions`)
        }
        asyncFunc()
            .then((response) => setDownloadedSessions(response.data))
            .catch((error) => returnErrorMessage())
    }, [])

    useEffect(() => {
        async function asyncFunc() {
            return await API.get(`/rooms`)
        }
        asyncFunc()
            .then((response) => setDownloadedRooms(response.data))
            .catch((error) => returnErrorMessage())
    }, [])

    useEffect(() => {
        async function asyncFunc() {
            return await API.get(`/presentations`)
        }
        asyncFunc()
            .then((response) => setDownloadedPresentations(response.data))
            .catch((error) => returnErrorMessage())
    }, [])

    function prepareDate (date) {
        const day = date.substring(8, 10)
        const month = date.substring(5, 7)
        const year = date.substring(0, 4)
        return month.concat('/', day, '/', year)
    }

    for (const session of sessions){
        if (session[0] === sessionShort){
            sessionName = session[1].name
            sessionLocalization = session[1].localization
        }
    }

    for (const room of rooms){
        if (room[0] === sessionLocalization){
            roomName = room[1].name
            roomLat = room[1].lat
            roomLng = room[1].lng
        }
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    for (const presentation of downloadedPresentations){
        const day = days[new Date(prepareDate(presentation.date)).getDay()].toUpperCase()
        if (presentation.session === sessionShort && day === dayParams.day){
            presentations.push(presentation)
        }
    }
    presentations.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))

    return (
        <div ref={componentRef}>
            <Card
                title={<Title level={4}>{sessionName}</Title>}
                extra={ width < 1000
                    ? <a href={`https://maps.google.com/?q=${roomLat},${roomLng}`}
                         target="_blank"
                         rel="noopener noreferrer">
                        <span role="img" aria-label={"map_emoji_label"}>🗺️</span>
                    </a>
                    : <a href={`https://maps.google.com/?q=${roomLat},${roomLng}`}
                         target="_blank"
                         rel="noopener noreferrer">
                        {roomName}
                    </a>}
                style={{ marginTop: 10}}
            >
                {presentations.map(presentation => <Presentation key={presentation.id}
                                                                 title={presentation.title}
                                                                 hour={presentation.date}
                                                                 authors={presentation.authors}
                                                                 filename={presentation.filename}/>)}

            </Card>
        </div>
    )
}