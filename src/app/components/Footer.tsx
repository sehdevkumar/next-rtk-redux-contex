export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 p-4 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Next.js RTK Redux Context Example
      </p>
    </footer>
  );
}
