import { describe, it, expect } from 'vitest';
import fs from 'node:fs';

describe('Static smoke checks', () => {
  it('index.html contains required UI elements', () => {
    const html = fs.readFileSync('index.html', 'utf8');

    expect(html).toContain('id="start-input"');
    expect(html).toContain('id="end-input"');
    expect(html).toContain('id="route-btn"');
    expect(html).toContain('id="clear-btn"');
    expect(html).toContain('id="reset-btn"');
    expect(html).toContain('id="themeToggle"');
    expect(html).toContain('id="offline-indicator"');
  });

  it('index.html contains transport and continue-route logic', () => {
    const html = fs.readFileSync('index.html', 'utf8');

    expect(html).toContain('showTransportChoice');
    expect(html).toContain('choose-elevator');
    expect(html).toContain('choose-stairs');
    expect(html).toContain('continue-route-btn');
  });
});
