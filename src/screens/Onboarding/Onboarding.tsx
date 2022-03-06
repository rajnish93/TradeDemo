import React from "react";
import { Dimensions, Image, ImageBackground, StatusBar } from "react-native";
import { Block, Button, Text } from "galio-framework";
import { styles } from "./Onboarding.styles";
import customTheme from "../../components/customTheme";
import OnboardingBg from "../../assets/img/bg.png";
import LogoOnboarding from "../../assets/img/logo.png";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigators/AppNavigator";

type Props = StackScreenProps<RootStackParamList, "Onboarding">;

const Onboarding = ({ navigation }: Props) => {
  const { width, height } = Dimensions.get("screen");

  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      <Block flex center>
        <ImageBackground
          source={OnboardingBg}
          style={{ height, width, zIndex: 1 }}
        />
      </Block>
      <Block center>
        <Image source={LogoOnboarding} style={styles.logo} />
      </Block>
      <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block style={styles.title}>
            <Block>
              <Text color="white" size={28}>
                Start to invest
              </Text>
            </Block>
            <Block>
              <Text color="white" size={28}>
                for your future!
              </Text>
            </Block>
            <Block style={styles.subTitle}>
              <Text color="white" size={16}>
                Fully Loaded With Surprise.
              </Text>
            </Block>
          </Block>
          <Block center>
            <Button
              style={styles.button}
              color={customTheme.COLORS.SECONDARY}
              textStyle={{ color: customTheme.COLORS.BLACK }}
              onPress={() => navigation.navigate("Home")}
            >
              Get Started
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Onboarding;
