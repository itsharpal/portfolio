"use client";

import { useEffect, useRef, useState } from "react";

// Elements belong to the state before the change, the state after it, or both.
// "before" fades out and "after" fades in when the diagram scrolls into view.
type Phase = "before" | "after" | "both";

export type DiagramBox = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  rows?: { label: string; phase?: Phase }[];
  phase?: Phase;
};

export type DiagramEdge = {
  from: string;
  to: string;
  phase?: Phase;
  label?: string;
};

const ROW_H = 22;
const HEAD_H = 30;

function boxHeight(box: DiagramBox) {
  return HEAD_H + (box.rows?.length ?? 0) * ROW_H + 10;
}

// A box tagged "before" is the shape the data used to have. It stays on screen
// — the diagram is a comparison, and half a comparison is unreadable. Only the
// things that genuinely move (rows) or re-attach (edges) fade out.
function boxClass(phase: Phase = "both") {
  return phase === "after" ? "diagram-after" : "";
}

function markClass(phase: Phase = "both") {
  if (phase === "before") return "diagram-before";
  if (phase === "after") return "diagram-after";
  return "";
}

export function Diagram({
  boxes,
  edges = [],
  caption,
  width = 640,
}: {
  boxes: DiagramBox[];
  edges?: DiagramEdge[];
  caption: string;
  width?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Once only — the diagram never replays.
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const height =
    Math.max(...boxes.map((box) => box.y + boxHeight(box))) + 10;

  const find = (id: string) => boxes.find((box) => box.id === id);

  return (
    <figure className="mt-12">
      {/* Scrolls inside its own frame on a phone rather than squashing. */}
      <div ref={ref} className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          role="img"
          aria-label={caption}
          className={`diagram font-mono ${inView ? "diagram-in-view" : ""}`}
          style={{ maxWidth: "none" }}
        >
          {edges.map((edge, i) => {
            const from = find(edge.from);
            const to = find(edge.to);
            if (!from || !to) return null;

            const x1 = from.x + from.w;
            const y1 = from.y + boxHeight(from) / 2;
            const x2 = to.x;
            const y2 = to.y + boxHeight(to) / 2;
            const mid = (x1 + x2) / 2;

            return (
              <g key={`edge-${i}`} className={markClass(edge.phase)}>
                <path
                  d={`M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2 - 7} ${y2}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-rule"
                />
                <path
                  d={`M ${x2 - 7} ${y2 - 3.5} L ${x2} ${y2} L ${x2 - 7} ${y2 + 3.5}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-rule"
                />
                {edge.label ? (
                  <text
                    x={mid}
                    y={(y1 + y2) / 2 - 6}
                    textAnchor="middle"
                    fontSize="11"
                    fill="currentColor"
                    className="text-muted"
                  >
                    {edge.label}
                  </text>
                ) : null}
              </g>
            );
          })}

          {boxes.map((box) => (
            <g key={box.id} className={boxClass(box.phase)}>
              <rect
                x={box.x}
                y={box.y}
                width={box.w}
                height={boxHeight(box)}
                rx="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-rule"
              />
              <text
                x={box.x + 12}
                y={box.y + 19}
                fontSize="12.5"
                fontWeight="650"
                fill="currentColor"
              >
                {box.label}
              </text>
              <line
                x1={box.x}
                y1={box.y + HEAD_H - 4}
                x2={box.x + box.w}
                y2={box.y + HEAD_H - 4}
                stroke="currentColor"
                strokeWidth="1"
                className="text-rule"
              />
              {box.rows?.map((row, i) => (
                <text
                  key={row.label}
                  x={box.x + 12}
                  y={box.y + HEAD_H + 12 + i * ROW_H}
                  fontSize="12"
                  fill="currentColor"
                  className={`${markClass(row.phase)} ${
                    row.phase && row.phase !== "both"
                      ? "text-accent"
                      : "text-muted"
                  }`}
                >
                  {row.label}
                </text>
              ))}
            </g>
          ))}
        </svg>
      </div>

      <figcaption className="mt-3 font-mono text-[13px] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
