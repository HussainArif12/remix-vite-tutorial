import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const contactId = params.contactId;

  //return json({ returned_id: contactId });
  const data = [
    { age: 21, name: "Hussain" },
    { age: 22, name: "Keith" },
  ];
  const sum = data.reduce((prev, current) => prev + current.age, 0);
  console.log("port", import.meta.env.VITE_PORT);
  return json({ total_sum: sum, received_data: data });
}

export default function ContactsWithId() {
  const params = useParams();
  const data = useLoaderData<typeof loader>();
  console.log(params.contactId);
  console.log("returned data from the server ", data);
  return <div>Contact ID {params.contactId}</div>;
}
