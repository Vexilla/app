export interface UIState {
  sidebarShowing: boolean;
}

export default {
  namespaced: true,
  state: {} as UIState,
  mutations: {
    setSidebarShowing(state: UIState, sidebarShowing: boolean) {
      state.sidebarShowing = sidebarShowing;
    },
    toggleSidebarShowing(state: UIState, sidebarShowing: boolean) {
      state.sidebarShowing = !state.sidebarShowing;
    },
  },
  actions: {
    setSidebarShowing(context: any, sidebarShowing: boolean) {
      context.commit("setSidebarShowing", sidebarShowing);
    },
    toggleSidebarShowing(context: any) {
      context.commit("toggleSidebarShowing");
    },
  },
};
