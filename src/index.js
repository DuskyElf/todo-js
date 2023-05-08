import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./index.css"
import { Layout, Todo, Done } from "./pages.js"

function Index() {
    const navigate = useNavigate();
    React.useEffect(() => navigate("/todo"), []);
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/done" element={<Done />} />
                    <Route path="/" element={<Index />} />
                    <Route path="*" element={<h1>{"404"}</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
