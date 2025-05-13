"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRepository = void 0;
var common_1 = require("@nestjs/common");
var transaction_entity_1 = require("../../../domain/entities/transaction.entity");
var TransactionRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TransactionRepository = _classThis = /** @class */ (function () {
        function TransactionRepository_1(prisma) {
            this.prisma = prisma;
        }
        TransactionRepository_1.prototype.create = function (transaction) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.transaction.create({
                                data: {
                                    id: transaction.id,
                                    userId: transaction.userId,
                                    paymentMethodId: transaction.paymentMethodId,
                                    type: transaction.type,
                                    amount: transaction.amount,
                                    currency: transaction.currency,
                                    status: transaction.status,
                                    description: transaction.description,
                                    errorMessage: transaction.errorMessage,
                                    processorResponse: transaction.processorResponse
                                        ? JSON.stringify(transaction.processorResponse)
                                        : null,
                                    createdAt: transaction.createdAt,
                                    updatedAt: transaction.updatedAt,
                                },
                            })];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, this.mapToEntity(result)];
                    }
                });
            });
        };
        TransactionRepository_1.prototype.findById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.transaction.findUnique({
                                where: { id: id },
                            })];
                        case 1:
                            result = _a.sent();
                            if (!result) {
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, this.mapToEntity(result)];
                    }
                });
            });
        };
        TransactionRepository_1.prototype.findByUserId = function (userId_1) {
            return __awaiter(this, arguments, void 0, function (userId, limit, offset) {
                var _a, results, total;
                var _this = this;
                if (limit === void 0) { limit = 10; }
                if (offset === void 0) { offset = 0; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Promise.all([
                                this.prisma.transaction.findMany({
                                    where: { userId: userId },
                                    orderBy: { createdAt: 'desc' },
                                    take: limit,
                                    skip: offset,
                                }),
                                this.prisma.transaction.count({
                                    where: { userId: userId },
                                }),
                            ])];
                        case 1:
                            _a = _b.sent(), results = _a[0], total = _a[1];
                            return [2 /*return*/, {
                                    transactions: results.map(function (result) { return _this.mapToEntity(result); }),
                                    total: total,
                                }];
                    }
                });
            });
        };
        TransactionRepository_1.prototype.update = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.transaction.update({
                                where: { id: id },
                                data: __assign(__assign({}, data), { processorResponse: data.processorResponse
                                        ? JSON.stringify(data.processorResponse)
                                        : undefined }),
                            })];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, this.mapToEntity(result)];
                    }
                });
            });
        };
        TransactionRepository_1.prototype.mapToEntity = function (data) {
            var transaction = new transaction_entity_1.Transaction();
            transaction.id = data.id;
            transaction.userId = data.userId;
            transaction.paymentMethodId = data.paymentMethodId;
            transaction.type = data.type;
            transaction.amount = data.amount;
            transaction.currency = data.currency;
            transaction.status = data.status;
            transaction.description = data.description;
            transaction.errorMessage = data.errorMessage;
            transaction.processorResponse = data.processorResponse
                ? JSON.parse(data.processorResponse)
                : null;
            transaction.createdAt = data.createdAt;
            transaction.updatedAt = data.updatedAt;
            return transaction;
        };
        return TransactionRepository_1;
    }());
    __setFunctionName(_classThis, "TransactionRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TransactionRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TransactionRepository = _classThis;
}();
exports.TransactionRepository = TransactionRepository;
