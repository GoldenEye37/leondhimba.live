import graduationCap from '../assets/graduationcap48x38.png';
import degreeClass from '../assets/degree class 42X42.png';
import GraduationCard from "../components/graduationCard.jsx";
import universityLogo from '../assets/university logo.png';

export default function EducationSection(){
    return(
        <div className={`w-full items-center mb-8`}>
            <div className={`w-auto h-auto space-y-10 items-center align-middle`}>
                {/*section header*/}
                <div className={`flex flex-col items-center justify-center p-4`}>
                    <img src={graduationCap} alt="Education section header image" className={`bg-white mb-2`}/>
                    <h2 className={`font-robotslab font-bold text-4xl`}>Education</h2>
                </div>

                 <div className=" font-robotslab w-full max-w-4xl mx-auto">
                     <div className="flex items-start pb-12 border-b border-gray-300">
                         <div className="flex flex-col justify-center items-center">
                             <div className="w-24 flex flex-col items-center space-y-2 mb-4">
                                 <img src={universityLogo} alt="University Logo" className="w-24 h-28"/>
                                 <div className="text-center text-sm font-bold">2020 - 2024</div>
                             </div>
                             <h3 className="text-xl font-bold">University of Zimbabwe</h3>
                             <p className="text-lg">BSc Honours in Software Engineering</p>
                             <p className="text-sm text-gray-600">(Degree Class: 2.1)</p>
                             <div className="mt-4">
                                 <h4 className="font-semibold">Overview:</h4>
                                 <p>
                                     During my academic journey, I've taken a variety of courses that have equipped me
                                     with the knowledge and skills required in the field of software engineering. Some
                                     of the key courses I completed include:
                                 </p>
                                 <ul className="list-disc list-inside mt-2">
                                     <li>Course 1</li>
                                     <li>Course 2</li>
                                     <li>Course 3</li>
                                     <li>Course 4</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}
