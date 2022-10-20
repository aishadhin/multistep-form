import { useState } from "react";
import "./App.css";
import Stepper from "./Components/Stepper";
import StepperControl from "./Components/StepperControl";
import Account from "./Components/Steps/Account";
import Details from "./Components/Steps/Details";
import Final from "./Components/Steps/Final";

function App() {

  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Account Information", "Personal Details", "Complete"];

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Account></Account>;
      case 2:
        return <Details></Details>;
      case 3:
        return <Final></Final>;
      default:
    }
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper  */}

      <div className="container horizontal mt-5">
        <Stepper steps = {steps} currentStep = {currentStep}></Stepper>
      </div>

      {/* Navigation Controls */}
      <StepperControl></StepperControl>
    </div>
  );
}

export default App;
