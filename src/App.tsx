import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router";

import { Body } from "./components/Body";
import { Header } from "./components/Header/Header";
import type { SortByType } from "./components/SortBy/SortBy";
import { SortBy } from "./components/SortBy/SortBy";

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
  const [sortBy, setSortBy] = useState<SortByType>("default");

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
            <SortBy setSortByParent={setSortBy} />
          </ErrorBoundary>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Body sortBy={sortBy} />
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
