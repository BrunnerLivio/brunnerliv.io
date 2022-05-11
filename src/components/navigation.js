import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NAVITEM_HOR_PADDING = 8

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
`

const Li = styled.li`
  a {
    text-decoration: none;
    color: var(--accent) !important;
    padding: 16px ${NAVITEM_HOR_PADDING}px;
    text-transform: uppercase;
    font-weight: bold;
  }
`

const Underline = styled.hr`
  background-color: var(--accent);
  width: 87px;
  height: 2px;
  display: block;
  box-shadow: 0px 0px 8px
  var(--accent),
    0px 0px 16px var(--accent);
  &.loaded {
    transition: transform 0.5s ease-in-out, width 0.5s ease-in-out;
  }
`

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.navigation = props.navigation.map(nav => ({
      ...nav,
      ref: React.createRef(),
    }))
    this.underlineRef = React.createRef()
    this.wrapperRef = React.createRef()
    this.state = { isLoaded: false }
  }

  activateNavItem(name = this.navigation[0].name) {
    // Converts /articles/my-article to articles
    const firstPathName = name.split("/").filter(item => !!item)[0]
    const navItem =
      this.navigation.find(
        nav => nav.name === name || nav.to.replace(/\//gi, "") === firstPathName
      ) || this.navigation[0]
    const $underline = this.underlineRef.current
    const $li = navItem.ref.current
    const $wrapper = this.wrapperRef.current
    const offset =
      $li.offsetLeft - $wrapper.offsetLeft + NAVITEM_HOR_PADDING
    const width = $li.getBoundingClientRect().width - NAVITEM_HOR_PADDING * 2
    $underline.style.transform = `translateX(${offset}px)`
    $underline.style.width = `${width}px`
  }

  componentDidMount() {
    this.activateNavItem(this.props.active)
    setTimeout(() => this.setState({ isLoaded: true }), 0)
  }

  componentDidUpdate() {
    this.activateNavItem(this.props.active)
  }

  render() {
    const activateNavItem = this.activateNavItem.bind(this)

    const link = nav =>
      nav.to.startsWith("http") ? (
        <a href={nav.to}>{nav.name}</a>
      ) : (
        <Link to={nav.to}>{nav.name}</Link>
      )
    return (
      <Nav>
        <div ref={this.wrapperRef}>
          {/* eslint-disable-next-line */}
          <Ul onMouseOut={() => activateNavItem(this.props.active)}>
            {this.navigation.map((nav, key) => (
              <Li
                className={this.props.active === nav.name ? "active" : ""}
                onMouseEnter={() => activateNavItem(nav.name)}
                ref={nav.ref}
                key={key}
              >
                {link(nav)}
              </Li>
            ))}
          </Ul>
          <Underline
            className={this.state.isLoaded ? "loaded" : ""}
            ref={this.underlineRef}
          />
        </div>
      </Nav>
    )
  }
}

export default Navigation
