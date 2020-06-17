import React from 'react';
import {useHistory} from 'react-router-dom'
import {Button, Card, Form, Input, Layout} from "antd";
import API from '../../services/api'
import {login} from "../../services/user";
import {DayMenu} from "../menu/DayMenu";
import {returnUserErrorMessage} from "../../services/responseAlert";


const {Content} = Layout;

export const RegisterForm = () => {
    const [form] = Form.useForm();
    const history = useHistory();

    const handleOnFinish = (values) => {
        API.post('/users', values)
            .then(response => {
                login(response.data.token)
                history.push('/me')
            })
            .catch(error => returnUserErrorMessage(error))
    }

    return (
        <>
            <Layout>
                <DayMenu/>
                <Content
                    className="site-layout-background"
                    style={{padding: 24}}
                >
                    <Card title='Register Form'>
                        <Form form={form} onFinish={handleOnFinish}>
                            <Form.Item name='email'>
                                <Input  type='email' placeholder='Email'/>
                            </Form.Item>
                            <Form.Item name='password'>
                                <Input  type='password' placeholder='Password'/>
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' htmlType='submit'>Register</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Content>
            </Layout>
        </>
    )
}