export const options = {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  tabBarVisible: true,
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#1EB9CD',
    inactiveTintColor: '#33395F',
    borderTopWidth: 0,
    style: {
      backgroundColor: '#fff',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      shadowColor: 'rgba(210,211,215,0.5)',
      elevation: 20,
    },
    labelStyle: {
      fontSize: 12,
    },
    iconStyle: {
      height: 40,
      width: 40,
    },
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
  },
};
