import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedArrow from '../components/AnimatedArrow'

const links = [
    { name: 'Our Templates', href: '#' },
    { name: '5 Mins Resume', href: '/create-resume' },
   
  ]
  const stats = [
    { name: '', value: '' },
    { name: '', value: '' },
    
  ]
  
  export default function Header() {
    return (
      <div className="relative isolate overflow-hidden bg-black py-12 md:py-24 ">
      
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
        >
          <path
            fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          {/* <defs>
           <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
           
          </defs> */}
        </svg>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
        >
          <path
            fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Creative Resume Creater</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            use our creative resume template to quickly and easily create a visually appealing resume / CV in just 5 minutes.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link key={link.name} to={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
         
        </div>
        <AnimatedArrow props={ 
        <svg width="100%" height="100%" viewBox="0 0 315 107" version="1.1" style={{ overflow: 'visible' }}>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage">
                    <path
                        id="Path-1"
                        className="path"
                        fill="none"
                        stroke="gray"
                        strokeWidth="1"
                        strokeLinejoin="round"
                        strokeMiterlimit="1"
                        d="M0,0C 0,0 0,0 0,0  S 0,0 0,0  S 240,100 315,0  V 60" />
                    <polyline
                        id="arrow"
                        points="0,-9 18,0 0,9 5,0"
                        fill="gray"
                        // onAnimationStart={() => setAnimationStarted(false)}
                        // onAnimationEnd={() => console.log("end")}
                        // style={{ animation: animationStarted ? '1.6s ease-in-out 1s forwards arrow-animation' : '' }}
                    >
                        <animateMotion rotate="auto" dur="1.6s" repeatCount="1" fill="freeze">
                            <mpath xlinkHref="#Path-1" />
                        </animateMotion>
                    </polyline>
                </g>
            </svg>
          } />
      </div>
    )
  }