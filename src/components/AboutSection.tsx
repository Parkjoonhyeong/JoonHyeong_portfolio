'use client'
import React from 'react'
import Image from 'next/image'
import SCP_presentation from '../../public/images/SCP_presentation.jpg'

const skills = [
  { skill: 'C' },
  { skill: 'Python' },
  { skill: 'JavaScript' },
  { skill: 'Reversing' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
]

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-3xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              🌱피드백과 코드리뷰를 통해 성장하는것을 좋아합니다.
            </h1>
            <p>
              고등학교 때 코딩에 관심이 생겨, 코딩 학원에 다니기 시작했습니다.
              IT 전문 학원에서 C, C++, Python, HTML을 배우면서 코딩에 대한 기초
              지식을 공부했습니다. 코딩 공부를 하던 중 정보 보호라는 분야에 대해
              알게 되면서 관심이 생겨 정보보호학과에 진학했습니다.대학교에
              들어와서는 정보보호 동아리인 SCP에 가입하여, 리버싱을
              공부중입니다.
            </p>
            <br />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, index) => {
                return (
                  <p
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    key={index}
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>

            <Image
              className="hidden md:block md:relative md:bottum-3 md:mx-auto md:z-0 "
              src={SCP_presentation}
              alt="SCP_presentation"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
