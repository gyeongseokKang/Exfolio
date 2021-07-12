import React from "react";
import LoadingProgress from "src/component/common/widget/LoadingProgress";

interface WithLoadingProps {
  loading: boolean;
}

const withLoading =
  (loadingMessage = "Loading...", width = "100%", height = "100%") =>
  <P extends object>(Component: React.ComponentType<P>) =>
    class WithLoading extends React.Component<P & WithLoadingProps> {
      render() {
        const { loading, ...props } = this.props;
        return loading ? (
          <LoadingProgress height={height} width={width} description={loadingMessage} />
        ) : (
          <Component {...(props as P)} />
        );
      }
    };

export default withLoading;
