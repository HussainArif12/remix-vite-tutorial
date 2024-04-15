import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello to a particular person" },
    { name: "description", content: "Hi!" },
  ];
};

export default function HomePageNested() {
  const params = useParams();
  return (
    <div>
      <h1>Hi, {params.name}</h1>
    </div>
  );
}
