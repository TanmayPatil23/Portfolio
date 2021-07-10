import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const headerAStyle = {
  display: "flex",
  alignItems: "center",
  color: 'white',
  marginBottom: '20px'
};

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style= {headerAStyle}>
          <DiCssdeck size="3rem" />
          <Span>  PortFolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/TanmayPatil23/'>
        <AiFillGithub size="3.5rem" />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/in/tanmay-patil-0785501b4'>
        <AiFillLinkedin size="3.5rem" />
      </SocialIcons>
      <SocialIcons href='mailto:patilts19.comp@coep.ac.in/'>
        <AiFillMail size="3.5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
