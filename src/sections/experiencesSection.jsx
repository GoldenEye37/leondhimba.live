import rocketImg from '../assets/experiences 48x48.svg'
import ExperienceComponent from "../components/experienceComponent.jsx";

export default function ExperiencesSection(){
    return (
        <div className={`w-full items-center mb-8`}>
            <div className={`w-auto h-auto space-y-3 items-center align-middle`}>
                {/*section header*/}
                <div className={`flex flex-col items-center justify-center p-4`}>
                    <img src={rocketImg} alt="Education section header image" className={`bg-white mb-2`}/>
                    <h2 className={`font-robotslab font-bold text-4xl`}>Experiences</h2>
                </div>
                {/* section content*/}
                <div className={`w-full px-64 font-robotslab flex flex-col items-center gap-y-8`}>
                    <div className={``}>
                        <ExperienceComponent/>
                    </div>
                </div>
            </div>
        </div>)
}