import { PropsWithChildren, Suspense } from "react"

interface IWithSuspenseProps extends PropsWithChildren {
  fallback: JSX.Element
}

const WithSuspense = ({
  fallback,
  children,
}: IWithSuspenseProps) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

export default WithSuspense