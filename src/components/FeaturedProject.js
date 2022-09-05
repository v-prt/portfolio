import { ProjectWrapper, LinkButton } from '../GlobalStyles'
import { Carousel } from '../components/Carousel'

import image1 from '../assets/creator/creator-profile1.png'
import image2 from '../assets/creator/creator-profile2.png'
import image3 from '../assets/creator/creator-profile3.png'
import image4 from '../assets/creator/creator-profile4.png'
import image5 from '../assets/creator/creator-profile5.png'
import image6 from '../assets/creator/profile-editor1.png'
import image7 from '../assets/creator/profile-editor2.png'
import image8 from '../assets/creator/profile-editor3.png'
import image9 from '../assets/creator/profile-editor4.png'
import image10 from '../assets/creator/profile-editor5.png'
import image11 from '../assets/creator/profile-editor6.png'
import image12 from '../assets/creator/profile-editor7.png'
import image13 from '../assets/creator/profile-editor8.png'

export const FeaturedProject = () => {
  const projectImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ]

  return (
    <ProjectWrapper>
      <div className='description'>
        <p className='featuring'>featuring</p>
        <h1 className='title'>
          [ <b>Creator Profile</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>UX Design & Full-Stack Development, Responsive Website</p>
          <p className='duration'>Project Lead • July - August 2022</p>
          <p className='collaborators'>
            Collaborators:{' '}
            <a
              className='link'
              href='https://www.linkedin.com/in/alex-i-quast/'
              target='_blank'
              rel='noopener noreferrer'>
              Alex Quast
            </a>
            ,{' '}
            <a
              className='link'
              href='https://www.linkedin.com/in/pramodsuthar/'
              target='_blank'
              rel='noopener noreferrer'>
              Pramod Suthar
            </a>
          </p>
        </div>
        <div className='details'>
          <p>
            One of the biggest projects I undertook at Creator and one I'm most proud of! As project
            lead, I was responsible for the UX/UI design and the majority of the development for the
            Creator Profile which serves as a digital media kit and link in bio for social media
            influencers on the{' '}
            <a className='link' href='https://creator.co' target='_blank' rel='noopener noreferrer'>
              creator.co
            </a>{' '}
            platform.
          </p>
        </div>
        <div style={{ margin: '30px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            The goal was to provide creators a better alternative to Linktree with exclusive
            features just for our NFT holders. Features include uploading a profile image, bio and
            other personal information; automatically updated metrics for connected social
            platforms; automatically populated top performing content; and the option to add rates
            for social media services, upload recommended products, showcase an NFT collection, and
            add custom links.
          </p>
          <p>
            My teammates were responsible for securing SSLs for the custom subdomains as well as
            setting up crypto wallet connection for verifying ownership of the{' '}
            <a
              className='link'
              href='https://creator.co/passport-nft'
              target='_blank'
              rel='noopener noreferrer'>
              Creator Passport NFT
            </a>{' '}
            to unlock premium features.
          </p>
          <div className='buttons'>
            <LinkButton
              className='black'
              href='https://example.creator.co'
              target='_blank'
              rel='noopener noreferrer'>
              View Example Profile
            </LinkButton>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  )
}
