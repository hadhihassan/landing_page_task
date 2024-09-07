import Heading from './Heading'
import Items from './Items'
import Contact from './Contact'
import Footer from './Footer'
export default function Courses() {

    return (
        <div className="h-full bg-[#090913] pt-14 text-white ">
            <Items />
            <Heading />
            <Contact />
            <Footer />
        </div>
    )
}
