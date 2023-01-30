import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}
// Títulos e destaques
export function TitilliumText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "titillium" }]} />;
}

// SUBTÍTULOS E TEXTOS CURTOS
export function ChulaNarakText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "chula-narak" }]} />
  );
}
// Fonte para corpo de texto comum e longo.
export function SimonettaText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "simonetta" }]} />;
}
