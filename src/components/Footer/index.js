import React from 'react'
import "./style.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer className="footer fix-footer">
                <div className="content has-text-centered">
                    <div color="white">Mark-It</div> by <a href="#">Passionate Developers</a>. The source code is licensed by
<a target="_blank" href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                </div>
                <h5 className="copyright">&copy; 2020 Copyright</h5>

            </footer>
        </div>
    )
}
