import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  const news = [1, 2, 3, 4];
  return (
    <div className="">
      <Head>
        <title>Dubois Memorial Center | News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="lg:h-[40vh] h-[20vh] w-screen bg-[#0000009e] flex flex-col justify-center items-center gap-2">
        <h1 className="text-white font-medium lg:text-4xl text-2xl">News</h1>
        <div className="text-white">
          <Link href={"/"}>
            <a className="hover:underline ">Home</a>
          </Link>{" "}
          / <text className="text-orange-600">News</text>
        </div>
      </section>
      <section className="lg:p-20 p-10 bg-gray-50 lg:grid grid-cols-3 flex flex-col gap-5">
        {
          news.map((item, index) => {
            return (
              <div className="lg:h-[500px] bg-white h-80 flex flex-col shadow-md" key={index} >
                <div className="relative lg:h-[250px] h-32">
                  <Image src={"/hall.jpeg"} layout="fill" />
                </div>
                <div className="lg:p-8 p-4 flex flex-col lg:gap-4 gap-2">
                  <span className="text-gray-600 lg:text-lg">
                    Some text about news and news and more news. I do not know what to write here again so...
                  </span>
                  <span className="text-gray-400 sm:text-sm italic">
                    12th July, 2022 | 1:00 PM
                  </span>
                  <button className="border-2 hover:bg-orange-600 hover:text-white border-orange-600 text-orange-600 w-max rounded-full h-10 px-3">
                    Read more 
                  </button>
                </div>
              </div>
            )
          })
        }
      </section>
    </div>
  );
}
