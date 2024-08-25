import './App.css';
import { Routes , Route } from 'react-router-dom';

import Header from './components/HeaderComponent/Header';
import Home from './components/HomeComponent/Home';
import Service from './components/Services/Services';
import Login from './components/LoginComponent/Login';
import Feature from './components/FeatureComponent/Feature';
import Feedback from './components/FeedbackComponent/Feedback';
import Brand from './components/BrandComponent/Brand';
import Contact from './components/ContactComponent/Contact';
import Search from './components/SearchComponent/Search';
import Register from './components/RegisterComponent/Register';
import AdminHome from './components/AdminHomeComponent/AdminHome';
import UserHome from './components/UserHomeComponent/UserHome';
import Logout from './components/LogoutComponent/Logout';
import ManageUser from './components/ManageUsersComponent/ManageUser';
import CpAdmin from './components/CpAdminComponent/CpAdmin';
import EpAdmin from './components/EpAdminComponent/EpAdmin';
import CpUser from './components/CpUserComponent/CpUser';
import EpUser from './components/EpUserComponent/EpUser';
import AddCategory from './components/AddCategoryComponent/AddCategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';
import ViewProductCategory from './components/ViewProductCategoryComponent/ViewProductCategory';
import ViewProductSubCategory from './components/ViewProductSubCategoryComponent/ViewProductSubCategory';
import AddProduct from './components/AddProductComponent/AddProduct';
import ViewProductComponent from './components/ViewProductComponent/ViewProductComponent'

function App() {
  return (
   <>

   <section id="home" class="welcome-hero">
			
			<Header/>
			{/* <Home/> */}

			</section>{/*/.welcome-hero*/}
		{/*welcome-hero end */}

			<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home/>} ></Route>
    <Route path="/feedback" element={<Feedback />} ></Route>
    <Route path="/contact" element={<Contact />} ></Route>
    <Route path="/service" element={<Service />} ></Route>
    {/* <Route path="/feature" element={<Feature />} ></Route> */}
    <Route path="/brand" element={<Brand />} ></Route>
	  <Route path="/login" element={<Login />} ></Route>
	  <Route path="/search" element={<Search />} ></Route>
    <Route path="/register" element={<Register />} ></Route>
    <Route path="/admin" element={<AdminHome />} ></Route>
    <Route path="/manageuser" element={<ManageUser /> } ></Route>
    <Route path="/cpadmin" element={<CpAdmin />} ></Route>
    <Route path="/epadmin" element={<EpAdmin />} ></Route>
    <Route path="/user" element={<UserHome />} ></Route>
    <Route path='/viewpc' element={< ViewProductCategory />}></Route>
    <Route path='/viewpsc/:catnm' element={< ViewProductSubCategory />}></Route>
    <Route path="/viewp/:subcatnm" element={ <ViewProductCategory />} ></Route>
    <Route path="/logout" element={<Logout />} ></Route>
    <Route path="/adminhome" element={<AdminHome />} ></Route>
    <Route path="/cpuser" element={<CpUser />} ></Route>
    <Route path="/epuser" element={<EpUser />} ></Route>
    <Route path="/addcategory" element={<AddCategory />} ></Route>
    <Route path="/addsubcategory" element={<AddSubCategory />} ></Route>
    <Route path='/addproduct' element={<AddProduct/>}></Route>
    <Route path="/viewp/:subcatnm" element={ <ViewProductComponent />} ></Route>
      

    

    
      </Routes>     
			
		

		
		<Contact/>
      </>
  );
}

export default App;
