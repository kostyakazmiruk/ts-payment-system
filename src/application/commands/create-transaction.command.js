"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionCommand = void 0;
var CreateTransactionCommand = /** @class */ (function () {
    function CreateTransactionCommand(userId, paymentMethodId, type, amount, currency, description) {
        this.userId = userId;
        this.paymentMethodId = paymentMethodId;
        this.type = type;
        this.amount = amount;
        this.currency = currency;
        this.description = description;
    }
    return CreateTransactionCommand;
}());
exports.CreateTransactionCommand = CreateTransactionCommand;
