export default function HeroVisual() {
  const nodes = [
    { cx: 50,  cy: 50,  r: 5,   color: '#10b981', delay: '0s',    dur: '3s'   },
    { cx: 180, cy: 30,  r: 4,   color: '#06b6d4', delay: '0.4s',  dur: '3.5s' },
    { cx: 310, cy: 70,  r: 6,   color: '#3b82f6', delay: '0.2s',  dur: '4s'   },
    { cx: 420, cy: 20,  r: 3.5, color: '#10b981', delay: '0.8s',  dur: '3.2s' },
    { cx: 500, cy: 80,  r: 5,   color: '#f59e0b', delay: '0.6s',  dur: '4.5s' },
    { cx: 90,  cy: 160, r: 4.5, color: '#06b6d4', delay: '0.3s',  dur: '3.8s' },
    { cx: 220, cy: 140, r: 5.5, color: '#10b981', delay: '0.7s',  dur: '3s'   },
    { cx: 350, cy: 170, r: 4,   color: '#3b82f6', delay: '0.1s',  dur: '4.2s' },
    { cx: 460, cy: 150, r: 3,   color: '#06b6d4', delay: '0.9s',  dur: '3.6s' },
    { cx: 140, cy: 260, r: 5,   color: '#3b82f6', delay: '0.5s',  dur: '3.4s' },
    { cx: 270, cy: 240, r: 4,   color: '#10b981', delay: '0.2s',  dur: '4.8s' },
    { cx: 390, cy: 270, r: 6,   color: '#f59e0b', delay: '0.4s',  dur: '3.1s' },
    { cx: 490, cy: 230, r: 4,   color: '#10b981', delay: '0.6s',  dur: '3.9s' },
    { cx: 60,  cy: 310, r: 3.5, color: '#06b6d4', delay: '0.8s',  dur: '4.3s' },
    { cx: 200, cy: 330, r: 5,   color: '#3b82f6', delay: '0.3s',  dur: '3.7s' },
    { cx: 320, cy: 350, r: 4,   color: '#10b981', delay: '0.5s',  dur: '4.1s' },
    { cx: 440, cy: 320, r: 3,   color: '#f59e0b', delay: '0.7s',  dur: '3.3s' },
  ];

  const edges: [number, number][] = [
    [0,1],[1,2],[2,3],[3,4],
    [0,5],[1,6],[2,7],[4,8],
    [5,6],[6,7],[7,8],
    [5,9],[6,10],[7,11],[8,12],
    [9,10],[10,11],[11,12],
    [9,13],[10,14],[11,15],[12,16],
    [13,14],[14,15],[15,16],
    [1,5],[2,6],[3,7],[4,8],
    [6,11],[7,10],[2,10],[3,11],
  ];

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 550 380"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="glow-green" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="blur-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Background soft glow blobs */}
        <ellipse cx="150" cy="180" rx="120" ry="100" fill="url(#glow-green)" opacity="0.5" />
        <ellipse cx="400" cy="180" rx="130" ry="110" fill="url(#glow-blue)" opacity="0.4" />

        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={`edge-${i}`}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
          />
        ))}

        {/* Animated pulse edges (select few) */}
        {[[0,6],[1,7],[6,11],[10,15]].map(([a, b], i) => (
          <line
            key={`pulse-edge-${i}`}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke={nodes[a].color}
            strokeWidth="1.5"
            strokeOpacity="0"
            strokeDasharray="4 3"
          >
            <animate
              attributeName="strokeOpacity"
              values="0;0.6;0"
              dur={`${2 + i * 0.7}s`}
              repeatCount="indefinite"
              begin={`${i * 0.9}s`}
            />
          </line>
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={`node-${i}`} filter="url(#blur-glow)">
            {/* Outer ring */}
            <circle cx={n.cx} cy={n.cy} r={n.r + 4} fill={n.color} opacity="0">
              <animate attributeName="opacity" values="0;0.15;0" dur={n.dur} repeatCount="indefinite" begin={n.delay} />
              <animate attributeName="r" values={`${n.r + 2};${n.r + 7};${n.r + 2}`} dur={n.dur} repeatCount="indefinite" begin={n.delay} />
            </circle>
            {/* Core dot */}
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.color} opacity="0.85">
              <animate attributeName="opacity" values="0.55;0.95;0.55" dur={n.dur} repeatCount="indefinite" begin={n.delay} />
            </circle>
          </g>
        ))}

        {/* Moving data packet along a path */}
        <circle r="3" fill="#10b981" opacity="0.9">
          <animateMotion
            path={`M${nodes[0].cx},${nodes[0].cy} L${nodes[1].cx},${nodes[1].cy} L${nodes[6].cx},${nodes[6].cy} L${nodes[10].cx},${nodes[10].cy} L${nodes[14].cx},${nodes[14].cy}`}
            dur="5s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.9;1" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#3b82f6" opacity="0.9">
          <animateMotion
            path={`M${nodes[4].cx},${nodes[4].cy} L${nodes[8].cx},${nodes[8].cy} L${nodes[12].cx},${nodes[12].cy} L${nodes[16].cx},${nodes[16].cy}`}
            dur="6s"
            repeatCount="indefinite"
            begin="2s"
          />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.9;1" dur="6s" repeatCount="indefinite" begin="2s" />
        </circle>
      </svg>
    </div>
  );
}
