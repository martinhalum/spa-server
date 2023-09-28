const { ApolloServer, gql } = require("apollo-server");
const { v4: uuidv4 } = require("uuid");

// Mock data
const employees = [
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",
    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",
    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",

    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",

    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",

    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",

    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",

    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",

    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",

    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
  {
    id: uuidv4(),
    first_name: "Martin Jaycy",
    last_name: "Halum",
    middle_name: "De Guzman",
    birthday: "12/19/1989",
    gender: "Male",
    marital_status: "Married",
    position: "Developer",
    date_hired: "09/18/2023",

    primary_number: "09267515599",
    other_number: ["09696230001", "09761674246"],
    primary_address:
      "Blk4 Lot7 Bronze Meadow St, Westernvill Sapphire Brgy Tagpos, Binangonan Rizal",
    other_address: [
      "#14 Purok 2 Marasat Pequeno San Mateo Isabela",
      "29-41 BNR Compound Gov Pascual Ave Malabon City",
    ],
  },
];

const typeDefs = gql`
  type Employee {
    id: ID!
    first_name: String!
    last_name: String!
    middle_name: String
    birthday: String!
    gender: String!
    marital_status: String!
    position: String!
    date_hired: String!
    primary_number: String!
    other_number: [String]
    primary_address: String!
    other_address: [String]
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
      id: ID!
      first_name: String!
      last_name: String!
      middle_name: String
      birthday: String!
      gender: String!
      marital_status: String!
      position: String!
      date_hired: String!
      primary_number: String!
      other_number: [String]
      primary_address: String!
      other_address: [String]
    ): Employee
    editEmployee(
      id: ID!
      first_name: String!
      last_name: String!
      middle_name: String
      birthday: String!
      gender: String!
      marital_status: String!
      position: String!
      date_hired: String!
      primary_number: String!
      other_number: [String]
      primary_address: String!
      other_address: [String]
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
        id: uuidv4(),
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
