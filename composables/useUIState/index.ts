import { reactive, computed } from "@nuxtjs/composition-api";
import {
  StateInterface,
  UseUiStateInterface,
} from "~/composables/useUIState/useUiState";

const state = reactive<StateInterface>({
  isMobileMenuOpen: false,
});

export function useStateUI(): UseUiStateInterface {
  const toggleMobileMenu = () => {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  };

  return {
    isMobileMenuOpen: computed(() => state.isMobileMenuOpen),
    toggleMobileMenu,
  };
}
