import React from 'react'

export default function ProfilePage() {
    return (
        <div>
        
            <div className="ProfilePage">
            <div className="body">

                <h1>Profile Page</h1>
                <h3>Navbar goes here</h3>
                <h3>Notification section...Vendor added product or date, other?</h3>
                <h3>IF(user is Vendor and selected Vendor mgmt)<br></br>
                </h3>
                <button class="button is-dark">Schedule at a market</button><br></br>
                <button class="button is-dark">Manage Products</button><br></br>
                <button class="button is-dark">Manage Product Link</button><br></br>
                <button class="button is-dark">Manage Profile Link</button><br></br>
                <button class="button is-dark">View Upcoming schedule</button><br></br>
            ELSE Favs was selected<br></br>

                <button class="button is-primary">Favorite Markets link</button><br></br>
                <button class="button is-primary">Search All Markets link</button><br></br>
                <button class="button is-primary">Favorite Vendors link</button><br></br>
                <button class="button is-primary">Search All Vendors link</button><br></br>


            </div>
        </div>
        </div>
    )
}
