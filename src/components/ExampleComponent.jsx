export default function ExampleComponent() {
  return (
    <div className="p-6 bg-content1 text-content1-foreground rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center text-secondary-500">
        <span className="w-2 h-6 bg-secondary-500 rounded mr-2 inline-block"></span>
        Beispiel-Komponente
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-success-500 text-success-foreground rounded">
          <strong>Erfolg:</strong> Dies ist ein erfolgreiches Element!
        </div>
        <div className="p-4 bg-warning-500 text-warning-foreground rounded">
          <strong>Warnung:</strong> Dies ist eine Warnung!
        </div>
        <div className="p-4 bg-danger-500 text-danger-foreground rounded">
          <strong>Fehler:</strong> Dies ist ein Fehler!
        </div>
        <div className="p-4 bg-content2 text-content2-foreground rounded">
          <strong>Content2:</strong> Dies ist ein neutrales Element.
        </div>
      </div>
    </div>
  )
}
