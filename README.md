#Vu Getting Started

install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

    nvm install node # "node" is an alias for the latest version

    nvm use node    
    npm install -g yarn

Installing vue and vite

    yarn add vue@3.0.7
    yarn add vite@2.1.1 --dev

Run vite

    yarn vite src

Others Projects:

#Form-Validation

    npm install
    yarn vite --config vite.config.js form-validation

#Pokemon

Application fetch data from pokeapi.co

    yarn vite --config vite.config.js pokemon

#component api

Application testing component api and lifecicle of the component

    yarn vite --config vite.config.js component

#microfocus

Testing components and reuse component wih vue3 (reuse card component from pokemon)

    yarn vite --config vite.config.js microblog