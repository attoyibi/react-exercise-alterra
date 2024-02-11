import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Dashboard } from "./components";
import { AuthProvider } from "./context/AuthContext";
import { PublicLayout, PrivateLayout } from "./layouts";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/dashboard" element={<PrivateLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
