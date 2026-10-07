/* Preparado para Firebase Cloud Messaging. Para push remoto agrega la clave VAPID en index.html y configura el envio seguro desde Cloud Functions o un servidor. */
importScripts('https://www.gstatic.com/firebasejs/12.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.4.0/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:'AIzaSyDEN0sX4mJacYQSNcuIc2xMMUlgy3rfFQU',authDomain:'project-2998039825269712276.firebaseapp.com',projectId:'project-2998039825269712276',storageBucket:'project-2998039825269712276.firebasestorage.app',messagingSenderId:'401905115506',appId:'1:401905115506:web:b4a36539d945bd8849fdeb'});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(payload=>{const n=payload.notification||{};self.registration.showNotification(n.title||'Sistema de Biblioteca',{body:n.body||'Tienes una nueva alerta.',icon:'./icon.svg',data:payload.data||{}})});
