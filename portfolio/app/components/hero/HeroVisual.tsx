'use client';

import { Laptop, Terminal, Database } from "lucide-react";

export default function HeroVisual() {
    return(
            <div className="order-1 md:order-2 flex justify-center md:justify-end relative reveal delay-200">
                <div className="relative w-full max-w-md aspect-square animate-float">
                    {/* Background Circle */}
                    <div className="absolute inset-0 bg-linear-to-tr from-brand-200 to-indigo-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                    
                    {/* Main Card */}
                    <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-2xl transform md:rotate-3 hover:rotate-0 transition-all duration-500">
                    
                    {/* Fake Terminal Window */}
                    <div className="bg-slate-900 rounded-lg overflow-hidden shadow-inner">
                        <div className="bg-slate-800 px-4 py-2 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="p-4 font-mono text-sm text-slate-300">
                        <div className="flex gap-2">
                            <span className="text-brand-400">➜</span>
                            <span className="text-cyan-400">~</span>
                            <span className="text-slate-100">whoami</span>
                        </div>
                        <div className="text-emerald-400 mt-2">
                            &apos;Full Stack Engineer&apos;
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                            <span className="text-brand-400">➜</span>
                            <span className="text-cyan-400">~</span>
                            <span className="text-slate-100">cat skills.json</span>
                        </div>
                        <div className="mt-2 text-yellow-300">
                            [<br/>
                            &nbsp;&nbsp;&quot;Python&quot;,<br/>
                            &nbsp;&nbsp;&quot;React&quot;,<br/>
                            &nbsp;&nbsp;&quot;Django&quot;,<br/>
                            &nbsp;&nbsp;&quot;TypeScript&quot;<br/>
                            ]
                        </div>
                        <div className="mt-2 animate-pulse">_</div>
                        </div>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute -top-6 -right-6 p-4 bg-white rounded-xl shadow-lg animate-bounce delay-100">
                        <Database className="text-blue-500" size={24} />
                    </div>
                    <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-xl shadow-lg animate-bounce delay-700">
                        <Terminal className="text-brand-500" size={24} />
                    </div>
                    <div className="absolute top-1/2 -right-12 p-3 bg-white rounded-xl shadow-lg animate-bounce delay-300">
                        <Laptop className="text-purple-500" size={20} />
                    </div>
                    </div>
                </div>
        </div>
    );
}
