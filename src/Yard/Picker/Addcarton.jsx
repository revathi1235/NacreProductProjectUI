import React from 'react'
import AporaCommonNavbar from '../AporaCommonNavbar'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Addcarton() {
  return (
    <div>
      <AporaCommonNavbar/>
      <Container className='mt-5'>
        <Row>
          <Col>
          <h5 className='materialinward-heading'>Warehouse Addition</h5>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={12}>
          <h5>Active Zone</h5>

        <h5>Touch To Select</h5>

        <h5>Store  Name</h5>
          </Col>
          <div style={{padding: "20px"}}>
  <button class="largebutton">AR ENTERPRISES</button>
  <button class="largebutton">ARISTO FOOD COMPANY</button>
  <button class="largebutton">ADAMO HOSPITALITY LLP</button>
  <button class="largebutton">AR Enterprises</button>
</div>
        </Row>
      </Container>
    </div>
  )
}

export default Addcarton