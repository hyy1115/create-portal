import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function CreatePortal() {
    class Portal extends React.Component{
        constructor(props) {
            super(props)
            const element = props.element || 'div'
            this.el = document.createElement(element)
            if (!!props) {
                this.el.id = props.id || false
                if (props.className) this.el.className = props.className
                if (props.style) {
                    Object.keys(props.style).map((v) => {
                        this.el.style[v] = props.style[v]
                    })
                }
                document.body.appendChild(this.el)
            }
        }
        componentDidMount() {
            document.body.appendChild(this.el);
        }
        componentWillUnmount() {
            document.body.removeChild(this.el)
        }
        render() {
            return ReactDOM.createPortal(
                this.props.children,
                this.el
            )
        }
    }
    Portal.propTypes = {
        style: PropTypes.object
    }
    return Portal
}
export default CreatePortal()