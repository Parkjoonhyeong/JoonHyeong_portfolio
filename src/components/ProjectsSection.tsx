import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import SlideUp from './SlideUp'

const project1 = {
  title: 'Clerk Auth',
  description: '2023년 2학기에 한 Clerk Auth 사이트입니다.',
  link: 'https://clerk1-olive.vercel.app/',
  github: 'https://github.com/Parkjoonhyeong/Clerk1',
  imagePath: '/images/projects/Clerk_Auth.jpg',
}

const project2 = {
  title: 'Web Demo',
  description: '2023년 2학기에 한 Web Demo 사이트입니다.',
  link: 'https://hcj1-theta.vercel.app/',
  github: 'https://github.com/Parkjoonhyeong/Web-Demo',
  imagePath: '/images/projects/Web_Demo.jpg',
}

const project3 = {
  title: 'Dapara Shopping',
  description:
    '2023년 2학기에 한 Depara Shopping 사이트입니다. 가상의 쇼핑몰 페이지를 구축해봤습니다.',
  link: 'https://depara1.vercel.app/',
  github: 'https://github.com/Parkjoonhyeong/Web-Demo',
  imagePath: '/images/projects/Depara_Shopping.jpg',
}

const project4 = {
  title: 'MongoDB CRUD',
  description:
    '2023년 2학기에 한 MongoDB CRUD 사이트입니다. MongoDB를 활용해 백엔드를 구축해봤습니다.',
  link: 'https://crud1-ten.vercel.app/',
  github: 'https://github.com/Parkjoonhyeong/crud1',
  imagePath: '/images/projects/MongoDB_CRUD.jpg',
}

const project5 = {
  title: 'Gamja Market',
  description:
    '2023년 2학기에 할 팀프로젝트  감자 마켓 사이트입니다. 팀원은 92015075 김평안,​ 92014966 김건희​, 92015154 박준형​, 92015192 신건훈 입니다.',
  link: 'https://potato-market.vercel.app',
  github: 'https://github.com/Parkjoonhyeong/potato_market',
  imagePath: '/images/projects/Gamja_Market.jpg',
}

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-3xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28 mb-20">
        <div>
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col animate-sliderUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className="mt-8 md:w-1/2">
                <Link href={project1.link} target="_blank">
                  <Image
                    className="rounded-xl shadow-xl hover:opacity-70"
                    src={project1.imagePath}
                    alt={project1.title}
                    width={1000}
                    height={1000}
                  />
                </Link>
              </div>
              <div className="md:mt-6 md:w-1/2  mt-8 text-center md:text-left">
                <h1 className="md:text-3xl font-bold mb-6 text-2xl">
                  {project1.title}
                </h1>

                <p className="md:line-clamp-3 text-xl leading-7 my-4 text-neutral-600">
                  {project1.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4 justify-center mt-4 md:justify-start">
                  <Link href={project1.github} target="_blank">
                    <BsGithub
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

        {/* 새로운 프로젝트 추가 */}
        <div>
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col animate-sliderUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className="mt-8 md:w-1/2">
                <Link href={project2.link} target="_blank">
                  <Image
                    className="rounded-xl shadow-xl hover:opacity-70"
                    src={project2.imagePath}
                    alt={project2.title}
                    width={1000}
                    height={1000}
                  />
                </Link>
              </div>
              <div className="md:mt-6 md:w-1/2  mt-8 text-center md:text-left">
                <h1 className="md:text-3xl font-bold mb-6 text-2xl">
                  {project2.title}
                </h1>

                <p className="md:line-clamp-3 text-xl leading-7 my-4 text-neutral-600">
                  {project2.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4 justify-center mt-4 md:justify-start">
                  <Link href={project2.github} target="_blank">
                    <BsGithub
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

        <div>
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col animate-sliderUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className="mt-8 md:w-1/2">
                <Link href={project3.link} target="_blank">
                  <Image
                    className="rounded-xl shadow-xl hover:opacity-70"
                    src={project3.imagePath}
                    alt={project3.title}
                    width={1000}
                    height={1000}
                  />
                </Link>
              </div>
              <div className="md:mt-6 md:w-1/2  mt-8 text-center md:text-left">
                <h1 className="md:text-3xl font-bold mb-6 text-2xl">
                  {project3.title}
                </h1>

                <p className="md:line-clamp-3 text-xl leading-7 my-4 text-neutral-600">
                  {project3.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4 justify-center mt-4 md:justify-start">
                  <Link href={project3.github} target="_blank">
                    <BsGithub
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

        <div>
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col animate-sliderUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className="mt-8 md:w-1/2">
                <Link href={project4.link} target="_blank">
                  <Image
                    className="rounded-xl shadow-xl hover:opacity-70"
                    src={project4.imagePath}
                    alt={project4.title}
                    width={1000}
                    height={1000}
                  />
                </Link>
              </div>
              <div className="md:mt-6 md:w-1/2  mt-8 text-center md:text-left">
                <h1 className="md:text-3xl font-bold mb-6 text-2xl">
                  {project4.title}
                </h1>

                <p className="md:line-clamp-3 text-xl leading-7 my-4 text-neutral-600">
                  {project4.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4 justify-center mt-4 md:justify-start">
                  <Link href={project4.github} target="_blank">
                    <BsGithub
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

        <div>
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col animate-sliderUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className="mt-8 md:w-1/2">
                <Link href={project5.link} target="_blank">
                  <Image
                    className="rounded-xl shadow-xl hover:opacity-70"
                    src={project5.imagePath}
                    alt={project5.title}
                    width={1000}
                    height={1000}
                  />
                </Link>
              </div>
              <div className="md:mt-6 md:w-1/2  mt-8 text-center md:text-left">
                <h1 className="md:text-3xl font-bold mb-6 text-2xl">
                  {project5.title}
                </h1>

                <p className="md:line-clamp-3 text-xl leading-7 my-4 text-neutral-600">
                  {project5.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4 justify-center mt-4 md:justify-start">
                  <Link href={project5.github} target="_blank">
                    <BsGithub
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
