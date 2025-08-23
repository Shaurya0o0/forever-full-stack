import React from 'react'
import Title from '../components/Title'
import  {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={'ABOUT'} text2={'US'} />
    </div>
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet similique quas alias odit rem magni eaque distinctio ipsam, eligendi fugiat quidem id? Neque blanditiis distinctio nemo, earum iste minima voluptatem.</p>
      <p>come lkmmodsv ojmvpdmvp dvpsdvpo omvpsdmvp Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae possimus porro voluptates perspiciatis voluptas eum nesciunt repellat! Quo maxime harum minima inventore quasi ad debitis nam pariatur, beatae praesentium in!</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus accusantium saepe sapiente quisquam voluptatem quidem, provident dolore non voluptates minus delectus rerum! Earum non, accusantium aut velit libero fuga aperiam!</p>
      </div>
    </div>
    <div className="text-xl py-4">
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
        <b>Quality  Assurance:</b>
        <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
      </div>

      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
        <b>Convenience:</b>
        <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        
      </div>

      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
        <b>Exceptional Customer Service:</b>
        <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        
      </div>
      
    </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
