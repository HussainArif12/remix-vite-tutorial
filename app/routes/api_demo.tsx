import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const recorded_id = url.searchParams.get("id");
  if (!recorded_id) {
    return json({ message: "No ID found" });
  }
  return json({ message: `id in param: ${recorded_id}` });
}

export async function action({ request }: ActionFunctionArgs) {
  const { method } = request;
  const request_body = await request.json();
  console.log("method");
  return json({ method, recorded_body: request_body });
}
