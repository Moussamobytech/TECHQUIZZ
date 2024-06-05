import { AppRegistry } from 'react-native';
import App from './App'; // Assurez-vous que le chemin est correct vers votre composant principal
import { name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
