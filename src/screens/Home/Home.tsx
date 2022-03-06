import React, { FC, useEffect, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { styles } from "./Home.styles";
import { getMarketData } from "../../service";
import CoinItem from "./CoinItem";
import customTheme from "../../components/customTheme";

const Home: FC = () => {
  const [coins, setCoins] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber: number) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins(1);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.padded}
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor={customTheme.COLORS.BLACK}
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};

export default Home;
