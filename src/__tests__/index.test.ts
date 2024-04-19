import * as assert from "node:assert/strict";
import { describe, it } from "node:test";

import RecordPlugin from "../index.js";

await describe("RecordPlugin", async () => {
	await describe("given the plugin", async () => {
		await describe("create is a static function", async () => {
			await it("and it really is, isn't it", () => {
				assert.equal(typeof RecordPlugin.create, "function");
			});
		});
	});
});
