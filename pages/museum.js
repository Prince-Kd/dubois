import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Museum() {
  return (
    <div className=''>
      <Head>
        <title>Museum</title>
        <meta name="description" content="DuBois Center Museum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='lg:h-[40vh] h-[20vh] w-screen bg-[#0000009e] flex flex-col justify-center items-center gap-2'>
        <h1 className='text-white font-medium lg:text-4xl text-2xl'>Meseum</h1>
        <div className='text-white'><Link href={"/"}><a className='hover:underline '  >Home</a></Link> / <text className='text-orange-600'>Museum</text></div>
      </section>
    </div>
  )
}
