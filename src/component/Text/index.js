import React from "react";
import {
  StylesTextContainer,
  StylesH1,
  StylesH5,
  StyleParagraph,
  StyleSpan,
} from "./styles";

const EnhanceH1 = ({ ...props }) => {
  const { children, className } = props;
  return <StylesH1 className={className}>{children}</StylesH1>;
};

const EnhanceH5 = ({ ...props }) => {
  const { children, className } = props;
  return <StylesH5 className={className}>{children}</StylesH5>;
};

const EnhanceParagraph = ({ ...props }) => {
  const { children, className, id, onClick } = props;
  return (
    <StyleParagraph id={id} className={className} onClick={onClick}>
      {children}
    </StyleParagraph>
  );
};

const EnhanceSpan = ({ ...props }) => {
  const { children, className, onClick, id } = props;
  return (
    <StyleSpan id={id} className={className} onClick={onClick}>
      {children}
    </StyleSpan>
  );
};

export const Text = ({ ...props }) => {
  const { children, justify, align } = props;
  return (
    <StylesTextContainer justify={justify} align={align}>
      {children}
    </StylesTextContainer>
  );
};

Text.H1 = EnhanceH1;
Text.H5 = EnhanceH5;
Text.P = EnhanceParagraph;
Text.Span = EnhanceSpan;

Text.defaultProps = {
  justify: "center",
  align: "center",
};
