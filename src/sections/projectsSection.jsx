import innbucksImage from '../assets/innbucksImage.png';
import loanAppImage from '../assets/loanAppImage.png';
import constructionAppImage from '../assets/ConstructionAppImage.png';
import ProjectCard from "../components/projectCard.jsx";
import projectsImage from "../assets/projects 48x48.png";


export default function ProjectsSection(){
    return (
        <div className="flex justify-center items-center pb-12">
            <div className={`w-auto h-auto space-y-10 items-center align-middle`}>
                {/*section header*/}
                <div className={`flex flex-col items-center justify-center p-4`}>
                    <img src={projectsImage} alt="Education section header image" className={`bg-white mb-2`}/>
                    <h2 className={`font-robotslab font-bold text-4xl`}>Projects</h2>
                </div>
                <div className={`grid grid-cols-3 gap-12 mx-auto`}>
                    <ProjectCard
                        imageSrc={innbucksImage}
                        title="Innbucks UI/UX Design"
                        description="This system is built to perform loan approval decision based on a trained dataset which incorporates external news sources for deriving industry trends."
                        tools="design with figma"
                        link="#"
                    />
                    <ProjectCard
                        imageSrc={loanAppImage}
                        title="Loan Approval System using ML"
                        description="This system is built to perform loan approval decision based on a trained dataset
                        which incorporates external news sources for deriving indystry trends."
                        tools={`react js, python, django rest, scikit-learn, ML`}
                        link="#"
                    />
                    <ProjectCard
                        imageSrc={constructionAppImage}
                        title="Construction Cost Prediction"
                        description="This system is built to perform loan approval decision based on a trained dataset
                        which incorporates external news sources for deriving indystry trends."
                        tools="python, django, tensorflow"
                        link="#"
                    />
                    <ProjectCard
                        imageSrc={constructionAppImage}
                        title="Construction Cost Prediction"
                        description="This system is built to perform loan approval decision based on a trained dataset
                        which incorporates external news sources for deriving indystry trends."
                        tools="python, django, tensorflow"
                        link="#"
                    />
                </div>
            </div>
        </div>
    );
}