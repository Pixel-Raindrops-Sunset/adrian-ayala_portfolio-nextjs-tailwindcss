import React from 'react'


// Employer details placeholder data, also for styling the listings  
const Details = ({position, company, companyLink, time, address, work}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-primary capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full '>
                {work}
            </p>
        </div>
    </li>
}
// Placement for past employment details, added a black bar for the employment timeline 
const Experience = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
        </h2>

        <div className='w-[75] mx-auto relative'>
            
<div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />            

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details 
position="Process Assistant" company="Amazon"
companyLink="https://amazon.com" 
time="2022 - Present" address="Kent, WA"
work="Altiris Client, Norton Ghost, Exchange," 
              />
            <Details 
position="Fulfillment Associate" company="Amazon"
companyLink="https://amazon.com" 
time="2018 - 2022" address="Kent, WA"
work="Altiris Client, Norton Ghost, Exchange," 
              />
            <Details 
position="Systems Administrator" company="Cymer"
companyLink="https://www.cymer.com/" 
time="2005 - 2009" address="Rancho Bernardo, CA"
work="Altiris Client, Norton Ghost, IBM Tivoli Storage Manager, IBM Domino, AIX, OracleDB, Microsoft SQL" 
              /> 
            <Details 
position="Systems Administrator" company="Technology Integration Group"
companyLink="https://www.tig.com/" 
time="2005 - 2009" address="Mira Mesa, CA"
work="Altiris Client, Norton Ghost, Exchange," 
              />
            <Details 
position="Applications Administrator" company="Amylin Pharmaceuticals"
companyLink="https://www.bms.com/"
time="2004 - 2005" address="La Jolla, CA"
work="Exchange,              "
              />
              {/* <Details 
position="Systems Administrator" company="Tanox"
companyLink="https://www.gene.com/" 
time="2004 - 2005" address="La Jolla, CA"
work="Exchange," 
              /> */}
            <Details 
position="Systems Administrator" company="San Diego Rescue Mission"
companyLink="https://www.sdrescue.org/"
time="2002-2004" address="San Diego, CA"
work="Exchange, Blackbaud Raiser's Edge & Financial Edge"/>
            </ul>
        </div>
    </div>
  )
}

export default Experience