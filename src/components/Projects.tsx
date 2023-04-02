import React, { useState, useEffect } from 'react';

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
    title: 'To Do List',
    content:
      'My To Do List is a tool that allows users to keep track of their tasks and activities. It typically involves typing or writing down the tasks and adding them to the list. By doing so, users can keep track of their progress and ensure that everything is completed on time. To Do Lists are essentially trackers as they allow users to monitor their activities and ensure that they remain on track to achieving their goals. They are often used in personal and professional settings and can be created using various formats, including digital or paper-based lists.',
    githubLink: 'https://github.com/Killdroid2342/to-do-list',
    projectLink: 'https://to-do-app-lac.vercel.app/',
  },
  {
    title: 'Joke App',
    content: `The Joke App that I've developed is designed to provide users with a seamless and entertaining experience. With a simple and intuitive interface, users can easily select the genre of jokes they want to generate and enjoy a selection of humorous jokes. What's more, this app has the added benefit of allowing users to save their favorite jokes for future reference. Whether they want to share a joke with a friend or simply revisit a particularly funny one, saved jokes will be easily accessible even after closing the browser.`,
    githubLink: 'https://github.com/Killdroid2342/joke-app',
    projectLink: 'https://joke-app-woad.vercel.app/',
  },
  {
    title: 'Random Colour',
    content: `The random color app I've created, users can enjoy an easy and fun way to generate new and exciting colors. By simply clicking a button, a new color will be randomly generated and displayed as the background. But that's not all - the app also features a convenient copy button, which allows users to easily copy the corresponding HEX code of the background color. This is especially useful for designers, developers, and artists who need to quickly and accurately identify and replicate specific colors.`,
    githubLink: 'https://github.com/Killdroid2342/random-colour',
    projectLink: 'https://random-colour.vercel.app/',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(
    projectData[0]
  );
  const [showContent, setShowContent] = useState(true);

  const handleProjectClick = (project: Project) => {
    setShowContent(false);
    setTimeout(() => {
      setSelectedProject(project);
      setShowContent(true);
    }, 200);
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
          <div className='flex flex-row'>
            <div className={`w-10/12 ${showContent ? 'fade-in' : ''}`}>
              <p className='w-8/12 text-white mt-5 mr-20'>
                {selectedProject ? selectedProject.content : ''}
              </p>
              <button className='text-white font-bold mt-5 mr-5'>
                <a
                  href={selectedProject?.projectLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  View Project
                </a>
              </button>
              <button className='text-white font-bold'>
                <a
                  href={selectedProject?.githubLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  View Code
                </a>
              </button>
            </div>
            <div className='border border-white'></div>
            <ul className='ml-20'>
              {projectData.map((project) => (
                <li
                  className='text-white text-center pb-10 font-bold'
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
};

export default Projects;
