import React, { Component, useState, useEffect } from "react";
import './App.css'
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
	const [navHide, setNavHide] = useState(false);
	useEffect(()=>{
		function handleScroll(e) {		
			const nav = document.querySelector('nav') 
			const navHeight = nav.offsetHeight
			if (window.pageYOffset > navHeight) {
				setNavHide(true);
				return nav.classList.add('shadow') 
			}
			setNavHide(false);
    		nav.classList.remove('shadow')
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	})

  return (
    <div className="App">
      <NavBar />
	  <div className="container">
		<Section
			title="About Me"
			subcontent={About}
			dark={true}
			id="section1"
		/>
		<Section
			title="Skills"
			subcontent={Skills}
			dark={false}
			id="section2"
		/>
		<Section
			title="Work Experience"
			subcontent={Experience}
			dark={true}
			id="section3"
		/>
		<Section
			title="Education"
			subcontent={Education}
			dark={false}
			id="section4"
		/>
	  </div>
    </div>
  );
}

export default App;
