import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Registration/SignIn";
import SignUp from "./Components/Registration/SignUp";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
