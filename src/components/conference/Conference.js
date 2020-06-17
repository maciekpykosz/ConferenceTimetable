import React from 'react'
import {Layout, Typography, Row} from 'antd';
import {DayMenu} from "../menu/DayMenu";
import YouTube from 'react-youtube'


const { Title } = Typography;
const {Content} = Layout;

export const Conference = () => {
    const opts = {
        height: '507',
        width: '832',
        playerVars: {
            autoplay: 0,
        },
    }

    return (
        <>
            <Layout>
                <DayMenu/>
                <Content
                    className="site-layout-background"
                    style={{padding: 24}}
                >
                    <Row style={{justifyContent: "center"}}>
                        <Title code={true}>Welcome to the ECCOMAS Young Investigators Conference 2019!</Title>
                    </Row>
                    <Row style={{justifyContent: "center"}}>
                        <YouTube videoId="Oy7GPE_9l6I" opts={opts} />
                    </Row>
                </Content>
            </Layout>
        </>
    )
}