import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include JS for toggle functionality
import Login from './Pages/Login'
import './App.css'
import Materialinward from './Pages/Materialinward'
import ProductMaster from './Components/ProductMaster';
import VendorMaster from './Components/VendorMaster';
import VendorProducts from './Components/VendorProducts';
import Unpack from './Components/Unpack';
import Qualitychange from './Components/Qualitychange';
import Putaway from './Components/Putaway';
import Stagging from './Components/Stagging';
import AdminHomepage from './Pages/Apora/AdminHomepage';
import AdminUsermanagement from './Pages/Apora/AdminUsermanagement'
import AdminFecilitymanagement from './Pages/Apora/AdminFecilitymanagement';
import AdminItemmanagement from './Pages/Apora/AdminItemmanagement';
import AporaAdminNavbar from './Components/AporaAdminNavbar';
import AporaCommonNavbar from './Yard/AporaCommonNavbar';
import Picksupervisor from './Yard/Picksupervisor/Picksupervisor';
import Picklist from './Yard/Picksupervisor/Picklist'
import PickerDashboard from './Yard/Picker/PickerDashboard';
import Addcarton from './Yard/Picker/Addcarton';
import Junkfile from './Components/Junkfile';
function App() {
  return (
    <HashRouter>
 
    <div className="App" >
      <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/materialinward' element={<Materialinward/>}/>
      <Route path='/productmaster' element={<ProductMaster/>}/>
      <Route path='/vendormaster' element={<VendorMaster/>}/>
      <Route path='/vendorproducts' element={<VendorProducts/>}/>
      <Route path='/unpack' element={<Unpack/>}/>
      <Route path='/qualitycheck' element={<Qualitychange/>}/>
      <Route path='/putaway' element={<Putaway/>}/>
      <Route path='/stagging' element={<Stagging/>}/>
      <Route path='/adminhomepage'  element={<AdminHomepage/>}/>
      <Route path='/adminusermanagement' element={<AdminUsermanagement/>}/>
      <Route path='/adminfecilitymanagement' element={<AdminFecilitymanagement/>}/>
      <Route path='/adminitemmanagement' element={<AdminItemmanagement/>}/>


      {/* ==============apora================ */}
      <Route path='/picksupervisor' element={<Picksupervisor/>}/>
      <Route path='/picklist' element={<Picklist/>}/>

      <Route path='/pickerdashboard' element={<PickerDashboard/>}/>
      <Route path='/addcarton' element={<Addcarton/>}/>
      <Route path='/junkfile' element={<Junkfile/>}/>
       </Routes>
       </div>
       </HashRouter>
  )
}

export default App