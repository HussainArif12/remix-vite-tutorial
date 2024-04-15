import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello world" },
    { name: "description", content: "Hello world page!" },
  ];
};

export default function HomePage() {
  return (
    <div>
      <h1>This is the Hello Route</h1>
    </div>
  );
}
