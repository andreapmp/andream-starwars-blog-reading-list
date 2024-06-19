import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const{ store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"
						alt="Star Wars Logo"
						className="mr-2"
						style={{ height: "60px" }} 
					/>
				</span>
			</Link>
			
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((item, index) => (
							<li key={index}>
								<Link to={""}>{item.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
    	</nav>
	);
};
