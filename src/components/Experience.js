import React from 'react'

const Details = ({position, company, companyLink, time, address, work}) => {
    return <li>
        <div>
            <h3>{position}&nbsp;<a href={companyLink}>@{company}</a></h3>
            <span>
                {time} | {address}
            </span>
            <p>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
        </h2>

        <div className='w-[75] mx-auto relative'>
            <ul>
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
work="Altiris Client, Norton Ghost, Exchange," 
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