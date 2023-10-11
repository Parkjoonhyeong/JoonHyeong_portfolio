'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import NextLink from 'next/link'
import profileImage from '../../public/images/IMG_PJH.jpg'
import AnimatedText from './AnimatedText'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { AiOutlineUser, AiFillCalendar } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import AnimatedIcon from './AnimatedIcon'

export default function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-14 md:py-16 md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-1/2 md:mt-1">
          <Image
            className="rounded-full md:shadow-2xl"
            src={profileImage}
            alt="profileImage"
            width={300}
            height={300}
            priority
          />
          <div className="flex text-center justify-center my-6 md:px-10 md:inline-block">
            <ul className="list-inside mx-auto border-3 leading-relaxed space-y-2 md:space-y-1">
              <li>
                <h2 className="text-xl font-bold mt-2 md:text-xl">
                  {'박준형/Park Joon Hyeong'}
                </h2>
              </li>
              <li>
                <AnimatedIcon />
              </li>
              <li>
                <h3 className="text-base font-semibold flex space-x-3 md:text-base">
                  <AiOutlineUser className="inline-block mx-2" />
                  중부대학교 정보보호학과 학생
                </h3>
              </li>
              <li>
                <h3 className="text-base font-semibold flex space-x-3 md:text-base">
                  <AiFillCalendar className="inline-block mx-2" /> 2001.09.19
                </h3>
              </li>
              <li>
                <h3 className="text-base font-semibold flex space-x-3 md:text-base">
                  <MdLocationOn className="inline-block mx-2" /> 서울 영등포구
                  거주
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:mt-0 md:w-3/5">
          <AnimatedText
            text=" 유연한 자세로 빠르게🏃🏻‍♀️ 성장하는 정보보호전문가가 되도록 노력하겠습니다!"
            className="text-4xl/loose mt-6 !text-left m-4"
          />
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            빠르게 변하는 정보 보호 분야에서 발빠르게 흐름에 맞춰 믿음직한
            정보보호 전문가가 되는것을 목표로 하고 싶습니다.
          </p>

          <div className="flex flex-row mt-8 justify-center"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center cursor-pointer">
        <Link
          to="about"
          activeClass="action"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
