import React from 'react'

import { motion } from 'framer-motion'


const stairAnimation ={
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
}

//calculate de reverse index for stagered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
    {/*Render 6 motion divs, each representing a step of the stairs
    
    each div will have the same animation defined by the stairAnimation object
    The delay for each div is calculated dinamically based on it's reversed index,
    creating a staggered effect with decreasing delay for each subsequent step*/}
    {[...Array(6)].map((_, index) => (
      <motion.div
        key={index}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.2,
          ease: "easeIn",
          delay: reverseIndex(index) * 0.1,
        }}
        className="h-full w-full bg-accent relative"
      ></motion.div>
    ))}
    </>
  )
}

export default Stairs