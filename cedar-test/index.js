import {jsonIsAuthorized, jsonValidate} from "../cedar-ffi/index.js"

import schema from './schema.json' assert { type: 'json' };
import isAuthorizedFile from './isAuthorized.json' assert { type: 'json' };

async function test() {
    console.log(isAuthorizedFile)
    const result = jsonIsAuthorized(JSON.stringify(isAuthorizedFile))
    return result
}

test().then(x => console.log(x))