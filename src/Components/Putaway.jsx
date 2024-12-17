import React from 'react'
import {Row,Col} from 'react-bootstrap'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './common.css'
import Table from 'react-bootstrap/Table';
import Select from 'react-select'
import CommonNavbar from './CommonNavbar'
import {useState,useRef,useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import { Html5QrcodeScanner } from 'html5-qrcode';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
function Putaway() {

    // -----------------------new code for barcode---------------------------------------
const [grno,]=useState('');
const [setName]=useState('')

const [setProducts]=useState([]);
const [setCurrentDate]=useState('')
const [ setProductDetails] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const [scannedResult, setScannedResult] = useState('')
const scannerRef = useRef(null);
const html5QrCodeScannerRef = useRef(null);
const [setPackid]=useState('')

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    if (isModalOpen && scannerRef.current) {
      const config = {
        fps: 10,
        qrbox: { width: 350, height: 200 },
      };
  
      html5QrCodeScannerRef.current = new Html5QrcodeScanner('scanner', config, false);
      html5QrCodeScannerRef.current.render(onScanSuccess, onScanFailure);
  
      // Cleanup function
      return () => {  
        if (html5QrCodeScannerRef.current) {
          html5QrCodeScannerRef.current.clear();
        }
      };
    }
  }, [isModalOpen]);
  


  const onScanSuccess = async (decodedText, decodedResult) => {
    setScannedResult(decodedText);
    console.log(`Decoded Text: ${decodedText}`, decodedResult);
  
    if (html5QrCodeScannerRef.current) {
      html5QrCodeScannerRef.current.clear();
    }
  
    setPackid(decodedText);
    try {
      const data = {
        packid: decodedText,
        location_id: decodedText 
      };
  
      const response = await fetch('http://192.168.1.104:8000/min/store_packqrid_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const data = {
          gr_no: grno,
          userid: Cookies.get('userid')
        };
  
        const res = await fetch('http://192.168.1.104:8000/min/putawayproducts_api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        const responseData = await res.json();
        setProductDetails(responseData.data);
        setProducts(responseData.plist);
        setName(responseData.name);
        const currentDate = new Date();
        setCurrentDate(currentDate.toDateString());
        
        setIsModalOpen(false);
  
        setTimeout(() => {
          alert('Data saved successfully.');
        }, 1000);
      } else {
       
        alert('Invalid location details');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  
  const onScanFailure = (error) => {
    console.warn('Scan failure:' , error);
  };
  
  const [selectedOption, setSelectedOption] = useState('hai');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const navigate=useNavigate()
  const handleSave=()=>{
    navigate('/stagging')
  }
  return (
    <div style={{borderLeft:"20px solid rgba(29, 58, 175, 1)",height:"100vh"}}>
        <CommonNavbar/>
        <Container >

        <Row className='mt-4'>
           
            <Col lg={12}>
            <h5 className='materialinward-heading'>PutAway</h5>
            </Col>
            
        </Row>
        </Container>

        <div>
   <Container>
   <Row>
      <Col lg={6}>
      <label>
        <input
          type="radio"
          value="hai"
          checked={selectedOption === 'hai'}
          onChange={handleOptionChange}
        />
        PutAway
      </label>
      </Col>
      <Col lg={6}>
      <label>
        <input
          type="radio"
          value="welcome"
          checked={selectedOption === 'welcome'}
          onChange={handleOptionChange}
        />
       Inventory
      </label>
      </Col>
     </Row>
   </Container>
      
     

      <div className='mt-5'>
      {selectedOption === 'hai' && (
        <div>
           <Container>
       <Row>
        <Col lg={2}>
        <Select/>
        </Col>
        <Col lg={1}>
        <Button variant="success" onClick={openModal}>
                    Scan
                  </Button>{" "}
        <Modal show={isModalOpen} onHide={closeModal} centered>
  <Modal.Header closeButton>
    <Modal.Title>QR Scanner</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div id="scanner" ref={scannerRef} style={{ width: '100%', height: 'auto' }}></div>
    {scannedResult && <div>Scanned Result: {scannedResult}</div>}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={closeModal}>Close</Button>
  </Modal.Footer>
</Modal>
        </Col>
       </Row>
        </Container>
          <Container >
            <Row className='mt-5'>
              <Col lg={3}>
                <FloatingLabel controlId="floatingPackId" label="Pack ID">
                  <Form.Control className="common-fields" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingProductId" label="Product ID">
                  <Form.Control className="common-fields" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingProductName" label="Product Name">
                  <Form.Control className="common-fields" />
                </FloatingLabel>
              </Col>
              <Col lg={3}>
                <FloatingLabel controlId="floatingStaggingZone" label="Stagging Zone">
                  <Form.Control className="common-fields-stagging" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingStaggingRow" label="Stagging Row">
                  <Form.Control className="common-fields-stagging" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingStaggingRack" label="Stagging Rack">
                  <Form.Control className="common-fields-stagging" />
                </FloatingLabel>
              </Col>
              <Col lg={3}>
                <FloatingLabel controlId="floatingCurrentZone" label="Current Zone">
                  <Form.Control className="common-fields-current" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingCurrentRow" label="Current Row">
                  <Form.Control className="common-fields-current" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingCurrentRack" label="Current Rack">
                  <Form.Control className="common-fields-current" />
                </FloatingLabel>
              </Col>
              <Col lg={3}>
                <FloatingLabel controlId="floatingNearByZone" label="Near By Zone">
                  <Form.Control className="common-fields-near" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingNearByRow" label="Near By Row">
                  <Form.Control className="common-fields-near" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingNearByRack" label="Near By Rack">
                  <Form.Control className="common-fields-near" />
                </FloatingLabel>
              </Col>
            </Row>
            <Button variant="success" className='mt-5' onClick={handleSave}>Save</Button>
          </Container>
          </div>
        )}
       {/*-------------------------  */}
      
      
        {selectedOption === 'welcome' && (
          <div>
             <Container>
        {/* <Row className='mt-4'>
           
            <Col lg={12}>
            <h5 className='materialinward-heading'>Inventory</h5>
            </Col>
            
        </Row> */}
        <Row>
            <Col lg={6}>
            <h5 className='sub-heading'>Real-Time Inventory</h5>
            <div className="table-responsive">
          <Table>
            <thead className="bg-secondary size-sm">
              <tr className="common-table-thead">
              <th>Product ID</th>
                <th>Product Name</th>
                <th>Total Quantity</th>
                <th>Re-Order-Level</th>
                              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
            </tbody>
          </Table>
        </div>
            </Col>
            <Col lg={6}>
            <h5 className='sub-heading'>Batch Wise Stock</h5>
            <div className="table-responsive">
          <Table>
            <thead className="bg-secondary size-sm">
              <tr className="common-table-thead">
                <th  rowSpan={2}>Product ID</th>
                <th rowSpan={2}>Product Name</th>
                <th rowSpan={2}>Batch</th>
                <th rowSpan={2}>Manufacturing Date</th>
                <th rowSpan={2}>Best Before</th>
                <th colSpan="4">Location</th>
                <th rowSpan={2}>Quantity</th>

                              </tr>
                              <tr className="common-table-thead">
    <th>Warehouse</th>
    <th>Aisle</th>
    <th>Rack</th>
    <th>Shelf</th>
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
                <Button variant="secondary" className='bg-secondary text-white'>Secondary</Button>{' '}                </tr>
              
            </tbody>
          </Table>
        </div>
            </Col>
        </Row>
        </Container>
          </div>
        )}
      </div>
    </div>
         
        {/* --------------------- */}
      

        {/* ---------------------- */}
       
    </div>
  )
}

export default Putaway