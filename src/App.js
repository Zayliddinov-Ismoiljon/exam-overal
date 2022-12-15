import './App.css';
import Compliant from './Component/Compliant/Compliant';
import Overall from './Component/Overall/Overall';

function App() {
	return (
		<>
    <div className="container">
      <ul className="list">
        <li className="item">
          <Compliant/>
        </li>
        <li className="item">
          <Overall/>
        </li>
      </ul>
    </div>
    </>
	);
}

export default App;
