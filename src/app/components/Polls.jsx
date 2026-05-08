'use client'

import axios from "axios";
import React from "react";
import { LeafPoll, Result } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";
import { BASE_ASSET_URL } from "../utils";

const themeData = {
  mainColor: "#00B87B",
  backgroundColor: "#000000",
  rightColor: "#000000",
};

const Polls = ({ options, question, id }) => {
  async function vote(item, results) {
    console.log("voted", item, results);
    try {
      const res = await axios.patch(
        `${BASE_ASSET_URL}/post/votes/${id}/${item.text}`
      );
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <LeafPoll
        type="multiple"
        question={""}
        results={options}
        theme={themeData}
        onVote={vote}
      />
    </div>
  );
};

export default Polls;
