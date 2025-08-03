import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Eye } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { RecentUser } from "./types";

export function RecentUsersCard({
  recentUsers,
}: {
  recentUsers: RecentUser[];
}) {
  const getInitials = (firstName: string, lastName: string) =>
    `${firstName[0] || ""}${lastName[0] || ""}`.toUpperCase();

  const formatTimeAgo = (date: string) => {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: es,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Usuarios Recientes
        </CardTitle>
        <CardDescription>Últimos usuarios registrados</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">
                {getInitials(user.firstName, user.lastName)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{`${user.firstName} ${user.lastName}`}</p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
            <div className="text-right">
              <Badge variant="outline" className="text-xs">
                {user.role}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">
                {formatTimeAgo(user.createdAt)}
              </p>
            </div>
          </div>
        ))}
        <div className="pt-2 border-t">
          <Link href="/users" className="w-full">
            <Button
              variant="outline"
              size="sm"
              className="w-full bg-transparent"
            >
              <Eye className="h-3 w-3 mr-2" />
              Ver Todos los Usuarios
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
