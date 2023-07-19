'use client'
import reactLogo from '../../public/images/reactLogo.png'
import css from '../../public/images/css.png'
import html from '../../public/images/html.png'
import javaScript from '../../public/images/javaScript.png'
import nextLogo from '../../public/images/nextLogo.png'
import tailwind from '../../public/images/tailwind.png'
import rubyLogo from '../../public/images/rubyLogo.png'
import railsLogo from '../../public/images/railsLogo.png'
import sqlLogo from '../../public/images/sqlLogo.png'

import Image from 'next/image'

export default function About() {

  return (
    <div 
      className="backdrop-blur-xl bg-white/60 font-sans py-1 rounded-xl animate-fade-left animate-once animate-delay-[1000ms] animate-ease-in flex flex-row"
      id="about"
    >
      <div 
        className="px-10"
      >
  
      <h3 className="text-md md:text-xl font-bold tracking-tight text-black mt-6">
        About
      </h3>
        <p className="mt-3 leading-8 text-black whitespace-normal text-balance text-sm md:text-lg">
        Jose Soto is a skilled software engineer from Bronx, NY, specializing in Ruby on Rails, JavaScript, and React. He enjoys creating user-centric experiences and has completed impressive projects, including “Supervise Hub” and “Expense Tracker.” Jose is dedicated to delivering exceptional software solutions and enjoys coffee in his spare time.
        </p>
      </div>
{/* Skills  */}
      <div>
        <h3 className="text-xl font-bold tracking-tight text-black sm:text-xl mt-6">
          My Skills
        </h3>
        <div className="mt-3 text-lg leading-8 text-black whitespace-normal">
          Frontend
          <ul className='ml-10 mt-2 flex flex-row'>
            <li className='mr-5 ml-2 text-md'>
            <Image src={javaScript} alt="react Logo" height={40} />
              JavaScript
            </li>
            <li className='mr-5 text-md'>
            <Image src={reactLogo} alt="react Logo" height={40} width="auto"/>
              React.js
            </li>
            <li className='mr-5 text-md'>
            <Image src={nextLogo} alt="react Logo" height={40} />
              Next.js
            </li>
            <li className='mr-5 ml-2 text-md'>
            <Image src={html} alt="react Logo" height={40} />
              HTML
            </li>
            <li className='mr-5 ml-2 text-md'>
            <Image src={css} alt="react Logo" height={40} />
              CSS
            </li>
            <li className='mr-5 ml-2 text-md'>
            <Image src={tailwind} alt="react Logo" height={35} />
              Tailwindcss
            </li>
            
          </ul>
        </div>
        <div className="mt-5 text-lg leading-8 text-black whitespace-normal">
          Backtend
          <ul className='ml-10 mt-2 flex flex-row'>
            <li className='mr-5 ml-2 text-md'>
            <Image src={rubyLogo} alt="react Logo" height={40} />
              Ruby
            </li>
            <li className='mr-5 ml-2 text-md'>
            <Image src={railsLogo} alt="react Logo" height={40} />
              Rails
            </li>
            <li className='mr-3 ml-2 text-md'>
            <Image src={sqlLogo} alt="react Logo" height={40} />
              SQL
            </li>
          </ul>
        </div>
      </div>
 
    </div>
  )
}