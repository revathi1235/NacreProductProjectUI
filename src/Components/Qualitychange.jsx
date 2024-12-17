import React from 'react'
import {Row,Col} from 'react-bootstrap'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './common.css'
import Table from 'react-bootstrap/Table';
import Select from 'react-select'
import CommonNavbar from '../Components/CommonNavbar'
import {useState,useRef,useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
function Qualitychange() {
  
// -----------------------new code for barcode---------------------------------------
const [grno]=useState('');
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
  
const navigate=useNavigate()
const handleReject=()=>{
  navigate('/putaway')
}
  return (
    <div style={{borderLeft:"20px solid rgba(29, 58, 175, 1)",height:"100vh"}}>
    <CommonNavbar/>
        <Container >
        <Row className='mt-4'>
           
            <Col lg={12}>
            <h5 className='materialinward-heading'>Quality Check</h5>
            </Col>
            
        </Row>
        </Container> 
        {/* ------------------------ */}
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
      <Container>
        <Row>
            <Col lg={3} className='mt-5'>
            <FloatingLabel
                    controlId="floatingPassword"
                    label="Goods Receipt Number"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Quality Check Done By"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Quantity Check Date"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>      
            </Col>
            <Col lg={6} >
            <div className="table-responsive">
              <Table>
                <thead className="bg-secondary size-sm">
                  <tr className="common-table-thead">
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Invoice Quantity</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            </Col>
            <Col lg={3} className='mt-5'>
            <FloatingLabel
                    controlId="floatingPassword"
                    label="Pack ID"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Product ID"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Product Name"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Category Name"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Brand"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Unit Of Measure"
                  >
                    <Form.Control className="common-fields" />
                  </FloatingLabel>
                  <Row className='mt-5 d-flex'>
                    <Col lg={6}>
                    <Button variant="success" onClick={closeModal}>Accept</Button>

                    </Col>
                    <Col lg={6}>
                    <Button variant="danger" onClick={handleReject}>Reject</Button>

                    </Col>
                  </Row>
            </Col>
            
        </Row>
        
      </Container>
    </div>
  )
}

export default Qualitychange