import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Museum() {

  return (
    <div className="">
      <Head>
        <title>Museum</title>
        <meta name="description" content="DuBois Center Museum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="lg:h-[40vh] h-[20vh] w-screen bg-[#0000009e] flex flex-col justify-center items-center gap-2">
        <h1 className="text-white font-medium lg:text-4xl text-2xl">Museum</h1>
        <div className="text-white">
          <Link href={"/"}>
            <a className="hover:underline ">Home</a>
          </Link>{" "}
          / <text className="text-[#EC994B]">Museum</text>
        </div>
      </section>
      <section className="p-20">
      </section>
    </div>
  );
}
