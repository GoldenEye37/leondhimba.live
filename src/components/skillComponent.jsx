export default function SkillComponent({ src, text }){
    return (
        <div className={`flex flex-col items-center justify-center py-3 w-110`}>
            <img src={src} alt="Skills image" className={`mb-3 w-12 h-12`}/>
            <h2 className={`font-robotslab font-bold text-lg`}>{text}</h2>
        </div>
    )
}