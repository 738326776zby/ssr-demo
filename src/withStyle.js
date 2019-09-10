import React, { Component } from 'react'

export default (Cp, styles) => {
  return class NewComponent extends Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }
    render() {
      return <Cp {...this.props}/>
    }
  }
}
