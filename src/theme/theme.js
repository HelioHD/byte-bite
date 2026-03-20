export const theme = {
  colors: {
    background: "#1200ff",
    surface: "#ffffff",
    surfaceRaised: "#ffffff",
    text: "#000000",
    textOnDark: "#ffffff",
    mutedText: "#2a2a30",
    mutedOnDark: "#f0f0f5",
    primary: "#1200ff",
    primarySoft: "#e8e8ff",
    border: "#000000",
    panelBorder: "#000000",
    accent: "#1200ff",
    white: "#ffffff",
  },
  radius: {
    md: "0",
    lg: "0",
  },
  shadow: {
    card: "6px 6px 0 #000000",
  },
  stroke: "4px",
};

export function applyThemeToDocument() {
  const c = theme.colors;
  const r = document.documentElement;
  r.style.setProperty("--bg", c.background);
  r.style.setProperty("--surface", c.surface);
  r.style.setProperty("--surface-raised", c.surfaceRaised);
  r.style.setProperty("--text", c.text);
  r.style.setProperty("--text-on-dark", c.textOnDark);
  r.style.setProperty("--muted", c.mutedText);
  r.style.setProperty("--muted-on-dark", c.mutedOnDark);
  r.style.setProperty("--primary", c.primary);
  r.style.setProperty("--primary-soft", c.primarySoft);
  r.style.setProperty("--border", c.border);
  r.style.setProperty("--panel-border", c.panelBorder);
  r.style.setProperty("--accent", c.accent);
  r.style.setProperty("--white", c.white);
  r.style.setProperty("--radius-md", theme.radius.md);
  r.style.setProperty("--radius-lg", theme.radius.lg);
  r.style.setProperty("--comic-shadow", theme.shadow.card);
  r.style.setProperty("--stroke", theme.stroke);
}
