import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
    const error: unknown = useRouteError();
    let errorMessage: string | unknown;

    if (isRouteErrorResponse(error)) errorMessage = error.statusText;
    else if (error instanceof Error && "message" in error) errorMessage = error.message;
    else if (typeof error === "string") errorMessage = error;
    else {
        console.log(error);
        errorMessage = "Unknown Error";
    }
  return (
    <div className="h-screen flex flex-col justify-center items-center text center">
        <h1 className="font-bold mb-4">Oops!</h1>
        <p>An Error Occurred</p>
        <p>{ typeof errorMessage === "string" && errorMessage }</p>
    </div>
  )
}

export default Error