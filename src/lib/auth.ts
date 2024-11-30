export interface User {
  id: number;
  email: string;
  name: string;
  role: 'USER' | 'ADMIN' | 'STAFF';
}

// Sample users for testing
export const users: User[] = [
  {
    id: 1,
    email: 'admin@tekrem.com',
    name: 'Admin User',
    role: 'ADMIN',
  },
  {
    id: 2,
    email: 'staff@tekrem.com',
    name: 'Staff User',
    role: 'STAFF',
  },
];

export const validateCredentials = (email: string, password: string): User | null => {
  // For testing purposes, any password works with the test emails
  const user = users.find(u => u.email === email);
  return user || null;
};