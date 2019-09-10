import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { getHomeListFn } from './store/actions.js'
import style from './a.css'
import withStyle from '../../withStyle'
import { Form, Icon, Input, Button, Checkbox,Select } from 'antd'
const {Option} = Select
export class Home extends Component {
 
  render() {
    const { name, newList } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <Fragment>
       <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit} style={{width:500}}>
        <Form.Item label="姓名">
          {getFieldDecorator('note', {
            rules: [{ required: true}],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Gender">
          {getFieldDecorator('性别', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
        <div>我是子1组件</div>
        {newList.map((item, index) => (
          <span key={index}>{item.get('dwmc')}||</span>
        ))}
        <button onClick={() => alert(1)} className={style.test}>
          {name}
        </button>
      </Fragment>
    )
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  componentDidMount() {
    this.props.getHomeList()
  }
}
Home.loadData = store => store.dispatch(getHomeListFn())

const mapStateToProps = state => {
  let home = state.get('home')

  return {
    name: home.get('name'),
    newList: home.get('newList')
  }
}

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeListFn())
  }
})
const HomeExport = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Form.create({ name: 'normal_login' })(Home), style))
HomeExport.loadData = store => store.dispatch(getHomeListFn())
export default HomeExport
