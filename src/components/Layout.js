import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "../pages/Landing/Landing";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Workshops from "../pages/Workshops/Workshops";
import Tutoring from "../pages/Tutoring/Tutoring";
import Contact from "../pages/Contact/Contact";
import Volunteer from "../pages/Volunteer/Volunteer";
import PageTransition from "./PageTransition";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Landing />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/team"
          element={
            <PageTransition>
              <Team />
            </PageTransition>
          }
        />
        <Route
          path="/workshops"
          element={
            <PageTransition>
              <Workshops />
            </PageTransition>
          }
        />
        <Route
          path="/tutoring"
          element={
            <PageTransition>
              <Tutoring />
            </PageTransition>
          }
        />
        <Route
          path="/volunteer"
          element={
            <PageTransition>
              <Volunteer />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Layout;
