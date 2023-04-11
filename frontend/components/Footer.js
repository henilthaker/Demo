
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="box">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius elit id elit convallis, non
                                sollicitudin
                                odio sodales. </p>
                        </div>
                        <div className="col-md-4">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="#">Phone: +1 123-456-7890</a></li>
                                <li><a href="#">Email: info@importexport.com</a></li>
                                <li><a href="#">Address: 123 Main Street, Anytown USA</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Partners</h4>
                            <ul>
                                <li><a href="#">Partner 1</a></li>
                                <li><a href="#">Partner 2</a></li>
                                <li><a href="#">Partner 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#">Product 1</a></li>
                                <li><a href="#">Product 2</a></li>
                                <li><a href="#">Product 3</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Contact Support</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Important Links</h4>
                            <ul>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Trade Data</h4>
                            <ul>
                                <li><a href="#">Data 1</a></li>
                                <li><a href="#">Data 2</a></li>
                                <li><a href="#">Data 3</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Follow Us</h4>
                            <ul className="social-links">
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-instagram"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <h4>Ask a Question</h4>
                    <form id="contact-form">
                        <div className="form-group">

                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <br />
                        <div className="form-group">

                            <input type="text" className="form-control" id="company" placeholder="Enter your company name" />
                        </div>
                        <br />
                        <div className="form-group">

                            <select className="form-control" id="country">
                                <option value="default" selected disabled>Select your country</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="Mexico">Mexico</option>
                                <option value="UK">UK</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Spain">Spain</option>
                                <option value="Italy">Italy</option>
                                <option value="Japan">Japan</option>
                                <option value="China">China</option>
                                <option value="India">India</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group">

                            <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" />
                        </div>
                        <br />
                        <div className="form-group">

                            <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}
export default Footer;