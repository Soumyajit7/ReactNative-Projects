import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactCard from "./components/ContactCard";


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default App;