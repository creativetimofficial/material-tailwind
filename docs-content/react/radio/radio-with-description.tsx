import { Radio, Typography } from "@material-tailwind/react";

export function RadioWithDescription() {
  return (
    <div className="flex flex-col gap-8">
      <Radio
        name="description"
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              HTML Version
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              @material-tailwind/html, packed with rich components and widgets.
            </Typography>
          </div>
        }
        containerProps={{
          className: "-mt-5",
        }}
      />
      <Radio
        name="description"
        defaultChecked
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              React Version
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              @material-tailwind/react, packed with rich components and widgets.
            </Typography>
          </div>
        }
        containerProps={{
          className: "-mt-5",
        }}
      />
      <Radio
        name="description"
        color="blue"
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              React Version
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              @material-tailwind/react, packed with rich components and widgets.
            </Typography>
          </div>
        }
        containerProps={{
          className: "-mt-5",
        }}
      />
      <Radio
        name="description"
        color="green"
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              React Version
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              @material-tailwind/react, packed with rich components and widgets.
            </Typography>
          </div>
        }
        containerProps={{
          className: "-mt-5",
        }}
      />
      <Radio
        name="description"
        color="red"
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              React Version
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              @material-tailwind/react, packed with rich components and widgets.
            </Typography>
          </div>
        }
        containerProps={{
          className: "-mt-5",
        }}
      />
      <Radio
        name="description"
        color="amber"
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              React Version
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              @material-tailwind/react, packed with rich components and widgets.
            </Typography>
          </div>
        }
        containerProps={{
          className: "-mt-5",
        }}
      />
      <Radio
        name="description"
        disabled
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              React Version
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              @material-tailwind/react, packed with rich components and widgets.
            </Typography>
          </div>
        }
        containerProps={{
          className: "-mt-5",
        }}
      />
    </div>
  );
}
