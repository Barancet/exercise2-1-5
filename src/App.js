import "./App.css";
import Course from "./components/Course";

const App = ({ courses }) => (
  <div>
    <Course courses={courses} />
  </div>
);

export default App;
