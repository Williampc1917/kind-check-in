const PrivacyMockup = () => (
  <div className="mt-6 min-h-[160px]">
    <style>{`
      @keyframes pmTyping {
        0%        { opacity: 0; transform: scale(0.84); }
        12%       { opacity: 1; transform: scale(1); }
        55%       { opacity: 1; transform: scale(1); }
        72%, 100% { opacity: 0; transform: scale(0.92); }
      }

      @keyframes pmMessage {
        0%, 60%   { opacity: 0; transform: scale(0.89); }
        80%, 100% { opacity: 1; transform: scale(1); }
      }

      @keyframes pmDot {
        0%, 100% { opacity: 0.28; transform: scale(0.88); }
        50%      { opacity: 1;    transform: scale(1); }
      }

      @media (prefers-reduced-motion: reduce) {
        .pm-typing  { display: none !important; }
        .pm-message { animation: none !important; opacity: 1 !important; transform: none !important; }
      }
    `}</style>

    <div className="relative min-h-[140px] px-1 py-4">
      <div className="pointer-events-none absolute left-5 top-3 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative min-h-[112px]">

        {/* Typing bubble */}
        <div className="absolute left-0 top-0 flex items-end gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-[0.64rem] font-semibold text-white shadow-[0_12px_24px_-18px_rgba(15,23,42,0.7)]">
            M
          </div>
          <div
            className="pm-typing inline-flex h-11 items-center gap-1 rounded-[22px] rounded-bl-[7px] bg-slate-100 px-4 shadow-[0_16px_34px_-30px_rgba(15,23,42,0.45)]"
            style={{ animation: "pmTyping 3.4s cubic-bezier(0.22,1,0.36,1) forwards" }}
            aria-label="MadeIt is typing"
          >
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="block h-2 w-2 rounded-full bg-slate-400"
                style={{
                  animation: "pmDot 0.9s ease-in-out infinite",
                  animationDelay: `${dot * 140}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Message bubble */}
        <div className="absolute left-0 top-0 flex items-start gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-[0.64rem] font-semibold text-white shadow-[0_12px_24px_-18px_rgba(15,23,42,0.7)]">
            M
          </div>
          <div
            className="pm-message max-w-[18.5rem] rounded-[22px] rounded-bl-[7px] bg-slate-950 px-5 py-4 text-[0.92rem] leading-6 text-white opacity-0 shadow-[0_24px_44px_-30px_rgba(15,23,42,0.65)]"
            style={{ animation: "pmMessage 3.4s cubic-bezier(0.22,1,0.36,1) forwards" }}
          >
            MadeIt: Maya missed a 5:00 PM check-in. Please check in with them when you can.
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default PrivacyMockup;
