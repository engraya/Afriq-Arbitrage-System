export function formatNumber(value: number): string {
    if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(2)}B`; // Billion
    } else if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(2)}M`; // Million
    } else {
      return `$${value.toLocaleString()}`; // Less than a million
    }
  }
