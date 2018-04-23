import React from "react"
import Item from "../Item"

export default props => {
    const { numItems } = props
    const Items = [] 

    for (var i = 1; i <= numItems; i++) {
        Items.push(<Item key={ i }>{ i }</Item>)
    }

    return <div className="items">{ Items }</div>
}