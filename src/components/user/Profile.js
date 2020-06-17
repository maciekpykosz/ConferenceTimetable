import React, {useEffect, useState} from 'react';
import API from "../../services/api";
import {Button, Form, Input, Descriptions, Layout} from "antd";
import {DayMenu} from "../menu/DayMenu";
import {returnUserErrorMessage} from "../../services/responseAlert";


const {Content} = Layout;

export const Profile = () => {
    const [userInfo, setUserInfo] = useState({})
    const [form] = Form.useForm();
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }

    useEffect(() => {
        API.get(`/users/me`,  config)
            .then((response) => setUserInfo(response.data))
            .catch((error) => returnUserErrorMessage(error))
    }, [])

    function handleOnFinish(values) {
        API.put(`/users/${userInfo.id}`, values, config)
            .then(response => {
                window.location.reload(false);
            })
            .catch(error => returnUserErrorMessage(error))
    }

    function prepareDate (date) {
        date = String(date)
        const d = date.substring(0, 10)
        const h = date.substring(11, 16)
        return d.concat(' ', h)
    }

    return (
        <>
            <Layout>
                <DayMenu/>
                <Content className="site-layout-background">
                    <Descriptions title="Profile Info"
                                  column={1}
                                  style={{paddingTop: 48, paddingLeft: 48}}>
                        <Descriptions.Item label="Email">{userInfo.email}</Descriptions.Item>
                        <Descriptions.Item label="Created at">{prepareDate(userInfo.createdAt)}</Descriptions.Item>
                    </Descriptions>
                    <Descriptions title="You can change your email/password below"
                                  column={1}
                                  style={{paddingTop: 24, paddingLeft: 48}}>
                    </Descriptions>
                    <Form form={form} onFinish={handleOnFinish} style={{paddingLeft: 48, width: 350}}>
                        <Form.Item name='email'>
                            <Input  type='email' placeholder='Email'/>
                        </Form.Item>
                        <Form.Item name='password'>
                            <Input  type='password' placeholder='Password'/>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>Change</Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </>
    )
}