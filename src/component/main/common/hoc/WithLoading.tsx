import React from "react";
import LoadingProgress from "src/component/main/common/wiget/LoadingProgress";

interface WithLoadingProps {
  loading: boolean;
  text: string;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, text, ...props } = this.props;
      return loading ? <LoadingProgress height={"100%"} description={text} /> : <Component {...(props as P)} />;
    }
  };

export default withLoading;
