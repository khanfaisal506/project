import './Contact.css'
import { useState , useEffect } from 'react';

function Contact()
{
	const[ContactContent , setContactContent ] = useState();

useEffect(()=>{
if(localStorage.getItem("token")!=undefined)    
    {
        setContactContent(
		<>
		</>);
    }
    else
    {
			setContactContent(
				<>
				
				<div class="footer-top">
					<div class="row">
						<div class="col-md-3 col-sm-6">
							<div class="single-footer-widget">
								<div class="footer-logo">
									<a href="index.html">AuctionVilla</a>
								</div>
								<br/>
								<h2>Contact</h2>
								<div class="footer-contact">
									<p>Khanfaisal506.fk.fk@gmail.com</p>
									<p>+91 7000638952</p>
								</div>
							</div>
						</div>
						<div class="col-md-2 col-sm-6">
							<div class="single-footer-widget">
								<h2>about devloon</h2>
								<ul>
									<li><a href="#">about us</a></li>
									<li><a href="#">career</a></li>
									<li><a href="#">terms <span> of service</span></a></li>
									<li><a href="#">privacy policy</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-3 col-xs-12">
							<div class="single-footer-widget">
								<h2>top brands</h2>
								<div class="row">
									<div class="col-md-7 col-xs-6">
										<ul>
											<li><a href="#">BMW</a></li>
											<li><a href="#">lamborghini</a></li>
											<li><a href="#">camaro</a></li>
											<li><a href="#">audi</a></li>
											<li><a href="#">infiniti</a></li>
											<li><a href="#">nissan</a></li>
										</ul>
									</div>
									<div class="col-md-5 col-xs-6">
										<ul>
											<li><a href="#">ferrari</a></li>
											<li><a href="#">porsche</a></li>
											<li><a href="#">land rover</a></li>
											<li><a href="#">aston martin</a></li>
											<li><a href="#">mersedes</a></li>
											<li><a href="#">opel</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-offset-1 col-md-3 col-sm-6">
							<div class="single-footer-widget">
								<h2>news letter</h2>
								<div class="footer-newsletter">
									<p>
										Subscribe to get latest news  update and informations
									</p>
								</div>
								<div class="hm-foot-email">
									<div class="foot-email-box">
										<input type="text" class="form-control" placeholder="Add Email"/>
									</div>{/*/.foot-email-box*/}
									<div class="foot-email-subscribe">
										<span><i class="fa fa-arrow-right"></i></span>
									</div>{/*/.foot-email-icon*/}
								</div>{/*/.hm-foot-email*/}
							</div>
						</div>
					</div>
				</div>
				</>
			);
	}
}
);


    return(
        <>

			{ ContactContent }

            <footer id="contact"  class="contact">
			<div class="container">
				
				<div class="footer-copyright">
					<div class="row">
						<div class="col-sm-6">
							<p>
								&copy; copyright.designed and developed by Faisal Khan</p>{/*/p*/}
						</div>
						<div class="col-sm-6">
							<div class="footer-social">
								<a href="#"><i class="fa fa-facebook"></i></a>	
								<a href="#"><i class="fa fa-instagram"></i></a>
								<a href="#"><i class="fa fa-linkedin"></i></a>
								<a href="#"><i class="fa fa-pinterest-p"></i></a>
								<a href="#"><i class="fa fa-behance"></i></a>	
							</div>
						</div>
					</div>
				</div>{/*/.footer-copyright*/}
			</div>{/*/.container*/}
      </footer>
        </>
    );
}

export default Contact;