// Home.jsx
import React, { Component } from 'react'
import { Row, Col, Icon, Button } from 'antd'

const Home = () =>
  <div>
    <Row>
    <Col xs={0} sm={8} md={8} lg={8}>Col</Col>
    <Col xs={24} sm={16} md={16} lg={16}>
      <Button type="primary">Primary</Button>
    </Col>
    </Row>
  </div>

export default Home;