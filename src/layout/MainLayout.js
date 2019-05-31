import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import sidebarItems from './sidebar/items';
import { Link } from 'react-router-dom';
import { DASHBOARD } from '~/domains/app/routes';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarItems
    }
  }

  toggleMenu = (e, item, key) => {
    const newItems = { ...sidebarItems };
    const isOpen = !newItems[key].isOpen;

    newItems[key].isOpen = isOpen;
    newItems[key].isActive = isOpen;

    this.setState({ sidebarItems: newItems });
  }

  render() {
    return (
      <>
        <div className="page-loader">
          <div className="bg-primary"></div>
        </div>

        <div className="layout-wrapper layout-2">
          <div className="layout-inner">

            <div id="layout-sidenav" className="layout-sidenav sidenav sidenav-vertical bg-dark">

              <div className="app-brand demo">
                <span className="app-brand-logo demo bg-primary"></span>

                <Link to={DASHBOARD} className="app-brand-text demo sidenav-text font-weight-normal ml-2">
                  Appwork
                </Link>

                <Link to={DASHBOARD} className="layout-sidenav-toggle sidenav-link text-large ml-auto">
                  <i className="ion ion-md-menu align-middle"></i>
                </Link>
              </div>

              <div className="sidenav-divider mt-0"></div>

              <Sidebar items={sidebarItems} onClick={this.toggleMenu} />
            </div>

            <div className="layout-container">
              <nav className="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-white container-p-x" id="layout-navbar">
                <Link to={DASHBOARD} className="navbar-brand app-brand demo d-lg-none py-0 mr-4">
                  <span className="app-brand-logo demo bg-primary"></span>
                  <span className="app-brand-text demo font-weight-normal ml-2">Appwork</span>
                </Link>

                <div className="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
                  <Link to={DASHBOARD} className="nav-item nav-link px-0 mr-lg-4">
                    <i className="ion ion-md-menu text-large align-middle"></i>
                  </Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#layout-navbar-collapse">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </nav>

              <div className="layout-content">
                <div className="container-fluid flex-grow-1 container-p-y">
                  <h4 className="font-weight-bold py-3 mb-4">
                    Dashboard
                    <div className="text-muted text-tiny mt-1"><small className="font-weight-normal">Today is Tuesday, 8 February 2018</small></div>
                  </h4>

                  { this.props.children }
                </div>

                <nav className="layout-footer footer bg-footer-theme">
                  <div className="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
                    <div className="pt-3">
                      <span className="footer-text font-weight-bolder">Appwork</span> ©
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="layout-overlay layout-sidenav-toggle"></div>
        </div>
      </>
    );
  }
}

export default MainLayout;
