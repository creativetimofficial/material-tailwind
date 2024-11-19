// components/AccordionDemo.tsx
function AccordionDemo () {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <div class="w-full">

<div class="w-full">
  <div
    data-open="true"
    class="items-center justify-between block w-full border-b cursor-pointer group border-surface"
  >
    <button
      data-open="true"
      class="flex items-center justify-between w-full py-3 font-medium text-left text-black dark:text-white"
    >
      Material Tailwind React
      <svg
        width="1.5em"
        height="1.5em"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
        class="h-4 w-4 group-data-[open=true]:rotate-180"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <div
      class="block h-auto pb-3 text-foreground"
      data-content
      data-open="true"
    >
      Material Tailwind is an open-source crafted in Tailwind CSS. Get
      Material Tailwind and take advantage of its free components and
      features that will help you set up your web project quickly.
    </div>
  </div>
  <div
    data-open="false"
    class="items-center justify-between block w-full border-b cursor-pointer group border-surface"
  >
    <button
      data-open="false"
      class="flex items-center justify-between w-full py-3 font-medium text-left text-black dark:text-white"
    >
      Material Tailwind HTML
      <svg
        width="1.5em"
        height="1.5em"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
        class="h-4 w-4 group-data-[open=true]:rotate-180"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <div
      class="hidden h-0 pb-3 text-foreground"
      data-content
      data-open="false"
    >
      Material Tailwind is an open-source crafted in Tailwind CSS. Get
      Material Tailwind and take advantage of its free components and
      features that will help you set up your web project quickly.
    </div>
  </div>

  <div
    data-open="false"
    class="items-center justify-between block w-full border-b cursor-pointer group border-surface"
  >
    <button
      data-open="false"
      class="flex items-center justify-between w-full py-3 font-medium text-left text-black dark:text-white"
    >
      Material Tailwind Vue
      <svg
        width="1.5em"
        height="1.5em"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
        class="h-4 w-4 group-data-[open=true]:rotate-180"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <div
      class="hidden h-0 pb-3 text-foreground"
      data-content
      data-open="false"
    >
      Material Tailwind is an open-source crafted in Tailwind CSS. Get
      Material Tailwind and take advantage of its free components and
      features that will help you set up your web project quickly.
    </div>
  </div>
</div>

<!-- script for the accordion items functionality -->
<script>
const accordionItems = document.querySelectorAll("[data-open]");

const setAccordionState = (item, isOpen) => {
  const content = item.querySelector("div[data-content]");
  const button = item.querySelector("button");

  item.setAttribute("data-open", isOpen ? "true" : "false");
  content?.setAttribute("data-open", isOpen ? "true" : "false");
  button?.setAttribute("data-open", isOpen ? "true" : "false");

  if (content) {
    content.classList.toggle("hidden", !isOpen);
    content.classList.toggle("h-0", !isOpen);
    content.classList.toggle("block", isOpen);
    content.classList.toggle("h-auto", isOpen);
  }
};

const toggleAccordion = (clickedItem) => {
  const isCurrentlyOpen = clickedItem.getAttribute("data-open") === "true";
  accordionItems.forEach((item) =>
    setAccordionState(item, item === clickedItem && !isCurrentlyOpen),
  );
};

  // Add event listeners for each accordion item
accordionItems.forEach((item) => {
  const button = item.querySelector("button");
  if (button) {
    button.addEventListener("click", () => toggleAccordion(item));
  }
});
</script>

`,
      }}
    />
  );
};

export default AccordionDemo;