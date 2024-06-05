import Homepage from "@/components/Homepage";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {FaHome} from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="mx-2-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome/>},
        ]}/>
        <Homepage/>
      </div>
    </main>
  );
}
