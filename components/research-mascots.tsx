type MascotProps = { className?: string };

export function ResearchRobot({ className = '' }: MascotProps) {
  return (
    <span className={`research-robot ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 160 170" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
        <g transform="rotate(-14 80 92)" stroke="#242424" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
          <g className="robot-body">
            <path d="M58 117H110V137C110 140.3 107.3 143 104 143H64C60.7 143 58 140.3 58 137V117Z" fill="#FFFEF8" />
          </g>
          <g className="robot-head">
            <g className="robot-antenna">
              <path d="M81 35V53" />
              <circle cx="81" cy="27" r="8.5" fill="#FFE166" />
            </g>
            <rect x="32" y="53" width="101" height="71" rx="7" fill="#FFE166" />
            <circle className="robot-eye-left" cx="61" cy="87" r="8.5" fill="#FFFEF8" stroke="none" />
            <circle className="robot-eye-right" cx="104" cy="87" r="8.5" fill="#FFFEF8" stroke="none" />
          </g>
        </g>
      </svg>
    </span>
  );
}
