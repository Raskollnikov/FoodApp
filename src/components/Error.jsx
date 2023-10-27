import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOps</h1>
      <p>something Went Wrong!</p>

      <p>{err.data}</p>
      <h3>{err.status}</h3>
    </div>
  );
};

export default Error;
