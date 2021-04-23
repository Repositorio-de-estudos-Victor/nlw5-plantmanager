import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import * as Notifications from 'expo-notifications'

import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    // Listener de notificação

    // const subscription = Notifications.addNotificationReceivedListener(
    //   async notification => {
    //     const data = notification.request.content.data.plant as PlantProps;
    //     console.log(data);
    //   });

    //   return () => subscription.remove();

    // Recupera todas as notificações

    // async function notifications() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log(data)
    // }

    // notifications();

    // Cancelar todas notificações

    // async function notifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync();
    // }

    // notifications();
  }, [])

  if(!fontsLoaded) {
    return(
      <AppLoading />
    )
  }

  return (
    <Routes />
  )
}
