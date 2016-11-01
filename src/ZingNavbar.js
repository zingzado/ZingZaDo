import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
} from 'react-bootstrap';
class ZingNavbar extends Component {
    render() {
        return (
            <Navbar fixedTop>
                <Nav>
                    <NavItem href="#">
                        <span className="hidden-xs">Alerts</span>
                        <span className="badge">4</span>
                    </NavItem>
                    <NavItem href="#about">
                        <span className="hidden-xs">
                            Help
                        </span>
                        <i className="fa fa-question-circle fa-lg"></i>
                    </NavItem>
                    <NavDropdown
                        title=
                            {
                             <span>
                                <span className="hidden-xs">Add </span>
                                <i className="fa fa-plus-circle add fa-lg"></i>
                            </span>
                            }
                        href="#"
                        id="add-item"
                    >
                        <MenuItem>
                            <i className="fa fa-plus-circle add"></i>
                            Zing
                        </MenuItem>
                        <MenuItem>
                            <i className="fa fa-plus-circle add"></i>
                            Collection
                        </MenuItem>
                    </NavDropdown>
                    <NavItem href="#">
                        <span className="hidden-xs">
                            Zings
                        </span>
                        <i className="fa icon-zzd icon-lg zing"></i>
                    </NavItem>
                    <NavDropdown
                        id="user-profile"
                        title={
                            <span>
                                <span className="hidden-xs">
                                    Heather
                                </span>
                                <i className="fa fa-user fa-lg user"></i>
                            </span>
                            }
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Recently Viewed</MenuItem>
                        <MenuItem divider/>
                        <MenuItem>Sign Out</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default ZingNavbar;
