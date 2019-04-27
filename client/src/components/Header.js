import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
// const id = 16792219306-j86vhirhs25ikbl2li1oe60arkh5p0gs.apps.googleusercontent.com
const Header = () => {
    return (
        <div className="ui secondary pointing menu ">
            <Link to="/" className="item" style={{ color: "purple" }}>
                StreamLand
            </Link>
            <div className="right menu">
                <Link to="/" className="item" style={{ color: "purple" }}>
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;
