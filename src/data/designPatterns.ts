import { facadePatternCode } from '../code/design-patterns-code/facade';
import { observerPatternCode } from '../code/design-patterns-code/observer';
import { SingletonPatternCode } from '../code/design-patterns-code/singleton';
import { dependencyInjectionCode } from '../code/design-patterns-code/DI';

export const designPatterns = {
  Behavioral: [
    {
      id: '1',
      category: 'Behavioral Patterns',
      title: 'Observer Pattern',
      description:
        'The Observer pattern suggests that you add a subscription mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher. Fear not! Everything isn’t as complicated as it sounds. In reality, this mechanism consists of 1) an array field for storing a list of references to subscriber objects and 2) several public methods which allow adding subscribers to and removing them from that list.',
      code: observerPatternCode,
    },
  ],
  Creational: [
    {
      id: '2',
      category: 'Creational Patterns',
      title: 'Singleton Pattern',
      code: SingletonPatternCode,
      description:
        'The Singleton Pattern ensures that a class has only one single instance. This is useful when we want to control the number of the class instances,  to regulate access to a shared resource, such as a database, logging or file.',
    },
    {
      id: '3',
      category: 'Creational Patterns',
      title: 'Dependency Injection Pattern',
      code: dependencyInjectionCode,
      description:
        'The Dependency Injection Pattern is a design pattern that allows us to inject the dependencies of a class into it.',
    },
  ],
  Structural: [
    {
      id: '4',
      category: 'Structural Patterns',
      title: 'Facade Pattern',
      code: facadePatternCode,
      description:
        'Facade is a structural design pattern. It provides a simplified interface to a library, a framework, or any other complex set of classes,by creating a single API. This hides the underlying interactions, making the code more readable and ensure easy future update.',
    },
  ],
};
