import { Link } from 'react-router-dom';
import './Header.css'
import { useEffect,useState } from 'react';
import Auth from '../AuthenticationComponent/AuthComponent';

function Header()
{
	const[ HeaderContent , setHeaderContent ] = useState();

	useEffect(()=>{
		if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
			{
				setHeaderContent(
					<>
					<div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
							<ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
								<li class="scroll"><Link to={"/adminhome"}>Admin Home</Link></li>
								<li class="scroll"><Link to={"/manageuser"}>Manage Users</Link></li>
								<li class="dropdown-admin">
  <button class="btn-Admin btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> SETTINGS ▼
	</button>
  <br/>
  <br/>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><Link to={"/cpadmin"}>Change Password</Link></a>
	<br/>
	<br/>
    <a class="dropdown-item" href="#"><Link to={"/epadmin"}>Edit profile</Link></a>
  </div>
</li>

<li class="dropdown-admin">
  <button class="btn-Admin btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    MANAGE CATEGORY ▼
  </button>
  <br/>
  <br/>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><Link to={"/addcategory"}>Add Category</Link></a>
	<br/>
	<br/>
    <a class="dropdown-item" href="#"><Link to={"/addsubcategory"}>Add Sub Category</Link></a>
  </div>
</li>
								<li class="scroll"><Link to={"/logout"}>Log Out</Link></li>
							</ul>{/*/.nav */}
						</div>{/* /.navbar-collapse */}
					</>
				);
			} 
			else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
				{
					setHeaderContent(
					<>
					
						{/* <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
							<ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
								<li className="scroll active"><Link to="/user">User Home</Link></li>
								<li className='scroll active'><Link to="/viewpc">View Product</Link></li>									
	<li class="dropdown-admin">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Settings
  </button>
  <br/>
  <br/>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><Link to={"/cpuser"}>Change Password</Link></a>
	<br/>
	<br/>
    <a class="dropdown-item" href="#"><Link to={"/epuser"}>Edit profile</Link></a>
  </div>
</li>

								<li className="scroll"><Link to="/logout">Log Out</Link></li>
							</ul>
						</div> */}


<div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
							<ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
								<li class="scroll"><Link to={"/user"}>Home</Link></li>
								<li class="scroll"><Link to={"/viewpc"}>View Product</Link></li>
								<li class="scroll"><Link to={"/addproduct"}>Add Product</Link></li>
								<li class="dropdown-admin">
  <button class="btn-Admin btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> SETTINGS ▼
	</button>
  <br/>
  <br/>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><Link to={"/cpadmin"}>Change Password</Link></a>
	<br/>
	<br/>
    <a class="dropdown-item" href="#"><Link to={"/epadmin"}>Edit profile</Link></a>
  </div>
</li>
	<li className="scroll"><Link to="/logout">Log Out</Link></li>
</ul>
</div>



						</>						
	);
				}
				else
				{
					setHeaderContent(
						<>
						<div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
				                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
				                    <li class=" scroll active"><a href="#home"><Link to={"/home"}>home</Link></a></li>
				                    <li class="scroll"><a href="#service"><Link to={"/service"}>service</Link></a></li>
				                    {/* <li class="scroll"><a href="#featured-cars"><Link to={"/feature"}>featured cars</Link></a></li> */}
				                    <li class="scroll"><a href="#brand"><Link to={"/brand"}>brands</Link></a></li>
				                    <li class="scroll"><a href="#register"><Link to={"/register"}>register</Link></a></li>
									{/* <li class="scroll"><a href="#search"><Link to={"/Search"}>Search</Link></a></li> */}
									<li class="scroll"><a href="#login"><Link to={"/login"}>login</Link></a></li>
				                </ul>
				            </div>
						</>
					);
				}
			
	}
);

    return(
        <>
		<Auth />
        {/* top-area Start */}
			<div class="top-area">
				<div class="header-area">
					{/* Start Navigation */}
				    <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

				        <div class="container">

				            {/* Start Header Navigation */}
				            <div class="navbar-header">
				                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
				                    <i class="fa fa-bars"></i>
				                </button>
				                <a class="navbar-brand">AuctionVilla<span></span></a>
								
				            </div>{/*/.navbar-header*/}
							
				            { HeaderContent }
				        </div>{/*/.container*/}
				    </nav>{/*/nav*/}

				</div>
			    <div class="clearfix"></div>

				
			</div>
        </>
    );
}

export default Header;