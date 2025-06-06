import fs from 'fs/promises';
import path from 'path';
import AppError from './AppError.mjs';
import { APP_DIR } from '../appDir.mjs';

export default class Storage {
	#filePath = undefined;

	constructor(folder, filename) {
		this.#filePath = path.join(APP_DIR, folder, filename);
	}

	async fileExists() {
		try {
			await fs.access(this.#filePath);
			return true;
		} catch {
			return false;
		}
	}

	async readFromFile() {
		try {
			return await fs.readFile(this.#filePath, 'utf-8');
		} catch (error) {
			throw new AppError(error, 500);
		}
	}

	async writeToFile(data) {
		try {
			await fs.writeFile(this.#filePath, data, 'utf-8');
		} catch (error) {
			throw new AppError(error, 500);
		}
	}

	async appendToFile(data) {
		try {
			await fs.appendFile(this.#filePath, data, 'utf-8');
		} catch (error) {
			throw new AppError(error, 500);
		}
	}
}
