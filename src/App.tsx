import React, { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

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
      <div
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateRows: "2fr 10fr",
        }}
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Header />
        </ErrorBoundary>
        <div>H</div>
      </div>
    </>
  );
}

const Header = () => {
  return <div>H</div>;
};
export default App;
