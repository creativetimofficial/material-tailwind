import { Typography } from "../packages/material-tailwind-react/src";

export default function Typos() {
  return (
    <div className="flex flex-col gap-10 mb-24">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="lead">
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers. I understand culture. I am the
        nucleus. I think that&apos;s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could be
        at.
      </Typography>
      <Typography>
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers. I understand culture. I am the
        nucleus. I think that&apos;s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could be
        at.
      </Typography>
      <Typography variant="small">
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers. I understand culture. I am the
        nucleus. I think that&apos;s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could be
        at.
      </Typography>
      <Typography variant="h1" color="blue" textGradient>
        Gradient Text
      </Typography>

      <div className="flex gap-4">
        <Typography variant="h1" color="blue-grey" textGradient>
          A
        </Typography>
        <Typography variant="h1" color="grey" textGradient>
          B
        </Typography>
        <Typography variant="h1" color="brown" textGradient>
          C
        </Typography>
        <Typography variant="h1" color="deep-orange" textGradient>
          D
        </Typography>
        <Typography variant="h1" color="orange" textGradient>
          E
        </Typography>
        <Typography variant="h1" color="amber" textGradient>
          F
        </Typography>
        <Typography variant="h1" color="yellow" textGradient>
          G
        </Typography>
        <Typography variant="h1" color="lime" textGradient>
          H
        </Typography>
        <Typography variant="h1" color="light-green" textGradient>
          I
        </Typography>
        <Typography variant="h1" color="green" textGradient>
          J
        </Typography>
        <Typography variant="h1" color="teal" textGradient>
          K
        </Typography>
        <Typography variant="h1" color="cyan" textGradient>
          L
        </Typography>
        <Typography variant="h1" color="light-blue" textGradient>
          M
        </Typography>
        <Typography variant="h1" color="blue" textGradient>
          N
        </Typography>
        <Typography variant="h1" color="indigo" textGradient>
          O
        </Typography>
        <Typography variant="h1" color="deep-purple" textGradient>
          P
        </Typography>
        <Typography variant="h1" color="purple" textGradient>
          Q
        </Typography>
        <Typography variant="h1" color="pink" textGradient>
          R
        </Typography>
        <Typography variant="h1" color="red" textGradient>
          S
        </Typography>
      </div>
    </div>
  );
}
