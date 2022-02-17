import { eth } from "state/eth"; // Eth state provider
import { competition } from "state/competition"; // Competition state provider
import type { ReactElement } from "react"; // Types

/**
 * State providing wrapper
 * @param {ReactElement | ReactElement[]} children to inject
 * @returns {ReactElement} wrapper
 */
export default function StateProvider({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement {
  return (
    // Wrap in sub-providers
    <eth.Provider>
      <competition.Provider>{children}</competition.Provider>
    </eth.Provider>
  );
}
