const { execSync } = require( 'child_process' );
require( 'dotenv' ).config();

const { DB_NAME } = process.env;
console.log(DB_NAME);
try {
    execSync( `mongoimport --db ${DB_NAME} --collection meetings --drop --file "${process.cwd()}/data/seed/meetings.json" --jsonArray` );
    execSync( `mongoimport --db ${DB_NAME} --collection teams --drop --file "${process.cwd()}/data/seed/teams.json" --jsonArray` );
    execSync( `mongoimport --db ${DB_NAME} --collection users --drop --file "${process.cwd()}/data/seed/users.json" --jsonArray` );
    console.log( `Imported documents into database ${DB_NAME}` );
} catch( err ) {
    console.log( `Could not import documents into database ${DB_NAME}`);
    console.error( err );
}