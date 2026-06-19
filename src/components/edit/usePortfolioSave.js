import { useState } from "react";
import axios from "axios";

/**
 * Persists the whole portfolio object via the same endpoint the admin app
 * uses: PUT {VITE_PRODUCTION_BASE_URL}/api/portfolio  (Bearer token).
 * The backend resolves the owner from the token.
 */
export default function usePortfolioSave() {
  const apiBaseUrl = import.meta.env.VITE_PRODUCTION_BASE_URL;
  const [saving, setSaving] = useState(false);

  const save = async (portfolio, token) => {
    // `type` is added client-side for routing; the admin payload omits it.
    const { type, ...payload } = portfolio;
    setSaving(true);
    try {
      const res = await axios.put(`${apiBaseUrl}/api/portfolio`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } finally {
      setSaving(false);
    }
  };

  return { save, saving };
}
