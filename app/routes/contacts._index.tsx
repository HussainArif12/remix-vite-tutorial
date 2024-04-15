import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "This is the Contacts Page" },
    { name: "description", content: "Hello world page!" },
  ];
};

export default function ContactsPage() {
  return (
    <div>
      <h1>This is the Contacts Page</h1>
    </div>
  );
}
