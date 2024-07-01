import graduationPhoto from '../assets/graduation_photo.jpg'; // Ensure the path is correct

export default function GraduationCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src={graduationPhoto} alt="Graduation" />
      <div className="p-6">
        <h2 className="font-robotslab font-bold text-2xl mb-2 text-center">Graduate</h2>
        <p className="text-gray-700 text-base text-center">
          Proudly graduated with a BSc Honours in Software Engineering from the University of Zimbabwe.
        </p>
        <div className="mt-4 text-center">
          <span className="text-gray-600">2020 - 2024</span>
        </div>
      </div>
    </div>
  );
};

