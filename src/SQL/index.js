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
        CREATE TABLE IF NOT EXISTS session (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            localId TEXT,
            email TEXT);`);
};
