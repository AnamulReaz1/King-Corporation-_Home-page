export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center flex-col">
      <h1 className="text-4xl text-red-500 font-bold mb-4">Shop Not Found</h1>
      <p className="text-lg text-zinc-300">
        {"Sorry, we couldn't find that shop."}
      </p>
    </div>
  );
}
