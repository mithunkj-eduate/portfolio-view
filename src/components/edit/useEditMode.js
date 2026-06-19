import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * Edit mode is "on" only when an auth token is available.
 *  - Owner opens the portfolio with `?token=<JWT>` (e.g. from the admin app),
 *    we persist it to localStorage so it survives in-app navigation.
 *  - Public visitors have no token -> editable is false -> read-only view.
 *
 * Add `?edit=0` to force the read-only preview even when a token exists.
 */
export default function useEditMode() {
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const qpToken = searchParams.get("token");
    if (qpToken) {
      localStorage.setItem("token", qpToken);
      setToken(qpToken);
    } else {
      setToken(localStorage.getItem("token"));
    }
  }, [searchParams]);

  const forcedOff = searchParams.get("edit") === "0";

  return { editable: !!token && !forcedOff, token };
}
