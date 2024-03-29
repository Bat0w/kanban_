import React from "react";
import { useState } from "react";
import Arrow from "../../assets/arrow-down.svg";
import "./UserLogin.css";

function UserLogin (){

	const [isProfileOpen, setIsProfileOpen] = useState(false);

	return (
		<div className="user">
			<div className="user-button" onClick={() => setIsProfileOpen(!isProfileOpen)} >

			    <img src={Avatar} className="user-avatar" alt="avatar" />
				<img src={Arrow} className={`chevron ${isProfileOpen ? " open" : ""}`} alt="Arrow" />
                
			</div>

			{isProfileOpen && (
				<ul className="user-menu">
					<li>Profile</li>
					<li>Log out</li>
				</ul>
			)}
		</div>
	);
}

export default UserLogin;