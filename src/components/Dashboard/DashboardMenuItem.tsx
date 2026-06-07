
type MenuItemProps = {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  red?: boolean;
  onClick?: () => void;
};

export function MenuItem({
  icon,
  text,
  active = false,
  red = false,
  onClick,
}: MenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-md px-4 py-3 text-left transition ${
        active
          ? "bg-green-800 text-white"
          : red
          ? "text-red-400 hover:bg-red-500/10"
          : "text-green-200 hover:bg-green-800/50 hover:text-white"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span>{text}</span>
    </button>
  );
}