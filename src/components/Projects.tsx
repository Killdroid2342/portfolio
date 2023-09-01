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
    title: 'Covid Tracker',
    content:
      'The COVID tracker is a tool that uses data from official sources to monitor and track the spread of COVID-19. They provide real-time updates on confirmed cases, deaths, recoveries, and other statistics related to the virus, often using visual aids like charts and graphs. These are displayed within a modal for easy access and analysis by users.',
    githubLink: 'https://github.com/Killdroid2342/covid-tracker',
    projectLink: 'https://covid-tracker-six-kappa.vercel.app/',
  },
  {
    title: 'E-Commerce',
    content: `This innovative E-Commerce website seamlessly blends original concepts with elements inspired by StockX. Upon creating an account, users can explore various pages to curate their shopping experience, adding a diverse range of items to their virtual basket. Once the basket is accessed, all selected items are conveniently displayed for review. Subsequently, customers can proceed to the checkout page, where an itemized list of their chosen products is presented. This transition leads to the payment page, where users can input their personal and payment details. However, it's important to note that the payment functionality is disabled for demonstration purposes. This unique platform offers users an engaging and interactive shopping journey, combining the best of both originality and established e-commerce practices.`,
    githubLink: 'https://github.com/Killdroid2342/E-Commerce',
    projectLink: '',
  },
  {
    title: 'Joke App',
    content: `The Joke App that I've developed is designed to provide users with a seamless and entertaining experience. With a simple and intuitive interface, users can easily select the genre of jokes they want to generate and enjoy a selection of humorous jokes. What's more, this app has the added benefit of allowing users to save their favorite jokes for future reference. Whether they want to share a joke with a friend or simply revisit a particularly funny one, saved jokes will be easily accessible even after closing the browser.`,
    githubLink: 'https://github.com/Killdroid2342/joke-app',
    projectLink: 'https://joke-app-woad.vercel.app/',
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
