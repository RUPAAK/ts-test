interface Address {
  addr1: string;
  addr2?: string;
  city: string;
  state: string;
  postalCode: number;
  country: string;
  lat?: number;
  lng?: number;
}

enum Role {
  User = "user",
  Manager = "manager",
  Admin = "admin",
  SuperAdmin = "superadmin",
  QuestionManager = "questionManager",
}

enum IsUserVerififed {
  Yes = "Yes",
  No = "No",
}

export { Role, Address, IsUserVerififed };
