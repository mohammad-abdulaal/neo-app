import React from "react";

export default function Nav(){
    let button;
        button= (
            <div class="grid-example col s12 m6">
                <ul id="nav-mobile" className = "right hide-on-med-and-down blue darken-2">
                    <li> <a href="/Upload">Upload</a></li>
                    <li> <a href="/Fetching">Fetching</a></li>
                </ul>
            </div>

        )

    return (

        <nav>

            <div className="nav-wrapper  blue darken-2">
                <a href='#' className="brand-logo">Neo mena</a>
                {button}
            </div>


        </nav>)
}
