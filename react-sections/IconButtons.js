import IconButton from "components/IconButton";

export default function IconButtons() {
  const Icon = ({ size }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={size}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
      <path
        fillRule="evenodd"
        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Icon Button Variants</h2>
      <div className="flex items-center gap-4 mb-12">
        <IconButton>
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton variant="gradient">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton variant="outlined">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton variant="text">
          <Icon size="w-5 h-5" />
        </IconButton>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Icon Button Sizes</h2>
      <div className="flex items-end gap-4 mb-12">
        <IconButton size="sm">
          <Icon size="w-4 h-4" />
        </IconButton>
        <IconButton>
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton size="lg">
          <Icon size="w-6 h-6" />
        </IconButton>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Icon Button Colors</h2>
      <div className="flex flex-wrap items-end gap-4">
        <IconButton color="blue-grey">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="grey">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="brown">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="deep-orange">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="orange">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="amber">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="yellow">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="lime">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="light-green">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="green">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="teal">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="cyan">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton>
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="blue">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="indigo">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="deep-purple">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="purple">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="pink">
          <Icon size="w-5 h-5" />
        </IconButton>
        <IconButton color="red">
          <Icon size="w-5 h-5" />
        </IconButton>
      </div>
    </div>
  );
}
