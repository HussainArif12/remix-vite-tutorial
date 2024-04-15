import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello world nested" },
    { name: "description", content: "Hello world page!" },
  ];
};

export default function HomePageNested() {
  return (
    <div>
      <h1>This is the Hello Route nested</h1>
    </div>
  );
}
