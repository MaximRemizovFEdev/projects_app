import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

// @ts-ignore
const Counter = React.lazy(() => import("app2/Counter")); // initReact(el)
// import Counter from "app2/Counter";

const Fallback = () => (
  <div>Сделать TODO (LS) список (мкрофронтом на другом фреймворке)</div>
);

const GoHome = () => (
  <>
    <Link to="/">{"<= Home"}</Link>
    <div>Something went wrong</div>
  </>
);

export const ToDoPage = () => {
  return (
    <ErrorBoundary fallback={<GoHome />}>
      <Suspense fallback={<Fallback />}>
        <Counter text={"Тест пропс"} />
      </Suspense>
    </ErrorBoundary>
  );
};
