import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";



export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
  if (!schematicPubKey) {
    throw new Error("Missing Schematic Publishable Key");
  }



  return (
   <ClerkProvider>
    <SchematicProvider publishableKey={schematicPubKey}>
      {children}
      </SchematicProvider>
   </ClerkProvider>
  );
}
