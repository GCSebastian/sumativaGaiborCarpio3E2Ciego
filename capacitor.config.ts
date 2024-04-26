import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',//raiz.nombreEmpresa.NombreApp
  appName: 'Tem-Meter',
  webDir: 'www',
  plugins: {
    LocalNotifications: {
      smallIcon: "/src/assets/ec1640c224a723afb4c210d282e4d603.ico",//Icono de la app solo para Android
      iconColor: "",//Color de Icono
      sound: "/src/assets/system-notification-199277.mp3",//Sonido de la notificacion solo para Android
    },
  },
};

export default config;
