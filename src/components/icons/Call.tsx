import { SVGProps, Ref, forwardRef } from "react"

interface CallProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const SvgComponent = (
  { size = 24, ...props }: CallProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size + 1}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M17.45 23.377C16.32 23.377 15.13 23.107 13.9 22.587C12.7 22.077 11.49 21.377 10.31 20.527C9.14 19.667 8.01 18.707 6.94 17.657C5.88 16.587 4.92 15.457 4.07 14.297C3.21 13.097 2.52 11.897 2.03 10.737C1.51 9.49695 1.25 8.29695 1.25 7.16695C1.25 6.38695 1.39 5.64695 1.66 4.95695C1.94 4.24695 2.39 3.58695 3 3.01695C3.77 2.25695 4.65 1.87695 5.59 1.87695C5.98 1.87695 6.38 1.96695 6.72 2.12695C7.11 2.30695 7.44 2.57695 7.68 2.93695L10 6.20695C10.21 6.49695 10.37 6.77695 10.48 7.05695C10.61 7.35695 10.68 7.65695 10.68 7.94695C10.68 8.32695 10.57 8.69695 10.36 9.04695C10.21 9.31695 9.98 9.60695 9.69 9.89695L9.01 10.607C9.02 10.637 9.03 10.657 9.04 10.677C9.16 10.887 9.4 11.247 9.86 11.787C10.35 12.347 10.81 12.857 11.27 13.327C11.86 13.907 12.35 14.367 12.81 14.747C13.38 15.227 13.75 15.467 13.97 15.577L13.95 15.627L14.68 14.907C14.99 14.597 15.29 14.367 15.58 14.217C16.13 13.877 16.83 13.817 17.53 14.107C17.79 14.217 18.07 14.367 18.37 14.577L21.69 16.937C22.06 17.187 22.33 17.507 22.49 17.887C22.64 18.267 22.71 18.617 22.71 18.967C22.71 19.447 22.6 19.927 22.39 20.377C22.18 20.827 21.92 21.217 21.59 21.577C21.02 22.207 20.4 22.657 19.68 22.947C18.99 23.227 18.24 23.377 17.45 23.377ZM5.59 3.37695C5.04 3.37695 4.53 3.61695 4.04 4.09695C3.58 4.52695 3.26 4.99695 3.06 5.50695C2.85 6.02695 2.75 6.57695 2.75 7.16695C2.75 8.09695 2.97 9.10695 3.41 10.147C3.86 11.207 4.49 12.307 5.29 13.407C6.09 14.507 7 15.577 8 16.587C9 17.577 10.08 18.497 11.19 19.307C12.27 20.097 13.38 20.737 14.48 21.197C16.19 21.927 17.79 22.097 19.11 21.547C19.62 21.337 20.07 21.017 20.48 20.557C20.71 20.307 20.89 20.037 21.04 19.717C21.16 19.467 21.22 19.207 21.22 18.947C21.22 18.787 21.19 18.627 21.11 18.447C21.08 18.387 21.02 18.277 20.83 18.147L17.51 15.787C17.31 15.647 17.13 15.547 16.96 15.477C16.74 15.387 16.65 15.297 16.31 15.507C16.11 15.607 15.93 15.757 15.73 15.957L14.97 16.707C14.58 17.087 13.98 17.177 13.52 17.007L13.25 16.887C12.84 16.667 12.36 16.327 11.83 15.877C11.35 15.467 10.83 14.987 10.2 14.367C9.71 13.867 9.22 13.337 8.71 12.747C8.24 12.197 7.9 11.727 7.69 11.337L7.57 11.037C7.51 10.807 7.49 10.677 7.49 10.537C7.49 10.177 7.62 9.85695 7.87 9.60695L8.62 8.82695C8.82 8.62695 8.97 8.43695 9.07 8.26695C9.15 8.13695 9.18 8.02695 9.18 7.92695C9.18 7.84695 9.15 7.72695 9.1 7.60695C9.03 7.44695 8.92 7.26695 8.78 7.07695L6.46 3.79695C6.36 3.65695 6.24 3.55695 6.09 3.48695C5.93 3.41695 5.76 3.37695 5.59 3.37695ZM13.95 15.637L13.79 16.317L14.06 15.617C14.01 15.607 13.97 15.617 13.95 15.637Z"
      fill="white"
    />
    <path
      d="M18.5 10.377C18.09 10.377 17.75 10.037 17.75 9.62695C17.75 9.26695 17.39 8.51695 16.79 7.87695C16.2 7.24695 15.55 6.87695 15 6.87695C14.59 6.87695 14.25 6.53695 14.25 6.12695C14.25 5.71695 14.59 5.37695 15 5.37695C15.97 5.37695 16.99 5.89695 17.88 6.84695C18.71 7.73695 19.25 8.82695 19.25 9.62695C19.25 10.037 18.91 10.377 18.5 10.377Z"
      fill="white"
    />
    <path
      d="M22 10.377C21.59 10.377 21.25 10.037 21.25 9.62695C21.25 6.17695 18.45 3.37695 15 3.37695C14.59 3.37695 14.25 3.03695 14.25 2.62695C14.25 2.21695 14.59 1.87695 15 1.87695C19.27 1.87695 22.75 5.35695 22.75 9.62695C22.75 10.037 22.41 10.377 22 10.377Z"
      fill="white"
    />
  </svg>
)
export const CallIcon = forwardRef(SvgComponent)

