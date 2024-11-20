import { Radio } from "@material-tailwind/react";

export default function RadioColors() {
  return (
    <div className="flex flex-col gap-4">
      <Radio color="primary" orientation="horizontal">
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
      </Radio>
      <Radio color="secondary" orientation="horizontal">
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
      </Radio>
      <Radio color="info" orientation="horizontal">
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
      </Radio>
      <Radio color="success" orientation="horizontal">
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
      </Radio>
      <Radio color="warning" orientation="horizontal">
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
      </Radio>
      <Radio color="error" orientation="horizontal">
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
        <Radio.Item>
          <Radio.Indicator />
        </Radio.Item>
      </Radio>
    </div>
  );
}
