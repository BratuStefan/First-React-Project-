import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import BodyMain from "./components/body/BodyMain";
import Footer from "./components/footer/Footer";
// document.querySelector("body").style.backgroundColor = "#101010";
function App() {
	return (
		<>
			<NavbarMain></NavbarMain>
			<BodyMain></BodyMain>
			<Footer></Footer>
		</>
	);
}

export default App;
