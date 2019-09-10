import React, { Component } from 'react'
class NotFound extends Component {
    // 服务器端渲染执行 componetWillMount 不执行 DidMount
  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.NOT_FOUND = true)
  }

  render() {
    return <div>404，sorry,page not found</div>
  }
}

export default NotFound
