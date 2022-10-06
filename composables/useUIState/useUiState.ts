import { ComputedRef } from "@nuxtjs/composition-api";

export interface StateInterface {
  isMobileMenuOpen: boolean;
}

export interface UseUiStateInterface {
  isMobileMenuOpen: ComputedRef<boolean>;
  toggleMobileMenu(): void;
}
