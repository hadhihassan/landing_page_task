import NavBar from './NavBar'
import IntroSectionImg from '../../assets/image.png'
import IntroSection from './IntroSection'

function Intro() {
    return (
        <div
            className="h-full min-h-screen border border-transparent overflow-x-hidden bg-cover sm:px-10 px-3 bg-no-repeat bg-lightgray flex-shrink-0 w-full bg-black"
            style={{
                backgroundImage: `url(${IntroSectionImg})`,
                backgroundPosition: '-1.5px 0px',
                backgroundSize: 'cover',
            }}

        >

            <NavBar />
            <IntroSection />
        </div>
    )
}

export default Intro
