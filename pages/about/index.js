import React, { useState } from 'react';
import image from "..//..//public/4696.jpg"

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    title: 'poems',
    info: [
      
      {
        title: ' Alpomish (Epic Poem) – One of the most famous Uzbek oral epics, Alpomish tells the heroic story of a brave warrior who overcomes trials to protect his homeland and family. Passed down for generations, this epic reflects Uzbek values of bravery, loyalty, and honor, making it a cornerstone of national folklore.  ',
        icons: [
          
         
        ],
      },
      {
        // title: 'UI/UX Design',
        // icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'carpets',
    info: [
      {
        title: 'Uzbek Carpets – Woven with intricate patterns and rich colors, Uzbek carpets are more than just home decor—they are a reflection of centuries-old craftsmanship. Traditionally handwoven using natural dyes, these carpets often feature symbols of protection, prosperity, and nature. Each region of Uzbekistan has its unique style, making them treasured heirlooms passed down through generations.  ',
      },
      {
        // title: 'Adobe Design Achievement Awards - Finalist',
        // stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'duppi',
    info: [
      {
        title: ' Duppi (Traditional Uzbek Headwear) – The Duppi is a beautifully embroidered skullcap that holds deep cultural significance in Uzbekistan. Worn by both men and women, it is more than just a fashion accessory—it represents national identity, tradition, and craftsmanship. Each region has distinct embroidery patterns, often featuring symbolic motifs that carry historical and spiritual meanings.  ',
      },
      // {
      //   title: 'Web Developer - ABC Agency',
      //   stage: '2010 - 2012',
      // },
      // {
      //   title: 'Intern - DEF Corporation',
      //   stage: '2008 - 2010',
      // },
    ],
  },
  {
    title: 'music and national dance',
    info: [
      {
        title: 'Music and Dance – Uzbek music is a blend of deep emotion and rhythmic energy, ranging from the classical Shashmaqom to lively folk tunes. Traditional dances like Lazgi, famous for its expressive hand movements, and Andijan Polka, known for its fast-paced steps, bring people together during celebrations and festivals, making music and dance an essential part of Uzbek identity.  ',
      
      },
      // {
      //   title: 'Computer Science Diploma - AV Technical Institute',
      //   stage: '2009',
      // },
      // {
      //   title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
      //   stage: '2006',
      // },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        {/* <Avatar /> */}
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
           Early  <span className='text-accent'>Turkic </span> and Islamic
           Period
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
           
 (9th–14th centuries)
Turkic Oral Tradition: Before the adoption of Islam, Uzbek literature was primarily oral, with epic poetry, legends, and tales passed down through generations. Examples include the Korkut Ata stories and the Alpamysh epic, which are shared among Turkic peoples.

Islamic Influence: With the spread of Islam in the 8th–9th centuries, Persian and Arabic literary traditions began to influence Uzbek literature. Many works were written in Chagatai Turkic, a literary language of Central Asia.


          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                   
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
