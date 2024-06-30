
export default function HeroSection(){
    return (
        <div className={`mb-32`}>
            {/* nav bar*/}
            <div className={`h-1/6 w-full flex flex-row items-center ali justify-center align-middle px-16 mb-16`}>
                {/*nav links*/}
                <div className={`flex flex-row space-x-8 bg-white`}>
                    <a href="#" className={`font-robotslab font-normal text-black`}>Home</a>
                    <a href="#" className={`font-robotslab font-normal text-palette-3`}>Education</a>
                    <a href="#" className={`font-robotslab font-normal text-palette-3`}>Skills</a>
                    <a href="#" className={`font-robotslab font-normal text-palette-3`}>Experiences</a>
                    <a href="#" className={`font-robotslab font-normal text-palette-3`}>Projects</a>
                    <a href="#" className={`font-robotslab font-normal text-palette-3`}>Contact</a>
                </div>
            </div>
            <div className={`h-full w-full flex items-stretch`}>
                {/*hero content*/}
                <div className={`h-5/6 w-auto flex flex-row items-stretch self-center justify-self-start space-x-16`}>
                    {/*left content*/}
                    <div className={`w-auto h-full space-y-14 self-center
              `}>
                        {/*name and title*/}
                        <div className={`font-robotslab flex flex-col content-center justify-start`}>
                            <div className={`flex flex-row h-9 w-303 items-center px-1 py-0.5 bg-lime-100 rounded-md
                                        space-x-2`}>
                                <img className={`w-6 h-6`} src="../public/dot.png" alt=""/>
                                <p className={`font-normal text-black`}>Python || Java Backend Developer</p>
                            </div>
                            <h1 className={`py-1 text-6xl text-left font-normal`}>Leon Dhimba</h1>
                        </div>

                        {/*description*/}
                        <div className={`justify-items-start space-y-12 w-auto`}>
                            <div className={`flex flex-col lg:w-443 md:w-96 space-y-3 font-robotslab`}>
                                <h2 className={`text-left font-bold text-3xl`}>About Me</h2>
                                <p className={`font-normal text-base text-left`}>Hi, I am Leon, I am software developer
                                    with <span className={`bg-lime-100`}>2 years of experience</span> in backend
                                    development.
                                    I love to work with Java and Python in my day to day coding sessions.
                                    I am a <span
                                        className={`bg-lime-100`}>Bsc Honours in Software Engineering degree holder</span> from the
                                    University of Zimbabwe.
                                    Get to know more about me by downloading my resume,
                                    you can also checkout my professional accounts.
                                </p>
                            </div>
                            {/*button*/}
                            <div className={`flex flex-row w-auto justify-start self-start space-x-3`}>
                                <button className={`bg-button-100 px-5 py-2 rounded border border-black`}>Checkout My
                                    Experience
                                </button>
                                <button className={`bg-white px-5 py-2 rounded border border-black`}>Download My
                                    Resume
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*right content bg-lime-700 */}
                    <div className={`self-start w-786 h-full py-1 static grid items-stretch justify-items-stretch`}>
                        <button className={`bg-lime-50 flex flex-row w-268 h-auto p-6 space-x-3
                            rounded-t-full rounded-bl-full shadow-2xl absolute
                            self-start justify-self-center mr-64 -ml-6
                            `}>
                            <img className={`w-8 h-8`} src="../public/mdi_github.svg" alt=""/>
                            <h1 className={`font-poppins font-bold text-3xl`}>MY GITHUB</h1>
                        </button>
                        <div className={`border-gray-700 inline-block w-3/4 h-4/5 mt-12 self-center justify-self-center
                                    content-center
                                `}
                        >
                            <img className={`w-full h-full`} src="../public/atom.svg" alt=""/>
                        </div>
                        <button className={`bg-lime-50 flex flex-row w-auto h-auto p-6 space-x-3
                            rounded-t-full rounded-br-full shadow-2xl absolute
                            self-start justify-self-end mt-28 mr-3
                            `}>
                            <img className={`w-8 h-8`} src="../public/mdi_github.svg" alt=""/>
                            <h1 className={`font-poppins font-bold text-3xl`}>MY LINKEDIN</h1>
                        </button>
                        <button className={`bg-lime-50 flex flex-row w-268 h-auto p-6 space-x-3
                             rounded-b-full rounded-tl-full shadow-2xl absolute
                             self-end justify-self-center mr-64 -ml-6 -mb-12
                            `}>
                            <img className={`w-8 h-8`} src="../public/mdi_github.svg" alt=""/>
                            <h1 className={`font-poppins font-bold text-3xl`}>EMAIL ME</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
