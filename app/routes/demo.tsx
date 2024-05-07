import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Demo page" },
    { name: "description", content: "Hello world page!" },
  ];
};

export default function Demo() {
  return (
    <div>
      <div>
        <span>Name</span>
        <input />
      </div>
      <div>
        <span style={{ backgroundColor: "grey" }}>Body</span>
        <textarea />
        hi
      </div>
    </div>
  );
}
