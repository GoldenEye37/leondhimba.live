import './App.css'

function App() {

  return (
      // hero section
      <section className={`bg-white h-screen flex items-stretch`}>
          {/*nav bar*/}
          {/*  <nav className={`bg-red-400 flex justify-between items-center p-4`}>*/}
          {/*      <h1 className={`text-2xl font-bold`}>Logo</h1>*/}
          {/*      <ul className={`flex`}>*/}
          {/*          <li className={`mx-2`}><a href={`#`}>Home</a></li>*/}
          {/*          <li className={`mx-2`}><a href={`#`}>About</a></li>*/}
          {/*          <li className={`mx-2`}><a href={`#`}>Contact</a></li>*/}
          {/*      </ul>*/}
          {/*  </nav>*/}

          {/*hero content*/}
          <div className={`h-5/6 flex flex-row items-stretch self-center justify-self-start space-x-16`}>
              {/*left content*/}
              <div className={`space-y-14 self-center`}>
                  {/*name and title*/}
                  <div className={` font-robotslab flex flex-col content-center justify-start`}>
                      <div className={`flex flex-row h-9 w-303 items-center px-1 py-0.5 bg-lime-100 rounded-md
                                        space-x-2`}>
                          <img className={`w-6 h-6`} src="../public/dot.png" alt=""/>
                          <p className={`font-normal text-black`}>Python || Java Backend Developer</p>
                      </div>
                      <h1 className={`py-1 text-6xl text-left font-normal`}>Leon Dhimba</h1>
                  </div>

                  {/*description*/}
                  <div className={`justify-items-start space-y-12`}>
                      <div className={`flex flex-col w-443 space-y-3 font-robotslab`}>
                          <h2 className={`text-left font-bold text-3xl`}>About Me</h2>
                          <p className={`font-normal text-base text-left`}>Lorem ipsum dolor sit amet consectetur. Est
                              non sagittis tellus porta enim at integer
                              tellus lorem. Turpis cursus condimentum nulla tincidunt orci volutpat consectetur aenean
                              aliquam. Nulla tellus risus pulvinar vitae.Turpis cursus condimentum nulla tincidunt orci
                              volutpat consectetur aenean aliquam. Turpis cursus nulla tincidunt orci volutpat .
                          </p>
                      </div>
                      {/*button*/}
                      <div className={`flex justify-start self-start`}>
                          <button className={`bg-button-100 px-10 py-2 rounded border border-black`}>Download My
                              Resume
                          </button>
                      </div>
                  </div>
              </div>

              {/*right content bg-lime-700 */}
              <div className={`self-start w-786 h-full py-1 static grid items-stretch justify-items-stretch`}>
                  <div className={`bg-lime-50 flex flex-row w-268 h-auto p-6 space-x-3
                            rounded-t-full rounded-bl-full shadow-2xl absolute
                            self-start justify-self-center mr-64 -ml-6
                            `}>
                      <img className={`w-8 h-8`} src="../public/mdi_github.svg" alt=""/>
                      <h1 className={`font-poppins font-bold text-3xl`}>MY GITHUB</h1>
                  </div>
                  <div className={`border-gray-700 inline-block w-3/4 h-4/5 mt-12 self-center justify-self-center
                                    content-center
                                `}
                  >
                      <img className={`w-full h-full`} src="../public/atom.svg" alt=""/>
                  </div>
                  <div className={`bg-lime-50 flex flex-row w-auto h-auto p-6 space-x-3
                            rounded-t-full rounded-br-full shadow-2xl absolute
                            self-start justify-self-end mt-28 mr-3
                            `}>
                      <img className={`w-8 h-8`} src="../public/mdi_github.svg" alt=""/>
                      <h1 className={`font-poppins font-bold text-3xl`}>MY LINKEDIN</h1>
                  </div>
                  <div className={`bg-lime-50 flex flex-row w-268 h-auto p-6 space-x-3
                             rounded-b-full rounded-tl-full shadow-2xl absolute
                             self-end justify-self-center mr-64 -ml-6 -mb-12
                            `}>
                      <img className={`w-8 h-8`} src="../public/mdi_github.svg" alt=""/>
                      <h1 className={`font-poppins font-bold text-3xl`}>EMAIL ME</h1>
                  </div>
              </div>
          </div>


      </section>
  )
}

export default App
