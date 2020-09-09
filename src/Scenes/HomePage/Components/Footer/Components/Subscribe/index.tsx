import * as React from 'react'
import './style.css'

class Subscribe extends React.Component<{}, {}> {
    render() {
        return (
            <div className="subComp col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="subCompTitle osLight">
                    {this.props.children}
                </div>
                <ul className="mainList">
                    <li className="footer-phone">
                        <span className="fa fa-phone" />  0962 573 550
                    </li>
                    <li className="footer-mail">
                        <span className="fa fa-envelope" />  <a href="mailto: abc@example.com">blabla@gmail.com</a>
                    </li>
                </ul>
                {/* <form role="form">
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <a href="#" className="btn btn-green btn-block isThemeBtn">Subscribe</a>
          </div>
        </form> */}
            </div>
        )
    }
}

export default Subscribe
