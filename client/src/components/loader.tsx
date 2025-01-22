import { tailChase } from "ldrs";

export default function Loader() {
  tailChase.register();

  return (
    <div className="flex justify-center items-center h-screen">
      <l-tail-chase
        size="40"
        speed="1.75"
        color="black"
      ></l-tail-chase>
    </div>
  );
}
