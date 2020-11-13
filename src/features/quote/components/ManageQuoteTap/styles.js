import styled from "styled-components";

export const StyleTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Sarabun;
  font-size: 16px;
  /* font-weight: bold; */
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;

  div.tab {
    width: 984px;
    margin-top: 25px;
  }
  ol > li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ol > li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ol > li {
    display: table-cell;
    width: 174px;
    height: 54px;
    position: relative;
    padding: 0px;
    margin: 0px;
    text-align: center;
    color: #777e84;
    border: 1px solid #d6d6d6;
    background-color: #f1f3f5;
  }

  ol > li > div {
    position: relative;
    line-height: 30px; /* equal to the list item's height */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ol > li.cursor-default {
    cursor: default !important;
    pointer-events: none;
  }

  ol > li.is-active {
    background-color: #096a88;
    border: 1px solid #096a88;
    color: white;
  }

  ol > li.is-passed {
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #096a88;
    color: #096a88;
    :hover {
      border: solid 1px #009aac;
      background-color: #eaf5f6;
      color: #009aac;
    }
  }

  ol {
    display: table;
    width: 100%;
    padding: 0px;
    margin: 0px;
    position: relative;
  }

  ol > li > div:after,
  ol > li > div:before {
    content: "";
    display: inline-block;
    border-style: solid;
    width: 0px;
    height: 0px;
    left: 100%;
    top: -1px;
    position: absolute;
    z-index: 1;
  }

  ol > li:last-child > div:after,
  ol > li:last-child > div:before {
    border: none;
  }

  ol > li > div:after {
    display: none;
  }

  ol > li > div:after,
  ol > li.is-active > div:before {
    border-color: transparent transparent transparent #096a88;
  }

  ol > li > div:after,
  ol > li.is-passed > div:before {
    border-color: transparent transparent transparent #fff;
  }

  ol > li > div:hover:after,
  ol > li.is-passed > div:hover:before {
    border-color: transparent transparent transparent #eaf5f6;
  }
  ol > li > div:before {
    border-width: 24px;
    display: block;
    border-color: transparent transparent transparent #ffffff;
    z-index: 3;
    border-top: 27px solid transparent;
    border-left: 9px solid #f1f3f5;
    border-bottom: 27px solid transparent;
  }

  ol > li > div > div.inner-triangle {
    border-width: 24px;
    display: block;
    border-color: transparent transparent transparent #ffffff;
    z-index: 2;
    border-top: 27px solid transparent;
    border-left: 9px solid #d6d6d6;
    border-bottom: 27px solid transparent;
    left: 100.5%;
    top: 0;
    position: absolute;
  }
  ol > li > div > div.inner-triangle.is-active {
    border-width: 24px;
    display: block;
    border-color: transparent transparent transparent #ffffff;
    z-index: 2;
    border-top: 27px solid transparent;
    border-left: 9px solid #096a88;
    border-bottom: 27px solid transparent;
    left: 100.4%;
    top: 0;
    position: absolute;
  }

  ol > li > div > div.inner-triangle.is-passed {
    border-width: 24px;
    display: block;
    border-color: transparent transparent transparent #ffffff;
    z-index: 2;
    border-top: 27px solid transparent;
    border-left: 9px solid #096a88;
    border-bottom: 27px solid transparent;
    left: 100.5%;
    top: 0;
    position: absolute;
    :hover {
      border-left: 9px solid #eaf5f6;
      border-color: transparent transparent transparent #eaf5f6;
    }
  }

  @supports (-moz-appearance: none) {
    ol > li > div > div.inner-triangle.is-passed {
      left: 100.8% !important;
    }
  }

  ol > li:last-child > div > div.inner-triangle {
    border: none;
  }
`;
