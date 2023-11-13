import { Route,Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './component/Homepage';
import Lecture from "./component/Lecture";
import Login2 from './component/Login2';
import PracticeQuiz from './component/PracticePage';
import Quiz from './component/Quiz';
import Registration from './component/Registration';
import Profile from './component/UserHome';

const App = () => (
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/lecture" component={Lecture}/>
        <Route exact path="/login2" component={Login2}/>
        <Route exact path="/practicepage" component={PracticeQuiz}/>
        <Route exact path="/quiz" component={Quiz}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/profile" component={Profile}/>
      </Switch>
  )


export default App;
