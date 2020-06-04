import React from 'react'
import "./style.css";

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="content has-text-centered">
                    <div className="footdiv" ><span className="footSpan">Mark-It &copy; 2020. 
                    {/* The source code is licensed by <a target="_blank" rel="noopener noreferrer" href="http://opensource.org/licenses/mit-license.php"><span className="tag is-rounded is-info"> MIT</span></a> */}
                    </span>
                {/* <span className="footSpan copyright is-pulled-right">&copy; 2020</span> */}
                </div>
                </div>

            </footer>
        </div>
    )
}
