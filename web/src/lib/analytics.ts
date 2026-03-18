type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") {
    return;
  }

  // Provider-agnostic placeholder hook.
  // Replace with your analytics provider client when selected.
  console.info("[analytics]", eventName, payload);
}
