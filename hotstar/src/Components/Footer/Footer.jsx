import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDove } from "@fortawesome/free-solid-svg-icons";
import {
  FooterContainer,
  Content,
  Company,
  Connect,
  Website,
  Help,
  List,
  CopyRights,
  Rights,
  App,
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Company>
          <h4>Company</h4>
          <List>
            <span>About us</span>
            <span>Careers</span>
          </List>
        </Company>
        <Website>
          <h4>View Website in</h4>
          <List>
            <span>
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#8f98b2" }}
              />
              &nbsp;&nbsp;&nbsp;English
            </span>
          </List>
        </Website>
        <Help>
          <h4>Need Help</h4>
          <List>
            <span>Visit Help Center</span>
            <span>View Feedback</span>
          </List>
        </Help>
        <Connect>
          <h4>Connect with us</h4>
          <List>
            <span>
              <FontAwesomeIcon
                icon={faDove}
                size="lg"
                style={{ color: "#8f98b2" }}
              />
            </span>
          </List>
        </Connect>
      </Content>
      <CopyRights>
        <Rights>
          <List>
            <span>Copyright © 2023 STAR. All rights reserved.</span>
            <span>
              <span>Terms Of use</span> <span>Privacy Policy</span>{" "}
              <span>FAQ</span>{" "}
            </span>
          </List>
        </Rights>

        <App>
<span><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt = "googleplay"/> &nbsp; <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt = "googleplay"/> </span>

        </App>
      </CopyRights>
    </FooterContainer>
  );
};

export default Footer;
