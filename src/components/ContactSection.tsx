'use client'
import React from 'react'

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

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-3xl">
          Contact Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              📬 Contact
            </h1>
            <p>
              📞Phone number : 010-8806-3984 <br />
              📧email : pjh010919@naver.com <br />
              👦instagram : junbr0_01 <br />
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}
