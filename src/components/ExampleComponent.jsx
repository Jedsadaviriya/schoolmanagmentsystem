export default function ExampleComponent() {
  return (
    <div className="p-4 bg-content2 text-content2-foreground rounded">
      <p>Dies ist eine Beispiel-Komponente.</p>
      <div className="mt-2 p-2 bg-success-500 text-success-foreground rounded">Erfolg!</div>
      <div className="mt-2 p-2 bg-warning-500 text-warning-foreground rounded">Warnung!</div>
      <div className="mt-2 p-2 bg-danger-500 text-danger-foreground rounded">Fehler!</div>
    </div>
  );
}