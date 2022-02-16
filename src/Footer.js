import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <div className="information">
                <h1>5th Semester Project</h1>
                <div className="address">
                    <h4>
                        Email:mdyusuf742171@gmail.com
                    </h4>
                    <p>
                        Newtown,kolkata,4000552
                    </p>
                </div>
                <div className="logo">
                    <FacebookIcon style={{ color: "#3b5998" }} />
                    <InstagramIcon style={{ color: "#cd486b" }} />
                    <TwitterIcon style={{ color: "#1DA1F2" }} />
                    <YouTubeIcon style={{ color: "#FF0000" }} />
                    <LinkedInIcon style={{ color: "#0e76a8" }} />
                </div>
            </div>
            <div className="list_info">
                <h1>GET TO KNOW US</h1>
                <ul>
                    <li></li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Gift a Smile</li>
                </ul>
            </div>
            <div className="list_info">
                <h1>POLICY</h1>
                <ul>
                    <li>Return Policy</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>EPR Compliance</li>
                </ul>
            </div>
            <div className="list_info">
                <h1>HELP</h1>
                <ul>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
