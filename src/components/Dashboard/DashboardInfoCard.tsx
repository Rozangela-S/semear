
type InfoCardProps = {
  icon: React.ReactNode;
  label: string;
  title: string;
  badge: string;
  pink?: boolean;
};

export function InfoCard({ icon, label, title, badge, pink = false }: InfoCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-green-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-md text-2xl ${
            pink ? "bg-pink-100 text-pink-700" : "bg-green-200 text-green-800"
          }`}
        >
          {icon}
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-zinc-500">
            {label}
          </p>
          <h4 className="font-bold">{title}</h4>
        </div>
      </div>

      <span
        className={`rounded-full px-4 py-1 text-xs font-bold ${
          pink
            ? "bg-yellow-100 text-yellow-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {badge}
      </span>
    </div>
  );
}