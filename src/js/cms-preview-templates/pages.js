import React from "react";
import format from "date-fns/format";
import fontClass from "./pages.scss";
export default class PagesPreview extends React.Component {
  render() {
    const { entry, widgetFor, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
      let temp =  <div className={fontClass.fontClass}>
        
        <div
          className="mw6 center ph3 pv4 replaceFont"
          style={{ backgroundColor: "#333", color: "white" }}
        >
          <div className="cms mw6">{widgetFor("body")}</div>
        </div>
      </div>;
  console.log('returning temp here');
  console.log(temp);
    return temp;
  }
}
