export interface ZodiacSign {
  name: string;
  period: string;
  description: string;
  qualities: string[];
  flaws: string[];
  element: string;
  symbol: string;
  emoji: string;
  color: string;
  gradient: [string, string];
  compatibility: {
    goodMatches: string[];
    badMatches: string[];
  };
}

export interface DateOfBirth {
  day: number;
  month: number;
  year: number;
}
