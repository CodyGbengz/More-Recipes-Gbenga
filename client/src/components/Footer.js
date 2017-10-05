import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer white">
          <div className="container">
              <div className="row">
                  <div className="col m12 s12 black-text">
                      © 2017 Copyright Gbenga Ode for Andela
                      <a className="black-text text-lighten-4 right" href="">Project Repo <i className="fa fa-github"></i></a>
                  </div>
               </div>
            </div>
    </footer>
    )
  }
}

export default Footer;
