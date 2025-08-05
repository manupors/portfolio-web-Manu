import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Comunicate conmigo!</LinkTitle>
          <LinkItem href="tel:314-343-3432">+56938957763</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            manu.lagososorio@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Desarrollado por Manuel Lagos</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/manupors">
                    <AiFillGithub size="3rem" />
                  </SocialIcons>
                  <SocialIcons href="https://www.linkedin.com/in/manuel-lagos-osorio-214951127/">
                    <AiFillLinkedin size="3rem" />
                  </SocialIcons>
                  <SocialIcons href="https://www.instagram.com/manuel_maximiliano/">
                    <AiFillInstagram size="3rem"/>
                  </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

