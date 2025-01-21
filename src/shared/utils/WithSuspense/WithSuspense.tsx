import { type ComponentType, Suspense } from 'react';

const withSuspense = <P extends JSX.IntrinsicAttributes>(
  Component: ComponentType<P>,
  fallback: JSX.Element,
) => {
  const InnerSuspenseComponent = (props: P) => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };

  return InnerSuspenseComponent;
};

export default withSuspense;
