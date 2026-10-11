export type TokenColor = {
  name: string;
  value: string;
};

type Props = {
  typeface: string;
  colors: TokenColor[];
};

const TokenBoard = ({ typeface, colors }: Props) => {
  return (
    <div className="overflow-hidden border border-white/15 bg-[#101010]">
      <div className="flex items-end justify-between gap-4 border-b border-white/10 px-5 py-5">
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Typography</p>
          <p className="mt-2 text-3xl font-medium tracking-tight">{typeface}</p>
        </div>
        <p className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">Aa · Ag · Body</p>
      </div>
      <div className="grid grid-cols-3 gap-px bg-white/10">
        {colors.map((color) => (
          <div key={color.name} className="bg-[#101010] px-3 py-4">
            <div className="h-12 border border-white/10" style={{ background: color.value }} />
            <p className="mt-2 text-xs font-medium text-white">{color.name}</p>
            <p className="text-[11px] text-[#999999]">{color.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenBoard;
