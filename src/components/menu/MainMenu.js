import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import {Menu} from "antd";
import {isAuthenticated, logout} from "../../services/user";


export const MainMenu = () => {
    const history = useHistory()

    function handleLogout() {
        logout();
        history.push('/')
    }

    return (
        <>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home">
                    <Link to='/'>Home</Link>
                </Menu.Item>
                {
                    ( isAuthenticated() )
                        ? <Menu.Item key="profile"><Link to='/me'>Profile</Link></Menu.Item>
                        :  ''
                }
                {
                    (isAuthenticated())
                        ? (<Menu.Item key="logout" onClick={() => handleLogout()} style={{float: 'right'}}>Logout</Menu.Item>)
                        : (<Menu.Item key="login" style={{float: 'right'}}><Link to='/login'>Login</Link></Menu.Item>)
                }
                <Menu.Item key="register" style={{float: 'right'}}>
                    <Link to='/register'>Register</Link>
                </Menu.Item>
            </Menu>
        </>
    )
}