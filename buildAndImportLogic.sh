cd ../RailsModel
npm test
read -p "Verify test results"
rm *.tgz
npm pack
cd ../RailsWeb
npm i ../RailsModel/railsmodel-$1.tgz
read -p "Start CRA dev server"
npm run start
