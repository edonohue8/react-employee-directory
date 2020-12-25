import React from "react";
import "./style.css";

// Importing React and css files

function SiteHead() {
    return (
        <div className="wrapper">
            <div className="title">
                Employee Directory <i class="far fa-address-book"></i>
            </div>
            <br></br>
            <div className="tagline">
                Search & Sort for an Employee by Name
    </div>
        </div>

    );
}

export default SiteHead;