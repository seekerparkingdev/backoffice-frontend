import { Menu } from "./components/Menu";
function Layout({ children }) {
  return (
    <div className="flex">
      {/* Menú siempre visible */}
      <Menu />

      {/* Contenido principal */}
      <main className="ml-64 flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}

export { Layout };