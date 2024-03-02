import React,{useState} from "react";
import Header from "./header";
import TinderCards from "./TinderCard";
import SwipeButton from "./swipeButton";

function Service(){
    return (
        <div>
          {/* Header */}
          <Header/>
          {/* Swipe Section */}
          <TinderCards />
          {/* action */}
          <SwipeButton/>
        </div>
      );
}
export default Service;