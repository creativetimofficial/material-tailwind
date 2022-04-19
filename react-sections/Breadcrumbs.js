import Breadcrumbs from "components/Breadcrumbs";

export default function BreadcrumbsNav() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Breadcrumbs</h2>
      <div>
        <Breadcrumbs className="mb-2">
          <a href="#" className="opacity-60">
            Pages
          </a>
          <a href="#" className="opacity-60">
            Dashboards
          </a>
          <a href="#" disabled>
            Default
          </a>
        </Breadcrumbs>
        <Breadcrumbs separator="-" className="mb-2">
          <a href="#" className="opacity-60">
            Pages
          </a>
          <a href="#" className="opacity-60">
            Dashboards
          </a>
          <a href="#" disabled>
            Default
          </a>
        </Breadcrumbs>
        <Breadcrumbs className="mb-2">
          <a href="#" className="opacity-60">
            🍔 Pages
          </a>
          <a href="#" className="opacity-60">
            🍟 Dashboards
          </a>
          <a href="#" disabled>
            🍕 Default
          </a>
        </Breadcrumbs>
        <Breadcrumbs fullWidth>
          <a href="#" className="opacity-60">
            🍔 Pages
          </a>
          <a href="#" className="opacity-60">
            🍟 Dashboards
          </a>
          <a href="#" disabled>
            🍕 Default
          </a>
        </Breadcrumbs>
      </div>
    </div>
  );
}
