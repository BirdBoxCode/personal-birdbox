'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import StaticNoise from '@/components/StaticNoise';

const projects = [
  {
    id: 'na',
    name: 'NERDADVISOR',
    url: 'http://www.nerdadvisor.org/',
    images: [
      'https://res.cloudinary.com/depkh8amy/image/upload/v1749074249/BirdBox%20Code/NerdAdvisor_New_Blue_-_HOME_k4owb5.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1749074431/BirdBox%20Code/NerdAdvisor_New_Blue-_CHALLENGE_SHOW_ovntqh.png'
    ]
  },
  {
    id: 'gg',
    name: 'GAMES GROUND',
    url: 'https://gamesground.de/',
    images: [
      'https://res.cloudinary.com/depkh8amy/image/upload/v1749074643/BirdBox%20Code/Screenshot_2025-06-05_at_00.01.53_vehrbv.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1749074641/BirdBox%20Code/Screenshot_2025-06-05_at_00.03.23_jeb8gz.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1749074641/BirdBox%20Code/Screenshot_2025-06-05_at_00.03.42_w1oufc.png'
    ]
  },
  {
    id: 'beh',
    name: 'BEAT EM HUB',
    url: 'https://beatemhub.com/',
    images: [
      'https://res.cloudinary.com/depkh8amy/image/upload/v1749074914/BirdBox%20Code/Screenshot_2025-06-05_at_00.07.00_ynlyyy.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1749074906/BirdBox%20Code/Screenshot_2025-06-05_at_00.07.35_qqkkma.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1749074908/BirdBox%20Code/Screenshot_2025-06-05_at_00.08.04_u0qv43.png'
    ]
  },
  {
    id: 'moss',
    name: 'MOSS RADIO',
    url: 'https://www.mossradio.live/users/sign_in',
    images: [
      'https://res.cloudinary.com/depkh8amy/image/upload/v1680017128/BirdBox%20Code/moss-1_qkkyna.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1680017128/BirdBox%20Code/moss-2_myse5d.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1680017128/BirdBox%20Code/moss-3_dic6yy.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1680017128/BirdBox%20Code/moss-4_orkmym.png'
    ]
  },
  {
    id: 'pitch',
    name: 'OTHER DESIGN',
    url: 'https://drive.google.com/file/d/1vX6L3WkvlFNAVc9XMu0XEv1lNnEQ-JiC/view?usp=sharing',
    images: [
      'https://res.cloudinary.com/depkh8amy/image/upload/v1681731701/BirdBox%20Code/Cinnovate_czff3f.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1680017696/BirdBox%20Code/pitch-1_x5d1li.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1680017697/BirdBox%20Code/pitch-2_loawkp.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1680017697/BirdBox%20Code/pitch-3_thwuka.png',
      'https://res.cloudinary.com/depkh8amy/image/upload/v1680017697/BirdBox%20Code/pitch-4_gd3qqk.png'
    ]
  }
];

export default function Home() {
  const [activeProject, setActiveProject] = useState('na');
  const [isMobile, setIsMobile] = useState(false);
  const [mobileActiveSections, setMobileActiveSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileSection = (sectionId: string) => {
    const newSections = new Set(mobileActiveSections);
    if (newSections.has(sectionId)) {
      newSections.delete(sectionId);
    } else {
      newSections.clear();
      newSections.add(sectionId);
    }
    setMobileActiveSections(newSections);
  };

  const currentProject = projects.find(p => p.id === activeProject) || projects[0];

  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#0D0E11] text-[#FFFBF8] font-jura relative overflow-y-auto">
        <StaticNoise />
        
        {/* Mobile Navbar */}
        <nav className="flex justify-between items-center w-full mx-4 my-4">
          <Image 
            src="https://res.cloudinary.com/depkh8amy/image/upload/v1680126141/BirdBox%20Code/BirdBox_dgn3ja.png" 
            alt="BirdBox Code"
            width={50}
            height={50}
            className="h-[7vw]"
          />
          <Button className="w-[20vw] h-[4vh] border-0 border-b-[12px] border-b-[#fd36d4] rounded-[10px] bg-transparent text-[3vw] text-[#fd36d4] shadow-[0_0_12px_#fd36d4] hover:border-b-[#09FFD8] hover:text-[#09FFD8] hover:shadow-[0_0_12px_#09FFD8]">
            <Link href="mailto:chris@birdboxcode.dev">CONTACT</Link>
          </Button>
        </nav>

        {/* Mobile Header */}
        <div className="mx-4 border-t border-b border-[#9D9D9D] text-center">
          <h1 className="text-[10vw] text-[#FFFBF8] shadow-[0_0_12px_#FFFBF8] tracking-[0.62vw] py-4">
            BIRDBOX CODE
          </h1>
        </div>

        {/* Mobile Main Content */}
        <div className="mx-4">
          {/* Projects Section */}
          <div className="my-8">
            <h2 className="text-center text-[5vw] text-[#d9d9d9] shadow-[0_0_12px_rgba(217,217,217,0.22)] my-4">
              CURRENT PROJECTS
            </h2>
            <p className="text-center mb-2">Tap To View</p>
            
            {projects.map((project) => (
              <div key={project.id}>
                <div className="w-full border-t border-[#9D9D9D] mx-8" />
                <button
                  className={`w-full h-[5vh] text-[5vw] text-center cursor-pointer border-none bg-transparent ${
                    mobileActiveSections.has(project.id) ? 'text-[#fd36d4] shadow-[0_0_12px_#fd36d4]' : 'text-[#FFFBF8]'
                  }`}
                  onClick={() => toggleMobileSection(project.id)}
                >
                  {project.name}
                </button>
                
                {mobileActiveSections.has(project.id) && (
                  <div className="overflow-hidden h-[20vh] transition-all duration-300">
                    <div className="sticky top-0 flex w-full justify-end my-2">
                      <Button className="w-[20vw] h-[2.5vh] border-0 border-b-[12px] border-b-[#fd36d4] rounded-[10px] bg-transparent text-[1.5vw] hover:border-b-[#09FFD8] hover:text-[#09FFD8] hover:shadow-[0_0_12px_#09FFD8]">
                        <Link href={project.url} target="_blank">VIEW SITE</Link>
                      </Button>
                    </div>
                    {project.images.map((img, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={img}
                        alt={`${project.name} ${imgIndex + 1}`}
                        width={400}
                        height={300}
                        className="w-full rounded-[10px] mb-0"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="w-full border-t border-[#9D9D9D] mx-8" />
          </div>

          {/* About Section */}
          <div className="my-8 mx-8 text-center">
            <h2 className="text-center text-[5vw] text-[#d9d9d9] shadow-[0_0_12px_rgba(217,217,217,0.22)] my-4">
              ABOUT ME
            </h2>
            <p className="text-center text-base">I&apos;m Chris McCarthy.</p>
            <br />
            <p className="text-center text-base">
              A creative professional passionate about crafting precise and visually compelling designs that elevate brands, individuals, and events in the digital space.<br /><br />
              With a sharp eye for detail and a natural affinity for software technologies, I combine expertise in graphic design, web development, and sound design to deliver engaging, user-focused digital experiences.<br /><br />
              My journey has been shaped by community collaboration, contributing to cultural and creative projects alongside diverse collectives. Currently, I lead two companies: Beat Em Hub, a gaming events organizer, and NerdAdvisor, a career development platform, while playing a key role in organizing Games Ground, Berlin&apos;s leading gaming festival.<br /><br />
              I thrive in both team-oriented and independent roles, balancing a friendly, people-first mindset with the initiative to achieve meaningful results. Driven by a passion for innovation and collaboration, I aim to create solutions that not only meet needs but leave a lasting impression.
            </p>
            <h2 className="text-center text-[5vw] text-[#d9d9d9] shadow-[0_0_12px_rgba(217,217,217,0.22)] my-4">
              WHAT CAN I DO IN TERMS OF WEB DEV?
            </h2>
            <p className="text-center text-base mb-4">Find more details right here on my CV</p>
            <Button className="w-[20vw] h-[4vh] border-0 border-b-[12px] border-b-[#fd36d4] rounded-[10px] bg-transparent text-[3vw] text-[#fd36d4] shadow-[0_0_12px_#fd36d4] hover:border-b-[#09FFD8] hover:text-[#09FFD8] hover:shadow-[0_0_12px_#09FFD8]">
              <Link href="https://drive.google.com/file/d/156I20RgYZEw9alS3pNiKOiW7s1efudjl/view?usp=sharing" target="_blank">CV</Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#0D0E11] pt-8 w-full">
          <div className="border-t border-[#9D9D9D] mx-4">
            <div className="flex justify-center">
              <div className="flex my-4 mx-8 w-full border-l border-r border-[#9D9D9D] rounded-[10px]">
                {[
                  { href: "https://github.com/BirdBoxCode", text: "GitHub" },
                  { href: "https://www.linkedin.com/in/christopher-mccarthy/", text: "LinkedIn" },
                  { href: "https://linktr.ee/beatemhub", text: "LinkTree" },
                  { href: "https://vimeo.com/user187343242", text: "Vimeo" }
                ].map((link, index, array) => (
                  <div key={index} className={`${index !== array.length - 1 ? 'border-r border-[#9D9D9D]' : ''} w-full h-[90%] text-center`}>
                    <p className="my-1 mx-auto text-[2.8vw]">
                      <Link 
                        href={link.href} 
                        target="_blank"
                        className="text-[#FFFBF8] hover:text-[#fd36d4] hover:shadow-[0_0_12px_#fd36d4] transition-all duration-100"
                      >
                        {link.text}
                      </Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0E11] text-[#FFFBF8] font-jura relative overflow-hidden">
      <StaticNoise />
      
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full mx-8 my-4">
        <Image 
          src="https://res.cloudinary.com/depkh8amy/image/upload/v1680126141/BirdBox%20Code/BirdBox_dgn3ja.png" 
          alt="BirdBox Code"
          width={60}
          height={60}
          className="bbc"
        />
        <Button className="w-[10vw] h-[4vh] border-0 border-b-[12px] border-b-[#fd36d4] rounded-[10px] bg-transparent text-[1vw] text-[#fd36d4] shadow-[0_0_12px_#fd36d4] hover:border-b-[#09FFD8] hover:text-[#09FFD8] hover:shadow-[0_0_12px_#09FFD8]">
          <Link href="mailto:chris@birdboxcode.dev">CONTACT</Link>
        </Button>
      </nav>

      {/* Header */}
      <div className="grid grid-cols-8 mx-8">
        <div className="col-span-8 grid place-items-center border-t border-b border-[#9D9D9D]">
          <h1 className="text-[11.7vw] text-center text-[#FFFBF8] shadow-[0_0_12px_#FFFBF8] tracking-[0.62vw]">
            BIRDBOX CODE
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-8 h-[calc(100vh-150px-50px)] mx-8 my-4">
        {/* About Section */}
        <div className="col-span-2 flex flex-col pr-4 h-full overflow-y-auto">
          <div className="h-full">
            <div className="overflow-y-auto">
              <h2 className="text-[1vw] text-[#d9d9d9] shadow-[0_0_12px_rgba(217,217,217,0.22)] my-4">
                ABOUT ME
              </h2>
              <p className="text-[1vw] text-[#FFFBF8]">I&apos;m Chris McCarthy.</p>
              <br />
              <p className="text-[1vw] text-[#FFFBF8]">
                A creative professional passionate about crafting precise and visually compelling designs that elevate brands, individuals, and events in the digital space.<br /><br />
                With a sharp eye for detail and a natural affinity for software technologies, I combine expertise in graphic design, web development, and sound design to deliver engaging, user-focused digital experiences.<br /><br />
                My journey has been shaped by community collaboration, contributing to cultural and creative projects alongside diverse collectives. Currently, I lead two companies: Beat Em Hub, a gaming events organizer, and NerdAdvisor, a career development platform, while playing a key role in organizing Games Ground, Berlin&apos;s leading gaming festival.<br /><br />
                I thrive in both team-oriented and independent roles, balancing a friendly, people-first mindset with the initiative to achieve meaningful results. Driven by a passion for innovation and collaboration, I aim to create solutions that not only meet needs but leave a lasting impression.
              </p>
              <h2 className="text-[1vw] text-[#d9d9d9] shadow-[0_0_12px_rgba(217,217,217,0.22)] my-4">
                WHAT CAN I DO IN TERMS OF WEB DEV?
              </h2>
              <p className="text-[1vw] text-[#FFFBF8] mb-4">Find more details right here on my CV</p>
              <Button className="w-[10vw] h-[4vh] border-0 border-b-[12px] border-b-[#fd36d4] rounded-[10px] bg-transparent text-[1vw] text-[#fd36d4] shadow-[0_0_12px_#fd36d4] hover:border-b-[#09FFD8] hover:text-[#09FFD8] hover:shadow-[0_0_12px_#09FFD8]">
                <Link href="https://drive.google.com/file/d/156I20RgYZEw9alS3pNiKOiW7s1efudjl/view?usp=sharing" target="_blank">CV</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="col-span-2 px-4 h-full overflow-y-auto">
          <div className="sticky top-0">
            <h2 className="text-[1vw] text-[#d9d9d9] shadow-[0_0_12px_rgba(217,217,217,0.22)] my-4">
              CURRENT PROJECTS
            </h2>
          </div>
          
          {projects.map((project) => (
            <div key={project.id} className="w-full">
              <div className="w-full flex items-center col-span-8">
                <span className="block relative w-full border-t border-[#9D9D9D] mx-auto" />
              </div>
              <button
                className={`w-full h-[15vh] border-none text-[2vw] text-left cursor-pointer bg-transparent ${
                  activeProject === project.id ? 'text-[#fd36d4] shadow-[0_0_12px_#fd36d4]' : 'text-[#FFFBF8] hover:text-[#09FFD8] hover:shadow-[0_0_12px_#09FFD8]'
                } transition-all duration-100`}
                onClick={() => setActiveProject(project.id)}
              >
                {project.name}
              </button>
            </div>
          ))}
          <div className="w-full flex items-center col-span-8">
            <span className="block relative w-full border-t border-[#9D9D9D] mx-auto" />
          </div>
        </div>

        {/* Preview Section */}
        <div className="col-span-4 ml-4 h-full overflow-y-auto">
          <div className="sticky top-0 flex w-full justify-between">
            <h2 className="text-[1vw] text-[#d9d9d9] shadow-[0_0_12px_rgba(217,217,217,0.22)] my-4">
              PROJECT PREVIEW
            </h2>
            <Button className="w-[10vw] h-[4vh] border-0 border-b-[12px] border-b-[#fd36d4] rounded-[10px] bg-transparent text-[1vw] text-[#fd36d4] shadow-[0_0_12px_#fd36d4] hover:border-b-[#09FFD8] hover:text-[#09FFD8] hover:shadow-[0_0_12px_#09FFD8] my-4">
              <Link href={currentProject.url} target="_blank">VIEW SITE</Link>
            </Button>
          </div>
          
          <div>
            {currentProject.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${currentProject.name} ${index + 1}`}
                width={800}
                height={600}
                className="w-full rounded-[10px] mb-4"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0D0E11] pt-8 fixed bottom-0 w-full">
        <div className="border-t border-[#9D9D9D] mx-8">
          <div className="flex my-4 border-l border-r border-[#9D9D9D] rounded-[10px] w-[35vw]">
            {[
              { href: "https://github.com/BirdBoxCode", text: "GitHub" },
              { href: "https://www.linkedin.com/in/christopher-mccarthy/", text: "LinkedIn" },
              { href: "https://linktr.ee/beatemhub", text: "LinkTree" },
              { href: "https://vimeo.com/user187343242", text: "Vimeo" }
            ].map((link, index, array) => (
              <div key={index} className={`${index !== array.length - 1 ? 'border-r border-[#9D9D9D]' : ''} w-full h-[90%] text-center`}>
                <p className="my-1 mx-auto text-[0.8vw]">
                  <Link 
                    href={link.href} 
                    target="_blank"
                    className="text-[#FFFBF8] hover:text-[#fd36d4] hover:shadow-[0_0_12px_#fd36d4] transition-all duration-100"
                  >
                    {link.text}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
