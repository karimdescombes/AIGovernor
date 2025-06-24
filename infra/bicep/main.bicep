
param location string = resourceGroup().location
param name string = 'aigovernor${uniqueString(resourceGroup().id)}'

resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: name
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryUrl: 'https://github.com/karimdescombes/AIGovernor'
    branch: 'main'
    buildProperties: {
      appLocation: '/'
      outputLocation: 'dist'
    }
  }
}
