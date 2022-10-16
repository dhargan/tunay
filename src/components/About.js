import photo from "../images/photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitterSquare,
    faInstagramSquare,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagramSquare} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelopeSquare} />;

const About = () => {
    return (
        <div className="flex flex-row pt-10 pl-7 border-t border-black">
            <div className="basis-2/7">
                <img
                    className="shadow rounded-3xl border-2 border-yellow shadow-black"
                    src={photo}
                    alt="logo"
                />
            </div>
            <div className="basis-5/7 pl-20 text-3xl">
                <p className="mb-7">👋 Hello there! </p>
                <p className="mb-7">
                    👨‍💻 I’m a Software Engineer from Adana / Turkey
                </p>
                <p className="mb-7">
                    💼 Currently working as a Backend Team Lead at{" "}
                    <a
                        href="https://denebunu.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Denebunu.com
                    </a>
                </p>
                <p className="mb-7">
                    🐱 I’m a cat-person. I’m living with a tabbie cat named
                    Thor.
                </p>
                <p className="mb-7">
                    🎮 I’d like to play computer games, especially RPG’s and
                    grand strategies.
                </p>
                <p className="mb-7">
                    🎸 I play guitar and love to listen 80’s rock/metal.
                </p>
                <p className="mt-14 text-4xl text-dark-purple ">
                    <a
                        href="https://www.facebook.com/teyobeyler/"
                        className="mr-10"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {facebookIcon}
                    </a>
                    <a
                        href="https://twitter.com/teomanunay/"
                        className="mr-10"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {twitterIcon}
                    </a>
                    <a
                        href="https://www.instagram.com/teyobeyler/"
                        className="mr-10"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {instagramIcon}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/a-teoman-unay-93684527/"
                        className="mr-10"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {linkedInIcon}
                    </a>
                    <a
                        href="mailto:teomanunay@gmail.com"
                        className="mr-10"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {emailIcon}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default About;
