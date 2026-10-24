import './App.css';
// import ControlledFeedbackForm from './controlled/ControlledFeedbackForm';
import UncontrolledFeedbackForm from './uncontrolled/UncontrolledFeedbackForm';
// import FeedbackForm from './messy/FeedbackForm';

function App() {
  return (
    <>
      <h1>Controlled vs Uncontrolled Components pattern</h1>
      {/* <FeedbackForm /> */}
      {/* <ControlledFeedbackForm /> */}
      <UncontrolledFeedbackForm />
    </>
  );
}

export default App;
