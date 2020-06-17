import React from 'react'
import {Card} from "antd";


const { Meta } = Card;

export const Presentation = ({title, hour, authors, filename}) => {
    function prepareHour (date) {
        let hour = date.substring(11, 13)
        let minutes = date.substring(14, 16)
        hour = String(parseInt(hour) + 2)
        return hour.concat(':',minutes)
    }

    function prepareAuthors(authors) {
        return authors.join(", ")
    }

    return (
        <>
            <Card
                style={{ marginTop: 2 }}
                size={"small"}
            >
                <Meta
                    avatar={prepareHour(hour)}
                    title={filename
                        ? <a style={{color: "black"}}
                             href={`https://m.kisim.eu.org/abstracts/${filename}`}
                             target="_blank"
                             rel="noopener noreferrer">{title}</a>
                        : <span>{title}</span>}
                    description={prepareAuthors(authors)}
                />
            </Card>
        </>
    )
}