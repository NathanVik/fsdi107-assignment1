import React, { Component } from 'react'; // "imrc"
import "./navBar.css";

class NavBar extends Component {  //class component "cc"
    state = {  }
    render() { 
        return ( //wrapper that isn't reflected on html
            <React.Fragment> 
            <div className="navbar">
                NavBar will be here!
            </div>

            </React.Fragment>
         );
    }
}
 
export default NavBar;