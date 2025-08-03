export function MetricsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="h-24 bg-gray-200 animate-pulse rounded-lg" />
        ))}
      </div>
      <div className="h-20 bg-gray-200 animate-pulse rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="h-24 bg-gray-200 animate-pulse rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export function ChartsSkeleton() {
  return <div className="h-64 bg-gray-200 animate-pulse rounded-lg" />;
}

export function DetailsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-48 bg-gray-200 animate-pulse rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-32 bg-gray-200 animate-pulse rounded-lg" />
        <div className="h-32 bg-gray-200 animate-pulse rounded-lg" />
      </div>
    </div>
  );
}
