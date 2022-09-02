import { useEffect } from 'react'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { Carousel } from '../../components/Carousel'

import image1 from '../../assets/creator/creator-profile1.png'
import image2 from '../../assets/creator/creator-profile2.png'
import image3 from '../../assets/creator/creator-profile3.png'
import image4 from '../../assets/creator/creator-profile4.png'
import image5 from '../../assets/creator/creator-profile5.png'
import image6 from '../../assets/creator/profile-editor1.png'
import image7 from '../../assets/creator/profile-editor2.png'
import image8 from '../../assets/creator/profile-editor3.png'
import image9 from '../../assets/creator/profile-editor4.png'
import image10 from '../../assets/creator/profile-editor5.png'
import image11 from '../../assets/creator/profile-editor6.png'
import image12 from '../../assets/creator/profile-editor7.png'
import image13 from '../../assets/creator/profile-editor8.png'

export const CreatorProfile = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <h2 className='title'>
          [ <b>Creator Profile</b> ]
        </h2>
        <div className='summary'>
          <p className='type'>UX Design & Full-Stack Development, Responsive Website</p>
          <p className='duration'>Project Lead • July - August 2022</p>
        </div>
        <div className='details'>
          <p>
            This was a major project I undertook at Creator.co. As project lead, I was responsible
            for the UX/UI design as well as full-stack development of the new Creator Profile, which
            serves as a digital media kit and link in bio for creators (social media influencers) on
            our platform. My teammates were responsible for securing SSLs for the custom subdomains
            as well as crypto wallet connection for NFT verification.
          </p>
        </div>
        <div style={{ margin: '30px 0' }}>
          <Carousel images={projectImages} />
        </div>
        <div className='details'>
          <p>
            Features include uploading a profile image, bio and other personal information;
            automatically updated metrics for connected social platforms; automatically populated
            top performing content; and the option to upload recommended products, showcase an NFT
            collection, and custom links - all of which is done through the profile editor in the
            creator's dashboard once they've claimed their profile by verifying their Creator
            Passport NFT ownership.
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
