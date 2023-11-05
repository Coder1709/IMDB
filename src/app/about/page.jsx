import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
const linkedinProfileUrl = "https://www.linkedin.com/in/arpit-pathak-413b2b209";
const githubProfileurl = "https://github.com/Coder1709"


export default function About() {

    return (
        <div className="max-w-6xl mx-auto space-y-4 p-4">
            <h1 className="text-2xl font-medium text-amber-600">About</h1>
            <p>
                Welcome to our movie database website! We are a team of passionate movie
                enthusiasts who have come together to create a one-stop destination for
                all your movie-related needs.
            </p>

            <p>
                Our website is designed to provide you with a comprehensive database of
                movies from all around the world, along with the latest news, reviews,
                and trailers. Our movie database is constantly updated with new
                releases, ensuring that you have access to the latest and greatest in
                the world of cinema. You can search for movies by title, director,
                actor, genre, or release date, making it easy to find the perfect movie
                for any occasion.
            </p>

            <p>
                In addition to our extensive movie database, we also offer a platform
                for movie lovers to connect and share their thoughts on the latest
                releases. Our community section includes a forum where you can discuss
                your favorite films with like-minded individuals and read reviews and
                ratings from other users. We also have a section dedicated to movie news
                and trailers, keeping you updated with the latest happenings in the
                world of cinema. Thank you for visiting our website and we hope you
                enjoy your time browsing through our movie database. If you have any
                feedback or suggestions, please feel free to contact us. We are always
                looking for ways to improve and enhance the user experience on our
                website. Happy browsing!
            </p>
            <h1 className="text-2xl font-medium text-amber-600">About the Developer</h1>
            <h2 className="text-2xl font-small text-black-300"> Arpit Pathak</h2>
            <p>{`Hey , there I'm Arpit Pathak, on the cusp of graduating as an engineer in 2024, with a fervent passion for web development and AIML technologies. My proficiency spans C++, Python, Linux, ReactJS, MySQL, Node.js, and MongoDB. Seeking a job in web development, I'm excited to refine my skills and expand my horizons.Coming from Shrawasti, UP, my downtime is all about gaming, indulging in novels, and crafting my own literary works. My hunger for growth propels me forward, and I'm eager to contribute my expertise while gaining insights from seasoned industry professionals.`}
            </p>
            <a className="flex items-center flex-col" href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                <i className="text-3xl mx-4"><AiFillLinkedin /></i>
            </a>
            <a className="flex items-center flex-col" href={githubProfileurl} target="_blank" rel="noopener noreferrer">
                <i className="text-3xl mx-4"><AiFillGithub /></i>
            </a>
        </div>


    );
}