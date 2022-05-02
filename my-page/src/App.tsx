
import './App.css';

const Pavlo = {
	name: 'Pavlo',
	surName: 'Polishchuk',
	biography: "I've always been interested in programming, but for some reason I only started studying it seriously at the age of 29. At the moment, I continue to study JavaScript and move on to the framework, the first of which is React.",
	contactIn: 'https://www.linkedin.com/in/pavlo-polishchuk-5679b61b6/',
	contactTw: 'https://twitter.com/Vandal85527610',
	contactTg: 'https://t.me/PhenomenalVandalLover',
}

const App = () => (
	<div className="App">
      <h1>Hello, my name is {Pavlo.name} {Pavlo.surName}</h1>
		<div className="bio">
			{Pavlo.biography}
		</div>
		<div className="cont">
			<a href="{Pavlo.contactIn}" className="cont-item">LinkedIn</a>
			<a href="{Pavlo.contactTw}" className="cont-item">Twitter</a>
			<a href="{Pavlo.contactTg}" className="cont-item">Telegram</a>
		</div>
   </div>
);

export default App;
