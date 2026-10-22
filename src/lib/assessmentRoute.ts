export function isAssessmentPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return (
    pathname.includes("/questionario") || pathname.endsWith("/avaliacao")
  );
}
