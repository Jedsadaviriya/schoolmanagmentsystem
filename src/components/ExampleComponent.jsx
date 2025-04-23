export default function ExampleComponent() {
  return (
    <div className="p-6 bg-background text-foreground rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-primary-500 mb-4">Beispiel-Komponente</h2>
      <div className="space-y-4">
        <div className="p-4 bg-success-500 text-success-foreground rounded">Erfolg: Dies ist ein erfolgreiches Element!</div>
        <div className="p-4 bg-warning-500 text-warning-foreground rounded">Warnung: Dies ist eine Warnung!</div>
        <div className="p-4 bg-danger-500 text-danger-foreground rounded">Fehler: Dies ist ein Fehler!</div>
        <div className="p-4 bg-content1 text-content1-foreground rounded">Content1: Dies ist ein neutrales Element.</div>
      </div>
    </div>
  );
}