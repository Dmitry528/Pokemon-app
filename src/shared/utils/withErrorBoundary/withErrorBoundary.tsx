import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ComponentType } from 'react';
import BoundaryContent from 'shared/components/BoundaryContent';

const withErrorBoundary = <P extends JSX.IntrinsicAttributes>(
  Component: ComponentType<P>,
) => {
  const InnerErrorBoundaryComponent = (props: P) => {
    return (
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <BoundaryContent
                error={error}
                onReset={resetErrorBoundary}
                title="Something went wrong"
              />
            )}
            onReset={reset}
          >
            <Component {...props} />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    );
  };

  return InnerErrorBoundaryComponent;
};

export default withErrorBoundary;
