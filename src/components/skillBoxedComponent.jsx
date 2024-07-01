export default function SkillBoxedComponent({ src, text, className }){
    return (
        <div className={`flex flex-col items-center justify-center py-3 w-156 h-124 bg-palette-7 rounded-lg`}>
            <img src={src} alt="Skills image" className={`mb-3 w-12 h-12`}/>
            <h2 className={`font-robotslab font-bold text-lg ${className}`}>{text}</h2>
        </div>
    )
}