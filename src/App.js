import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dasboard";
import MenuItemDetail from "./Components/MenuItemDetails";
import NewMenuItem from "./Components/NewMenuItem";
import UpdateMenuItem from "./Components/UpdateMenuItem";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>

      <Routes>
           {/* Index route for default */}
           <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/menu/:id" element={<MenuItemDetail/>} />
        <Route path="/menu/new" element={<NewMenuItem />} />
        <Route path="/menu/:id/update" element={<UpdateMenuItem/>} />
      </Routes>
    </Router>
  );
};

export default App;
