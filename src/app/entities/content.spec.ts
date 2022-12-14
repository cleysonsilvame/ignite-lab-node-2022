import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Uma notificação');

    expect(content).toBeTruthy();
  });

  it('should be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Uma')).toThrow();
  });

  it('should be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
