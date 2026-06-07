type PinProps = {
  className?: string;
  large?: boolean;
};

export function Pin({ className = "", large = false }: PinProps) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${
        large ? "text-6xl" : "text-4xl"
      } ${className}`}
    >
      📍

    </div>
  );
}

type RedPinProps = {
  className?: string;
};

export function RedPin({ className = "" }: RedPinProps) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 text-4xl ${className}`}
    >
      📍
    </div>
  );
}