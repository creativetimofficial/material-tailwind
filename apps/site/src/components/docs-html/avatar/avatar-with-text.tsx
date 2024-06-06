export function AvatarWithText() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <img
          src="https://dub.sh/TdSBP0D"
          alt="avatar"
          className="inline-block h-11 w-11 rounded-full object-cover object-center"
        />
        <div>
          <p className="font-sans text-base text-inherit antialiased">
            Tania Andrew
          </p>
          <small className="font-sans text-sm text-foreground antialiased">
            Web Developer
          </small>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://dub.sh/TdSBP0D"
          alt="avatar"
          className="inline-block h-11 w-11 rounded-md object-cover object-center"
        />
        <div>
          <p className="font-sans text-base text-inherit antialiased">
            Tania Andrew
          </p>
          <small className="font-sans text-sm text-foreground antialiased">
            Web Developer
          </small>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://dub.sh/TdSBP0D"
          alt="avatar"
          className="inline-block h-11 w-11 rounded-none object-cover object-center"
        />
        <div>
          <p className="font-sans text-base text-inherit antialiased">
            Tania Andrew
          </p>
          <small className="font-sans text-sm text-foreground antialiased">
            Web Developer
          </small>
        </div>
      </div>
    </div>
  );
}
