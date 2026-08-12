import React from 'react';
import { RollingButton } from '@/components/ui/RollingButton';
import { FadeInUp } from '@/components/FadeInUp';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-white flex flex-col justify-center pt-32 pb-16 font-paragraph relative overflow-hidden">
      {/* Light blue gradient background banner */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[linear-gradient(180deg,#e3f0ff_0%,#ffffff_100%)] pointer-events-none z-0" />
      
      <div className="relative z-10 w-[90%] xl:w-[82%] max-w-[1260px] mx-auto flex flex-col items-center justify-center my-auto">
        <FadeInUp>
          <div className="flex flex-col items-center text-center">
            
            {/* Mascot & 404 Graphic Container */}
            <div className="relative w-full max-w-[480px] h-[280px] mx-auto mb-8 flex items-end justify-center select-none">
              
              {/* Cloud Left */}
              <svg className="absolute left-6 top-8 w-16 h-10 text-brand-default/30" viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 12c0-3.3 2.7-6 6-6 1.7 0 3.3.7 4.4 2 .8-1.2 2.2-2 3.8-2 2.8 0 5 2.2 5 5 0 .3 0 .7-.1 1 2.2.3 3.9 2.2 3.9 4.5 0 2.5-2 4.5-4.5 4.5H18c-3.3 0-6-2.7-6-6 0-3 2.2-5.5 5.2-6z" strokeLinejoin="round" />
              </svg>
              
              {/* Cloud Right */}
              <svg className="absolute right-8 top-12 w-20 h-12 text-brand-default/30" viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 12c0-3.3 2.7-6 6-6 1.7 0 3.3.7 4.4 2 .8-1.2 2.2-2 3.8-2 2.8 0 5 2.2 5 5 0 .3 0 .7-.1 1 2.2.3 3.9 2.2 3.9 4.5 0 2.5-2 4.5-4.5 4.5H18c-3.3 0-6-2.7-6-6 0-3 2.2-5.5 5.2-6z" strokeLinejoin="round" />
              </svg>

              {/* Slanted Bold 404 Row */}
              <div className="flex items-end justify-center font-display font-black text-brand-default leading-none relative">
                {/* Left 4 */}
                <span className="text-[120px] md:text-[180px] tracking-tighter transform -rotate-[6deg] origin-bottom-right">4</span>
                
                {/* Middle Mascot 0 */}
                <div className="relative w-[110px] h-[110px] md:w-[150px] md:h-[150px] rounded-full bg-brand-default flex items-center justify-center mx-2 md:mx-4 shadow-lg border-4 border-white mb-2 md:mb-3">
                  {/* Eyes looking up */}
                  <div className="absolute top-[32%] left-[26%] flex gap-5 md:gap-7">
                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-white rounded-full relative flex items-start justify-end">
                      <div className="w-1.5 h-1.5 bg-[#0136A2] rounded-full absolute top-0 right-0" />
                    </div>
                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-white rounded-full relative flex items-start justify-end">
                      <div className="w-1.5 h-1.5 bg-[#0136A2] rounded-full absolute top-0 right-0" />
                    </div>
                  </div>
                  
                  {/* Mouth/Cheeks */}
                  <div className="absolute bottom-[35%] w-4 h-2 border-b-2 border-white/80 rounded-full" />
                  
                  {/* Arms holding the paper */}
                  <svg className="absolute -top-[32px] md:-top-[42px] left-0 w-full h-[40px] md:h-[50px] text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M 25,35 Q 15,20 40,5" />
                    <path d="M 85,35 Q 95,20 70,5" />
                  </svg>
                  
                  {/* Page Not Found Sign */}
                  <div className="absolute -top-[65px] md:-top-[85px] left-1/2 -translate-x-1/2 bg-white border-2 border-brand-default rounded-xl px-2.5 py-1.5 md:py-2.5 shadow-md rotate-[-4deg] w-[100px] md:w-[130px] text-center z-10">
                    <div className="text-[10px] md:text-xs font-display font-bold text-brand-default leading-tight">Page</div>
                    <div className="text-[10px] md:text-xs font-display font-bold text-brand-default leading-tight">Not</div>
                    <div className="text-[10px] md:text-xs font-display font-bold text-brand-default leading-tight">Found!</div>
                    {/* Ring binder holes at top of page */}
                    <div className="absolute -top-1 left-[20%] w-1.5 h-1.5 bg-white border border-brand-default rounded-full" />
                    <div className="absolute -top-1 right-[20%] w-1.5 h-1.5 bg-white border border-brand-default rounded-full" />
                  </div>
                </div>
                
                {/* Right 4 */}
                <span className="text-[120px] md:text-[180px] tracking-tighter transform rotate-[6deg] origin-bottom-left">4</span>
              </div>
            </div>

            {/* Error Message */}
            <p className="text-base md:text-lg lg:text-xl font-paragraph text-cs-ink-muted mb-8 leading-relaxed">
              Oops! Something is not right. Let&apos;s get back on track.
            </p>

            {/* Back Button */}
            <RollingButton href="/" text="Back To Homepage" variant="primary" />
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
