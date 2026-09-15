import "./App.css";
import CountTimer from "./components/CountTimer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-800 items-center justify-center">
        <h1>React-SRP-TimerApp</h1>
        <CountTimer />
      </div>
    </>
  );
}

export default App;
