import graduationCap from '../assets/graduationcap48x38.png';
import degreeClass from '../assets/degree class 42X42.png';

export default function EducationSection(){
    return(
        <div className={`w-full items-center mb-8`}>
            <div className={`w-auto h-auto space-y-3 items-center align-middle`}>
                {/*section header*/}
                <div className={`flex flex-col items-center justify-center p-4`}>
                    <img src={graduationCap} alt="Education section header image" className={`bg-white mb-2`}/>
                    <h2 className={`font-robotslab font-bold text-4xl`}>Education</h2>
                </div>
                {/* section content*/}
                <div className={`w-full px-64 font-robotslab flex flex-col items-center gap-y-8`}>
                    <div className={`w-28 font-normal text-lg bg-palette-7 rounded-md`}>2020 - 2024</div>
                    <div className={`font-normal text-2xl flex flex-row items-center`}>
                        <img src={degreeClass} alt="graduationCap" className={`bg-white`}/>
                        <h2>Degree Class: 2.1</h2>
                    </div>
                    <div className={`font-bold text-3xl`}>BSc Honours in Software Engineering</div>
                    <div className={`font-normal text-2xl`}>University of Zimbabwe</div>
                    <div className={`flex flex-row text-base`}>
                        <div>(Overview)</div>
                        <div>During my academic journey, I've taken a variety of courses that have equipped
                            me with the knowledge and skills required in the field of software engineering.
                            Some of the key courses I completed include:
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
