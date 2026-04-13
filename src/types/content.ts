export type Testimonial = {
  id: string;
  name: string;
  role: string;
  audience: "professional" | "patient" | "partner";
  content: string;
  rating: number;
  avatar?: string;
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
};

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type StepItem = {
  step: number;
  title: string;
  description: string;
  icon: string;
};
