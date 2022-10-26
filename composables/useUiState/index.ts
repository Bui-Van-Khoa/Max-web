import { reactive, computed } from "@nuxtjs/composition-api";
import {
  StateInterface,
  UseUiStateInterface,
} from "./useUiState";

const state = reactive<StateInterface>({
  isMobileMenuOpen: false,
});

export function useUiState(): UseUiStateInterface {
  const toggleMobileMenu = () => {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  };

  return {
    isMobileMenuOpen: computed(() => state.isMobileMenuOpen),
    toggleMobileMenu,
  };
}
