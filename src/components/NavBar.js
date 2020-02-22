import React, { Component } from "react";
import { Link, Events, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';

const Nav = styled.nav`
  position: relative;
  z-index: 2;
  height: 64px;
  /* background-color: transparent; */
  box-shadow: none;
  transition: all .2s linear;
  -webkit-transition: all .2s linear;

`

const NavTitle = styled.a`
    font-family: "Lobster";
`

const NavItem = styled.li`
`


class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    handleSetActive = (to) => {
        console.log(to);
    };

    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        // scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
    }

    render() {
        return (
        <div className="navbar-fixed">
            <Nav className="blue-grey darken-2">
            <div className="container">
                <NavTitle href="#" className="brand-logo ">
                Rainbow Chao
                </NavTitle>
                <ul id="nav-mobile" className="right hide-on-small-only">
                    <NavItem>
                        <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        About Me
                        </Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        Skills
                        </Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        Experience
                        </Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        Education
                        </Link>
                    </NavItem>
                </ul>
            </div>
            </Nav>
        </div>
        );
    }
}

export default Navbar;
