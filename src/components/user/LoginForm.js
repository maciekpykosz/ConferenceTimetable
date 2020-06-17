import React from 'react';
import {Button, Card, Form, Input, Layout} from "antd";
import {useHistory} from "react-router-dom";
import API from "../../services/api";
import {login} from "../../services/user";
import {DayMenu} from "../menu/DayMenu";
import {returnUserErrorMessage} from "../../services/responseAlert";


const {Content} = Layout;

export const LoginForm = () => {
    const [form] = Form.useForm();
    const history = useHistory();

    const handleOnFinish = (values) => {
        API.post('/auth', {}, {
            auth: {
                username: values.username,
                password: values.password
            }
        })
            .then(response => {
                login(response.data.token)
                history.push('/')
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
                    <Card title='Login Form'> {/*style={{ width: 300 }}*/}
                        <Form form={form} onFinish={handleOnFinish}>
                            <Form.Item name='username'>
                                <Input  type='username' placeholder='Email'/>
                            </Form.Item>
                            <Form.Item name='password'>
                                <Input  type='password' placeholder='Password'/>
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' htmlType='submit'>Login</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Content>
            </Layout>
        </>
    )
}