export const featureFlags = {
  legalLinksEnabled: process.env.NEXT_PUBLIC_ENABLE_LEGAL_LINKS === "true",
  forgotPasswordEnabled:
    process.env.NEXT_PUBLIC_ENABLE_FORGOT_PASSWORD === "true",
};

export const links = {
  adminLogin: "/admin/login",
  forgotPassword: "/admin/login",
  terms: "/terms",
  privacy: "/privacy",
};
