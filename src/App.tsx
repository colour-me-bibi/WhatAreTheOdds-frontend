import useIsLoggedIn from "#/hooks/useIsLoggedIn";
import { default as Home } from "#/pages/index";
import CreateMarket from "#/pages/markets/CreateMarket";
import MarketDetail from "#/pages/markets/MarketDetail";
import Markets from "#/pages/markets/Markets";
import Profile from "#/pages/Profile";
import SignIn from "#/pages/SignIn";
import SignOut from "#/pages/SignOut";
import SignUp from "#/pages/SignUp";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";

function App() {
  const queryClient = new QueryClient();
  const isLoggedIn = useIsLoggedIn();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={!isLoggedIn ? <SignIn /> : <Navigate to="/" replace />} />
          <Route path="/signUp" element={!isLoggedIn ? <SignUp /> : <Navigate to="/" replace />} />
          <Route
            path="/signOut"
            element={isLoggedIn ? <SignOut /> : <Navigate to="/signIn" replace />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/signIn" replace />}
          />
          <Route path="/markets" element={<Markets />} />
          <Route path="/markets/new" element={<CreateMarket />} />
          <Route path="/markets/:marketId" element={<MarketDetail />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/markets/new" element={<CreateMarket />} /> */}
          {/* <Route path="/markets/:marketId/edit" element={<Market />} /> */}
          {/* <Route path="/leaderboards" element={<Leaderboards />} /> */}
          <Route path="*" element={<div className="fw-bold fs-1">404, good luck...</div>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
