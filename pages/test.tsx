import { Button } from "../packages/react/src";
import merge from "deepmerge";

const button1 = {
  defaultProps: {
    size: "md",
    color: "primary",
    variant: "solid",
  },
  baseStyle:
    "inline-block border align-middle select-none font-sans font-medium text-center transition-all duration-300 disabled:saturate-50 disabled:shadow-none disabled:pointer-events-none",
  rounded: "rounded-full",
  fullWidth: "block w-full",
  size: {
    sm: "text-sm leading-none py-2 px-2.5 rounded-md",
    md: "text-sm leading-none py-2.5 px-3.5 rounded-md",
    lg: "text-base leading-none py-3.5 px-5 rounded-lg",
  },
  variant: {
    ghost: {
      primary:
        "bg-transparent border-transparent text-primary-main hover:bg-primary-main/5 focus:bg-primary-main/5 active:bg-primary-transparent hover:border-primary-main/5 focus:border-primary-main/5 active:border-transparent",
      secondary:
        "bg-transparent border-transparent text-secondary-content hover:bg-secondary-main/10 focus:bg-secondary-main/10 active:bg-secondary-transparent hover:border-secondary-main/10 focus:border-secondary-main/10 active:border-transparent",
      info: "bg-transparent border-transparent text-info-main hover:bg-info-main/10 focus:bg-info-main/10 active:bg-info-transparent hover:border-info-main/10 focus:border-info-main/10 active:border-transparent",
      success:
        "bg-transparent border-transparent text-success-main hover:bg-success-main/10 focus:bg-success-main/10 active:bg-success-transparent hover:border-success-main/10 focus:border-success-main/10 active:border-transparent",
      warning:
        "bg-transparent border-transparent text-warning-dark hover:bg-warning-main/10 focus:bg-warning-main/10 active:bg-warning-transparent hover:border-warning-main/10 focus:border-warning-main/10 active:border-transparent",
      error:
        "bg-transparent border-transparent text-error-main hover:bg-error-main/10 focus:bg-error-main/10 active:bg-error-transparent hover:border-error-main/10 focus:border-error-main/10 active:border-transparent",
    },
    solid: {
      primary:
        "bg-primary-main border-primary-dark text-primary-content hover:bg-primary-light focus:bg-primary-light active:bg-primary-main",
      secondary:
        "bg-secondary-main border-secondary-dark text-secondary-content hover:bg-secondary-light focus:bg-secondary-light active:bg-secondary-main",
      info: "bg-info-main border-info-dark text-info-content hover:bg-info-light focus:bg-info-light active:bg-info-main",
      success:
        "bg-success-main border-success-dark text-success-content hover:bg-success-light focus:bg-success-light active:bg-success-main",
      warning:
        "bg-warning-main border-warning-dark text-warning-content hover:bg-warning-light focus:bg-warning-light active:bg-warning-main",
      error:
        "bg-error-main border-error-dark text-error-content hover:bg-error-light focus:bg-error-light active:bg-error-main",
    },
    outline: {
      primary:
        "bg-transparent border-primary-main text-primary-main hover:bg-primary-main focus:bg-primary-main active:bg-transparent hover:text-primary-content focus:text-primary-content active:text-primary-main hover:border-primary-dark focus:border-primary-dark active:border-primary-main",
      secondary:
        "bg-transparent border-secondary-dark text-secondary-content hover:bg-secondary-main focus:bg-secondary-main active:bg-transparent hover:text-secondary-content focus:text-secondary-content active:text-secondary-main hover:border-secondary-dark focus:border-secondary-dark active:border-secondary-main",
      info: "bg-transparent border-info-main text-info-main hover:bg-info-main focus:bg-info-main active:bg-transparent hover:text-info-content focus:text-info-content active:text-info-main hover:border-info-dark focus:border-info-dark active:border-info-main",
      success:
        "bg-transparent border-success-main text-success-main hover:bg-success-main focus:bg-success-main active:bg-transparent hover:text-success-content focus:text-success-content active:text-success-main hover:border-success-dark focus:border-success-dark active:border-success-main",
      warning:
        "bg-transparent border-warning-dark text-warning-dark hover:bg-warning-main focus:bg-warning-main active:bg-transparent hover:text-warning-content focus:text-warning-content active:text-warning-main hover:border-warning-dark focus:border-warning-dark active:border-warning-main",
      error:
        "bg-transparent border-error-main text-error-main hover:bg-error-main focus:bg-error-main active:bg-transparent hover:text-error-content focus:text-error-content active:text-error-main hover:border-error-dark focus:border-error-dark active:border-error-main",
    },
    gradient: {
      primary:
        "bg-gradient-to-tr from-primary-dark to-primary-light border-primary-dark text-primary-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      secondary:
        "bg-gradient-to-tr from-secondary-dark to-secondary-light border-secondary-dark text-secondary-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      info: "bg-gradient-to-tr from-info-dark to-info-light border-info-dark text-info-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      success:
        "bg-gradient-to-tr from-success-dark to-success-light border-success-dark text-success-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      warning:
        "bg-gradient-to-tr from-warning-dark to-warning-light border-warning-dark text-warning-content hover:opacity-90 focus:opacity-90 active:opacity-100",
      error:
        "bg-gradient-to-tr from-error-dark to-error-light border-error-dark text-error-content hover:opacity-90 focus:opacity-90 active:opacity-100",
    },
  },
};

const button2 = {
  baseStyle: "hello",
};

export default function Test() {
  const result = merge(button1, button2, {
    customMerge: (key, options) => () => "key",
  });

  console.log(result);
  return (
    <div className="flex gap-4 bg-gray-950 p-4">
      <div className="flex-grow rounded-lg bg-white p-4">
        <h1 className="mb-4 text-base font-medium text-gray-950">
          Small Buttons
        </h1>
        <div className="mt-4 flex items-end gap-2">
          <Button variant="ghost" size="sm" color="primary">
            Button
          </Button>
          <Button variant="ghost" size="sm" color="secondary">
            Button
          </Button>
          <Button variant="ghost" size="sm" color="info">
            Button
          </Button>
          <Button variant="ghost" size="sm" color="success">
            Button
          </Button>
          <Button variant="ghost" size="sm" color="warning">
            Button
          </Button>
          <Button variant="ghost" size="sm" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button variant="outline" size="sm" color="primary">
            Button
          </Button>
          <Button variant="outline" size="sm" color="secondary">
            Button
          </Button>
          <Button variant="outline" size="sm" color="info">
            Button
          </Button>
          <Button variant="outline" size="sm" color="success">
            Button
          </Button>
          <Button variant="outline" size="sm" color="warning">
            Button
          </Button>
          <Button variant="outline" size="sm" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button size="sm" color="primary">
            Button
          </Button>
          <Button size="sm" color="secondary">
            Button
          </Button>
          <Button size="sm" color="info">
            Button
          </Button>
          <Button size="sm" color="success">
            Button
          </Button>
          <Button size="sm" color="warning">
            Button
          </Button>
          <Button size="sm" color="error">
            Button
          </Button>
        </div>
        <div className="mb-16 mt-4 flex items-end gap-2">
          <Button variant="gradient" size="sm" color="primary">
            Button
          </Button>
          <Button variant="gradient" size="sm" color="secondary">
            Button
          </Button>
          <Button variant="gradient" size="sm" color="info">
            Button
          </Button>
          <Button variant="gradient" size="sm" color="success">
            Button
          </Button>
          <Button variant="gradient" size="sm" color="warning">
            Button
          </Button>
          <Button variant="gradient" size="sm" color="error">
            Button
          </Button>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <Button rounded variant="ghost" size="sm" color="primary">
            Button
          </Button>
          <Button rounded variant="ghost" size="sm" color="secondary">
            Button
          </Button>
          <Button rounded variant="ghost" size="sm" color="info">
            Button
          </Button>
          <Button rounded variant="ghost" size="sm" color="success">
            Button
          </Button>
          <Button rounded variant="ghost" size="sm" color="warning">
            Button
          </Button>
          <Button rounded variant="ghost" size="sm" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button rounded variant="outline" size="sm" color="primary">
            Button
          </Button>
          <Button rounded variant="outline" size="sm" color="secondary">
            Button
          </Button>
          <Button rounded variant="outline" size="sm" color="info">
            Button
          </Button>
          <Button rounded variant="outline" size="sm" color="success">
            Button
          </Button>
          <Button rounded variant="outline" size="sm" color="warning">
            Button
          </Button>
          <Button rounded variant="outline" size="sm" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button rounded size="sm" color="primary">
            Button
          </Button>
          <Button rounded size="sm" color="secondary">
            Button
          </Button>
          <Button rounded size="sm" color="info">
            Button
          </Button>
          <Button rounded size="sm" color="success">
            Button
          </Button>
          <Button rounded size="sm" color="warning">
            Button
          </Button>
          <Button rounded size="sm" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button rounded variant="gradient" size="sm" color="primary">
            Button
          </Button>
          <Button rounded variant="gradient" size="sm" color="secondary">
            Button
          </Button>
          <Button rounded variant="gradient" size="sm" color="info">
            Button
          </Button>
          <Button rounded variant="gradient" size="sm" color="success">
            Button
          </Button>
          <Button rounded variant="gradient" size="sm" color="warning">
            Button
          </Button>
          <Button rounded variant="gradient" size="sm" color="error">
            Button
          </Button>
        </div>
      </div>
      <div className="flex-grow rounded-lg bg-white p-4">
        <h1 className="mb-4 text-base font-medium text-gray-950">
          Medium Buttons
        </h1>
        <div className="mt-4 flex items-end gap-2">
          <Button variant="ghost" size="md" color="primary">
            Button
          </Button>
          <Button variant="ghost" size="md" color="secondary">
            Button
          </Button>
          <Button variant="ghost" size="md" color="info">
            Button
          </Button>
          <Button variant="ghost" size="md" color="success">
            Button
          </Button>
          <Button variant="ghost" size="md" color="warning">
            Button
          </Button>
          <Button variant="ghost" size="md" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button variant="outline" size="md" color="primary">
            Button
          </Button>
          <Button variant="outline" size="md" color="secondary">
            Button
          </Button>
          <Button variant="outline" size="md" color="info">
            Button
          </Button>
          <Button variant="outline" size="md" color="success">
            Button
          </Button>
          <Button variant="outline" size="md" color="warning">
            Button
          </Button>
          <Button variant="outline" size="md" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button size="md" color="primary">
            Button
          </Button>
          <Button size="md" color="secondary">
            Button
          </Button>
          <Button size="md" color="info">
            Button
          </Button>
          <Button size="md" color="success">
            Button
          </Button>
          <Button size="md" color="warning">
            Button
          </Button>
          <Button size="md" color="error">
            Button
          </Button>
        </div>
        <div className="mb-16 mt-4 flex items-end gap-2">
          <Button variant="gradient" size="md" color="primary">
            Button
          </Button>
          <Button variant="gradient" size="md" color="secondary">
            Button
          </Button>
          <Button variant="gradient" size="md" color="info">
            Button
          </Button>
          <Button variant="gradient" size="md" color="success">
            Button
          </Button>
          <Button variant="gradient" size="md" color="warning">
            Button
          </Button>
          <Button variant="gradient" size="md" color="error">
            Button
          </Button>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <Button rounded variant="ghost" size="md" color="primary">
            Button
          </Button>
          <Button rounded variant="ghost" size="md" color="secondary">
            Button
          </Button>
          <Button rounded variant="ghost" size="md" color="info">
            Button
          </Button>
          <Button rounded variant="ghost" size="md" color="success">
            Button
          </Button>
          <Button rounded variant="ghost" size="md" color="warning">
            Button
          </Button>
          <Button rounded variant="ghost" size="md" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button rounded variant="outline" size="md" color="primary">
            Button
          </Button>
          <Button rounded variant="outline" size="md" color="secondary">
            Button
          </Button>
          <Button rounded variant="outline" size="md" color="info">
            Button
          </Button>
          <Button rounded variant="outline" size="md" color="success">
            Button
          </Button>
          <Button rounded variant="outline" size="md" color="warning">
            Button
          </Button>
          <Button rounded variant="outline" size="md" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button rounded size="md" color="primary">
            Button
          </Button>
          <Button rounded size="md" color="secondary">
            Button
          </Button>
          <Button rounded size="md" color="info">
            Button
          </Button>
          <Button rounded size="md" color="success">
            Button
          </Button>
          <Button rounded size="md" color="warning">
            Button
          </Button>
          <Button rounded size="md" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button rounded variant="gradient" size="md" color="primary">
            Button
          </Button>
          <Button rounded variant="gradient" size="md" color="secondary">
            Button
          </Button>
          <Button rounded variant="gradient" size="md" color="info">
            Button
          </Button>
          <Button rounded variant="gradient" size="md" color="success">
            Button
          </Button>
          <Button rounded variant="gradient" size="md" color="warning">
            Button
          </Button>
          <Button rounded variant="gradient" size="md" color="error">
            Button
          </Button>
        </div>
      </div>
      <div className="flex-grow rounded-lg bg-white p-4">
        <h1 className="mb-4 text-base font-medium text-gray-950">
          Large Buttons
        </h1>
        <div className="mt-4 flex items-end gap-2">
          <Button variant="ghost" size="lg" color="primary">
            Button
          </Button>
          <Button variant="ghost" size="lg" color="secondary">
            Button
          </Button>
          <Button variant="ghost" size="lg" color="info">
            Button
          </Button>
          <Button variant="ghost" size="lg" color="success">
            Button
          </Button>
          <Button variant="ghost" size="lg" color="warning">
            Button
          </Button>
          <Button variant="ghost" size="lg" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button variant="outline" size="lg" color="primary">
            Button
          </Button>
          <Button variant="outline" size="lg" color="secondary">
            Button
          </Button>
          <Button variant="outline" size="lg" color="info">
            Button
          </Button>
          <Button variant="outline" size="lg" color="success">
            Button
          </Button>
          <Button variant="outline" size="lg" color="warning">
            Button
          </Button>
          <Button variant="outline" size="lg" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button size="lg" color="primary">
            Button
          </Button>
          <Button size="lg" color="secondary">
            Button
          </Button>
          <Button size="lg" color="info">
            Button
          </Button>
          <Button size="lg" color="success">
            Button
          </Button>
          <Button size="lg" color="warning">
            Button
          </Button>
          <Button size="lg" color="error">
            Button
          </Button>
        </div>
        <div className="mb-16 mt-4 flex items-end gap-2">
          <Button variant="gradient" size="lg" color="primary">
            Button
          </Button>
          <Button variant="gradient" size="lg" color="secondary">
            Button
          </Button>
          <Button variant="gradient" size="lg" color="info">
            Button
          </Button>
          <Button variant="gradient" size="lg" color="success">
            Button
          </Button>
          <Button variant="gradient" size="lg" color="warning">
            Button
          </Button>
          <Button variant="gradient" size="lg" color="error">
            Button
          </Button>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <Button rounded variant="ghost" size="lg" color="primary">
            Button
          </Button>
          <Button rounded variant="ghost" size="lg" color="secondary">
            Button
          </Button>
          <Button rounded variant="ghost" size="lg" color="info">
            Button
          </Button>
          <Button rounded variant="ghost" size="lg" color="success">
            Button
          </Button>
          <Button rounded variant="ghost" size="lg" color="warning">
            Button
          </Button>
          <Button rounded variant="ghost" size="lg" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button rounded variant="outline" size="lg" color="primary">
            Button
          </Button>
          <Button rounded variant="outline" size="lg" color="secondary">
            Button
          </Button>
          <Button rounded variant="outline" size="lg" color="info">
            Button
          </Button>
          <Button rounded variant="outline" size="lg" color="success">
            Button
          </Button>
          <Button rounded variant="outline" size="lg" color="warning">
            Button
          </Button>
          <Button rounded variant="outline" size="lg" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button rounded size="lg" color="primary">
            Button
          </Button>
          <Button rounded size="lg" color="secondary">
            Button
          </Button>
          <Button rounded size="lg" color="info">
            Button
          </Button>
          <Button rounded size="lg" color="success">
            Button
          </Button>
          <Button rounded size="lg" color="warning">
            Button
          </Button>
          <Button rounded size="lg" color="error">
            Button
          </Button>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <Button rounded variant="gradient" size="lg" color="primary">
            Button
          </Button>
          <Button rounded variant="gradient" size="lg" color="secondary">
            Button
          </Button>
          <Button rounded variant="gradient" size="lg" color="info">
            Button
          </Button>
          <Button rounded variant="gradient" size="lg" color="success">
            Button
          </Button>
          <Button rounded variant="gradient" size="lg" color="warning">
            Button
          </Button>
          <Button rounded variant="gradient" size="lg" color="error">
            Button
          </Button>
        </div>
      </div>
      {/* <div className="mt-8 flex items-end gap-4">
        <Button variant="ghost" color="primary">
          Button
        </Button>
        <Button variant="ghost" color="secondary">
          Button
        </Button>
        <Button variant="ghost" color="info">
          Button
        </Button>
        <Button variant="ghost" color="success">
          Button
        </Button>
        <Button variant="ghost" color="warning">
          Button
        </Button>
        <Button variant="ghost" color="error">
          Button
        </Button>
      </div>
      <div className="mt-8 flex items-end gap-4">
        <Button variant="outline" color="primary">
          Button
        </Button>
        <Button variant="outline" color="secondary">
          Button
        </Button>
        <Button variant="outline" color="info">
          Button
        </Button>
        <Button variant="outline" color="success">
          Button
        </Button>
        <Button variant="outline" color="warning">
          Button
        </Button>
        <Button variant="outline" color="error">
          Button
        </Button>
      </div>
      <div className="mt-8 flex items-end gap-4">
        <Button variant="gradient" color="primary">
          Button
        </Button>
        <Button variant="gradient" color="secondary">
          Button
        </Button>
        <Button variant="gradient" color="info">
          Button
        </Button>
        <Button variant="gradient" color="success">
          Button
        </Button>
        <Button variant="gradient" color="warning">
          Button
        </Button>
        <Button variant="gradient" color="error">
          Button
        </Button>
      </div>
      <div className="mt-8 flex items-end gap-4">
        <Button rounded color="primary">
          Button
        </Button>
        <Button rounded color="secondary">
          Button
        </Button>
        <Button rounded color="info">
          Button
        </Button>
        <Button rounded color="success">
          Button
        </Button>
        <Button rounded color="warning">
          Button
        </Button>
        <Button rounded color="error">
          Button
        </Button>
      </div>
      <div className="mt-8 flex items-end gap-4">
        <Button rounded variant="ghost" color="primary">
          Button
        </Button>
        <Button rounded variant="ghost" color="secondary">
          Button
        </Button>
        <Button rounded variant="ghost" color="info">
          Button
        </Button>
        <Button rounded variant="ghost" color="success">
          Button
        </Button>
        <Button rounded variant="ghost" color="warning">
          Button
        </Button>
        <Button rounded variant="ghost" color="error">
          Button
        </Button>
      </div>
      <div className="mt-8 flex items-end gap-4">
        <Button rounded variant="outline" color="primary">
          Button
        </Button>
        <Button rounded variant="outline" color="secondary">
          Button
        </Button>
        <Button rounded variant="outline" color="info">
          Button
        </Button>
        <Button rounded variant="outline" color="success">
          Button
        </Button>
        <Button rounded variant="outline" color="warning">
          Button
        </Button>
        <Button rounded variant="outline" color="error">
          Button
        </Button>
      </div>
      <div className="mt-8 flex items-end gap-4">
        <Button rounded variant="gradient" color="primary">
          Button
        </Button>
        <Button rounded variant="gradient" color="secondary">
          Button
        </Button>
        <Button rounded variant="gradient" color="info">
          Button
        </Button>
        <Button rounded variant="gradient" color="success">
          Button
        </Button>
        <Button rounded variant="gradient" color="warning">
          Button
        </Button>
        <Button rounded variant="gradient" color="error">
          Button
        </Button>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <Button fullWidth color="primary">
          Button
        </Button>
        <Button fullWidth color="secondary">
          Button
        </Button>
        <Button fullWidth color="info">
          Button
        </Button>
        <Button fullWidth color="success">
          Button
        </Button>
        <Button fullWidth color="warning">
          Button
        </Button>
        <Button fullWidth color="error">
          Button
        </Button>
      </div> */}
    </div>
  );
}
