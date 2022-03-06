import React from "react";
import { StatusBar } from "react-native";
import { Block } from "galio-framework";
import customTheme from "../../components/customTheme";

const Dashboard = () => {
  return (
    <Block flex>
      <StatusBar backgroundColor={customTheme.COLORS.WHITE} />
    </Block>
  );
};

export default Dashboard;
