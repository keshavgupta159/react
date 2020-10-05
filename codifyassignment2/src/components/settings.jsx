import React, { Component } from "react";

class Settings extends Component {
  handleTheme = () => {
    const objLightThemeSwitch = document.getElementById("lightTheme");
    if (objLightThemeSwitch.checked) {
      document.getElementById("dt").classList.remove("table-dark");
    } else {
      document.getElementById("dt").classList.add("table-dark");
    }
  };

  render() {
    const { tableHead, onClickFliterCol } = this.props;
    return (
      <div className="row">
        <div className="col-6">
          <div className="custom-control custom-switch text-center mt-5">
            <input
              type="checkbox"
              className="custom-control-input"
              id="lightTheme"
              onClick={this.handleTheme}
            />
            <label className="custom-control-label" htmlFor="lightTheme">
              <h4>Light Theme</h4>
            </label>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="row">
              {tableHead.map((thead) => (
                <div className="col-4" key={thead.colName}>
                  <div className="m-1">
                    <input
                      className="showCol"
                      type="checkbox"
                      onChange={onClickFliterCol}
                      value={thead.colName}
                    />
                    <label className="ml-2" style={{ fontWeight: "bold" }}>
                      {thead.colLabel}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
