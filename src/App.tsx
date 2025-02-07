import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Main from "./components/Main/Main";
import { Flowbite } from "flowbite-react";
import SignUpPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ResetPasswordRequest from "./pages/ResetPasswordRequest/ResetPasswordRequest";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import VerifyEmailPage from "./pages/VerifyEmail/VerifyEmailPage";
import PublicRoute from "./routes/PublicRoute";
import AuthPage from "./pages/Auth/AuthPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify/Verify";
import PasswordResetLinkSent from "./pages/PasswordResetLinkSent/PasswordResetLinkSent";
import LinkExpired from "./pages/LinkExpired/LinkExpired";
import PasswordChanged from "./pages/PasswordChanged/PasswordChanged";

// Custom theme for Flowbite
const customTheme = {
  button: {
    size: {
      middle: "text-xs px-2 py-1 md:text-sm md:px-4 md:py-1.5 xl:text-base xl:px-6 xl:py-2 2xl:text-xl",
    },
  },
  pagination: {
    pages: {
      selector: {
        active: "bg-cyan-50 text-white hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      },
    },
  },
  textInput: {
    field: {
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400 animate-spin",
      },
    },
  },
};



function App() {
  return (
      <Flowbite theme={{ theme: customTheme }}>
        <div className="bg-[#ffffff] min-h-screen">
          <Router>
            <Routes>
              <Route path="/auth" element={<PublicRoute />}>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/auth/verify" element={<Verify />} />
                <Route path="/auth/verify-email" element={<VerifyEmailPage />} />
                <Route path="/auth/sign-up" element={<SignUpPage />} />
                <Route path="/auth/request-reset-password" element={<ResetPasswordRequest />} />
                <Route path="/auth/reset-password" element={<ResetPassword />} />
                <Route path="/auth/password-reset-link-sent" element={<PasswordResetLinkSent />} />
                <Route path="/auth/link-expired" element={<LinkExpired />} />
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/change-password" element={<ChangePassword />} />
                <Route path="/auth/password-changed" element={<PasswordChanged />} />
              </Route>
              <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Main />}>
                  {/* Nested routes */}
                  <Route index element={<Home />} />
                  <Route path="dashboard" element={<Home />} />
                  {/* <Route path="change-password" element={<ChangePassword />} /> */}
                </Route>
              </Route>
   
            </Routes>
            <ToastContainer />
          </Router>
        </div>
      </Flowbite>
  );
}

export default App;
