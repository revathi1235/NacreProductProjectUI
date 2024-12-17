
import React from "react";
import { Row, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./common.css";
import Table from "react-bootstrap/Table";
import Select from "react-select";
import Navbar from '../Components/Navbar'
import { useNavigate } from "react-router-dom";

function VendorProducts() {
  const navigate=useNavigate()
  const handleAdd=()=>{
    navigate('/unpack')
  }
  return (
    <div className='gradient-border '>
      <Navbar/>
      <Container>
        <Row className="mt-4">
          <Col lg={12}>
            <h5 className="materialinward-heading">Vendor Products</h5>
          </Col>
        </Row>
      </Container>
      {/* ------------------------ */}
      <Container>
        <Row>
          <Col lg={6} className="mt-5">
            <h5 className="materialinward-heading"> Vendor Products  </h5>
            <Row>
              <Col lg={6}>
                <div className="mt-3">
                <FloatingLabel controlId="floatingSelect" className="mb-3">
              <Form.Select aria-label="Floating label select example" className="common-fields fields-name">
                <option>Vendor Name</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Product Name"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Category ID"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Category Name"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Brand">
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label=" Unit OF Measure (UOM)"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="SKU in Pack"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label=" Re-Order-Level"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <Button variant="success" className="mt-4" onClick={handleAdd}>
                    Add
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="mt-5">
            <h5 className="materialinward-heading">Vendor Product List </h5>
            <Row>
              <Col lg={5}>
                <Select />
              </Col>
            </Row>
            <div className="table-responsive">
              <Table className="mt-3">
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Category Name</th>
                    <th>Brand</th>
                    <th>Unit Of  Measure (UOM)</th>
                    <th>Number of SKU in Pack</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>9</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VendorProducts;
