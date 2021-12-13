import React, { useEffect, useState, Fragment} from 'react';
import axios from "axios";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

const App = () => {
	const [resumeData, setResumeData] = useState()

	useEffect(() => {
		(async () => {
			setResumeData((await axios.get('/resumeData.json')).data)
		})()
	}, [])

	return (
		<div className="App">
			{resumeData && (<Fragment>
				<Header data={resumeData.main}/>
				<About data={resumeData.main}/>
				<Resume data={resumeData.resume}/>
				<Portfolio data={resumeData.portfolio}/>
				<Testimonials data={resumeData.testimonials}/>
				<Contact data={resumeData.main}/>
				<Footer data={resumeData.main}/>
			</Fragment>)}
		</div>
	);
}

export default App;
