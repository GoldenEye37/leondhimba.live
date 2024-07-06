import companyImg from '../assets/company.svg';
import calendarImg from '../assets/calendar.svg';
import PropTypes from "prop-types";


export default function ExperienceComponent({ jobTitle, companyName, period, responsibilities }){
    return(
        <div className={`flex flex-col items-center justify-center mx-auto pt-6 gap-y-6 min-w-full`}>
            <div className={`flex flex-row items-center bg-palette-7 h-11 px-3 max-w-sm rounded-lg`}>
                <p className={`font-robotslab font-bold text-2xl text-center`}>{jobTitle}</p>
            </div>
            <div className={`font-robotslab font-normal text-lg `}>
                <div className={`flex flex-row gap-x-3`}>
                    <img src={companyImg}/>
                    <p>Company: {companyName}</p>
                </div>
                <div className={`flex flex-row gap-x-3`}>
                    <img src={calendarImg}/>
                    <p>Period: {period}</p>
                </div>
            </div>
            <ul className="flex flex-col text-left list-disc list-inside mt-4 space-y-2">
                {responsibilities.map(
                    (responsibility, index) => <li key={index}>{responsibility}</li>
                )}
            </ul>
        </div>
    )
}

ExperienceComponent.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};