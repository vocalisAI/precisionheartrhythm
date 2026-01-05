import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ marginBottom: "2rem" }}>Page Not Found</h2>
      <p style={{ maxWidth: "500px", marginBottom: "2rem", color: "var(--color-text-light)" }}>
        We couldn&apos;t find the page you were looking for. It might have been moved or removed.
      </p>
      <Button href="/" variant="primary">Return Home</Button>
    </div>
  );
}
