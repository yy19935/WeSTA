import React from 'react'
import styled from 'styled-components'

export const Nav = () => {




  return (
    <NavWrapper>
      <Logo>
        <img
          alt="WeSTA logo"
          src="image/logo.png"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
      <Main onClick={() => (window.location.href = "main")}>Main </Main>
      <Blog onClick={() => (window.location.href = "blog")}>Blog </Blog>


    </NavWrapper>
  )
}

export default Nav


const NavWrapper = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #595959;
display: flex;
justify-content: left;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index: 3;
`
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img{
    display: block;
    width: 100%;
  }
`

const Blog = styled.a`
  cursor: pointer;
`
const Main = styled.a`
  cursor: pointer;
`