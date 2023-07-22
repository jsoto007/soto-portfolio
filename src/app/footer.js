'use client'
import {useRouter} from "next/router";
import { useState } from "react";
import Image from 'next/image'
import mail from '../../public/images/mail.png'
import linkedin from '../../public/images/linkedin.png'
import github from '../../public/images/github.png'
import blog from '../../public/images/blog.png'

export default function Footer() {


  return (
  <footer className="footer footer-center p-10  mt-28 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <h5>Contact: <span className="font-semibold dark:text-slate-100">jsoto7087@gmail.com</span></h5>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4 pt-2 px-3 rounded-lg dark:bg-slate-300">
      <button
      className='-mt-2 mr-2 active:bg-green-400 focus:bg-green-200 rounded-lg'
      onClick={() => {navigator.clipboard.writeText("jsoto7087@gmail.com")}}
      >
        <Image src={mail} alt="react Logo" height={30} width="auto"/>
      </button>
      <a
      href="https://www.linkedin.com/in/jose-javier-soto-a29b96111/"
      target="_blank"
      >
        <Image src={linkedin} alt="react Logo" height={40} width="auto"/>
      </a>
      <a
      className='-mt-3 -p-3'
      href="https://github.com/jsoto007"
      target="_blank"
      >
        <Image src={github} alt="react Logo" height={60} width="auto"/>
      </a>
      <a
      className='-mt-1 '
      href="https://medium.com/@JSotoPrograming"
      target="_blank"
      >
        <Image src={blog} alt="react Logo" height={45} width="auto"/>
      </a>

    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - Created by Jose J. Soto</p>
  </div>
</footer>
  )
}