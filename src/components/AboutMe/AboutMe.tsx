import Uses from './Uses/Uses';

export default function AboutMe() {
  return (
    <>
      <div id='aboutHeader' className='pb-72 h-2/5'>
        <div className='section'>
          <h2 className='headers 2xl:w-96'>About Me</h2>
          <div className='row 2xl:flex-col'>
            <div>
              <h2 className='text-white text-3xl font-bold'>
                Hey there, Im Haroon Khan
              </h2>
              <p className='text-white w-2/4 mt-5 text-sm'>
                Currently, I love spending most of my free time creating
                exciting projects that people can enjoy. As a front-end
                developer, my goal is to make users happy and meet their needs.
                I strive to create user-friendly designs and interfaces that are
                both visually appealing and easy to navigate. Ultimately, my aim
                is to deliver high-quality work that people will appreciate and
                find useful.
              </p>
              <h2 className='text-white text-3xl font-bold mt-16'>
                What Makes Me Different?
              </h2>
              <p className='text-white w-2/4 mt-5 text-sm'>
                Have you ever wondered what sets me apart from others? Well, it
                all began when I started learning IT at the tender age of 8, and
                it was love at first sight. However, at that time, I had no idea
                how to channel my passion. Fast forward to when I was 16 and
                studying science, and I discovered a new and thrilling passion -
                creating fresh, innovative projects that people could benefit
                from. Since then, my passion has only grown stronger, and I've
                never stopped exploring, experimenting, and pushing the
                boundaries of what's possible.
              </p>
            </div>
            <div className='flex flex-col'>
              <Uses />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
