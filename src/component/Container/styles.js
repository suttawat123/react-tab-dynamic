import styled from "styled-components";

export const StylesContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
  padding: ${(props) => props.padding};
  &.select-brand {
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 750px;
    max-height: 450px;
  }

  &.select-brand > div:nth-child(1) > div.content-select-brand,
  &.select-brand > div:nth-child(2) > div.content-select-brand,
  &.select-brand > div:nth-child(3) > div.content-select-brand,
  &.select-brand > div:nth-child(4) > div.content-select-brand {
    margin-top: 0;
  }

  &.select-brand > div:nth-child(1) > div.content-select-model,
  &.select-brand > div:nth-child(2) > div.content-select-model,
  &.select-brand > div:nth-child(3) > div.content-select-model,
  &.select-brand > div:nth-child(4) > div.content-select-model {
    margin-top: 0;
  }

  &.container-select-year {
    padding-right: 2rem;
  }

  &.container-select-year > div:nth-child(even) > div.content-select-year {
    background-color: rgba(0, 154, 172, 0.1);
  }

  &.select-insurance-brand {
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 900px;
    height: 100%;
  }

  &.cover-content {
    width: 984px;
  }

  &.sub-tab-insurance {
    padding: 20px 20px 0 20px;
  }

  &.sub-tab-insurance-content {
    z-index: 2;
    width: 944px;
    justify-content: flex-start;
  }

  &.sub-tab-insurance-driver {
    width: 944px;
    position: absolute;
    align-items: flex-end;
  }

  &.fluid {
    width: 100%;
  }

  div:nth-child(1) > div.content-select-insurance-company {
    margin-left: 0;
  }
  div:nth-child(3n) > div.content-select-insurance-company {
    margin-right: 0;
  }
  div:nth-child(3n + 1) > div.content-select-insurance-company {
    margin-left: 0;
  }

  div.info-insurance-detail
    > div:nth-child(odd)
    > div.content-info-insurance-detail {
    width: 190px;
  }

  div.info-insurance-detail
    > div:nth-child(odd)
    > div.content-info-insurance-detail-full {
    width: 380px;
  }

  &.select-insurance-company {
    flex-wrap: wrap;
  }

  &.select-driver {
    padding-left: 30px;
    margin-top: 25px;
  }

  &.discount-detail {
    width: 100%;
    padding-left: 45px;
  }

  &.blue-light {
    background-color: rgba(0, 154, 172, 0.15);
  }

  &.blue-light-less {
    background-color: rgba(0, 154, 172, 0.05);
  }

  &.insurance-compare-list {
    width: 984px;
    min-height: 54px;
    padding-left: 20px;
    padding-right: 20px;
  }

  &.fixed-small-width {
    min-width: 175px;
    margin-top: 13px;
    margin-bottom: 13px;
  }

  &.container-alert {
    margin-left: 30px;
    margin-right: 30px;
  }

  &.mr-30 {
    margin-right: 30px;
  }

  &.mt-40 {
    margin-top: 40px;
  }

  &.padding-20 {
    padding: 20px;
  }

  &.pl-20 {
    padding-left: 20px;
  }

  &.pr-20 {
    padding-right: 20px;
  }

  &.quatation-customer-detail-sub-left {
    min-width: 117px;
    align-items: flex-start;
  }

  &.quatation-customer-detail-sub-left-1 {
    min-width: 100px;
    align-items: flex-start;
  }

  &.quatation-customer-detail-sub-right {
    min-width: 172px;
    margin-left: 10px;
    align-items: flex-start;
  }

  &.no-margin {
    margin: 0;
  }

  &.mr-45 {
    margin-right: 45px;
  }

  &.mt-25 {
    margin-top: 25px;
  }

  &.mt-30 {
    margin-top: 30px;
  }

  &.mt-49 {
    margin-top: 49px;
  }

  &.mb-80 {
    margin-bottom: 80px;
  }

  &.sell-process-detail {
    width: 666px;
  }

  &.sell-process-attachment-detail {
    width: 846px;
  }

  &.wrap {
    flex-wrap: wrap;
  }

  &.attachment-other {
    width: 580px;
    /* justify-content: flex-start; */
  }

  &.way-payment {
    height: 92px;
  }

  &.summary-detail {
    width: 475px;
  }

  &.summary-detail-card {
    width: 477px;
    min-height: 484px;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 0 6px 0 rgba(64, 73, 82, 0.3);
    background-color: #ffffff;
    margin-left: 31px;
    padding: 17px 26px 30px 34px;
  }

  &.select-payment-type {
    width: 100px;
    height: 40px;
  }

  &.payment-detail {
    width: 417px;
    min-height: 140px;
    height: 100%;
    border-radius: 5px;
    border: solid 1px #d6d6d6;
    background-color: #ffffff;
    /* padding: 15px; */
  }

  &.bg-blue {
    min-height: 46px;
    height: 100%;
    background-color: #009aac !important;
  }

  &.pointer {
    cursor: pointer;
  }

  &.content-method-left {
    width: 140px;
    padding-top: 16px;
    min-height: 500px;
  }

  &.content-method-right {
    width: 834px;
    margin-left: 10px;
  }

  &.payment-detail-card {
    width: 477px;
    min-height: 385px;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 0 6px 0 rgba(64, 73, 82, 0.3);
    background-color: #ffffff;
    margin-left: 31px;
    padding: 17px 30px 30px 30px;
  }

  &.usermanual {
    width: 666px;
    height: 70px;
    border-radius: 5px;
    border: solid 1px #096a88;
    background-color: #ffffff;
    position: relative;
    font-family: Sarabun;
    font-size: 16px;
    color: #096a88;
    cursor: pointer;
    margin-bottom: 15px;
    :hover {
      border: solid 1px #009aac;
      background-color: #eaf5f6;
    }
  }

  &.usermanual > img.arrow-right {
    width: 24px;
    height: 24px;
    object-fit: contain;
    position: absolute;
    right: 15px;
  }

  &.display-discount {
    height: 46px;
  }

  @supports (-moz-appearance: none) {
    &.select-insurance-brand {
      height: auto;
    }

    &.summary-detail-card {
      height: auto;
    }

    &.payment-detail {
      height: auto;
    }

    &.bg-blue {
      height: auto;
    }

    &.payment-detail-card {
      height: auto;
    }
  }

  &.specify-customer {
    padding-left: 224px;
  }

  &.container-remark {
    width: 100%;
  }
`;

export const StylesContainerTop = styled.header`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};

  &.insurer-top {
    display: ${(props) =>
      props.pageHeight > props.offsetTop ? "block" : "none"};
    position: fixed;
    top: 0;
    left: ${(props) => 316 - props.pageWidth}px;
    z-index: 99;
    width: 1044px;
    height: 149px;
    box-shadow: 0 0 6px 0 rgba(64, 73, 82, 0.15);
    background-color: #ffffff;
  }

  &.quatation-insurer-top {
    display: ${(props) =>
      props.pageHeight > props.offsetTop ? "block" : "none"};
    position: fixed;
    top: 0;
    z-index: 99;
    width: 1044px;
    height: 149px;
    box-shadow: 0 0 6px 0 rgba(64, 73, 82, 0.15);
    background-color: #ffffff;
    /* margin-left: -10px; */
    padding-top: 13px;
    left: ${(props) =>
      props.clientWidth > 1360
        ? props.clientWidth / 2 - 364
        : -props.pageWidth + 316}px;
  }
`;

export const StylesContainerFooter = styled.footer`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
  &.insurer-footer {
    position: fixed;
    /* margin-left: -346px; */
    bottom: 0;
    z-index: 99;
    width: 1360px;
    height: 100px;
    background-color: #003f52;
    padding-left: 115px;
    padding-right: 115px;
    left: ${(props) =>
      props.clientWidth > 1360
        ? props.clientWidth / 2 - 680
        : -props.pageWidth}px;
  }

  &.insurer-footer > div:nth-child(n + 5) > div.content-compare-insurer {
    display: none;
  }

  &.insurer-create-quote {
    position: fixed;
    bottom: 0;
    z-index: 99;
    width: 1044px;
    height: 84px;
    background-color: #fff;
    /* margin-left: -10px; */
    left: ${(props) =>
      props.clientWidth > 1360
        ? props.clientWidth / 2 - 364
        : -props.pageWidth + 316}px;
    /* left: 316px; */
  }
`;

export const StylesContainerContentScroll = styled.div`
  width: 984px;
  margin-top: 60px;
  padding-left: 2.8rem;
  overflow-y: scroll;
  &.select-year {
    justify-content: flex-start;
    padding: 0;
    width: 550px;
    max-height: 450px;
  }

  &.insurance-detail {
    width: 666px;
    height: 680px;
    max-height: 750px;
    padding-left: 0;
    margin-top: 26px;
    overflow-x: hidden;
    margin-bottom: 25px;
  }

  &.barcode-detail {
    display: flex;
    flex-direction: row;
    width: 1130px;
    height: 769px;
    padding-left: 73px;
    padding-top: 29px;
    margin-top: 0;
  }

  &.sample-attachment-detail {
    display: flex;
    justify-content: center;
    width: 1130px;
    height: 630px;
    margin-top: 0;
  }
`;

export const StylesContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  &.is-active {
    border: solid 1px #009aac !important;
  }

  &.container-select-car {
    cursor: pointer;
    width: 224px;
    height: 224px;
    margin: 25px 15px 19px 15px;
    border-radius: 5px;
    border: solid 1px #d6d6d6;
    background-color: #ffffff;
  }
  &.content-select-brand {
    cursor: pointer;
    width: 150px;
    height: 150px;
    margin: 25px 15px 18px 15px;
    border-radius: 5px;
    border: solid 0.7px #d6d6d6;
    background-color: #ffffff;
  }

  &.content-select-model {
    cursor: pointer;
    white-space: pre-wrap;
    width: 150px;
    height: 100px;
    margin: 15px;
    border-radius: 5px;
    border: solid 1px #d6d6d6;
    background-color: #ffffff;
    font-family: Sarabun;
    font-size: 16px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #096a88;
  }

  &.content-select-year {
    cursor: pointer;
    width: 500px;
    height: 49px;
    background-color: #ffffff;
    font-family: Sarabun;
    font-size: 16px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #333333;
  }

  &.content-select-year:hover {
    border: solid 1px #009aac;
  }

  &.content-select-insurance-brand {
    cursor: pointer;
    width: 120px;
    height: 120px;
    border-radius: 10px;
    border: solid 1px #d6d6d6;
    margin: 0 30px 10px 30px;
  }

  &.content-select-insurance-company {
    flex-direction: column;
    cursor: default;
    width: 308px;
    min-height: 525px;
    border-radius: 5px;
    border: solid 1px #d6d6d6;
    background-color: #ffffff;
    padding: 26px 20px 20px 20px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 30px;
  }

  &.content-select-insurance-company:hover {
    border: solid 1px #008eb7;
  }

  &.content-insurer-detail-left {
    width: 125px;
  }

  &.content-insurer-detail-right {
    margin-left: 5px;
    width: 117px;
  }

  &.content-insurer-fluid-ignore-padding {
    width: 100%;
    padding-left: -20px;
    padding-right: -20px;
    width: 308px;
    height: 54px;
    background-color: rgba(0, 154, 172, 0.15);
  }

  &.content-compare-insurer {
    width: 202px;
    height: 60px;
    border-radius: 5px;
    background-color: #ffffff;
    margin-right: 30px;
  }

  &.insurer-empty {
    width: 202px;
    height: 60px;
    border-radius: 5px;
    border: dashed 1px #333333;
    background-color: #598391;
  }

  &.content-compare-insurer > div.content-delete-insurer {
    width: 220px;
    height: 60px;
    position: absolute;
    top: 10px;
    display: flex;
    justify-content: flex-end;
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      // Put your IE10+-specific CSS here
      width: 190px;
    }
    img.delete-insurer {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  &.content-insurance-detail-fluid {
    width: 666px;

    /* height: 188px; */
    margin-top: 0 !important;
    justify-content: flex-start;
    padding: 20px 0 22px 0;
  }

  &.blue-light {
    background-color: rgba(0, 154, 172, 0.15);
  }

  &.direction-column {
    flex-direction: column;
  }

  &.insurance-detail-left {
    width: 200px;
    margin-left: 134px;
  }
  &.insurance-detail-right {
    width: 160px;
    margin-left: 5px;
  }

  &.info-insurance-detail {
    width: 350px;
    flex-wrap: wrap;
    margin-left: 20px;
  }

  &.content-info-insurance-detail {
    margin-bottom: 20px;
  }

  &.content-info-insurance-detail-full {
    margin-bottom: 20px;
  }

  &.content-discount {
    height: 40px;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
  }

  &.content-insurance-compare-left {
    width: 250px;
    justify-content: flex-start;
  }

  &.content-insurance-compare-right {
    width: 680px;
  }

  &.width-300 {
    width: 300px;
  }

  &.quatation-customer-detail {
    min-width: 270px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* width: 100%; */
  }
  &.quatation-customer-detail.block-creater {
    margin-left: -40px;
    border-left: 2px solid #8e8e8e;
    padding-left: 10px;
  }
  &.mr-60 {
    margin-right: 60px;
  }

  &.width-720 {
    width: 720px;
  }

  &.mr-30 {
    margin-right: 30px;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    &.content-insurer-fluid-ignore-padding {
      margin-left: -20px;
    }
  }
`;
