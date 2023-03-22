import { Rating } from "@material-tailwind/react";
import { HeartIcon as RatedIcon } from "@heroicons/react/24/solid";
import { HeartIcon as UnratedIcon } from "@heroicons/react/24/outline";

export function CustomRatingIcon() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Rating
        ratedColor="red"
        ratedIcon={RatedIcon}
        unratedIcon={UnratedIcon}
      />
      <Rating
        ratedColor="red"
        ratedIcon={<RatedIcon className="h-6 w-6" />}
        unratedIcon={<UnratedIcon className="h-6 w-6" />}
      />
    </div>
  );
}
