import Navbar from "../ui/Navbar";

function Home() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">

        <Navbar />
        <main className="flex flex-col items-center justify-center mt-40">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary-700 mb-10">به ساده ترین روش پروژه ثبت کنید و پروژه بگیرید</h1>
          <h2 className="text-secondary-500 ">مطمئن ترین بستر ارتباطی میان فریلنسرها و کارفرمایان</h2>
        </main>
      </div>
    </div>
  );
}

export default Home;
