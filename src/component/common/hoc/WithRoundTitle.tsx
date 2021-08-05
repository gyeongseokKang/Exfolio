import React from "react";

const WithRoundTitle =
  (title = "", titleSizeRemRatio = 1, topPosition = "right") =>
  <P extends object>(Component: React.ComponentType<P>) =>
    class WithRoundTitle extends React.Component<P> {
      render() {
        const { ...props } = this.props;
        return (
          <>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  fontSize: `${titleSizeRemRatio}rem`,
                  right: topPosition === "left" ? "20px" : "",
                  left: topPosition === "right" ? "20px" : "",
                  top: `-${(titleSizeRemRatio * 3) / 4}rem`,
                  padding: "0px 10px 0px 10px",
                  margin: "0px 10px 0px 0px",
                  borderRadius: "20px",
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #F0F0F0",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "20px",
                  padding: "0.5rem",
                  boxShadow: "2px 4px 8px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Component {...(props as P)} />
              </div>
            </div>
          </>
        );
      }
    };

export default WithRoundTitle;
