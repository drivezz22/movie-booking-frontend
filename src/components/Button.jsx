const bgMap = {
  primary: "bg-[#DC2026]  hover:bg-[#A30500] active:brightness-90",
};

const colorMap = {
  white: " text-white",
  black: "text-black",
};

const widthMap = {
  full: "w-full",
};

export default function Button({
  children,
  bg = "primary",
  color = "black",
  width = "full",
  onClick,
}) {
  return (
    <button
      className={`px-3 py-3 ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]} focus:outline-none rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
