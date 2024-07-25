import { observerCode } from '../design-patterns-code/observer';

export const designPatterns = {
  Behavioral: [
    {
      id: '1',
      category: 'Behavioral Patterns',
      title: 'observer Pattern',
      description:
        'The Observer pattern suggests that you add a subscription mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher. Fear not! Everything isn’t as complicated as it sounds. In reality, this mechanism consists of 1) an array field for storing a list of references to subscriber objects and 2) several public methods which allow adding subscribers to and removing them from that list.',
      code: observerCode,
    },
  ],
  Creational: [
    {
      id: '2',
      category: 'Creational Patterns',
      title: 'Singleton Pattern',
      description: 'Singleton Pattern',
      code: 'Singleton Pattern',
    },
  ],
};
