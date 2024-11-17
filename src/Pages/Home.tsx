import { ModeToggle } from "@/components/mode-toggle";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold uppercase text-2xl">Home Page hello</h1>
      <ModeToggle />
    </div>
  );
};

export default Home;
