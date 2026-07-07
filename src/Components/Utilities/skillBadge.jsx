import LightDefaultButton2 from "./LightDefaultButton2"

const SkillBadge = ({ skills }) => {
    return (
        <div className="flex gap-2 flex-wrap">
            {skills.map((skill) => (
                <LightDefaultButton2>{skill}</LightDefaultButton2>
            ))}
        </div>
    )
}

export default SkillBadge