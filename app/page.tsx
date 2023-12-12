import Image from 'next/image'
import back from '@/icon/back.png'



const Home: React.FC = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div >
        <Image src={back} alt="Home image" fill  />
      </div>
      <div className='absolute inset-0 top[120px] max-w-7xl mx-auto flex flex-row items-start gap-5' >
        <div className=' flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#9153ff]' />
          <div className='w-1 sm:h-80 h-40 bg-[rgb(145,83,255)]'/>
        </div>
        <div>
          <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'> Hi , I'm<span className='text-white'>Rahul</span></h1>
          <p className='mt-2 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
            I develop web applications.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
      </div>
    </section>
  )
}
export default Home;
