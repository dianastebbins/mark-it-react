import React from 'react'
import "./style.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer className="footer fix-footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Bulma</strong> by <a href="#">Passionate Developers</a>. The source code is licensed
      <a target="_blank" href="http://opensource.org/licenses/mit-license.php">MIT</a>.
       {/* The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>. */}
    </p>
                </div>
                <div> copy right 2020</div>
            </footer>
        </div>
    )
}
