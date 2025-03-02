import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        {/* Vertical timeline line */}
        <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-gray-600"></div>
        {children}
      </div>
    )
  }
)
Timeline.displayName = "Timeline"

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: string
  icon?: React.ReactNode
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, date, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex mb-8 relative", className)}
        {...props}
      >
        <div className="w-28 flex-shrink-0 relative">
          <div className="text-gray-300 text-base font-medium">{date}</div>
        </div>
        <div className="flex-grow">
          <div className="flex items-start">
            {icon && (
              <div className="w-16 h-16 mr-4 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
                {icon}
              </div>
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

export { Timeline, TimelineItem } 