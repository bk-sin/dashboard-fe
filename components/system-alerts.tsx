"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, Shield, Activity } from "lucide-react";
import Link from "next/link";

interface SystemAlertsProps {
  blockedUsers: number;
  unverifiedUsers: number;
  failedLogins: number;
}

export function SystemAlerts({
  blockedUsers,
  unverifiedUsers,
  failedLogins,
}: SystemAlertsProps) {
  const alerts = [];

  if (blockedUsers > 0) {
    alerts.push({
      id: "blocked-users",
      title: "Usuarios Bloqueados",
      description: `${blockedUsers} usuarios están bloqueados y requieren revisión`,
      severity: "warning" as const,
      icon: Users,
      action: "Ver Usuarios Bloqueados",
      href: "/users?status=blocked",
    });
  }

  if (unverifiedUsers > 10) {
    alerts.push({
      id: "unverified-users",
      title: "Usuarios Sin Verificar",
      description: `${unverifiedUsers} usuarios no han verificado su email`,
      severity: "info" as const,
      icon: Shield,
      action: "Ver Usuarios Sin Verificar",
      href: "/users?status=unverified",
    });
  }

  if (failedLogins > 50) {
    alerts.push({
      id: "failed-logins",
      title: "Intentos de Login Fallidos",
      description: `${failedLogins} intentos fallidos hoy - posible actividad sospechosa`,
      severity: "error" as const,
      icon: Activity,
      action: "Ver Logs de Seguridad",
      href: "/security/logs",
    });
  }

  if (alerts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Shield className="h-5 w-5" />
            Sistema Saludable
          </CardTitle>
          <CardDescription>
            No hay alertas que requieran atención inmediata
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          Alertas del Sistema
        </CardTitle>
        <CardDescription>Elementos que requieren tu atención</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div
              key={alert.id}
              className="flex items-center justify-between p-4 border rounded-lg bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{alert.title}</h4>
                    <Badge
                      variant={
                        alert.severity === "error"
                          ? "destructive"
                          : alert.severity === "warning"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {alert.severity === "error"
                        ? "Crítico"
                        : alert.severity === "warning"
                          ? "Advertencia"
                          : "Info"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {alert.description}
                  </p>
                </div>
              </div>
              <Link href={alert.href}>
                <Button variant="outline" size="sm">
                  {alert.action}
                </Button>
              </Link>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
