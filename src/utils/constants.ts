// Constantes de la aplicación

// Rutas de la API
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Constantes de la aplicación
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Dashboard Miranda';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';

// Estados de reservas
export const BOOKING_STATUS = {
  CHECK_IN: 'Check In',
  CHECK_OUT: 'Check Out',
  IN_PROGRESS: 'In Progress',
} as const;

// Estados de habitaciones
export const ROOM_STATUS = {
  AVAILABLE: 'Available',
  BOOKED: 'Booked',
  MAINTENANCE: 'Maintenance',
} as const;

// Tipos de cama
export const BED_TYPES = {
  SINGLE: 'Single Bed',
  DOUBLE: 'Double Bed',
  DOUBLE_SUPERIOR: 'Double Superior',
  SUITE: 'Suite',
} as const;

// Estados de usuario
export const USER_STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
} as const;

// Roles de usuario
export const USER_ROLES = {
  ADMIN: 'Admin',
  MANAGER: 'Manager',
  RECEPTIONIST: 'Receptionist',
} as const;

// Rutas de navegación
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  ROOMS: '/rooms',
  NEW_ROOM: '/rooms/NewRoom',
  BOOKING: '/booking',
  NEW_BOOKING: '/booking/NewBookin',
  USERS: '/users',
  CONTACT: '/contact',
} as const;

// Credenciales de prueba
export const TEST_CREDENTIALS = {
  EMAIL: 'admin@miranda.com',
  PASSWORD: 'admin123',
  NAME: 'Admin User',
} as const;

// Paginación
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZES: [5, 10, 20, 50],
} as const;

// Mensajes
export const MESSAGES = {
  SUCCESS: {
    CREATED: 'Creado correctamente',
    UPDATED: 'Actualizado correctamente',
    DELETED: 'Eliminado correctamente',
    LOGIN: 'Inicio de sesión exitoso',
    LOGOUT: 'Sesión cerrada correctamente',
  },
  ERROR: {
    GENERIC: 'Ha ocurrido un error',
    NETWORK: 'Error de conexión',
    UNAUTHORIZED: 'No autorizado',
    NOT_FOUND: 'No encontrado',
    VALIDATION: 'Error de validación',
  },
  CONFIRM: {
    DELETE: '¿Estás seguro de que deseas eliminar este elemento?',
    LOGOUT: '¿Estás seguro de que deseas cerrar sesión?',
  },
} as const;

// Colores del tema
export const COLORS = {
  PRIMARY: '#135846',
  PRIMARY_DARK: '#0e4034',
  SECONDARY: '#E23428',
  SUCCESS: '#5AD07A',
  WARNING: '#FFB74D',
  INFO: '#2196F3',
  LIGHT: '#f8f8f8',
  WHITE: '#FFFFFF',
  DARK: '#262626',
  GRAY: '#799283',
  GRAY_LIGHT: '#f5f5f5',
  BORDER: '#ebebeb',
} as const;

