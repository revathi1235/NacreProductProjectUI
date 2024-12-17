import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./common.css";
import Table from "react-bootstrap/Table";
import Navbar from "../Components/Navbar";
import Modal from "react-bootstrap/Modal";
import nslogo from "../Assets/Nslogo.png";
function GoodsReceipt() {
  // ------------cross docking modal ----------------------
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setNote(false);
  };
  const handleShow = () => setShow(true);
  // ------------preare note modal ----------------------
  const [note, setNote] = useState(false);

  const handleNote = () => {
    setNote(true);
    setShow(false);
  };
  const handleNoteGoback = () => {
    setNote(false);
    setShow(true);
  };
  const handleSaveNote=()=>{
    setNote(false)
    window.location.reload()
  }


  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblepalletsdiv,setIsVisiblepalletsdiv]=useState(false)
  const [isVisibleFourthdiv,setIsVisibleFourthdiv]=useState(false)
  const [isVisibleCrossdocking,setIsVisibleCrossdocking]=useState(false)

  // Handle button click to toggle visibility
  const handleAddClick = () => {
    setIsVisible(true); 
    setIsVisiblepalletsdiv(false)
    setIsVisibleFourthdiv(false)
    setIsVisibleCrossdocking(false)
    // Show the content when clicked
  };
  const handleCancel=()=>{
  
    setIsVisiblepalletsdiv(true)
  }
  const handleGeneratedpackids=()=>{
    setIsVisibleFourthdiv(true)
  }
  const handleSave=()=>{
    setIsVisibleCrossdocking(true)
  }
  return (
    <div className="gradient-border" >
      <Navbar />
      <Container>
        <Row className="mt-4">
          <Col lg={12}>
            <h5 className="materialinward-heading"> Goods Receipt</h5>
          </Col>
        </Row>
      </Container>

      <Container className="fields-div">
        <Row>
          <Col lg={4}>
            <FloatingLabel controlId="floatingSelect" className="mb-3">
              <Form.Select
                aria-label="Floating label select example"
                className="common-fields fields-name"
              >
                <option>Vendor Name</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Goods Receipt Number" className="mb-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="common-fields"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Goods Receipt Date"
            >
              <Form.Control
                type="password"
                className="common-fields"
                placeholder="Password"
              />
            </FloatingLabel>{" "}
            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                className="common-fields mt-3"
              />
              <label htmlFor="floatingInputCustom">Address</label>
            </Form.Floating>
          </Col>
          <Col lg={4}>
            <FloatingLabel label="Invoice Number">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="common-fields common-fields-bug"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Invoice Date"
              className="mt-3"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                className="common-fields fields-name"
              />
            </FloatingLabel>
            <FloatingLabel label="Purchase Order Number" className="mt-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="common-fields"
              />
            </FloatingLabel>
            <FloatingLabel label="Purchase Order Date" className="mt-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="common-fields"
              />
            </FloatingLabel>
          </Col>
          <Col lg={4}>
            <FloatingLabel label=" Time in" className="mb-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="common-fields common-fields-bug"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Container Number"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                className="common-fields"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Vehicle Identity"
              className="mt-3"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                className="common-fields"
              />
            </FloatingLabel>
            <Button variant="success" className="mt-5" onClick={handleAddClick}>
              Add
            </Button>
          </Col>
        </Row>
      </Container>

      {/* ---------------------third one---------------- */}
      {isVisible && (
      <Container>
        <Row className="mt-3">
          <Col lg={4}>
            <FloatingLabel controlId="floatingSelect" className="mb-3">
              <Form.Select
                aria-label="Floating label select example"
                className="common-fields fields-name"
              >
                <option>Product Name</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <div className="table-responsive">
              <Table>
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Batch</th>
                    <th>Manufacturing Date</th>
                    <th>Best Before</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                      {" "}
                      <Button variant="success">Cancel</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Button variant="success"  onClick={handleCancel}>Save</Button>
          </Col>
          {isVisiblepalletsdiv && (
          
          <Col lg={4} style={{borderLeft:"2px solid #e1e1e1 "}}>
            <FloatingLabel label="Pallets" className="floating-label-custom">
              <Form.Control
                type="input"
                placeholder="name@example.com"
                className="common-fields common-fields-bug"
              />
            </FloatingLabel>
            <FloatingLabel label="Carton">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="common-fields common-fields-bug"
              />
            </FloatingLabel>
            <FloatingLabel label="Bag">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="common-fields common-fields-bug"
              />
            </FloatingLabel>
            <FloatingLabel label="Unit">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="common-fields common-fields-bug"
              />
            </FloatingLabel>
            <Button variant="success" className="mt-5" onClick={handleGeneratedpackids}>
              Generate Pack-ID Code
            </Button>
          </Col>
          )}
        </Row>
      </Container>
)}
      {/* ---------------------fourth one--------------------- */}
   {isVisibleFourthdiv && (
 <Container>
 <Row className="mt-5">
   <Col lg={4}>
     <FloatingLabel controlId="floatingSelect" className="mb-3">
       <Form.Select
         aria-label="Floating label select example"
         className="common-fields fields-name"
       >
         <option>Generated Pack ID'S</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
       </Form.Select>
     </FloatingLabel>
   </Col>
   <Col lg={1}>
     <Button variant="success" className="mt-3">
       Scan
     </Button>
   </Col>
 </Row>
 <Row>
   <Col lg={8}>
     <div className="table-responsive">
       <Table>
         <thead className="bg-secondary size-sm">
           <tr className="common-table-thead">
             <th>Pack ID</th>
             <th>Pack Name</th>
             <th>Height</th>
             <th>Weight</th>
             <th>Length</th>
             <th>Width</th>
             <th>Save</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>1</td>
             <td>Mark</td>
             <td>Otto</td>
             <td>@mdo</td>
             <td>@mdo</td>
             <td>gg</td>
             <td>
               {" "}
               <Button variant="success">Save</Button>{" "}
             </td>
           </tr>
         </tbody>
       </Table>
     </div>
     <Button variant="success" onClick={handleSave}>Save</Button>
   </Col>
   {isVisibleCrossdocking &&(
    <Col lg={4} style={{borderLeft:"2px solid #e1e1e1 "}}>
     <Button variant="success" className="mt-5" onClick={handleShow}>
       Cross Docking
     </Button>
   </Col>
   )}
   
 </Row>
</Container>
   )}
       
   

      {/* --------------cross docking modal-------------------------- */}

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton className="modalheading">
          <Modal.Title>Select Item For Dispatch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="table-responsive">
              <Table>
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    <th>Select</th>
                    <th>Pack ID</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Length</th>
                    <th>Width</th>
                    <th>Save</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>gg</td>
                    <td>
                      {" "}
                      <Button variant="success">Save</Button>{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleNote}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ------------------------note code--------------- */}
      <Modal size="lg" show={note} onHide={handleClose}>
        <Modal.Header closeButton className="modalheading">
          <Modal.Title>Prepare Dispatch Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col lg={4}>
                <img src={nslogo} alt="" style={{ height: "30px" }} />{" "}
                <span className="size=3">WMS</span>
                <p>Nacre System</p>
                <p>Phone : +91 9876543211 </p>
                <p>Email : nacresys5@gail.com </p>
                <p>Website : www.nsacresys.com</p>
              </Col>
              <Col lg={4}>
                <p>Customer Name : </p>
              </Col>
              <Col lg={4}>
                <p>D/NOTE : </p>
                <p>Date : </p>
                <p> Invoice No : </p>
                <p>Delivery Address : </p>
                <hr />
                <p>Total Packs</p>
              </Col>
            </Row>
            <div className="table-responsive">
              <Table>
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    <th>Pack ID</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Length</th>
                    <th>Width</th>
                    <th>Save</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>gg</td>
                    <td>
                      {" "}
                      <Button variant="success">Save</Button>{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleNoteGoback}>
            Go Back
          </Button>
          <Button variant="success" onClick={handleSaveNote}>
          Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GoodsReceipt;
