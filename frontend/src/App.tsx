import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
    return (
        <>
            {/* Skip link for keyboard users */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </main>
        </>
    );
}