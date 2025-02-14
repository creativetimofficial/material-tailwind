import * as React from "react";

export default function DatePickerDemo() {

  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />


<div class="relative h-10 w-full min-w-[200px]">
  <input
    id="date-picker"
    class="peer w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10"
    placeholder="Select a date"
  />
</div>

<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
 
<script>
  const datepicker = flatpickr("#date-picker", {});
 
  // styling the date picker
  const calendarContainer = datepicker.calendarContainer;
  const calendarMonthNav = datepicker.monthNav;
  const calendarNextMonthNav = datepicker.nextMonthNav;
  const calendarPrevMonthNav = datepicker.prevMonthNav;
  const calendarDaysContainer = datepicker.daysContainer;
 
  calendarContainer.className = calendarContainer.className + ' bg-white p-4 border border-slate-50 rounded-lg shadow-lg shadow-slate-500/10 font-sans text-sm font-normal text-slate-500 focus:outline-none break-words whitespace-normal';
 
  calendarMonthNav.className = calendarMonthNav.className + ' flex items-center justify-between mb-4 [&>div.flatpickr-month]:-translate-y-3 mt-3.5';
 
  calendarNextMonthNav.className = calendarNextMonthNav.className + ' absolute !top-2.5 !right-1.5 h-6 w-6 bg-transparent hover:bg-slate-50 !p-1 rounded-md transition-colors duration-300';
 
  calendarPrevMonthNav.className = calendarPrevMonthNav.className + ' absolute !top-2.5 !left-1.5 h-6 w-6 bg-transparent hover:bg-slate-50 !p-1 rounded-md transition-colors duration-300';
 
  calendarDaysContainer.className = calendarDaysContainer.className + ' [&_span.flatpickr-day]:!rounded-md [&_span.flatpickr-day.selected]:bg-slate-800 [&_span.flatpickr-day.selected]:!border-slate-800';
</script>


`}}
    />
  );
}