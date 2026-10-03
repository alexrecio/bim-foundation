// Dominio único: www.bimkernel.com y bim-foundation.pages.dev redirigen (301) a https://bimkernel.com con la misma ruta.
// Las vistas previas de rama (<rama>.bim-foundation.pages.dev) no se redirigen.
const DOMINIO = 'bimkernel.com';
const REDIRIGIR = new Set(['www.bimkernel.com', 'bim-foundation.pages.dev']);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (!REDIRIGIR.has(url.hostname)) return next();
  url.hostname = DOMINIO;
  url.protocol = 'https:';
  return Response.redirect(url.toString(), 301);
}
