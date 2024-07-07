import skillsImg from '../assets/solar_lightbulb-bolt-bold.png';
import html5 from '../assets/html5 24x24.svg';
import css3Img from '../assets/css3 24x24.svg';
import javascripImg from '../assets/javascript 2x24.svg';
import bootstrapImg from '../assets/boostrap 24x24.svg';
import tailwindcssImg from '../assets/tailwindcss 24x24.svg';
import htmlTags from '../assets/frontend-dev 1024.png';
import serverImg from '../assets/backend-dev 1024.png';
import databasecacheImg from '../assets/database 1024.png';
import pythonImg from '../assets/python 24x24.svg';
import javaImg from '../assets/java 24x24.svg';
import djangoImg from '../assets/django 24x24.svg';
import djangoRestImg from '../assets/django rest 24x24.svg';
import postgresImg from '../assets/postgres 24x24.svg';
import mysqlImg from '../assets/mysql 24x24.svg';
import redisImg from '../assets/redis 24x24.svg';
import gitImg from '../assets/git 24x24.svg';
import gitlabImg from '../assets/gitlab 24 x24.svg';
import githubImg from '../assets/github 24x24.svg';
import dockerImg from '../assets/docker 24x24.svg';
import vercelImg from '../assets/vercel 24x24.svg';
import renderImg from '../assets/render 24x24.svg';
import herokuImg from '../assets/heroku 24x24.svg';
import containersImg from '../assets/version control.svg';
import springBootImg from '../assets/springboot 24x24.svg';
import deployImg from '../assets/deploy 1024.svg';

import SkillComponent from "../components/skillComponent.jsx";
import SkillBoxedComponent from "../components/skillBoxedComponent.jsx";

export default function SkillsSection(){
    return (
        <div className={`w-full items-center mt-16 mb-8 pb-12 border-b border-gray-300`}>
            <div className={`w-auto h-auto space-y-8 gap-y-12 items-center align-middle`}>
                {/*section header*/}
                <div className={`flex flex-col items-center justify-center p-4`}>
                    <img src={skillsImg} alt="Skills image" className={`bg-white mb-2`}/>
                    <h2 className={`font-robotslab font-bold text-4xl`}>Skills</h2>
                </div>
                {/* section content*/}
                <div className={`w-full font-robotslab flex flex-col items-center gap-y-16`}>
                    {/*frontend and backend*/}
                    <div className={`flex flex-row space-x-16 items-end`}>
                        {/*frontend*/}
                        <div className={`flex flex-col items-center justify-center gap-y-3`}>
                            <div className={`flex flex-col items-center justify-center`}>
                                <img src={htmlTags} alt="Skills image" className={`mb-3 w-12 h-10`}/>
                                <h2 className={`font-bold text-xl`}>Frontend Dev</h2>
                            </div>
                            <div className={`grid grid-cols-3 gap-x-14 gap-y-12 text-palette-2`}>
                                <SkillComponent src={html5} text="HTML 5"/>
                                <SkillComponent src={css3Img} text="CSS"/>
                                <SkillComponent src={javascripImg} text="Javascript"/>
                                <SkillComponent src={bootstrapImg} text="Bootsrap"/>
                                <SkillComponent src={tailwindcssImg} text="TailwindCSS"/>
                            </div>
                        </div>
                        {/*line*/}
                        <div className={`h-64 w-0.5 bg-palette-2`}></div>
                        {/*backend*/}
                        <div className={`flex flex-col items-center justify-center gap-y-3`}>
                            <div className={`flex flex-col items-center justify-center`}>
                                <img src={serverImg} alt="Skills image" className={`mb-3 w-12 h-10`}/>
                                <h2 className={`font-bold text-xl`}>Backend Dev</h2>
                            </div>
                            <div className={`grid grid-cols-2 gap-x-14 mb-9 text-palette-3`}>
                                <SkillComponent src={pythonImg} text="Python"/>
                                <SkillComponent src={javaImg} text="Java"/>
                            </div>
                            <div className={`grid grid-cols-3 gap-x-14 gap-y-12 text-palette-2`}>
                                <SkillComponent src={djangoImg} text="Django"/>
                                <SkillComponent src={djangoRestImg} text="Django Rest"/>
                                <SkillComponent src={springBootImg} text="Spring Boot"/>
                            </div>
                        </div>
                    </div>
                    {/*database and cache*/}
                    <div className={`flex flex-col items-center justify-center font-poppins`}>
                        <div className={`flex flex-col items-center justify-center mb-8`}>
                            <img src={databasecacheImg} alt="Skills image" className={`mb-3 w-12 h-10`}/>
                            <h2 className={`font-bold text-xl`}>Database & cache</h2>
                        </div>
                        <div className={`grid grid-cols-3 gap-x-14 gap-y-12 text-palette-2`}>
                            <SkillBoxedComponent src={postgresImg} text="Postgres"/>
                            <SkillBoxedComponent src={mysqlImg} text="MySql"/>
                            <SkillBoxedComponent src={redisImg} text="Redis"/>
                        </div>
                    </div>
                    {/*version control*/}
                    <div className={`flex flex-col items-center justify-center font-poppins`}>
                        <div className={`flex flex-col items-center justify-center mb-8`}>
                            <img src={containersImg} alt="Skills image" className={`mb-3 w-12 h-10`}/>
                            <h2 className={`font-bold text-xl`}>Version Control & Containerization</h2>
                        </div>
                        <div className={`grid grid-cols-4 gap-x-14 gap-y-12 text-palette-2`}>
                            <SkillBoxedComponent src={gitImg} text="Git"/>
                            <SkillBoxedComponent src={githubImg} text="Github"/>
                            <SkillBoxedComponent src={gitlabImg} text="Gitlab"/>
                            <SkillBoxedComponent src={dockerImg} text="Docker"/>
                        </div>
                    </div>
                    {/*hosting*/}
                    <div className={`flex flex-col items-center justify-center font-poppins`}>
                        <div className={`flex flex-col items-center justify-center mb-8`}>
                            <img src={deployImg} alt="Skills image" className={`mb-3 w-12 h-10`}/>
                            <h2 className={`font-bold text-xl`}>Hosting</h2>
                        </div>
                        <div className={`grid grid-cols-3 gap-x-14 gap-y-12 text-palette-2`}>
                            <SkillComponent src={vercelImg} text="Vercel"/>
                            <SkillComponent src={renderImg} text="Render"/>
                            <SkillComponent src={herokuImg} text="Heroku"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}