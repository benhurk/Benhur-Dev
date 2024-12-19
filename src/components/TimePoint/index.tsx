import { ReactNode} from "react";

type Props = {
    time: string;
    title: string;
    tooltip?: ReactNode;
}

export default function TimePoint({time, title, tooltip}: Props) {
    return (
        <div className="relative w-8 group flex md:flex-col gap-4 items-center z-10">
            <div className="shrink-0 w-full h-8 animate-spin-slow glow glow-sm glow-rgb">
                <div className="size-full bg-slate-900" />
            </div>
            <div className='md:text-center whitespace-nowrap'>
                <time className='border-b border-slate-600'>{time}</time>
                <span className='block'>{title}</span>
            </div>
            {
                tooltip &&
                <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 w-80 p-3 z-20 bg-gradient-to-br from-slate-100 to-white text-dark
                                opacity-0 group-hover:opacity-100 group-hover:-translate-y-1.5 transition-all duration-300 ease-in-out pointer-events-none">
                    {tooltip}
                </div>
            }
        </div>
    );
}
