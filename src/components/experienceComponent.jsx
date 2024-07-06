import companyImg from '../assets/company.svg';
import calendarImg from '../assets/calendar.svg';


export default function ExperienceComponent(){
    return(
        <div className={`flex flex-col items-center justify-center mx-auto pt-6 gap-y-6`}>
            <div className={`flex flex-row items-center bg-palette-7 h-11 px-3 max-w-sm rounded-lg`}>
                <p className={`font-robotslab font-bold text-2xl text-center`}>Digital Transformation Intern</p>
            </div>
            <div className={`font-robotslab font-normal text-lg `}>
                <div className={`flex flex-row gap-x-3`}>
                    <img src={companyImg}/>
                    <p>Company: BancABC ZW</p>
                </div>
                <div className={`flex flex-row gap-x-3`}>
                    <img src={calendarImg}/>
                    <p>Period: Aug 2022- Aug 2023</p>
                </div>
            </div>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                    <strong>Developed reliable backend APIs for A360 version 2.0</strong> utilizing Spring Boot REST
                    development, resulting in a 90% improvement in API efficiency compared to the previous version.
                </li>
                <li>
                    <strong>Facilitated deployment on test servers, and conducted bug fixing</strong>, ensuring smooth and reliable
                    releases.
                </li>
                <li>
                    <strong>Documented APIs using Postman and SoapUI</strong>, improving clarity and ease of use for developers and
                    stakeholders.
                </li>
                <li>
                    <strong>Integrated the bank's system directly with external companies</strong>, eliminating the need for third-party
                    gateways and saving significant costs.
                </li>
                <li>
                    <strong>Spearheaded an automation project from scratch</strong>, particularly developing the Stationery Ordering app,
                    enhancing operational efficiency.
                </li>
                <li>
                    <strong>Engineered a customer welcome solution</strong> that sends SMS notifications and emails to clients upon
                    account creation, expediting communication.
                </li>
                <li>
                    <strong>Led requirements gathering, crafted Business Requirements Documents, and Business Cases</strong>,
                    demonstrating strong leadership, communication, and interpersonal skills.
                </li>
            </ul>
        </div>
    )
}