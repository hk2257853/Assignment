import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import History from "./components/History/Historypg";

const App = () => (
  <>
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/history" exact element={<History />} />
        </Routes>
      </Container>
    </BrowserRouter>
    <GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>
  </>
);

export default App;
