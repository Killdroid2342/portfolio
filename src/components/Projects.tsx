import React, { useState } from 'react';

type Project = {
  title: string;
  content: string;
  githubLink: string;
  projectLink: string;
};

const projectData: Project[] = [
  {
    title: 'Calendar',
    content:
      'A calendar is a tool used to organize and track the passage of time. It typically displays the days, weeks, and months of a year, and often includes important dates such as holidays, events, and appointments. By following a calendar, individuals can plan and schedule activities, keep track of deadlines, and stay organized. Calendars can be found in many formats, including paper, digital, and mobile applications. They serve as a useful tool for individuals, businesses, and organizations to manage their time effectively.',
    githubLink: 'https://github.com/Killdroid2342/calendar',
    projectLink: 'https://calendar-three-liard.vercel.app/',
  },
  {
    title: 'Chat App',
    content:
      'This elegant chat application harnesses the power of Socket.IO to seamlessly connect users, facilitating fluid, real-time conversations among an extensive user base. It offers a platform where numerous individuals can effortlessly engage in interactive dialogues, ensuring a captivating and efficient chat experience',
    githubLink: 'https://github.com/Killdroid2342/covid-tracker',
    projectLink: '',
  },
  {
    title: 'E-Commerce',
    content: `This innovative E-Commerce website seamlessly blends original concepts with elements inspired by StockX. Upon creating an account, users can explore various pages to curate their shopping experience, adding a diverse range of items to their virtual basket. Once the basket is accessed, all selected items are conveniently displayed for review. Subsequently, customers can proceed to the checkout page, where an itemized list of their chosen products is presented. This transition leads to the payment page, where users can input their personal and payment details. However, it's important to note that the payment functionality is disabled for demonstration purposes. This unique platform offers users an engaging and interactive shopping journey, combining the best of both originality and established e-commerce practices.`,
    githubLink: 'https://github.com/Killdroid2342/E-Commerce',
    projectLink: '',
  },
  {
    title: 'Solar System',
    content: `The "Solar System" project is a captivating Three.js Fiber application that offers an interactive 3D replica of our solar system. Users can click on planets to access informative modals, providing fascinating details about each celestial body. It's a visually engaging and educational experience, perfect for both space enthusiasts and learners eager to explore the wonders of our cosmic neighborhood. Check out the live website to embark on a virtual journey through the solar system or contribute to its development on GitHub.`,
    githubLink: 'https://github.com/Killdroid2342/solar-system',
    projectLink: 'https://solar-system-seven-phi.vercel.app/',
  },
  {
    title: 'Music App',
    content: `This music application enables users to create accounts. With their accounts, users can log in, upload songs, and play them. The uploaded songs are saved within a designated directory. For this project, I utilized Express.js, TypeScript, and SQL. Notably, this project marks my inaugural experience in developing a full-stack application.`,
    githubLink: 'https://github.com/Killdroid2342/music-app',
    projectLink: '',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project>(
    projectData[0]
  );
  const [showContent, setShowContent] = useState(true);

  const handleProjectClick = (project: Project) => {
    setShowContent(false);
    setTimeout(() => {
      setSelectedProject(project);
      setShowContent(true);
    }, 100);
  };

  return (
    <div id='projects'>
      <div id='aboutHeader' className='pb-72 h-2/5'>
        <div className='section'>
          <h2 className='headers'>Projects</h2>
          <h2 className='text-white text-3xl font-bold'>
            Some Of My Work
            {selectedProject && ` - ${selectedProject.title}`}
          </h2>

          <div className='flex flex-row 2xl:flex-col'>
            <div className={`w-10/12 ${showContent ? 'fade-in' : ''}`}>
              <p className='w-8/12 text-white mt-5 mr-20'>
                {selectedProject ? selectedProject.content : ''}
              </p>
              <button className='text-white font-bold mt-5 mr-5 cursor-none'>
                <a
                  href={selectedProject?.projectLink}
                  target='_blank'
                  rel='noreferrer'
                  className='cursor-none'
                >
                  View Project
                </a>
              </button>
              <button className='text-white font-bold cursor-none'>
                <a
                  href={selectedProject?.githubLink}
                  target='_blank'
                  rel='noreferrer'
                  className='cursor-none'
                >
                  View Code
                </a>
              </button>
            </div>
            <div className='border border-white 2xl:w-60 2xl:mt-5'></div>
            <ul className='2xlm:ml-20 '>
              {projectData.map((project) => (
                <li
                  className='text-white pb-10 font-bold 2xl:mt-5 '
                  key={project.title}
                  onClick={() => handleProjectClick(project)}
                >
                  {project.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
