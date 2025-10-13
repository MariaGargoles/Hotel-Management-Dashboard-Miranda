# 🏨 Dashboard Miranda - Sistema de Gestión Hotelera

Dashboard profesional para la gestión integral de un hotel, desarrollado con React, TypeScript, Redux Toolkit y Styled Components.

## 📋 Descripción

Dashboard Miranda es una aplicación web moderna diseñada para facilitar la gestión diaria de un hotel. Incluye módulos para administrar reservas, habitaciones, usuarios del sistema, mensajes de contacto y visualización de KPIs relevantes.

## ✨ Características Principales

- 🔐 **Sistema de Autenticación**: Login seguro con persistencia de sesión
- 📊 **Dashboard con KPIs**: Visualización de métricas clave del hotel
- 🏠 **Gestión de Habitaciones**: CRUD completo de habitaciones
- 📅 **Gestión de Reservas**: Administración de bookings con estados
- 👥 **Gestión de Usuarios**: Control de usuarios del sistema
- 💬 **Mensajes de Contacto**: Visualización y gestión de consultas
- 📱 **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos
- 🎨 **UI Moderna**: Interfaz elegante con Styled Components

## 🚀 Tecnologías Utilizadas

### Frontend

- **React 18.3** - Biblioteca de UI
- **TypeScript 5.5** - Tipado estático
- **Redux Toolkit 2.2** - Gestión de estado global
- **React Router DOM 6** - Navegación y enrutamiento
- **Styled Components 6** - Estilos CSS-in-JS
- **Vite 5** - Build tool y dev server

### Librerías Adicionales

- **Axios** - Cliente HTTP para API calls
- **React Icons** - Iconos
- **SweetAlert2** - Alertas y modales elegantes
- **React Toastify** - Notificaciones toast
- **Swiper** - Carrusel de imágenes
- **date-fns** - Manipulación de fechas

### Testing

- **Jest** - Framework de testing
- **Testing Library** - Testing de componentes React
- **Cypress** - Testing E2E

## 📦 Instalación

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/Dashboard_Miranda.git
cd Dashboard_Miranda
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
# Crear archivo .env basado en .env.example
cp .env.example .env
```

4. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
Dashboard_Miranda/
├── src/
│   ├── app/              # Configuración de Redux store
│   ├── assets/           # Imágenes y recursos estáticos
│   ├── components/       # Componentes reutilizables
│   │   ├── BookingComponent/
│   │   ├── ContactComponent/
│   │   ├── FormLoginComponent/
│   │   ├── KPIComponent/
│   │   ├── NavbarComponent/
│   │   ├── PopUpEditBookinComponent/
│   │   ├── PopUpEditRoom/
│   │   ├── PopUpEditUserComponent/
│   │   ├── PopUpUserComponent/
│   │   ├── ReviewsComponent/
│   │   ├── RoomComponent/
│   │   ├── TableComponent/
│   │   └── UsersComponent/
│   ├── context/          # Context API y autenticación
│   ├── features/         # Redux slices y thunks
│   │   ├── Booking/
│   │   ├── Connect API/
│   │   ├── Messages/
│   │   ├── Room/
│   │   └── Users/
│   ├── layouts/          # Layouts de la aplicación
│   │   └── MainLayout.tsx
│   ├── pages/            # Páginas principales
│   │   ├── Booking/
│   │   ├── Contact/
│   │   ├── Dashboard/
│   │   ├── Room/
│   │   └── Users/
│   ├── types/            # Definiciones de TypeScript
│   └── main.tsx          # Punto de entrada
├── cypress/              # Tests E2E
├── dist/                 # Build de producción
├── public/               # Archivos públicos
└── ...archivos de configuración

```

## 🎯 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Build
npm run build        # Compila TypeScript y construye para producción
npm run preview      # Preview del build de producción

# Testing
npm run test         # Ejecuta tests con Jest
npx cypress open     # Abre Cypress para testing E2E

# Linting
npm run lint         # Ejecuta ESLint
```

## 🔑 Credenciales de Prueba

Para acceder al dashboard en modo desarrollo:

- **Email**: admin@miranda.com
- **Contraseña**: admin123

## 🌟 Características Técnicas

### Arquitectura

- **Patrón de diseño**: Componentes funcionales con Hooks
- **Gestión de estado**: Redux Toolkit con slices modulares
- **Routing**: React Router v6 con rutas protegidas
- **Estilos**: Styled Components con tematización
- **Tipado**: TypeScript estricto

### Optimizaciones

- Code splitting por rutas
- Lazy loading de componentes
- Memoización con React.memo
- Optimización de re-renders
- Assets optimizados

### Seguridad

- Rutas protegidas con ProtectedRoute
- Autenticación con JWT (preparado para API)
- Validación de formularios
- Sanitización de inputs

## 📱 Módulos del Sistema

### 1. Dashboard

- KPIs de ocupación y reservas
- Gráficos y estadísticas
- Resumen de reseñas recientes

### 2. Habitaciones (Rooms)

- Lista completa de habitaciones
- Crear nuevas habitaciones
- Editar información de habitaciones
- Gestión de disponibilidad

### 3. Reservas (Bookings)

- Calendario de reservas
- Gestión de check-in/check-out
- Detalles de huéspedes
- Estados de reserva

### 4. Usuarios

- Administración de usuarios del sistema
- Roles y permisos
- Información de contacto

### 5. Contacto

- Mensajes de clientes
- Gestión de consultas
- Archivo de mensajes

## 🔄 API Integration

El proyecto está preparado para integrarse con una API REST. La configuración se encuentra en:

```typescript
src/features/Connect API/
```

Endpoints esperados:

- `GET/POST/PUT/DELETE /api/rooms` - Gestión de habitaciones
- `GET/POST/PUT/DELETE /api/bookings` - Gestión de reservas
- `GET/POST/PUT/DELETE /api/users` - Gestión de usuarios
- `GET /api/messages` - Mensajes de contacto

## 🎨 Personalización

### Temas y Estilos

Los estilos globales y temas se pueden personalizar en cada componente styled. Se recomienda crear un archivo de tema global en el futuro.

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Dashboard Miranda
```

## 🧪 Testing

### Tests Unitarios (Jest)

```bash
npm run test
```

### Tests E2E (Cypress)

```bash
npx cypress open
```

## 📝 Notas de Desarrollo

- El proyecto utiliza **ESLint** para mantener calidad de código
- Se recomienda usar **Prettier** para formateo consistente
- Los commits deben seguir [Conventional Commits](https://www.conventionalcommits.org/)

## 🚧 Próximas Mejoras

- [ ] Integración completa con API backend
- [ ] Sistema de notificaciones en tiempo real
- [ ] Exportación de reportes en PDF
- [ ] Módulo de facturación
- [ ] Dashboard analítico avanzado
- [ ] Modo oscuro
- [ ] Internacionalización (i18n)
- [ ] PWA support

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está bajo licencia propietaria.

## 📧 Contacto

Para preguntas o soporte, contacta a través de [tu-email@ejemplo.com]

---

**Desarrollado con ❤️ para Hotel Miranda**
