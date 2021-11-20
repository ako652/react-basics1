
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynvbar from './components/Mynvbar'
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease'
import './App.css';

function App() {
  return (
    <div>
    <Mynvbar  brand='ako'/>
    <Welcome />
    <LatestRelease/>
    </div>
  );
}

export default App;
