class Person {
    private originalName: string; // Private property to store the original name
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.originalName = `${firstName} ${lastName}`;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getOriginalName(): string {
      return this.originalName;
    }
  }
  
  const person1 = new Person("John", "Doe");
  
  console.log(person1.getFullName()); // "John Doe"
  console.log(person1.getOriginalName()); // "John Doe"
  