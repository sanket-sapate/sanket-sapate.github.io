import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ContactMe from "../pages/ContactMe";
import Home from "../pages/Home";
import ItsMe from "../pages/ItsMe";
import MyLove from "../pages/MyLove";
import MyProjects from "../pages/MyProjects";

function PageContainer({ activeLink }) {
	const navigate = useNavigate();

	const navigation = (key) => {
		if (key == 1) navigate("/");
		if (key == 2) navigate("/itsme");
		if (key == 3) navigate("/mylove");
		if (key == 4) navigate("/myprojects");
		if (key == 5) navigate("/contactme");
	};

	useEffect(() => {
		navigation(activeLink);
	}, [activeLink]);

	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='/itsme'
				element={<ItsMe />}
			/>
			<Route
				path='/mylove'
				element={<MyLove />}
			/>
			<Route
				path='/myprojects'
				element={<MyProjects />}
			/>
			<Route
				path='/contactme'
				element={<ContactMe />}
			/>
		</Routes>
	);
}

export default PageContainer;
