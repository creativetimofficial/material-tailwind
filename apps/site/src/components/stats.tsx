"use client";

// @components
import Image from "next/image";
import { CursorPointer, Star, User, Group, Download, DownloadCircle, BoxIso } from "iconoir-react";
import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import Link from "next/link";

const FEATURES = [
  {
    icon: Group,
    value: "2.6M+",
    title: "Community Members",
    desc: "Join our community of developers and designers",
  },
  {
    icon: Download,
    value: "8.6M+",
    title: "Cumulative Downloads",
    desc: "Based on Material Tailwind and Creative Tim Products",
  },
  {
    icon: Star,
    value: "48,000+",
    title: "Github Cumulative Stars",
    desc: "On 100+ Open Source Repositories and Projects",
  },
  {
    icon: BoxIso,
    value: "280,000+",
    title: "Monthly NPM Downloads",
    desc: "Including React, HTML, Tailwind CSS and more.",
  },
];

export function Stats() {
  return (
    <section className="container mx-auto text-center pb-32 relative">
      
      <div className="relative z-1">
        <div className="text-center z-1">
          <Typography
            as="h2"
            type="h3"
            className="font-extrabold tracking-tight text-white"
          >
            Remarkable Achievements
          </Typography>
          <Typography
            type="p"
            className="text-stone-500 text-xl max-w-3xl mx-auto mt-4"
          >
            Discover how our UI Tools have transformed web development.
            These achievements showcase our dedication to innovation and our
            community&apos;s growth.
          </Typography>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 text-start grid-cols-1 gap-6 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, value, title, desc }, index) => (
            <Card key={index} className="p-6 relative bg-gradient-to-b from-stone-800 to-stone-900 border-stone-950 rounded-xl
            after:absolute after:inset-0 after:box-shadow after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-2px_1px_rgba(0,0,0,0.25)]
             after:pointer-events-none after:rounded-xl !shadow-2xl ">
              {typeof Icon === "string" ? (
                <Image
                  src={Icon}
                  alt="icon"
                  className="w-7 h-7"
                  width={128}
                  height={128}
                />
              ) : (
                <Icon className="w-7 h-7 stroke-2 text-white" />
              )}
              <Typography type="h3" className="mt-4 mb-1 text-white">
                {value}
              </Typography>
              <Typography className="text-white/60">{title}</Typography>
              <Typography className="text-white/60 mt-6">{desc}</Typography>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
