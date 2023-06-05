import classNames from "./helpers/classNames";

export const PriorityPill = ({ level }) => {

    return <span
        className={classNames({
            'rounded-lg text-white  text-[8px] align-middle px-1 py-0.5': true,
            'bg-pink-600': level === "High",
            'bg-purple-600': level === "Medium",
            'bg-yellow-400': level === "Low"
        })}
    >{level}</span>
}

export default PriorityPill;