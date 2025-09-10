import * as SQLite from "expo-sqlite";

/**
 * Aca vamos a trabajar con el lenguaje de SQL
 * asi podemos guardar las sesiones del usuario
 * y que no tenga que estar registrandose cada vez que
 * entra
 *
 * Solo vamos a guardar un usuario por ahora, por lo cual
 * si se ven funcion de DELETE a la tabla completa
 * es porque solo vamos a estar trabajando con un solo
 * registro en la tabla que vamos a crear
 *
 * aca vamos a crear funciones async y exportarlas para
 * su uso en la aplicacion
 */

let db;

export const initDB = async () => {
    if (!db) {
        db = await SQLite.openDatabaseAsync("bknDB.db");
    }
};

export const initSessionsTable = async () => {
    await initDB();
    await db.execAsync(` 
        CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            localId TEXT,
            email TEXT);`);
};

export const saveSession = async (localId, email) => {
    await initDB();
    await db.runAsync("DELETE FROM sessions");
    await db.runAsync("INSERT INTO sessions (localId,email) VALUES (?,?);", [localId, email]);
};

export const getSession = async () => {
    await initDB();
    const data = await db.getAllAsync("SELECT * FROM sessions LIMIT 1;");
    return data.lenght > 0 ? result[0] : null;
};

export const clearSession = async () => {
    await initDB();
    await db.runAsync("DELETE FROM sessions;");
};
