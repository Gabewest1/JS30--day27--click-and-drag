import React from "react"

export default class HorizontalScroller extends React.Component {
    state = { mouseStart: 0, isMouseDown: false }
    
    render() {
        return (
            <div 
                className="scroll-container"
                onMouseDown={ this._handleMouseDown }
                ref={ el => this.scroller = el }
            >   
                { this.props.children }
            </div>
        )
    }
    componentDidMount() {
        document.addEventListener("mouseup", this._handleMouseUp)
        document.addEventListener("mousemove", this._handleMouseMove)
    }
    componentWillUnmount() {
        document.removeEventListener("mouseup", this._handleMouseUp)
        document.removeEventListener("mousemove", this._handleMouseMove)
    }
    _handleMouseDown = (e) => {
        console.log(("_onMouseDown"))
        this.setState({ isMouseDown: true, mouseStart: e.clientX })
    }
    _handleMouseUp = (e) => {
        console.log(("_onMouseUp"))
        this.setState({ isMouseDown: false })
    }
    _handleMouseMove = (e) => {
        console.log(("_onMouseMove"))
        const { mouseStart, isMouseDown } = this.state

        if (!isMouseDown) return

        const movement = mouseStart - e.clientX

        this.scroller.scrollLeft += movement * 1.3

        this.setState({ mouseStart: e.clientX })
    }
}