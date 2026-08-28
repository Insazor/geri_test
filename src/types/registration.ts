export interface RegistrationData {
  name: string;
  email: string;
  organization: string;
  purpose: string;
}

export interface RegistrationRecord extends RegistrationData {
  id: string;
  created_at: string;
}
