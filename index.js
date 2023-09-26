const { ApolloServer, gql } = require("apollo-server");
const { v4: uuidv4 } = require("uuid");

// Mock data
const employees = [
  {
    id: uuidv4(),
    name: "John Doe",
    primaryAddress: "123 Main Street",
    primaryContactInfo: "555-123-4567",
    age: 30,
    yearsInCompany: 5,
  },
  {
    id: uuidv4(),
    name: "Martin Jaycy Halum",
    primaryAddress:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    primaryContactInfo: "09267515599",
    age: 33,
    yearsInCompany: 0,
  },
  {
    id: uuidv4(),
    name: "John Doe",
    primaryAddress: "123 Main Street",
    primaryContactInfo: "555-123-4567",
    age: 30,
    yearsInCompany: 5,
  },
  {
    id: uuidv4(),
    name: "John Doe",
    primaryAddress: "123 Main Street",
    primaryContactInfo: "555-123-4567",
    age: 30,
    yearsInCompany: 5,
  },
  {
    id: uuidv4(),
    name: "John Doe",
    primaryAddress: "123 Main Street",
    primaryContactInfo: "555-123-4567",
    age: 30,
    yearsInCompany: 5,
  },
  {
    id: uuidv4(),
    name: "John Doe",
    primaryAddress: "123 Main Street",
    primaryContactInfo: "555-123-4567",
    age: 30,
    yearsInCompany: 5,
  },
  {
    id: uuidv4(),
    name: "John Doe",
    primaryAddress: "123 Main Street",
    primaryContactInfo: "555-123-4567",
    age: 30,
    yearsInCompany: 5,
  },
  {
    id: uuidv4(),
    name: "Martin Jaycy Halum",
    primaryAddress:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    primaryContactInfo: "09267515599",
    age: 33,
    yearsInCompany: 0,
  },
  {
    id: uuidv4(),
    name: "John Doe",
    primaryAddress: "123 Main Street",
    primaryContactInfo: "555-123-4567",
    age: 30,
    yearsInCompany: 5,
  },
  {
    id: uuidv4(),
    name: "John Doe",
    primaryAddress: "123 Main Street",
    primaryContactInfo: "555-123-4567",
    age: 30,
    yearsInCompany: 5,
  },
  {
    id: uuidv4(),
    name: "John Doe",
    primaryAddress: "123 Main Street",
    primaryContactInfo: "555-123-4567",
    age: 30,
    yearsInCompany: 5,
  },
  {
    id: uuidv4(),
    name: "Martin Jaycy Halum",
    primaryAddress:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    primaryContactInfo: "09267515599",
    age: 33,
    yearsInCompany: 0,
  },
];

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    primaryAddress: String!
    primaryContactInfo: String!
    age: Int!
    yearsInCompany: Int!
  }

  type Total {
    total: Int!
  }

  type Query {
    getAllEmployees: [Employee]!
    employees(limit: Int!, offset: Int!): [Employee]!
    employee(id: ID!): Employee
    employeeTotal: Total
  }

  type Mutation {
    addEmployee(
      name: String!
      primaryAddress: String!
      primaryContactInfo: String!
      age: Int!
      yearsInCompany: Int!
    ): Employee
    editEmployee(
      id: ID!
      name: String!
      primaryAddress: String!
      primaryContactInfo: String!
      age: Int!
      yearsInCompany: Int!
    ): Employee
    deleteEmployee(id: ID!): Employee
  }
`;

const resolvers = {
  Query: {
    getAllEmployees: () => employees,
    employees: (parent, { limit, offset }) => {
      const startIndex = offset;
      const endIndex = offset + limit;
      const paginatedEmployees = employees.slice(startIndex, endIndex);
      return paginatedEmployees;
    },
    employee: (parent, args) =>
      employees.find((employee) => employee.id === args.id),
    employeeTotal: () => {
      const total = employees.length || 0;
      return { total: total };
    },
  },
  Mutation: {
    addEmployee: (parent, args) => {
      const newEmployee = {
        id: (employees.length + 1).toString(),
        ...args,
      };
      employees.push(newEmployee);
      return newEmployee;
    },
    editEmployee: (parent, args) => {
      const index = employees.findIndex((employee) => employee.id === args.id);
      if (index !== -1) {
        employees[index] = { ...employees[index], ...args };
        return employees[index];
      }
      return null;
    },
    deleteEmployee: (parent, args) => {
      const index = employees.findIndex((employee) => employee.id === args.id);
      if (index !== -1) {
        const deletedEmployee = employees.splice(index, 1)[0];
        return deletedEmployee;
      }
      return null;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
