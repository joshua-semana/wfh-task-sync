import Login from "@/components/Login";
import Registration from "@/components/Registration";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen flex-col-reverse max-w-7xl mx-auto sm:flex-row">
        <div className=" flex flex-1   justify-center items-center">
          Carousel
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Login />
          <div className="">
            <Registration />
          </div>
        </div>
      </div>
    </main>
  );
}
