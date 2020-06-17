import React from 'react'
import {Link} from "react-router-dom";
import {Layout, Menu} from 'antd';


const {Sider} = Layout;

export const DayMenu = () => {
    return (
        <>
            <Sider
                width={190}
                style={{
                    minHeight: 700,
                }}
                className="site-layout-background"
                breakpoint="sm"
                collapsedWidth="0"
            >
                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key='MONDAY'>
                        <Link to='/MONDAY'>MONDAY</Link>
                    </Menu.Item>
                    <Menu.Item key="TUESDAY">
                        <Link to='/TUESDAY'>TUESDAY</Link>
                    </Menu.Item>
                    <Menu.Item key="WEDNESDAY">
                        <Link to='/WEDNESDAY'>WEDNESDAY</Link>
                    </Menu.Item>
                    <Menu.Item key="THURSDAY">
                        <Link to='/THURSDAY'>THURSDAY</Link>
                    </Menu.Item>
                    <Menu.Item key="FRIDAY">
                        <Link to='/FRIDAY'>FRIDAY</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    )
}