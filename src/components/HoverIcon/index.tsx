type Props = {
    img: string;
    text: string;
    className?: string;
}

export default function HoverIcon({img, text, className}: Props) {
    return (
        <div className={`${className ? className : ''} relative group hover:-translate-y-1 transition-transform duration-300 ease-in-out`}>
            <img src={img} alt={text} />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
                {text}
            </span>
        </div>
    )
}