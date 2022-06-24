import React, { Component } from "react";
import QuillSQL from "react-quill-sql";

class Example extends Component {
  render() {
    return (
      <QuillSQL
        // the current customer / organization id (from your SQL db)
        customerId="3"
        publicKey="YOUR_PUBLIC_KEY"
        theme={{
          /* Components font family */
          fontFamily: "BlinkMacSystemFont",

          /* Default font size */
          fontSize: 14,

          /* Header font size */
          headerFontSize: 16,

          /* Primary color */
          primaryColor: "#E26A3C",

          /* Secondary color */
          secondaryColor: "white",

          /* When you select underlay */
          selectUnderlayColor: "#F9F9F9",

          /* Background color */
          backgroundColor: "white",

          /* Primary font color */
          fontColor: "#212121",

          /* Secondary font color */
          secondaryFontColor: "#636565",

          selectedFontColor: "#212121",

          /* Border color */
          borderColor: "#F0F0F0",

          /* Label font weight */
          labelFontWeight: "500",

          /* Header font weight */
          headerFontWeight: "600",

          /* Selected font weight */
          selectedFontWeight: "700",

          /* Padding for containers */
          padding: 20,

          /* Border radius for selected Quill elements */
          borderRadius: "8px",

          shadowColor: "rgba(76, 83, 146, 0.09)",

          shadowRadius: "8px",
        }}
        containerStyle={{
          display: "flex",
          flexDirection: "row",
          height: 600,
          width: 1200,
          boxShadow: "0px 1px 24px 0px rgba(76, 83, 146, 0.09)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      />
    );
  }
}
