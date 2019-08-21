import React, { Fragment, Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeListFn } from './store/actions.js'

export class Home extends Component {
  render() {
    const { name, newList } = this.props
    return (
      <Fragment>
        <Header />
        <div>我是子1组件</div>
        {newList.map((item, index) => (
          <span key={index}>{item.get('dwmc')}||</span>
        ))}
        <button onClick={() => alert(1)}>{name}</button>
      </Fragment>
    )
  }

  componentDidMount() {
    this.props.getHomeList()
  }
}
Home.loadData = store => store.dispatch(getHomeListFn({ server: true }))

const mapStateToProps = state => {
  let home = state.get('home')

  return {
    name: home.get('name'),
    newList: home.get('newList')
  }
}

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeListFn({}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
