import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:111-111-1111'>email</LinkItem>
      </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating One Project At A time</Slogan>
      </CompanyContainer>
      <SocialIcons href='https://github.com/TanmayPatil23/'>
        <AiFillGithub size="3.5rem" />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/in/tanmay-patil-0785501b4'>
        <AiFillLinkedin size="3.5rem" />
      </SocialIcons>
      <SocialIcons href='mailto:patilts19.comp@coep.ac.in/'>
        <AiFillMail size="3.5rem" />
      </SocialIcons>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
