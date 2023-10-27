import React from "react";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const err = useRouteError();
  return (
    <div>
      {err.status}: {err.statusTexts}
    </div>
  );
}

export default ErrorPage;
