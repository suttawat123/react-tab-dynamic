import styled from "styled-components";

export const StylesTextContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;
export const StylesH1 = styled.h1`
  font-family: Sarabun-Regular;
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #096a88;

  &.title-content {
    margin-bottom: 9px;
  }

  &.insurer-price {
    font-family: Sarabun;
    font-size: 38px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #096a88;
  }
  &.orange {
    color: #f57224;
  }
`;
export const StylesH5 = styled.h5`
  font-family: Sarabun-Regular;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.35;
  letter-spacing: normal;
  text-align: center;
  color: #096a88;

  &.sub-header {
    font-family: Sarabun;
    font-size: 20px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    color: #096a88;
  }

  &.insurer-name {
    font-family: Sarabun;
    font-size: 20px;
    /* font-weight: bold; */
    color: #333333;
    margin: 0;
  }

  &.bold {
    font-family: Sarabun;
  }

  &.not-found {
    color: #777e84;
  }
`;

export const StyleParagraph = styled.p`
  font-family: Sarabun-Regular;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #333333;
  white-space: pre-wrap;
  &.bold {
    font-family: Sarabun;
  }
  &.blue {
    color: #096a88;
  }
  &.underline {
    text-decoration: underline;
  }
  &.driver {
    cursor: pointer;
    text-decoration: underline;
    font-family: Sarabun;
    color: #096a88;
    margin-left: 170px;
    line-height: 2;
  }

  /* &.name-sub-tab{
    min-width: 110px;
  } */

  &.driver-disabled {
    cursor: default;
    text-decoration: underline;
    font-family: Sarabun;
    color: #777e84;
    margin-left: 170px;
    line-height: 2;
  }

  &.driver-special {
    cursor: pointer;
    text-decoration: underline;
    font-family: Sarabun;
    color: #096a88;
    margin-left: 120px;
    line-height: 2;
  }

  &.driver-special-disabled {
    cursor: default;
    text-decoration: underline;
    font-family: Sarabun;
    color: #777e84;
    margin-left: 120px;
    line-height: 2;
  }
`;

export const StyleSpan = styled.span`
  font-family: Sarabun-Regular;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #777e84;
  @media not all and (min-resolution: 0.001dpcm) {
    width: 100%;
    &.flex-1 {
      flex: 1;
    }
  }
  &.pointer {
    cursor: pointer;
  }

  &.warp {
    white-space: pre;
  }

  &.text-left {
    text-align: left;
  }
  &.find-quote {
    margin-top: 10px;
  }

  &.bold {
    font-family: Sarabun;
  }

  &.blue {
    color: #096a88;
  }

  &.dark {
    color: #333333;
  }

  &.orange {
    color: #f57224;
  }

  &.red-orange {
    color: #e74f47;
  }

  &.red-dark {
    color: #721c23;
  }

  &.white {
    color: #fff;
  }

  &.sky {
    color: #009aac;
  }

  &.underline {
    text-decoration: underline;
  }

  &.font-medium {
    font-size: 16px;
  }

  &.font-extra-medium {
    font-size: 18px;
  }

  &.font-large {
    font-size: 20px;
  }

  &.font-extra-large {
    font-size: 32px;
  }

  &.font-extra-large-header {
    font-size: 24px;
    color: #ff0000;
  }

  &.label-radio {
    font-family: Sarabun;
    font-size: 16px;
    color: #333333;
    margin-left: 10px;
    line-height: 1.6;
  }

  &.view-detail {
    cursor: pointer;
    font-family: Sarabun;
    font-size: 16px;
    color: #096a88;
    margin-left: 10px;
    line-height: 1.5;
    text-decoration: underline;
  }

  &.line-through {
    text-decoration: line-through;
  }

  &.text-pre-wrap {
    white-space: pre-wrap;
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      width: 100%;
    }
  }

  &.mb-5 {
    margin-bottom: 5px;
  }

  &.mb-15 {
    margin-bottom: 15px;
  }

  &.pointer {
    cursor: pointer;
  }

  &.line-height-2 {
    line-height: 2;
  }

  &.address {
    width: 477px;
    word-break: break-word;
  }

  &.breakword {
    word-break: break-word;
  }
`;
