import { ReactNode} from "react";

type Props = {
    time: string;
    title: string;
    tooltip?: ReactNode;
}

export default function TimePoint({time, title, tooltip}: Props) {
    return (
        <div className="relative group cursor-help w-32">
            <div className="flex flex-col gap-4 items-center">
                <div className="w-8 h-8 animate-spin-slow glow glow-sm glow-rgb z-10">
                    <div className="size-full bg-slate-900" />
                </div>
                <div className='text-lg text-center'>
                    <time className='border-b border-slate-600'>{time}</time>
                    <span className='block whitespace-nowrap'>{title}</span>
                </div>
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
