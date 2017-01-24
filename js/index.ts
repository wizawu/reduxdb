/// <reference path="db.ts" />

namespace reduxdb {
    const dbs: Map<string, DB> = new Map()

    export function use(name: string): DB {
        if (!dbs.has(name)) dbs.set(name, new DB(name))
        return dbs.get(name)
    }
}

declare var module
module.exports = reduxdb