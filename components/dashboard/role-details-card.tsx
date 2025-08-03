import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Eye } from "lucide-react";
import Link from "next/link";
import { RoleStat } from "./types";
import { ROLE_VARIANTS } from "@/lib/dashboard";

export function RoleDetailsCard({ roleStats }: { roleStats: RoleStat[] }) {
  const getRoleColor = (slug: string) => {
    if (slug === "admin") return ROLE_VARIANTS.admin;
    if (slug === "editor") return ROLE_VARIANTS.editor;
    return ROLE_VARIANTS.default;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          Roles del Sistema
        </CardTitle>
        <CardDescription>Distribución detallada por rol</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {roleStats.map((role) => (
          <div key={role.id} className="flex items-center justify-between">
            <Badge variant={getRoleColor(role.slug)}>{role.name}</Badge>
            <div className="text-right">
              <div className="font-medium">{role.userCount}</div>
              <div className="text-xs text-muted-foreground">
                {role.percentage}%
              </div>
            </div>
          </div>
        ))}
        <div className="pt-2 border-t">
          <Link href="/roles" className="w-full">
            <Button
              variant="outline"
              size="sm"
              className="w-full bg-transparent"
            >
              <Eye className="h-3 w-3 mr-2" />
              Gestionar Roles
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
