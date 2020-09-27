"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
exports.validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const authToken = authHeader && (authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[1]);
    if (!authToken) {
        res.status(500).json({ message: "Authorization Credentials were not provided" });
    }
};
