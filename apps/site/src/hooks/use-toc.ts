import React from "react";

interface TocType {
  id: string;
  text: string;
  subHeadings?: TocType[];
}

export function useToc(ref: React.MutableRefObject<HTMLElement>) {
  const [toc, setToc] = React.useState<TocType[]>([]);
  const activeTocRef = React.useRef<IntersectionObserver | null>(null);
  const [activeToc, setActiveToc] = React.useState<string | null>(null);

  React.useEffect(function generateToc() {
    setToc([]);

    const innerToc: TocType[] = [];

    if (ref) {
      const headings = Array.from(ref.current?.querySelectorAll("h2, h3"));

      headings.map((heading) => {
        if (heading.tagName === "H2") {
          const result = {
            id: heading.id,
            text: heading.textContent,
          } as TocType;

          innerToc.push(result);
        } else if (heading.tagName === "H3") {
          const parentHeading = innerToc[innerToc.length - 1];

          Object.assign(parentHeading, {
            subHeadings: [
              ...(parentHeading.subHeadings ?? []),
              {
                id: heading.id,
                text: heading.textContent,
              },
            ],
          });
        }
      });
    }

    setToc(innerToc);

    return () => {
      setToc([]);
    };
  }, []);

  function handleActiveToc(toc: IntersectionObserverEntry[]) {
    toc.forEach((el) => {
      if (el?.isIntersecting) {
        setActiveToc(el.target.id);
      }
    });
  }

  React.useEffect(function getActiveToc() {
    if (ref) {
      activeTocRef.current = new IntersectionObserver(handleActiveToc, {
        rootMargin: "0px 0px -70%",
        threshold: [0, 1],
      });

      const headings = Array.from(ref.current?.querySelectorAll("h2, h3"));

      headings.forEach((heading) => activeTocRef.current?.observe(heading));

      return () => {
        activeTocRef.current?.disconnect();
      };
    }
  }, []);

  return { toc, activeToc };
}

export default useToc;
