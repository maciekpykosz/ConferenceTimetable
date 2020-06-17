import React, {useEffect, useState} from 'react'
import API from "../../services/api";
import {useParams} from "react-router-dom";
import {Session} from "./Session";
import {Layout} from "antd";
import {DayMenu} from "../menu/DayMenu";
import {returnErrorMessage} from "../../services/responseAlert";


const {Content} = Layout;

export const DaySchedules = () => {
    const [schedules, setSchedules] = useState([])
    const {day} = useParams()
    const sessionShorts = []

    schedules.map(schedule => addSessionShortToList(schedule.sessions))

    function addSessionShortToList(sessions) {
        for (const session of sessions){
            if (!sessionShorts.includes(session)){
                sessionShorts.push(session)
            }
        }
    }

    useEffect(() => {
        async function asyncFunc() {
            return await API.get(`/schedules?day=${day}`)
        }
        asyncFunc()
            .then((response) => setSchedules(response.data[0][day]))
            .catch((error) => returnErrorMessage())
    }, [day])


    return (
        <>
            <Layout>
                <DayMenu/>
                <Content className="site-layout-background" style={{padding: 24, paddingTop: 14}}>
                    {sessionShorts.map((sessionShort, index) => <Session key={index} sessionShort={sessionShort}/>)}
                </Content>
            </Layout>
        </>
    )
}