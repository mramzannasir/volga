/* eslint-disable @next/next/no-img-element */
import Layout from '@/Layout/Layout'
import Sliders from 'Components/Slider'
import Head from 'next/head'
import Navbar from './Navbar'
import { CgPlayButtonO } from "react-icons/cg"
import Reviews from 'Components/Reviews'
import Footer from 'Components/Footer'
export default function Home() {
  return (
    <div className='w-full'>
      <Head>
        <title>Volga Express</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='w-full'>
        {/* Home */}
        <div className='bg-[url(/Banner.png)] bg-cover md:bg-[length:100%_100%] bg-center bg-no-repeat w-full wrapper'>
          <div className="w-full contain flex-col h-[490px] md:h-[600px] lg:h-[650px] xl:h-[750px] 2xl:h-[810px] 3xl:h-[810px]">
            <div className='w-full z-[96 text-white'>
              <Navbar />
            </div>
            <section className='w-full mt-[3rem] md:mt-[7rem] lg:mt-[8rem] xl:mt-[10rem]'>
              <div className='w-full md:w-[70%] xl:w-[66%]'>
                <h1 className='headings text-white text-center md:text-left'>Streamlining your supply chain, one truck at a time.</h1>
                <p className='description text-white opacity-70 my-2 xl:my-4 text-center md:text-left'>Our company, Volga Express Truck Rental offers a variety of trucks for rent. We provide reliable transportation for businesses. Contact us for all your truck rental needs.</p>
                <div className="flex justify-center w-full md:justify-start">   <button className='text-white border-none outline-none h-[48px] w-[141px] rounded-md flex items-center justify-center bg-red'>Get a Quote</button></div>
              </div>
              {/* Slider */}
            </section>
          </div>
        </div>
        <div className="wrapper bg-[#F9F9FB] py-8">
          <div className="contain ">
            <div className='w-full flex-col justify-center items-center'>
              <Sliders />
            </div>
          </div>
        </div>
        {/* Section-1 */}
        <div className='wrapper'>
          <div className="contain flex flex-col">
            <div className='my-[75px] lg:my-[150px] flex flex-col gap-4 lg:gap-12 xl:gap-[3rem] justify-center items-stretch xl:items-center lg:flex-row'>
              <div className='w-full lg:w-[50%]'>
                <h1 className='title text-black text-center sm:text-left lg:mt-3'>Rate negotiation</h1>
                <p className='description text-normalblack text-center sm:text-left mt-2'>Drive, deliver, earn; we’ll do all the rest for you.One of the uncompromising key points for us is transparency. We have clear pricing with no hidden payments or termination fees. We charge our customers from 5 percent to 10 percent from every load depending on the trailer type they are using: dry van, step deck, reefer, flatbed, or hotshot (only 40’ trailers and CDL drivers).</p>
                <div className='w-full'>

                  <div className=''>
                    <svg aria-hidden="true" class="w-[15px] top-1 lg:top-3 left-1  h-[15px] block  text-gray-400 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    <p className='text-base text-center sm:text-left relative xl:text-lg leading-[180%] text-lightblack font-bold mb-2'>Dedicated dispatchers to help match loads Access  to a network of freight brokers in good standing
                      <svg aria-hidden="true" class="w-[15px] h-[15px]  absolute -bottom-3 md:bottom-0 right-1 text-gray-400 " transform="rotate(360)matrix(-1, 0, 0, 1, 0, 0)" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </p>

                  </div>
                </div>
              </div>
              <div className='w-full lg:w-[50%]'>
                <img src="Landing-1.png" alt="" className='w-full lg:max-w-[633px] lg:max-h-[420px]' />
              </div>
            </div>
          </div>
        </div>
        {/* Section-2 */}
        <div className='wrapper bg-[#F9F9FB]'>
          <div className="contain flex-col">
            <div className='my-[75px] lg:my-[150px] flex flex-col gap-4 lg:gap-12 xl:gap-[3rem] justify-center items-stretch xl:items-center lg:flex-row'>
              <div className='w-full lg:w-[50%]'>
                <img src="landing-2.png" alt="" className='w-full lg:max-w-[633px] lg:max-h-[420px]' />
              </div>
              <div className='w-full lg:w-[50%]'>
                <h1 className='title text-black text-center sm:text-left '>Dispatch Services</h1>
                <p className='text-red sub des font-semibold my-2 text-center sm:text-left '>Basic Service Plan(basic fee is 10%) of line-haul</p>
                <p className='sub-des text-normalblack font-normal text-center sm:text-left '>Find freight that best matches the profile for the client.</p>
                <p className='sub-des text-normalblack font-normal text-center sm:text-left '>Upon the client agreeing to the load, dispatcher will fax to shipper/broker the clients W-9, authority and proof of insurance and order insurance certificates if required, along with any other required supporting documentation.</p>

                <p className='my-1 sm:my-2 sub-des text-normalblack font-normal text-center sm:text-left '>Handle the settling and confirmation of appointments if necessary.</p>
                <p className='mb-2 sub-des text-normalblack font-normal text-center sm:text-left '>Prepare directions to shipper/consignee, if necessary.</p>
                <div className="flex justify-center w-full sm:justify-start">
                  <button className='text-white border-none outline-none h-[48px] w-[171px] py-3 rounded-md  bg-red'>Get a Quote</button>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Image Section-3 */}
        <div className='wrapper '>
          <div className='relative w-full'>
            <img src="Landing-3.png" className='w-full  md:h-[806px]' alt="" srcset="" />
            <div className='absolute top-[47%] cursor-pointer rounded-2xl text-white text-4xl md:text-8xl left-[44%]'>
              <CgPlayButtonO />
            </div>
            <div className='absolute  right-0 md:-bottom-[159px] -bottom-[130px]'>
              <img src="/left-landing.png" className='' alt="" />
            </div>
          </div>
        </div>
        <div className="wrapper bg-none ">
          <div className="contain flex-col ">
            <div className="my-[75px] lg:my-[150px] w-full">
              <h1 className='text-sm font-semibold text-red'>What customers says</h1>
              <h1 className='my-2 title text-black'>What customers says</h1>
              <div className='mt-[30px] xl:mt-[50px] w-full'>
                <Reviews />
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper bg-[#F9F9FB]  relative ">
          <div className="contain flex-col justify-center py-[60px] md:py-[80px] xl:py-[120px] items-center">
            <h1 className='title text-black text-center'>Ready to join the team</h1>
            <p className='description my-[12px] md:my-[24px]  text-normalblack  text-center'>Lease to our carrier When you lease with us , you choose the loads that meet your specific business needs. you can go home when you want and load out when you’re ready. There is no forced dispatch.
              Ideal for solo owner-operators and teams with experience and a variety of equipment including vans, flatbeds, step-decks, heavy/specialized, straight trucks and refrigerated.</p>
            <div className="flex justify-center items-center w-full">
              <button className='text-white border-none outline-none h-[48px] w-[141px] rounded-md flex items-center justify-center bg-red'>Learn More</button>
            </div>
          </div>
          <div className="">
            <img src="Landing-mask-right.png" className='absolute bottom-0 right-0 h-[4rem] md:h-[8rem]  lg:h-auto lg:w-auto' alt="" />
          </div>
          <div >
            <img src="Landing-mask-left.png" alt="" className="absolute bottom-0  h-[4rem] md:h-[8rem] left-0 lg:h-auto lg:w-auto" />
          </div>
        </div>
        <div className="wrapper bg-[#1B1B1B]">
          <Footer />
        </div>
      </main >
    </div >
  )
}
