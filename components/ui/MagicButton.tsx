const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 md:w-60 md:mt-10">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex items-center justify-center w-full h-full px-7 text-sm font-medium text-white rounded-lg cursor-pointer bg-slate-950 backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}

        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
export default MagicButton;