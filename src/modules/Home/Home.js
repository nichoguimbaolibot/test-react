import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Row, Col, Input,DatePicker, Button } from 'antd';
const { Content,Sider} = Layout;

function onChange(date, dateString) {
  console.log(date, dateString);
}


class Home extends Component {
  render() {
    return (
         
      <div class="content">
        <Content style={{ padding: '0 50px' }}> Account Settings
        <br/>
        My Account   
            <Layout style={{ padding: '24px 0', background: '#fff', borderColor:'#000000' }}>  
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
              <Menu.Item key="1">Personal Settings</Menu.Item>
              <Menu.Item key="2">Account Settings</Menu.Item>
              <Menu.Item key="3">Manage Users</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          Personal Information
          <Row>
            <div>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            First Name
            <Input placeholder="Chelzea" />
            Job Title
            <Input placeholder="--Please Select-- x" />
            Mobile Number
            <Input placeholder="1234567" />
            Birth Date
            <DatePicker onChange={onChange} />
            <Button type="primary">Update</Button>
            </Col></div>
            <div>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Last Name
            <Input placeholder="Salvador" />
            Email Address
            <Input placeholder="abc@gmail.com" />
            Skype Address
            <Input placeholder="chlzslvdr" />
            Country
            <Input placeholder="-- Please Select --" />
            </Col></div>
            <div>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Account Picture
            </Col></div>
          </Row>

        </Content>
      </Layout>
    </Content> </div>
    )
  }
}

export default Home;
