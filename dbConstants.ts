import sql from 'mssql'

export const dbConfig: sql.config = {
    "server": "localhost\\SQLEXPRESS",
    "authentication": {
        "type": "default",
        "options": {
            "userName": "sa",
            "password": "sapwd"
        }
    },
    "options": {
        "port": 1433,
        "database": "Portfolio",
        "trustServerCertificate": true,
        "encrypt": true
    }
}

