import { useEffect, useState } from "react";
import Login from "./Pages/Login/Login";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Chat from "./Pages/Chat/Chat";
import localforage from "localforage";

let AUTH_TOKEN = null;

localforage.config({
    driver      : localforage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
    name        : 'myApp',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
    description : 'some description'
});

// axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers.common["Accept"] = "application/json";
function App() {
	const [token, setToken] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		if (!token) {
			localforage.getItem('token', function (err, value) {
				if (value) {
					// AUTH_TOKEN = `Bearer ${token}`;
					setToken(value);
				} else {
					navigate('/login');
				}
			});
		}
	}, [token, navigate])
	
	return (
		<>
			<Routes>
				<Route path="/" element={<Chat navigate={navigate} />} />
				<Route path="/login" element={<Login setToken={setToken} />} />
			</Routes>
		</>
	);
}

export default App;
