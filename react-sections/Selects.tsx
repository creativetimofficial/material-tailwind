/* eslint-disable @next/next/no-img-element */
import { Select, Option } from "../packages/material-tailwind-react/src";

const films = [
  {
    name: "Toy Story",
    icon: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
    decade: "1990s"
  },
  {
    name: "A Bugs Life",
    icon: "https://upload.wikimedia.org/wikipedia/en/c/cc/A_Bug%27s_Life.jpg",
    decade: "1990s"
  },
  {
    name: "Toy Story 2",
    icon: "https://upload.wikimedia.org/wikipedia/en/c/c0/Toy_Story_2.jpg",
    decade: "1990s"
  },
  {
    name: "Monsters, Inc.",
    icon: "https://upload.wikimedia.org/wikipedia/en/6/63/Monsters_Inc.JPG",
    decade: "2000s"
  },
  {
    name: "Finding Nemo",
    icon: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
    decade: "2000s"
  },
  {
    name: "The Incredibles",
    icon: "https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg",
    decade: "2000s"
  },
  {
    name: "Cars",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg",
    decade: "2000s"
  },
  {
    name: "Ratatouille",
    icon: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
    decade: "2000s"
  },
  {
    name: "WALL-E",
    icon: "https://upload.wikimedia.org/wikipedia/en/c/c2/WALL-Eposter.jpg",
    decade: "2000s"
  },
  {
    name: "Up",
    icon: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
    decade: "2000s"
  },
  {
    name: "Cars 2",
    icon: "https://upload.wikimedia.org/wikipedia/en/7/7f/Cars_2_Poster.jpg",
    decade: "2010s"
  },
  {
    name: "Toy Story 3",
    icon: "https://upload.wikimedia.org/wikipedia/en/6/69/Toy_Story_3_poster.jpg",
    decade: "2010s"
  },
  {
    name: "Brave",
    icon: "https://upload.wikimedia.org/wikipedia/en/9/96/Brave_Poster.jpg",
    decade: "2010s"
  },
  {
    name: "Monsters University",
    icon: "https://upload.wikimedia.org/wikipedia/en/2/2a/Monsters_University_poster_3.jpg",
    decade: "2010s"
  },
  {
    name: "Inside Out",
    icon: "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg",
    decade: "2010s"
  },
  {
    name: "The Good Dinosaur",
    icon: "https://upload.wikimedia.org/wikipedia/en/8/80/The_Good_Dinosaur_poster.jpg",
    decade: "2010s"
  },
  {
    name: "Finding Dory",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/3e/Finding_Dory.jpg",
    decade: "2010s"
  },
  {
    name: "Cars 3",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Cars_3_poster.jpg/220px-Cars_3_poster.jpg",
    decade: "2010s"
  },
  {
    name: "Coco",
    icon: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
    decade: "2010s"
  },
  {
    name: "Incredibles 2",
    icon: "https://upload.wikimedia.org/wikipedia/en/1/1f/Incredibles_2_%282018_animated_film%29.jpg",
    decade: "2010s"
  },
  {
    name: "Toy Story 4",
    icon: "https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg",
    decade: "2010s"
  },
  {
    name: "Onward",
    icon: "https://upload.wikimedia.org/wikipedia/en/0/03/Onward_poster.jpg",
    decade: "2020s"
  },
  {
    name: "Soul",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg",
    decade: "2020s"
  },
  {
    name: "Luca",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
    decade: "2020s"
  }
];

export default function Selects() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Select Varaints</h2>
      <div className="grid grid-cols-3 items-end gap-4">
        <Select label="Outlined">
          <Option>Hello 1</Option>
          <Option>Hello 2</Option>
          <Option>Hello 3</Option>
        </Select>
        <Select variant="standard" label="Standard">
          <Option>Hello 1</Option>
          <Option>Hello 2</Option>
          <Option>Hello 3</Option>
        </Select>
        <Select variant="static" label="Static">
          <Option>Hello 1</Option>
          <Option>Hello 2</Option>
          <Option>Hello 3</Option>
        </Select>
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-12">Customized Select</h2>
      <div className="grid grid-cols-3 items-end gap-4">
        <Select
          size="lg"
          label="Film Name"
          value="Inside Out"
          selected={(el, idx) => (
            <div className="flex items-center gap-2">
              {films[idx] && films[idx].icon ? (
                <img
                  className="w-5 h-5 rounded-full"
                  alt="Poster"
                  src={films[idx]?.icon}
                />
              ) : null}
              {films[idx]?.name ?? null}{" "}
            </div>
          )}
        >
          {films.map(({ name, icon }) => (
            <Option key={name} value={name}>
              <div className="flex items-center gap-2">
                {icon && (
                  <img
                    className="w-5 h-5 rounded-full"
                    alt="Poster"
                    src={icon}
                  />
                )}{" "}
                <span>{name}</span>
              </div>
            </Option>
          ))}
        </Select>
      </div>

      <div className="bg-blue-grey-50 text-red-500 mt-12 p-4 rounded-md">
        The sizes, colors, error, success and disabled estates are the same as{" "}
        {`<Input />`} component.
      </div>
    </div>
  );
}
