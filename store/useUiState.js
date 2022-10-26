import { defineStore } from 'pinia'

export const useUiState = defineStore('uiState', {
  state: () => ({ isSideBarOpen:false }),
  getters: {
    isSideBarOpen: (state) => state.isSideBarOpen,
  },
  actions: {
    increment() {
      this.count++
    },
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen
    }
  },
})