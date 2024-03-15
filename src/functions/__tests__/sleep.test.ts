import { describe, it, expect } from 'vitest';
import sleep from '../sleep';

describe('sleep()', () => {
  it('should sleep for the given amount of time', async () => {
    const LATER_SLEEP_TIME = 500;
    const LATEST_SLEEP_TIME = 1000;
    const OPERATING_DELTA = 10;

    const start = Date.now();
    await sleep(LATER_SLEEP_TIME);

    const later = Date.now();
    expect(later).toBeGreaterThanOrEqual(start + LATER_SLEEP_TIME);
    expect(later).toBeLessThanOrEqual(start + LATER_SLEEP_TIME + OPERATING_DELTA);
    await sleep(LATEST_SLEEP_TIME);

    const latest = Date.now();
    expect(latest).toBeGreaterThanOrEqual(later + LATEST_SLEEP_TIME);
    expect(latest).toBeLessThanOrEqual(later + LATEST_SLEEP_TIME + OPERATING_DELTA);
  });
});
