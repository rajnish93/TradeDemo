import React, { FC } from "react";
import { StatusBar } from "react-native";
import { Block, Text } from "galio-framework";
import { styles } from "./Home.styles";

const Home: FC = () => {
  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block style={styles.title}>
            <Block>
              <Text color="white" size={28}>
                Welcome!
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
