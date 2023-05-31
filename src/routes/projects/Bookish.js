import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProjectWrapper, LinkButton } from '../../GlobalStyles'
import { ViewAllProjects } from '../../components/ViewAllProjects'
import { Carousel } from '../../components/Carousel'
import wave from '../../assets/white-wave.svg'

// import image1 from '../../assets/bookish/bookish1.png'

export const Bookish = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const projectImages = [image1, image2, image3, image4, image5, image6]

  return (
    <ProjectWrapper>
      <div className='banner' style={{ background: 'linear-gradient(to right, #E4DCCF, #D9CDBE)' }}>
        <img src={wave} alt='' />
      </div>
      <section className='description'>
        <h1 className='title'>
          [ <b>bookish</b> ]
        </h1>
        <div className='summary'>
          <p className='type'>Full Stack Development, Mobile App</p>
          <p className='duration'>Solo Project • April - May 2023</p>
        </div>
        <div className='details'>
          <p>
            As a big fan of reading, I saw an opportunity to make a difference with Bookish. It's my
            take on a book-tracking app that's just a little bit more refined and user-friendly than
            Goodreads. I used React Native to build it - this meant users would get a consistent
            experience, whether they're on an iPhone or an Android.
          </p>
          <p>
            With this app, users can easily search for books, create personalized bookshelves to
            keep track of what they're currently reading, want to read, and have read. Plus, they
            can rate and review books, get recommendations based on their favorite genres, and get
            an overview of their reading activity.
          </p>
        </div>
        {/* <div style={{ margin: '40px 0' }}>
          <Carousel images={projectImages} />
        </div> */}
        <div className='details'>
          <p>
            I dove into TypeScript on the frontend for this project, which was an interesting
            exercise! It added structure to my code but synchronizing it with the Google Books API
            and my MongoDB database proved a challenge. I had to ensure the data from Google's
            extensive book library lined up neatly with the custom info I was storing in my
            database.
          </p>
          <p>
            I also explored unit testing, though not as extensively as I originally planned. It
            turned out identifying the right pieces to test wasn't so straightforward - I created
            and tested my own validation for the search input, which is something I usually rely on
            libraries for (like Formik and Yup). This gave me a greater appreciate for such
            libraries, as they save so much time.
          </p>
        </div>
        {/* <div style={{ margin: '40px 0' }}>
          <iframe
            className='video'
            src='https://www.youtube.com/embed/xxx'
            title='Bookish Demo'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen></iframe>
        </div> */}
        <div className='details'>
          <p>
            Bookish isn't just a pet project of mine, it's something I want to share with other
            developers. If you're interested, feel free to check out the{' '}
            <a
              href='https://github.com/v-prt/bookish-frontend'
              target='_blank'
              rel='noopener noreferrer'>
              frontend
            </a>{' '}
            and{' '}
            <a
              href='https://github.com/v-prt/bookish-backend'
              target='_blank'
              rel='noopener noreferrer'>
              backend
            </a>{' '}
            on GitHub, complete with detailed READMEs to help you get set up. Bookish was another
            fun and challenging step in my journey as a developer - I love reading and coding, so it
            was a real pleasure to combine the two!
          </p>
          <p>
            Tech stack: React Native, React Query, Expo, TypeScript, Node, Express, MongoDB,
            Mongoose, Vitest
          </p>
          <div className='buttons'>
            <LinkButton
              className='black'
              href='https://github.com/v-prt/plantgeek-app'
              target='_blank'
              rel='noopener noreferrer'>
              View on GitHub
            </LinkButton>
          </div>
        </div>
      </section>
      <ViewAllProjects />
    </ProjectWrapper>
  )
}
