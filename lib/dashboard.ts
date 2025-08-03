export const ROLE_VARIANTS = {
  admin: "destructive",
  editor: "secondary",
  default: "default",
} as const;

export const ROLE_PERMISSIONS = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  user: ["read"],
} as const;
