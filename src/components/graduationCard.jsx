import universityLogo from '../assets/university logo.png';
export default function GraduationCard() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg shadow-palette-7 rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src={universityLogo} alt="university logo" />
        <div className="p-6">
            <h2 className="font-robotslab font-bold text-2xl mb-4 text-center">Graduate</h2>
            <h2 className="font-robotslab font-bold text-2xl mb-2 text-center">In</h2>
            <h2 className={`font-robotslab font-bold text-2xl mb-6 text-center`}>BSc Honours in Software
                Engineering</h2>
            <h2 className={`font-robotslab font-normal text-base mb-2`}>Degree Class: 2.1</h2>
            <p className="font-poppins text-gray-700 text-base text-center">
                Proudly graduated with a BSc Honours in Software Engineering from the University of Zimbabwe.
                During my academic journey, I've taken a variety of courses that have equipped
                me with the knowledge and skills required in the field of software engineering.
            </p>
            <div className="mt-4 text-center">
                <span className={`font-normal font-robotslab text-base`}>2020 - 2024</span>
            </div>
        </div>
    </div>
  );
}

