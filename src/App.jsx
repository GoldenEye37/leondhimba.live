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
          <div className={`flex flex-row self-center justify-self-start`}>
              {/*left content*/}
              <div className={`space-y-14`}>
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
                          <p className={`font-normal text-base text-left`}>Lorem ipsum dolor sit amet consectetur. Est non sagittis tellus porta enim at integer
                              tellus lorem. Turpis cursus condimentum nulla tincidunt orci volutpat consectetur aenean
                              aliquam. Nulla tellus risus pulvinar vitae.Turpis cursus condimentum nulla tincidunt orci
                              volutpat consectetur aenean aliquam. Turpis cursus  nulla tincidunt orci volutpat .
                          </p>
                      </div>
                      {/*button*/}
                        <div className={`flex justify-start self-start`}>
                            <button className={`bg-button-100 px-10 py-2 rounded border border-black`}>Download My Resume</button>
                        </div>
                  </div>

              </div>

              {/*right content*/}
          </div>


      </section>
  )
}

export default App
