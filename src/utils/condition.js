export function condition(condition){
    switch(condition){
      case 'storm': 
        return icon = {
          name: 'rainy-outline',
          color: '#1ec9ff'
        };
        break;
      case 'clear_day': 
        return icon = {
          name: 'partly-sunny-outline',
          color: '#ffb300'
        };
        break;
      case 'rain': 
        return icon = {
          name: 'rainy-outline',
          color: '#1ec9ff'
        };
        break;
      default:
        return icon = {
          name: 'cloud-outline',
          color: '#1ec9ff'
        };
    }
  }
  
  export function condition_slug(condition){
    switch(condition){
      case 'clear_day': 
        return icon = {
          name: 'partly-sunny',
          color: '#ffb300'
        };
        break;
      case 'rain': 
        return icon = {
          name: 'rainy',
          color: '#fff'
        };
        break;
      case 'storm': 
        return icon = {
          name: 'rainy',
          color: '#fff'
        };
        break;
      default:
        return icon = {
          name: 'cloud',
          color: '#fff'
        };
    }
  }
  