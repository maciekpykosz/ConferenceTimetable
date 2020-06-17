import {notification} from "antd";

export const returnUserErrorMessage = (error) => {
    const status = Object.entries(error)[2][1].status
    switch(status) {
        case 400:
            notification['error']({
                message: 'Login error!',
                description: 'Incorrect email or password'
            })
            break;
        case 401:
            notification['error']({
                message: 'Login error!',
                description: 'You must log in'
            })
            break;
        case 409:
            notification['error']({
                message: 'Register error!',
                description: 'Email already exists'
            })
            break;
        default:
            notification['error']({
                message: 'Error',
                description: 'Sorry, something goes wrong. Try again later.'
            })
    }
}

export const returnErrorMessage = () => {
    notification['error']({
        message: 'Error',
        description: 'Sorry, something goes wrong. Try again later.'
    })
}