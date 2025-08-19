import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

// @ts-ignore
// const Counter = React.lazy(() => import("app2/Counter")); // test import
const ToDoList = React.lazy(() => import("app2/ToDoList"));

const Fallback = () => <div>Загрузка TODO (LS)...</div>;

const GoHome = () => (
  <>
    <Link to="/">{"<= Home"}</Link>
    <div>Something went wrong</div>
  </>
);

const wrapper: React.CSSProperties = {
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  width: "1024px",
  textAlign: "left"
};

export const ToDoPage = () => {
  return (
    <ErrorBoundary fallback={<GoHome />}>
      <Suspense fallback={<Fallback />}>
        {/* <Counter text={"Тест пропс"} /> */}
        <div style={wrapper}>
          <ToDoList />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};
