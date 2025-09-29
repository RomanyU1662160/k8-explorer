export const dependencyInjectionCode = `

// Dependency Injection
// what is Dependency Injection?
// Dependency Injection is a design pattern that allows us to inject the dependencies of a class into it.

// Why 
// If we want to change the email service, we need to change the UserService class.
// This is not a good practice because it violates the Open/Closed Principle.
// The Open/Closed Principle states that a class should be open for extension but closed for modification.
// In this case, we are modifying the UserService class to change the email service.

// How to implement Dependency Injection?
// 1- Define the dependencies interface
// 2- Implement the dependencies
// 3- Inject the dependencies into the class

// Example

// 1- Define the dependencies interface
interface IEmailService{
    sendEmail(email: string, subject: string, body: string): void;
}

// 2- Implement the dependencies
class EmailService implements IEmailService{
    sendEmail(email: string, subject: string, body: string): void {
        console.log(\`Sending email to \${email}\ with subject \${subject} and body \${body}\`);
    }
}

// 3- Inject the dependencies into the class using the constructor
class UserService {
    private emailService: IEmailService;
    constructor(emailService: IEmailService){
        this.emailService = emailService;
    }

    registerUser(email: string, password:string){
        this.emailService.sendEmail(email, "Welcome to our app", "You are registered successfully");
    }
}

// 4- Use the class
const emailService = new EmailService();
const userService = new UserService(emailService);

// 5- Use the class
userService.registerUser("test@test.com", "123456");


// ----------------------------------------------------
// Another Example usage
// ----------------------------------------------------

interface IPaymentProcessor {
  processPayment(amount: number): boolean;
}

// 2- Implement the dependencies
interface IInventoryService {
  reserveItem(itemId: string): boolean;
}

// 3- Inject the dependencies into the class using the constructor
class OrderService {
  constructor(
    private paymentProcessor: IPaymentProcessor,
    private inventoryService: IInventoryService
  ) {}
  
  processOrder(itemId: string, amount: number) {
    if (this.inventoryService.reserveItem(itemId)) {
      return this.paymentProcessor.processPayment(amount);
    }
    return false;
  }
}

// 4- Different implementations can be injected
class StripePaymentProcessor implements IPaymentProcessor {
  processPayment(amount: number) { /* Stripe logic */ return true; }
}

// 5- Different implementations can be injected
class PayPalPaymentProcessor implements IPaymentProcessor {
  processPayment(amount: number) { /* PayPal logic */ return true; }
}


`