export const SingletonPatternCode = `


// How to create a Singleton class: 
 // 1- define a class with a private static instance property
 // 2- label the constructor as private or throw an error to notify the user to use get instance.
 //  3- create a static getInstance method.
 

 export class DBConnection {
  private static instance: DBConnection;
  private DbURl: string = 'mongoDB:Url//';

  // 2- throw an error or label as private constructor to prevent new instances
  constructor() {
      throw new Error(
        'Use Singleton.getInstance() to get the single instance of this class.'
      );
  }

  // 3- static getInstance method
  static getInstance() {
    if (!DBConnection.instance) {
     return DBConnection.instance = new DBConnection();
    }
    return DBConnection.instance;
  }

  connectToDB() {
    console.log('Connected to DB');
  }
}

const dbConnection1 = DBConnection.getInstance();
dbConnection1.connectToDB();

const dbConnection2 = DBConnection.getInstance();
dbConnection2.connectToDB();

// will throw an error and notify the user to use the static getInstance method
const dbConnection3 = new DBConnection();
dbConnection3.connectToDB();
`;
