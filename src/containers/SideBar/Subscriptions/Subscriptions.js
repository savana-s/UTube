import React from "react";
import { Subscription } from "./Subscription/Subscription";
import { Divider } from "semantic-ui-react";
import { SideBarHeader } from "../SideBarHeader/SideBarHeader";

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title="Subscriptions" />
        <Subscription label="NFL" broadcasting />
        <Subscription label="College Football" amountNewVideos={10} />
        <Subscription label="NBA" amountNewVideos={23} />
        <Subscription label="Seattle Seahawks" amountNewVideos={4} />
        <Subscription label="Golden State Warriors" amountNewVideos={14} />
        <Divider />
      </React.Fragment>
    );
  }
}
