import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { Container, Drawer } from "@mantine/core";
import { Stack, Button } from "@mantine/core";
import "./main.scss";

//Routes
import Login from "./routes/login";
import Start from "./routes/Start";

import PageNotFound from "./routes/Page404";
import Footer from "./components/Footer";
import HeaderSearch from "./components/Headerline";
import Settings from "./routes/Settings";
import Challenges from "./routes/Challenges";
import Profile from "./routes/Profile";
import ContactUs from "./routes/ContactUs";
import Privacy from "./routes/Privacy";

function App() {
  return (
    <React.Fragment>
      <Router>
        <HeaderSearch />
        <Stack
          justify="space-between"
          className="stack"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
            // height: "100%",
          })}
        >
          <Container>
            <Routes>
              {/* general-pages */}
              <Route path="/" element={<Start />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contactUs" element={<ContactUs />} />

              {/* Other */}
              <Route path="/404" element={<PageNotFound />} />
              <Route path="/privacypolicy" element={<Privacy />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Container>
        </Stack>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
