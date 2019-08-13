import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import color from "color"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
`;

const Li = styled.li`
  margin-right: 20px;
  a {
    text-decoration: none;
    color: ${props => props.theme.accent};
    text-transform: uppercase;
  }
`;

const Underline = styled.hr`
  background-color: ${props => props.theme.accent};
  width: 45px;
  height: 2px;
  display: block;
  box-shadow: 0px 0px 8px ${props => color(props.theme.accent).darken(0.2).toString()}, 0px 0px 16px ${props => props.theme.accent};
  transition: transform 0.5s ease-in-out, width 0.5s ease-in-out;
`;

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.underlineRef = React.createRef();
    this.wrapperRef = React.createRef();
  }

  onLinkHover(event) {
    const $underline = this.underlineRef.current;
    const $li =  event.target;
    const $wrapper = this.wrapperRef.current;
    const offset = $li.offsetLeft - $wrapper.offsetLeft;
    $underline.style.transform = `translateX(${offset}px)`;
    $underline.style.width = $li.getBoundingClientRect().width + 'px';
  }

  onLinkMouseOut() {
    const $underline = this.underlineRef.current;
    $underline.style.transform = `translateX(0px)`;
    $underline.style.width = '45px';
  }

  render() {
    const onLinkHover = this.onLinkHover.bind(this);
    const onLinkMouseOut = this.onLinkMouseOut.bind(this);
    return (
    <Nav>
      <div ref={this.wrapperRef}>
        <Ul onMouseOut={onLinkMouseOut}>
          <Li onMouseEnter={onLinkHover}><Link to="/">Home</Link></Li>
          <Li onMouseEnter={onLinkHover}><Link to="/page-2">Projects</Link></Li>
          <Li onMouseEnter={onLinkHover}><Link to="">Articles</Link></Li>
        </Ul>
        <Underline ref={this.underlineRef} />
      </div>
    </Nav>
    )
  }
}

export default Navigation;