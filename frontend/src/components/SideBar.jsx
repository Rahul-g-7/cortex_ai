import React, { useState } from 'react';
import {PanelLeftIcon, PenSquare,Plus} from 'lucide-react';
const SideBar = () => {
    const [collapsed,setCollapse]=useState(false)
    return (
        <div className='fixed lg:static inset-y-0 left-0 z-50 w-[270px] h-screen shrink-0 bg-[#0d0f14] border-r border-white/[0.06]'>
            <div className='flex flex-col h-full'>
                <div className='flex items-center gap-2.5 px-4 py-4 border-b border-white/[0.06]'>
                    <div onClick={()=>{setCollapse(true)}} className='hidden lg:flex items-center gap-2.5 justify-center h-7 w-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.07] transition-colors duration-150 bg-transparent border-none cursor-pointer'>
                        <PanelLeftIcon /> 
                    </div>
                    <span className='text-[15px] font-semibold text-slate-100 tracking-tight flex-1'>CortexAI</span>
                    <span className='text-[12px] font-medium text-indigo-400 border bg-indigo-500/10 border-indigo-500/30 px-2 py-0.5 rounded-full tracking-wide'>free</span>
                    <button className='flex items-center justify-center h-7 w-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.07] transition-colors duration-150 bg-transparent border-none cursor-pointer'>
                        <PenSquare/>
                    </button>
                </div>
                <div className='px-4 pt-4 pb-1'>
                    <button className='w-full flex items-center gap-2 justify-center rounded-xl text-white font-medium bg-linear-to-br from-indigo-500 to-violet-600 py-[10px] border-none hover:opacity-90 transition-opacity duration-150 cursor-pointer'>
                        <Plus size={16}/>
                        New Chat 
                    </button>
                </div>
                <div className=''></div>
            </div>
        </div>
    );
}

export default SideBar;
