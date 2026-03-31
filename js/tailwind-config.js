tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* ── Mapeamento para variáveis CSS do Design System ──────── */

                /* Superfícies */
                "background":                  "var(--color-bg)",
                "surface":                     "var(--color-bg-subtle)",
                "surface-dim":                 "var(--color-bg)",
                "surface-bright":              "var(--color-surface-overlay)",
                "surface-container-lowest":    "var(--color-bg)",
                "surface-container-low":       "var(--color-bg-subtle)",
                "surface-container":           "var(--color-surface)",
                "surface-container-high":      "var(--color-surface-raised)",
                "surface-container-highest":   "var(--color-surface-overlay)",
                "surface-variant":             "var(--color-surface-overlay)",
                "surface-tint":                "var(--color-accent)",

                /* Texto */
                "on-background":               "var(--color-text-primary)",
                "on-surface":                  "var(--color-text-primary)",
                "on-surface-variant":          "var(--color-text-secondary)",
                "inverse-on-surface":          "var(--color-text-inverse)",
                "inverse-surface":             "var(--color-text-primary)",

                /* Bordas */
                "outline":                     "var(--color-border-strong)",
                "outline-variant":             "#3a3f52", /* usado em /10, /20 etc — valor fixo para opacity funcionar */

                /* Acento principal — azul */
                "primary":                     "var(--color-accent)",
                "on-primary":                  "var(--color-bg)",
                "primary-container":           "var(--color-accent)",
                "on-primary-container":        "var(--color-bg)",
                "primary-fixed":               "var(--color-accent)",
                "primary-fixed-dim":           "var(--color-text-tertiary)",
                "on-primary-fixed":            "var(--color-bg)",
                "on-primary-fixed-variant":    "var(--color-bg)",
                "inverse-primary":             "var(--color-bg)",

                /* Secundário — ciano */
                "secondary":                   "var(--color-secondary)",
                "on-secondary":                "var(--color-bg)",
                "secondary-container":         "var(--color-secondary)",
                "on-secondary-container":      "var(--color-bg)",
                "secondary-fixed":             "var(--color-secondary)",
                "secondary-fixed-dim":         "var(--color-secondary)",
                "on-secondary-fixed":          "var(--color-bg)",
                "on-secondary-fixed-variant":  "var(--color-bg)",

                /* Terciário */
                "tertiary":                    "#ae87ff",
                "on-tertiary":                 "var(--color-bg)",
                "tertiary-container":          "#ae87ff",
                "on-tertiary-container":       "var(--color-bg)",
                "tertiary-fixed":              "#ae87ff",
                "tertiary-fixed-dim":          "#ae87ff",
                "on-tertiary-fixed":           "var(--color-bg)",
                "on-tertiary-fixed-variant":   "var(--color-bg)",

                /* Error */
                "error":                       "var(--color-error)",
                "on-error":                    "var(--color-bg)",
                "error-container":             "#7a1c1c",
                "on-error-container":          "var(--color-error)",
            },
            fontFamily: {
                "headline": ["Space Grotesk", "system-ui", "sans-serif"],
                "body":     ["Inter", "system-ui", "sans-serif"],
                "label":    ["Inter", "system-ui", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "var(--radius-md)",
                "sm":      "var(--radius-sm)",
                "md":      "var(--radius-md)",
                "lg":      "var(--radius-lg)",
                "xl":      "var(--radius-xl)",
                "2xl":     "var(--radius-2xl)",
                "3xl":     "var(--radius-3xl)",
                "full":    "var(--radius-full)",
            },
            transitionTimingFunction: {
                "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
            },
            transitionDuration: {
                "120": "120ms",
                "220": "220ms",
                "380": "380ms",
            },
        },
    },
}
