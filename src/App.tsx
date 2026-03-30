import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router";

import { Body } from "./components/Body";
import { Header } from "./components/Header/Header";

function ErrorFallback({ error }: { error: unknown }) {
  useEffect(() => {
    //TODO:
    //Add to logging service
    //error.message
    console.log("error boundary hit");
  }, []);
  return (
    <div>
      Something went wrong
      <pre>{error.message}</pre>
    </div>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "0fr 0fr 10fr",
            width: "100wh",
            overflow: "scroll",
          }}
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Header />
          </ErrorBoundary>
        
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Body />
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
