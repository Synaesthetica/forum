"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json([{
            "id": 1,
            "name": "Jim",
            "friend": "Bob",
        },
        {
            "id": 2,
            "name": "Bob",
            "friend": "Jim",
        }]);
});
exports.default = router;
