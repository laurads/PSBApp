import {API} from 'aws-amplify';

export function getCompaniesText(){
    return API.get('DESCRIPTIONCRUD','/DESCRIPTION/COMPANIES_TEXT')
}