import companyImg from '../assets/company.svg';
import calendarImg from '../assets/calendar.svg';


export default function ExperienceComponent(){
    return(
        <div className={`flex flex-col gap-y-6 bg-red-300`}>
            <div className={`bg-palette-6 h-11 max-w-sm rounded-lg`}>
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
            <ul className={`font-robotslab font-normal text-base min-w-fit`}>
                <li>Developed reliable backend APIs for A360 version 2.0 utilizing Spring Boot REST developement.</li>
                <li>Achieved a 90% improvement in API efficiency compared to previous version.</li>
                <li>Facilitated deployment on test servers,and conducted bug fixing.</li>
                <li>Documented APIs using postman and soap ui.</li>
                <li>Integrated the bank's system directly with external companies,
                    eliminating the need for third-party gateways thereby saving significant costs.
                </li>
                <li>Spearheaded an automation projects from scretch, in particular I developed the Stationery Ordering app.</li>
                <li>Engineered a customer welcome solution that sends SMS notifications and emails to clients
                    when they open an account with the bank, expediting welcome messages to clients.
                </li>
                <li>Led requirements gathering, crafted Business Requirements Documents, and Business Cases,
                    demonstrating strong leadership, communication, and interpersonal skills.
                </li>
            </ul>
        </div>
    )
}