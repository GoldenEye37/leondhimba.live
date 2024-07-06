import rocketImg from '../assets/experiences 48x48.svg'
import ExperienceComponent from "../components/experienceComponent.jsx";

export default function ExperiencesSection(){
     const experience1 = {
        jobTitle: 'Digital Transformation Intern',
        companyName: 'BancABC ZW',
        period: 'Aug 2022 - Aug 2023',
        responsibilities: [
            'I developed backend REST APIs for internal and customer based applications using Spring Boot.',
            'I facilitated deployment on test servers, and conducted bug fixing.',
            'I tested and documented APIs using Postman and SoapUI facilitating better developer experience.',
            'I was responsible for integrating the Bank\'s systems directly with external companies using Spring Boot.',
            'Spearheaded automation projects using Python from scratch.',
            'Contributed and related well with other developers on a number of projects.',
            'Led requirements gathering, crafted Business Requirements Documents, and Business Cases.',
        ],
     };
     const experience2 = {
        jobTitle: 'Freelance Python Backend Dev',
        companyName: 'ModestNerds Co',
        period: 'Nov 2022 - present',
        responsibilities: [
            'Collaborated the development of backend APIs for the therapy application using Python and Django REST framework',
            'Used Django ORM to construct optimized querysets',
            'Worked closely with my mentor in developing high-end REST APIs',
            'Performed integrations with Stripe and Dyte',
            'Developed backend tasks using Redis and Celery',
        ],
     };


    return (
        <div className={`w-full min-w-fit items-center mb-8`}>
            <div className={`w-auto h-auto space-y-3 items-center align-middle`}>
                {/*section header*/}
                <div className={`flex flex-col items-center justify-center p-4`}>
                    <img src={rocketImg} alt="Education section header image" className={`bg-white mb-2`}/>
                    <h2 className={`font-robotslab font-bold text-4xl`}>Experiences</h2>
                </div>
                {/* section content*/}
                <div className={`w-full px-64 font-robotslab flex flex-col items-center gap-y-8`}>
                    <ExperienceComponent
                        jobTitle={experience1.jobTitle}
                        companyName={experience1.companyName}
                        period={experience1.period}
                        responsibilities={experience1.responsibilities}
                    />
                    <ExperienceComponent
                        jobTitle={experience2.jobTitle}
                        companyName={experience2.companyName}
                        period={experience2.period}
                        responsibilities={experience2.responsibilities}
                    />
                </div>
            </div>
        </div>)
}