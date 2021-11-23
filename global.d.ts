declare module '*.css' {
  const css: { [key: string]: string };
  export default css;
}
declare module '*.html' {
  const html: string;
  export default html;
}
declare module '*.scss' {
  const css: { [key: string]: string };
  export default css;
}
declare module '*.svg';
declare module '*.png';

interface Window {
  modals: HTMLDivElement
  app: HTMLDivElement
  overlay: HTMLDivElement
}