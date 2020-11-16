import React from "react";
// import PropTypes from "prop-types"

import FindBrand from "../FindBrand";
import FindModel from "../FindModel";
import FindYears from "../FindYears";
import FindSubModel from "../FindSubModel";
import FindOther from "../FindOther";
import classnames from "classnames";
import { StyleTab } from "./styles";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [],
      setCurrentPage: "",
      // setIdTabList: "",
    };
  }

  componentDidMount = () => {
    const { showTabs, defaultTabs } = this.props;
    if (!Array.isArray(showTabs)) return false;

    var tab = [];
    showTabs.forEach((c) => {
      var data = defaultTabs.filter((tab) => tab.id === c);
      if (data !== undefined && data.length > 0) {
        tab.push(data[0]);
      }
    });

    if (tab.length === 0) return; // TODO: validate this

    var index = tab.findIndex((c) => c.id === tab[0].id);
    tab[index].active = true;

    this.setState({
      tabList: tab,
      setCurrentPage: tab[0].id,
    });
  };

  handleNextPage = (currentPageId, payload) => {
    this.props.onSubmit(currentPageId, payload);
    const currentPageIndex = this.state.tabList.findIndex(
      (tab) => tab.id === currentPageId
    );

    if (currentPageIndex === this.state.tabList.length - 1) {
      // TODO: implement this
      console.log("onFinalSubmit ===");
      this.props.onFinalSubmit();
      return;
    }

    const nextPageId = this.state.tabList[currentPageIndex + 1].id;
    this.props.onChangeTab(nextPageId);
    const handleTabList = this.state.tabList.map((element) => {
      if (nextPageId === element.id) {
        element.active = true;
      }
      if (currentPageId === element.id) {
        element.passed = true;
      }
      return element;
    });

    this.setState({
      setCurrentPage: nextPageId,
      // setIdTabList: nextPageId,
      tabList: handleTabList,
    });
  };

  handlePreviousPage = (previousPageId) => {
    // const { setFilter } = this.props
    // setFilter("")
    const handleTabList = this.state.tabList.map((element, index) => {
      if (element.id === previousPageId) {
        element.active = true;
        element.passed = false;
      } else {
        element.active = false;
      }

      const currentPageIndex = this.state.tabList.findIndex(
        (tab) => tab.id === previousPageId
      );

      if (currentPageIndex < index) {
        element.passed = false;
      }
      return element;
    });

    this.props.onChangeTab(previousPageId);
    console.log("==================");

    this.setState({
      setCurrentPage: previousPageId,
      // setIdTabList: previousPageId,
      tabList: handleTabList,
    });
  };

  renderPageContainer = () => {
    const { setCurrentPage } = this.state;
    const { data, loading, inSurance } = this.props;

    const handleNextPageWithPageID = (payload) => {
      this.handleNextPage(setCurrentPage, payload);
    };

    switch (setCurrentPage) {
      case 1:
        return (
          <FindBrand
            loading={loading}
            brands={data}
            inSurance={inSurance}
            onSelected={handleNextPageWithPageID}
          />
        );
      case 2:
        return (
          <FindModel
            loading={loading}
            models={data}
            inSurance={inSurance}
            onSelected={handleNextPageWithPageID}
          />
        );
      case 3:
        return (
          <FindYears
            loading={loading}
            years={data}
            inSurance={inSurance}
            onSelected={handleNextPageWithPageID}
          />
        );
      case 4:
        return (
          <FindSubModel
            loading={loading}
            subModels={data}
            inSurance={inSurance}
            onSelected={handleNextPageWithPageID}
          />
        );
      case 5:
        return (
          <FindOther
            loading={loading}
            provinceOption={data}
            inSurance={inSurance}
            onSelected={handleNextPageWithPageID}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { className, cursorDefault } = this.props;

    return (
      <React.Fragment>
        <StyleTab className={className}>
          <div className="tab">
            <ol>
              {this.state.tabList.map((element, index) => {
                return (
                  <li
                    key={index}
                    className={classnames({
                      "is-active": element.active,
                      "is-passed": element.passed,
                      "cursor-default": cursorDefault,
                    })}
                    onClick={(index) => {
                      element.passed && this.handlePreviousPage(element.id);
                    }}
                  >
                    <div>
                      <div
                        className={classnames(
                          {
                            "is-active": element.active,
                            "is-passed": element.passed,
                          },
                          "inner-triangle"
                        )}
                      ></div>
                      {element.name}
                    </div>
                  </li>
                );
              })}
            </ol>

            {this.renderPageContainer()}
          </div>
        </StyleTab>
      </React.Fragment>
    );
  }
}

export default Tab;
