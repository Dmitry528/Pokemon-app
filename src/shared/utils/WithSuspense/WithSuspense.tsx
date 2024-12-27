import { ComponentType, Suspense } from "react"

const withSuspense = <P extends Object>(
  Component: ComponentType<P>,
  fallback: JSX.Element
) => {
  return (props: P) => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    )
  }
}

export default withSuspense