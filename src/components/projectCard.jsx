import PropTypes from "prop-types";
import ExperienceComponent from "./experienceComponent.jsx";


export default function ProjectCard({ imageSrc, title, description, tools, link }){
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-xl shadow-palette-7 hover:shadow-2xl hover:shadow-palette-6 bg-white font-robotslab">
            <img className="w-full" src={imageSrc} alt={`${title} image`}/>
            <div className="px-6 py-4">
                <div className="font-bold text-base mb-4">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
                <p className="mt-4 text-gray-600 text-base font-semibold">tools & technologies:</p>
                <p className="text-gray-700 text-sm">{tools}</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                <a
                    href={link}
                    className="bg-palette-5 text-palette-1 py-0.5 px-5 rounded border border-black hover:bg-palette-6 transition duration-300"
                >
                    visit project
                </a>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
};