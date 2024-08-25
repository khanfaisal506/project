import './Home.css'
import { useState , useEffect } from 'react';

function Home()
{
const[HomeContent , setHomeContent ] = useState();

useEffect(()=>{
if(localStorage.getItem("token")!=undefined)    
    {
        setHomeContent(
		<>
		</>);
    }
    else
    {
        setHomeContent(
		<>
		<div class="welcome">
				<div class="welcome-hero-txt">
					<h2>"Your Ultimate Destination for Online Bidding"</h2>
				</div>
			</div>
		</>
		);
	}
});
    return(
        <>
			{HomeContent}
        </>
    );
}

export default Home;