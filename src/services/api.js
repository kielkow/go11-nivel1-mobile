import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * iOS Emulator: localhost
 * iOS device: IP device
 * Android emulator: localhost (adb rever tcp:3333 tcp:3333)
 * Android emulator: 10.0.2.2 (Android Studio)
 * Android emulator: 10.0.3.2 (Genymotion)
 * Android device: IP device
 */