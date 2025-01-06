import { ComponentType, Suspense, JSX } from "react";

const withSuspense = <P extends JSX.IntrinsicAttributes>(
  Component: ComponentType<P>,
  fallback: JSX.Element,
) => {
  const InnerComponent = (props: P) => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };

  return InnerComponent;
};

export default withSuspense;
