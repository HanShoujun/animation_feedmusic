"use client";
// ** React Imports
import { createContext, useState, ReactNode, useContext } from "react";

export type TabData = {
  tabIndex: number;
  startTransition: number;
};

export type IState = {
  progressFirstTab: number;
  // tabIndex: number;
  // setTabIndex: (tabIndex: number) => void;
  setProgressFirstTab: (tabIndex: number) => void;
  // setStartTransition: (tabIndex: number) => void;
  // startTransition: number;
  tabData: TabData;
  setTabData: (tabData: TabData) => void;
};

// ** Create Context
export const AppContext = createContext<IState>({
  // setTabIndex: () => null,
  // tabIndex: 0,
  progressFirstTab: 0,
  setProgressFirstTab: () => null,
  // startTransition: 0,
  // setStartTransition: () => null,
  tabData: { tabIndex: 0, startTransition: 0 },
  setTabData: () => null,
});

// export const AppProvider = ({ children }: { children: ReactNode }) => {
//   // ** State
//   const [tabIndex, setTabIndex] = useState(0);

//   return <AppContext.Provider value={{ tabIndex, setTabIndex, processFirstTab: 0 }}>{children}</AppContext.Provider>;
// };

export const AppConsumer = AppContext.Consumer;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const {
    // tabIndex,
    // setTabIndex,
    progressFirstTab,
    setProgressFirstTab,
    // setStartTransition,
    tabData,
    setTabData,
  } = context;

  const changeTabIndex = (index: number) => {
    if (index < 0 || index > 3) {
      return;
    }
    if (tabData.tabIndex == index) {
      return;
    }
    if (tabData.tabIndex > index) {
      setTabData({ tabIndex: index, startTransition: 1 });
    }
    if (tabData.tabIndex < index) {
      setTabData({ tabIndex: index, startTransition: 2 });
    }
  };

  return { ...context, changeTabIndex };
};
