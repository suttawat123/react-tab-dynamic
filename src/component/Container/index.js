import React, { useState, useEffect } from "react";
import classnames from "classnames";
import {
  StylesContainer,
  StylesContainerContent,
  StylesContainerContentScroll,
  StylesContainerFooter,
  StylesContainerTop,
} from "./styles";

const useWindowSize = () => {
  const width = 0;
  let height = 0;
  const clientWidth = 0;
  const [state, setState] = useState({ width, height, clientWidth });

  useEffect(
    () => {
      const handler = () => {
        setState({
          width: window.pageXOffset,
          height: window.pageYOffset,
          clientWidth: document.getElementById("root").clientWidth,
        });
      };

      handler();
      window.addEventListener("resize", handler);
      window.addEventListener("scroll", handler);
      return () => {
        window.removeEventListener("resize", handler);
        window.removeEventListener("scroll", handler);
      };
    },
    // eslint-disable-next-line
    [1]
  );

  return state;
};

const ContainerTop = ({ ...props }) => {
  const { children, justify, align, direction, className, offsetTop } = props;
  const { height, width, clientWidth } = useWindowSize();
  return (
    <StylesContainerTop
      className={className}
      justify={justify}
      align={align}
      direction={direction}
      offsetTop={offsetTop}
      pageHeight={height}
      pageWidth={width}
      clientWidth={clientWidth}
    >
      {children}
    </StylesContainerTop>
  );
};

const ContainerFooter = ({ ...props }) => {
  const { children, justify, align, direction, className } = props;
  const { height, width, clientWidth } = useWindowSize();
  return (
    <StylesContainerFooter
      className={className}
      justify={justify}
      align={align}
      direction={direction}
      pageHeight={height}
      pageWidth={width}
      clientWidth={clientWidth}
    >
      {children}
    </StylesContainerFooter>
  );
};

const ContainerContentScroll = ({ ...props }) => {
  const { children, className } = props;
  return (
    <StylesContainerContentScroll className={className}>
      {children}
    </StylesContainerContentScroll>
  );
};

const ContainerContent = ({ ...props }) => {
  const {
    children,
    className,
    justify,
    align,
    onClick,
    externalFooter,
    id,
    isActive,
    externalId,
  } = props;
  return (
    <div key={props.index} id={externalId}>
      <StylesContainerContent
        key={props.index}
        id={id}
        justify={justify}
        align={align}
        className={classnames({ "is-active": isActive }, className)}
        onClick={onClick}
      >
        {children}
      </StylesContainerContent>
      {externalFooter}
    </div>
  );
};

export const Container = React.forwardRef(({ ...props }, ref) => {
  const {
    children,
    justify,
    align,
    direction,
    padding,
    className,
    key,
    onClick,
  } = props;
  return (
    <StylesContainer
      className={className}
      justify={justify}
      align={align}
      direction={direction}
      padding={padding}
      key={key}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </StylesContainer>
  );
});

Container.Content = ContainerContent;
Container.ContentScroll = ContainerContentScroll;
Container.Footer = ContainerFooter;
Container.Top = ContainerTop;

Container.defaultProps = {
  justify: "center",
  align: "center",
  direction: "column",
};

ContainerContent.defaultProps = {
  justify: "center",
  align: "center",
};

ContainerFooter.defaultProps = {
  justify: "center",
  align: "center",
  direction: "column",
  pageHeight: 1,
};

ContainerTop.defaultProps = {
  justify: "center",
  align: "center",
  direction: "row",
  pageHeight: 0,
  offsetTop: 1,
};
