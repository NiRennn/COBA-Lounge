"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "space-y-4",
        caption: "flex justify-between items-center px-2",
        caption_label: "text-white text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: "text-white hover:text-[#267854]",
        nav_button_previous: "ml-2",
        nav_button_next: "mr-2",
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell: "w-8 text-center text-xs text-gray-400",
        row: "flex w-full mt-2",
        cell: "w-8 h-8 text-center text-sm relative",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-8 h-8 text-white hover:bg-[#667b52] hover:text-white rounded-md"
        ),
        day_selected:
          "bg-[#1f5c43] text-white rounded-md hover:bg-[#267854] hover:text-white",
        day_today: "border border-[#ffffff] rounded-md text-white",
        day_outside: "text-gray-500",
        day_disabled: "text-gray-600 opacity-40",
        day_range_start: "bg-[#667b52] text-white rounded-l-md",
        day_range_end: "bg-[#667b52] text-white rounded-r-md",
        day_range_middle: "bg-[#444] text-white",
        ...classNames,
      }}
      
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}

export { Calendar }
