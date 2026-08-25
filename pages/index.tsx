import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Projects = dynamic(() => import('../containers/Projects'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
import { openSource, showContactUs, showFeedback, showProjects } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';
import { GithubUserType } from '../types';

export default function Home({
  githubProfileData,
}: {
  githubProfileData: any;
}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Experience />
      {showFeedback ? <Feedbacks /> : null}
      {showProjects ? <Projects /> : null}
      <Education />
      {showContactUs ? <Contact /> : null}
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  const fallbackGithubProfile: Pick<
    GithubUserType,
    'avatar_url' | 'bio' | 'location'
  > = {
    avatar_url:
      'https://avatars.githubusercontent.com/u/60086344?s=400&u=eee57efeb734c92e5701fb6286732b5c111dc14e&v=4',
    bio: 'Senior Fullstack Developer building scalable web and mobile applications.',
    location: 'Philippines',
  };

  let githubProfileData = fallbackGithubProfile;

  try {
    const response = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`
    );

    if (response.ok) {
      const profile = await response.json();
      githubProfileData = {
        avatar_url: profile.avatar_url || fallbackGithubProfile.avatar_url,
        bio: profile.bio || fallbackGithubProfile.bio,
        location: profile.location || fallbackGithubProfile.location,
      };
    }
  } catch {
    // Keep static generation working when GitHub is unavailable.
  }

  return {
    props: { githubProfileData },
  };
}
