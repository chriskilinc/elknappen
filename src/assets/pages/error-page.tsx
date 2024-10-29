import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string, status?: number };
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Tyvärr så har ett oväntat fel inträffat!</p>
      <p>
        <i>{error?.status} - {error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}