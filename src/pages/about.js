import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import ProfilePic from "../../public/images/profile/adrianBW.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../components/Skills'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 2000})
const isInView = useInView(ref,{once: true});

useEffect (() => {
  if(isInView){
    motionValue.set(value);
  }
},[isInView, value, motionValue])

useEffect (() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })
},[springValue,value])

  return <span ref={ref}></span>
}


const _about = () => {
  return (
    <>
        <Head>
            <title>About Page</title>
            <meta name="description" content="All About Adrian"/>
        </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className='mb-12'/>
        <div className='grid w-full grid-cols-8 gap-12'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
        <p className='font-medium'>
        Hi, I am Adrian Ayala. A web developer with a passion for learning how to data into information within user-centered digital experiences. I have 10+ years of experience in the IT field. I am always looking towards new and innovative ways to bring my blah blah blah.
        </p>
        <p className='font-medium my-4'>
        I believe that design is about more than just making things look pretty - it is about solving problems, creating intuitive, and enjoyable experiences for the community.
        </p>
<p className='font-medium'>
        Whether I am working on a website, mobile applications, or other digital products, I always bring my full commitment to design excellence.
</p>

        </div>
<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
         
<div className='absolute top-0 -right-2 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
    <Image src={ProfilePic} alt="Adrian Ayala" className='w-full h-auto rounded-2xl'/>
</div>
<div className='col-span-2 flex flex-col items-end justify-between'>
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-5xl font-bold'>
        <AnimatedNumbers value={3}/>+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>   
    </div>
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-5xl font-bold'>
        <AnimatedNumbers value={6}/>+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75'>Years of Experience</h2>   
    </div>  
</div>
        </div>
        <Skills />
        </Layout>
      </main>
    </>
  )
}

export default _about