export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white">
        <div className="animate-pulse bg-white rounded-full h-3 w-3" />
      </div>
    </div>
  );
}
