import { EventCreationModule } from './event-creation.module';

describe('EventCreationModule', () => {
  let eventCreationModule: EventCreationModule;

  beforeEach(() => {
    eventCreationModule = new EventCreationModule();
  });

  it('should create an instance', () => {
    expect(eventCreationModule).toBeTruthy();
  });
});
