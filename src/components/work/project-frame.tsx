import type { ReactNode } from "react";
import { cn } from "@/lib";

export type FrameKind =
  | "exyra"
  | "exyra-wallet"
  | "exyra-reward"
  | "fraktia"
  | "fraktia-agent"
  | "fraktia-reward"
  | "referlytics"
  | "referlytics-flow"
  | "referlytics-status";

type Props = {
  kind: FrameKind | string;
  className?: string;
};

function Shell({
  name,
  meta,
  className,
  children,
  accent = "#c6f135",
}: {
  name: string;
  meta: string;
  className?: string;
  children: ReactNode;
  accent?: string;
}) {
  return (
    <div className={cn("flex h-full flex-col bg-[#0c0e0c] text-[#f3f5ef]", className)}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
        <p className="font-mono text-[10px] tracking-[0.2em]" style={{ color: accent }}>
          {name}
        </p>
        <p className="font-mono text-[10px] tracking-[0.16em] text-white/45">{meta}</p>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}

function Bars({ tones }: { tones: string[] }) {
  const heights = ["42%", "68%", "36%", "80%", "54%", "72%", "48%"];
  return (
    <div className="flex h-full items-end gap-1.5">
      {heights.map((height, index) => (
        <span
          key={height}
          className="flex-1 rounded-t-md"
          style={{ height, background: tones[index % tones.length] }}
        />
      ))}
    </div>
  );
}

const ProjectFrame = ({ kind, className }: Props) => {
  if (kind === "exyra") {
    return (
      <Shell name="EXYRA" meta="AGENT" className={className}>
        <div className="grid h-full grid-cols-[1.3fr_0.7fr]">
          <div className="flex flex-col justify-between border-r border-white/10 p-4 sm:p-5">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-white/40">ASK</p>
              <p className="mt-3 max-w-xs text-lg tracking-[-0.04em] sm:text-2xl">What should the agent do next?</p>
            </div>
            <div className="h-24 sm:h-32">
              <Bars tones={["#c6f135", "rgba(198,241,53,0.35)", "#8b7cff"]} />
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4">
            {["Agent", "Wallet", "Reward"].map((item, index) => (
              <div
                key={item}
                className="flex-1 rounded-2xl border border-white/10 px-3 py-3"
                style={{ background: index === 0 ? "rgba(198,241,53,0.12)" : "transparent" }}
              >
                <p className="font-mono text-[10px] tracking-[0.16em] text-white/50">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  if (kind === "exyra-wallet") {
    return (
      <Shell name="EXYRA" meta="WALLET" className={className} accent="#8b7cff">
        <div className="flex h-full flex-col justify-between p-4 sm:p-6">
          <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <p className="font-mono text-[10px] tracking-[0.16em] text-[#8b7cff]">WALLET</p>
            <div className="mt-4 h-2 w-2/3 rounded-full bg-white/10" />
            <div className="mt-2 h-2 w-1/3 rounded-full bg-white/10" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Send", "Receive", "Agent"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 py-4 text-center">
                <p className="font-mono text-[10px] tracking-[0.14em] text-white/55">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  if (kind === "exyra-reward") {
    return (
      <Shell name="EXYRA" meta="REWARD" className={className} accent="#ffb020">
        <div className="grid h-full grid-cols-2 gap-3 p-4 sm:grid-cols-3 sm:p-5">
          {["Streak", "Agent", "Hold", "Share", "Claim", "Next"].map((item, index) => (
            <div
              key={item}
              className="flex flex-col justify-between rounded-[20px] border border-white/10 p-3"
              style={{ background: index === 0 ? "rgba(255,176,32,0.14)" : "transparent" }}
            >
              <span className="h-2 w-8 rounded-full" style={{ background: index === 0 ? "#ffb020" : "rgba(255,255,255,0.15)" }} />
              <p className="font-mono text-[10px] tracking-[0.14em] text-white/60">{item}</p>
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  if (kind === "fraktia") {
    return (
      <Shell name="FRAKTIA" meta="DASHBOARD" className={className} accent="#7ec8ff">
        <div className="grid h-full grid-cols-2 gap-3 p-4 sm:grid-cols-3 sm:p-5">
          {["Agent 01", "Agent 02", "Agent 03", "Reward", "Task", "State"].map((item, index) => (
            <div
              key={item}
              className="flex flex-col justify-end rounded-[20px] border p-3"
              style={{
                borderColor: index === 1 ? "rgba(126,200,255,0.7)" : "rgba(255,255,255,0.1)",
                background: index === 1 ? "rgba(126,200,255,0.12)" : "transparent",
              }}
            >
              <p className="text-sm tracking-[-0.03em]">{item}</p>
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  if (kind === "fraktia-agent") {
    return (
      <Shell name="FRAKTIA" meta="AGENT" className={className} accent="#7ec8ff">
        <div className="flex h-full flex-col justify-between p-4 sm:p-6">
          <p className="font-mono text-[10px] tracking-[0.16em] text-[#7ec8ff]">CURRENT AGENT</p>
          <p className="max-w-sm text-2xl tracking-[-0.045em] sm:text-4xl">One agent. One next step.</p>
          <div className="flex gap-2">
            {["Idle", "Active", "Reward"].map((item, index) => (
              <span
                key={item}
                className="rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.14em]"
                style={{
                  borderColor: index === 1 ? "#7ec8ff" : "rgba(255,255,255,0.15)",
                  color: index === 1 ? "#7ec8ff" : "rgba(255,255,255,0.5)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  if (kind === "fraktia-reward") {
    return (
      <Shell name="FRAKTIA" meta="REWARDS" className={className} accent="#c6f135">
        <div className="flex h-full flex-col justify-end gap-3 p-4 sm:p-6">
          {["Open", "In progress", "Rewarded"].map((item, index) => (
            <div key={item} className="flex items-center gap-4">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: index === 2 ? "#c6f135" : "rgba(255,255,255,0.25)" }}
              />
              <div className="h-px flex-1 bg-white/10">
                <div className="h-px bg-[#c6f135]" style={{ width: `${40 + index * 25}%` }} />
              </div>
              <p className="w-24 font-mono text-[10px] tracking-[0.14em] text-white/55">{item}</p>
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  if (kind === "referlytics") {
    return (
      <Shell name="REFERLYTICS" meta="BOARD" className={className} accent="#7ec8ff">
        <div className="grid h-full grid-cols-3 divide-x divide-white/10">
          {[
            ["Open", ["Role A", "Role B"]],
            ["Sent", ["Referral"]],
            ["Introduced", ["Match"]],
          ].map(([title, rows]) => (
            <div key={String(title)} className="flex flex-col gap-3 p-3 sm:p-4">
              <p className="font-mono text-[10px] tracking-[0.16em] text-white/45">{title}</p>
              {(rows as string[]).map((row) => (
                <div key={row} className="rounded-2xl border border-white/10 px-3 py-3 text-sm">
                  {row}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  if (kind === "referlytics-flow") {
    return (
      <Shell name="REFERLYTICS" meta="FLOW" className={className} accent="#c6f135">
        <div className="flex h-full flex-col justify-center gap-3 p-4 sm:flex-row sm:items-center sm:p-6">
          {["See the role", "Send it", "Track it"].map((item, index) => (
            <div key={item} className="flex flex-1 items-center gap-3">
              <div className="flex-1 rounded-[20px] border border-white/10 px-4 py-5">
                <p className="font-mono text-[10px] tracking-[0.16em] text-[#c6f135]">0{index + 1}</p>
                <p className="mt-2 text-sm sm:text-base">{item}</p>
              </div>
              {index < 2 ? <span className="hidden text-white/30 sm:inline">→</span> : null}
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  if (kind === "referlytics-status") {
    return (
      <Shell name="REFERLYTICS" meta="STATUS" className={className} accent="#ffb020">
        <div className="divide-y divide-white/10">
          {[
            ["Sent", "Waiting"],
            ["Seen", "Opened"],
            ["Introduced", "Active"],
          ].map(([name, state]) => (
            <div key={name} className="flex items-center justify-between px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-sm sm:text-base">{name}</p>
              <p className="font-mono text-[10px] tracking-[0.16em] text-[#ffb020]">{state}</p>
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  return (
    <Shell name="FRAME" meta="STUDY" className={className}>
      <div className="h-full" />
    </Shell>
  );
};

export default ProjectFrame;
