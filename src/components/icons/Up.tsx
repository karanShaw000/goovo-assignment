
import { SVGProps, Ref, forwardRef } from "react"

interface VideoProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const SvgComponent = (
  { size = 24, ...props }: VideoProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M19.92 15.8C19.73 15.8 19.54 15.73 19.39 15.58L12.87 9.06C12.39 8.58 11.61 8.58 11.13 9.06L4.61002 15.58C4.32002 15.87 3.84002 15.87 3.55002 15.58C3.26002 15.29 3.26002 14.81 3.55002 14.52L10.07 8C11.13 6.94 12.86 6.94 13.93 8L20.45 14.52C20.74 14.81 20.74 15.29 20.45 15.58C20.3 15.72 20.11 15.8 19.92 15.8Z"
      fill="white"
    />
  </svg>
)
export const UpIcon = forwardRef(SvgComponent)


