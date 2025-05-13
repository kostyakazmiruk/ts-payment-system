"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreatedEvent = void 0;
var TransactionCreatedEvent = /** @class */ (function () {
    function TransactionCreatedEvent(id, userId, paymentMethodId, type, amount, currency) {
        this.id = id;
        this.userId = userId;
        this.paymentMethodId = paymentMethodId;
        this.type = type;
        this.amount = amount;
        this.currency = currency;
    }
    return TransactionCreatedEvent;
}());
exports.TransactionCreatedEvent = TransactionCreatedEvent;
