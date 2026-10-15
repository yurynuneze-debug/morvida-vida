# Mordida Viva — tienda demo de snacks saludables

Aplicación responsive para explorar snacks, filtrar el catálogo, añadir productos a una bolsa, completar datos de entrega y consultar pedidos de demostración.

## Modelo de negocio
- **Producto:** tienda directa de snacks saludables empacados.
- **Audiencia:** personas en Colombia que buscan opciones prácticas para sus pausas.
- **Problema:** encontrar snacks prácticos con ingredientes claros y compra sencilla.
- **Entrega de valor:** catálogo, compra directa, captura de dirección y seguimiento básico.
- **Monetización:** venta por producto. Precios ilustrativos en COP.
- **Idioma/país:** español / Colombia.
- **Importante:** checkout y pedidos son simulados; no hay pagos ni despachos reales.

## Stack
Vite, React 18, TypeScript strict, Tailwind CSS 3, React Router 6, TanStack Query 5, Sonner, Framer Motion, Lucide React, Recharts disponible para futuras métricas de negocio justificadas, shadcn/ui dependencies, Supabase client.

## Ejecutar
Requiere Node.js 18+.

```bash
npm install
npm run dev
```

Para comprobar la compilación:
```bash
npm run build
```

## Rutas
- `/` — inicio, propuesta de valor y favoritos.
- `/productos` — catálogo con búsqueda y filtros.
- `/carrito` — cantidades, eliminación y resumen.
- `/finalizar` — captura de datos de entrega y creación de pedido demo.
- `/pedidos` — historial local de pedidos.

Los pedidos se guardan en `localStorage` del navegador. No existe autenticación activa ni persistencia multiusuario en esta versión demo.

## Conectar Supabase
1. Crea un proyecto en Supabase.
2. Configura las variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en tu entorno local. No uses una `service_role` en el navegador.
3. Ejecuta `supabase/migrations/202610150001_mordida_viva.sql` en el SQL Editor.
4. Conecta el catálogo y los pedidos a la base de datos, habilita Auth y configura Storage para imágenes de producto.
5. Antes de producción, crea un flujo confiable para asignar `user_roles`; nunca permitas que un usuario se asigne el rol `admin`.
6. Recalcula precios y total en servidor/Edge Function, valida existencias, añade protección contra spam y conecta un proveedor de pago si se desea cobrar online.

## Estados contemplados
- Sin productos/pedidos: mensaje que invita a explorar el catálogo.
- Cargando historial: skeleton.
- Error de formulario: aviso Sonner.
- Pedido de demo: estado `Recibido`.
- RLS: políticas iniciales por usuario y función `has_role`.

## Datos
Los nombres, precios y productos son datos de ejemplo que deben verificarse y ajustarse al catálogo real del negocio antes de publicar.
