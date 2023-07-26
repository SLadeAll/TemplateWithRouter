import { Link } from "react-router-dom";
import AgeCalculator from "./miniProjects/AgeCalculator";
function Home() {
  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <AgeCalculator/>
    </div>
  );
}

export default Home