import Link from "next/link";

function NotFound() {
  return (
    <div className="text-center mt-12">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link key="home" href="/" rel="noopener noreferrer">Go back to Home</Link>
    </div>
  );
}
export default NotFound;