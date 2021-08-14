import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './footerElement';
import './footer.css';

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            Hack Odisha © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/hackodisha"
              rel="noopener"
              target="_blank"
              aria-label="Facebook"
              className="social-link"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/webwiz.nitr/"
              rel="noopener"
              target="_blank"
              aria-label="Instagram"
              className="social-link"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/hackodisha"
              rel="noopener"
              target="_blank"
              aria-label="Twitter"
              className="social-link"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/company/hackodisha/"
              rel="noopener"
              target="_blank"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
